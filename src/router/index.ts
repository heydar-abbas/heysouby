import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import auth from "@/middleware/auth";
import guest from "@/middleware/guest";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
			meta: {
				title: "الرئيسية",
				middleware: ["guest"],
			},
		},
		{
			path: "/profile",
			name: "profile",
			component: () => import("../views/profile/ProfileView.vue"),
			meta: {
				title: "الملف الشخصي",
				middleware: ["auth"],
			},
		},
		{
			path: "/auth/login",
			name: "login",
			component: () => import("../views/auth/Login.vue"),
			meta: {
				title: "تسجيل الدخول",
				middleware: ["guest"],
			},
		},
		{
			path: "/auth/signup",
			name: "signup",
			component: () => import("../views/auth/Register.vue"),
			meta: {
				title: "إنشاء حساب",
				middleware: ["guest"],
			},
		},
	],
});

const middlewareMap: any = { auth, guest };

router.beforeEach((to, from, next) => {
	document.title = to.meta.title ? `الحيسوبي | ${to.meta.title}` : "الحيسوبي";

	const middlewareList: any = to.meta.middleware || [];
	const context = { to, from, next };

	const runMiddleware = (index: any) => {
		const middlewareName = middlewareList[index];
		if (!middlewareName) return next();

		const middlewareFn = middlewareMap[middlewareName];

		if (typeof middlewareFn !== "function") {
			console.warn(`Middleware "${middlewareName}" not found.`);
			return runMiddleware(index + 1);
		}

		middlewareFn({
			...context,
			next: (override: any) => {
				if (override !== undefined) {
					return next(override); // redirect or cancel
				}
				runMiddleware(index + 1); // continue to next middleware
			},
		});
	};

	runMiddleware(0);
});
export default router;
