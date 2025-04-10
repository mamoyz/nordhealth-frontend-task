import type { AuthInfo, UserData } from "@/types";
import { defineStore } from "pinia";

export const useAuthStore = defineStore(
	"auth",
	() => {
		const authState = ref<AuthInfo | null>(null);

		const userData = ref<UserData | null>(null);
		const isAuthenticated = ref(false);

		const setAuthInfo = (data: AuthInfo | null) => {
			authState.value = data;
		};

		const setUserData = (data: UserData | null) => {
			userData.value = data;
		};

		return { authState, setAuthInfo, isAuthenticated, setUserData, userData };
	},
	{
		persist: true,
	},
);
