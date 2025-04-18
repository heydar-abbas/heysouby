export default function auth({ to, from, next }: any) {
	const isAuthenticated = !!localStorage.getItem("token");

	if (!isAuthenticated) {
		return next("/auth/login");
	}

	return next();
}