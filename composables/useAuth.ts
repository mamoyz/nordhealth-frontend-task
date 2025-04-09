import type { FormData } from "@/types";

const displayToastMessage = ref(false);
const toastType = ref();
const notificationMessage = ref("");
export const useAuth = () => {
	const { t } = useI18n();
	const handleSignUp = async (data: FormData) => {
		try {
			const res = await $fetch("https://api.escuelajs.co/api/v1/users/", {
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
		} catch (err: any) {
			console.error(err.response);
			showNotification(err?.response?._data?.message[0], "danger");
		}
	};

	const handleLogin = async (data: FormData) => {
		try {
			const res = await $fetch("https://api.escuelajs.co/api/v1/auth/login", {
				method: "POST",
				body: {
					email: data.email.value,
					password: data.password.value,
				},
			});
			console.log(res);
		} catch (err: any) {
			console.error(err.response);
			showNotification(err?.response?._data?.message, "danger");
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
		toastType,
		notificationMessage,
		displayToastMessage,
	};
};
