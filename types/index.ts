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
