export default function guest({ to, from, next }: any) {
	const isAuthenticated = !!localStorage.getItem("token");

	if (isAuthenticated) {
		return next("/"); // or dashboard, etc.
	}

	return next();
}