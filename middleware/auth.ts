const { authState } = useAuthStore();
export default defineNuxtRouteMiddleware((to, from) => {
	if (!authState) return navigateTo("/");
});
