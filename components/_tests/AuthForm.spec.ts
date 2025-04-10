import { describe, beforeEach, it, expect, vi } from "vitest";

import { mountSuspended } from "@nuxt/test-utils/runtime";

import AuthForm from "@/components/AuthForm.vue";

import { createI18n } from "vue-i18n";

const i18n = createI18n({
	locale: "en",
	messages: {
		en: {
			"auth.signup.cta_title": "Create an account",
			"auth.login.cta_title": "Log in",
			"auth.form.username_label": "Username",
			"auth.form.password_label": "Password",
			"auth.form.updates_hint": "Receive updates and announcements",
			"auth.form.updates_label": "Subscribe to updates",
			"auth.form.errors.email_required": "Email is required",
			"auth.form.errors.email_invalid": "Invalid email format",
			"auth.form.errors.password_required": "Password is required",
			"auth.form.errors.toast": "Please correct the form errors.",
		},
		fi: {},
	},
});

let wrapper: Awaited<ReturnType<typeof mountSuspended>>;

const mockGlobals = {
	plugins: [i18n],
};

describe("AuthForm Component", () => {
	beforeEach(async () => {
		wrapper = await mountSuspended(AuthForm, {
			props: {
				page: "login",
				isLoading: false,
			},

			slots: {
				footer: "Test Footer Content",
			},

			global: mockGlobals,
		});
	});

	it("renders the username and password input fields", () => {
		expect(wrapper.find('[data-testid="username"]').exists()).toBe(true);
		expect(wrapper.find('[data-testid="password"]').exists()).toBe(true);
	});
	it("renders the submit button with correct text for login page", () => {
		const submitButton = wrapper.find('[data-testid="submit-button"]');
		expect(submitButton.text()).toBe("Log in");
	});
	it("renders the submit button with correct text for signup page", async () => {
		await wrapper.setProps({ page: "signup" });
		const submitButton = wrapper.find('[data-testid="submit-button"]');
		expect(submitButton.text()).toBe("Create an account");
	});
	it("renders optional field for singup page", async () => {
		await wrapper.setProps({ page: "signup" });
		expect(wrapper.find('[data-testid="password"]').exists()).toBe(true);
	});

	it("emits 'submit' event and expects when submit is clicked after updating formState", async () => {
		wrapper.vm.formState.value.email.value = "test@example.com";
		wrapper.vm.formState.value.password.value = "password123";

		const submitButton = wrapper.find('[data-testid="submit-button"]');
		await submitButton.trigger("click");
		expect(wrapper.emitted("submit")).toHaveLength(1);
		expect(wrapper.emitted("submit")![0]).toEqual([
			{
				email: { value: "test@example.com", error: "" },
				password: { value: "password123", error: "" },
				confirmedUpdates: true,
			},
		]);
	});
	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});
});
