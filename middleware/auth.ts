const { authState } = useAuthStore();
export default defineNuxtRouteMiddleware(() => {
	if (!authState) return navigateTo("/");
});
