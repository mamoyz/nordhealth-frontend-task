export type Lang = "en" | "fi";
export interface FormData {
	email: {
		value: string;
		error: string;
	};
	password: {
		value: string;
		error: string;
	};
	confirmedUpdates: boolean;
}

export interface AuthInfo {
	access_token: string;
	refresh_token: string;
}

export interface UserData {
	avatar: string;
	email: string;
	id: number | null;
	name: string;
}
