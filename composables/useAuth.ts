import type { AuthInfo, FormData, UserData } from "@/types";
import type { FetchError } from "ofetch";

const displayToastMessage = ref(false);
const toastType = ref();
const notificationMessage = ref("");
export const useAuth = () => {
	const { setUserData, setAuthInfo } = useAuthStore();
	const { t } = useI18n();
	const isLoading = ref(false);
	const handleSignUp = async (data: FormData) => {
		try {
			isLoading.value = true;
			await $fetch("https://api.escuelajs.co/api/v1/users/", {
				method: "POST",
				body: {
					name: "Provet User",
					email: data.email.value,
					password: data.password.value,
					avatar: "https://picsum.photos/800",
				},
			});
			showNotification(t("auth.signup.success_message"), "default");
			setTimeout(() => {
				navigateTo("success");
			}, 2000);
			return;
		} catch (error: unknown) {
			const err = error as FetchError;
			console.error(err.response);
			showNotification(err?.response?._data?.message[0], "danger");
			return err;
		} finally {
			isLoading.value = false;
		}
	};

	const handleLogin = async (data: FormData) => {
		try {
			isLoading.value = true;
			const res = await $fetch("https://api.escuelajs.co/api/v1/auth/login", {
				method: "POST",
				body: {
					email: data.email.value,
					password: data.password.value,
				},
			});
			const { access_token, refresh_token } = res as AuthInfo;
			setAuthInfo({ access_token, refresh_token });
			await getUserInfo(access_token);
		} catch (error: unknown) {
			const err = error as FetchError;
			console.error(err.response);
			showNotification(err?.response?._data?.message, "danger");
			return err;
		} finally {
			isLoading.value = false;
		}
	};

	const refreshToken = async (refreshToken: string) => {
		try {
			const res = await $fetch("https://api.escuelajs.co/api/v1/auth/refresh-token", {
				method: "POST",
				body: {
					refreshToken,
				},
			});
			const { access_token, refresh_token } = res as AuthInfo;
			setAuthInfo({ access_token, refresh_token });
			return true;
		} catch (error: unknown) {
			const err = error as FetchError;
			console.error(err.response);
			return err;
		}
	};

	const handleLogOut = () => {
		setAuthInfo(null);
		setUserData(null);
		navigateTo("/");
	};

	const getUserInfo = async (access_token: string) => {
		try {
			const res = await $fetch("https://api.escuelajs.co/api/v1/auth/profile", {
				method: "GET",
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			});

			const { avatar, email, id, name } = res as UserData;
			setUserData({ avatar, email, id, name });
			showNotification(t("auth.signup.success_message"), "default");
			setTimeout(() => {
				navigateTo("dashboard");
			}, 2000);
		} catch (error: unknown) {
			const err = error as FetchError;
			console.error(err.response);
			showNotification(err?.response?._data?.message, "danger");
			return err;
		}
	};
	const showNotification = (message: string, type: "danger" | "default") => {
		displayToastMessage.value = false;
		nextTick(() => {
			notificationMessage.value = message;
			toastType.value = type;
			displayToastMessage.value = true;
		});
	};

	return {
		handleSignUp,
		handleLogin,
		handleLogOut,
		refreshToken,
		toastType,
		notificationMessage,
		displayToastMessage,
		isLoading,
	};
};
