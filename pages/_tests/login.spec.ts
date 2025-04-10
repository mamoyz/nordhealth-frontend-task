import { describe, beforeEach, it, expect, vi } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import LoginPage from "~/pages/login.vue";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
	locale: "en",
	messages: {
		en: {
			"auth.header.title": "Mocked Title",
			"auth.header.description": "Mocked Description",
			"auth.login.footer.no_account": "Mocked Footer Text 1",
			"auth.login.footer.sign_up": "Mocked Footer Text 2",
		},
		fi: {},
	},
});

const mockGlobals = {
	plugins: [i18n],
};

let wrapper: Awaited<ReturnType<typeof mountSuspended>>;

describe("Login Page", () => {
	beforeEach(async () => {
		wrapper = await mountSuspended(LoginPage, {
			global: mockGlobals,
		});
	});

	it("renders mocked header title", () => {
		expect(wrapper.text()).toContain("Mocked Title");
	});

	it("renders mocked header description", () => {
		expect(wrapper.text()).toContain("Mocked Description");
	});

	it("renders mocked footer text 1", () => {
		expect(wrapper.text()).toContain("Mocked Footer Text 1");
	});

	it("renders mocked footer text 2", () => {
		const signUpLink = wrapper.findComponent({ name: "NuxtLink" });
		expect(signUpLink.exists()).toBe(true);
		expect(signUpLink.text()).toBe("Mocked Footer Text 2");
		expect(signUpLink.props("to")).toBe("signup");
	});

	it("renders AuthForm component", () => {
		const authForm = wrapper.findComponent({ name: "AuthForm" });
		expect(authForm.exists()).toBe(true);
	});

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});
});
