import { describe, beforeEach, it, expect, vi } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import AuthForm from "@/components/AuthForm.vue";

let wrapper: Awaited<ReturnType<typeof mountSuspended>>;

const createTranslationMock = () => {
	const translations: Record<string, string> = {
		"auth.signup.cta_title": "Create an account",
		"auth.login.cta_title": "Log in",
	};
	return vi.fn((key: string) => translations[key] || key);
};

const mockGlobals = {
	mocks: {
		$t: createTranslationMock(),
	},
};

describe("AuthForm Component", () => {
	beforeEach(async () => {
		wrapper = await mountSuspended(AuthForm, {
			props: {
				page: "login",
			},
			slots: {
				footer: "Test Footer Content",
			},
			global: mockGlobals,
		});
	});

	it("Passes the correct props", async () => {
		expect(wrapper.props("page")).toBe("login");
		await wrapper.setProps({ page: "signup" });
		expect(wrapper.props("page")).toBe("signup");
	});

	it("Renders correct slot", async () => {
		expect(wrapper.find('[data-testid="footer"]').text()).toContain("Test Footer Content");
	});

	it("Toggles isPasswordRevealed on mousedown and mouseup", async () => {
		const revealButton = wrapper.find('[data-testid="reveal-password-button"]');
		await revealButton.trigger("mousedown");
		expect(wrapper.vm.isPasswordRevealed.value).toBe(true);
		expect(wrapper.vm.passwordInputType).toBe("text");

		await revealButton.trigger("mouseup");
		expect(wrapper.vm.isPasswordRevealed.value).toBe(false);
		expect(wrapper.vm.passwordInputType).toBe("password");
	});

	it("Toggles confirmedUpdates when checkbox is changed", async () => {
		await wrapper.setProps({ page: "signup" });
		const checkbox = wrapper.find("provet-checkbox");
		expect(wrapper.vm.confirmedUpdates.value).toBe(true);

		await checkbox.trigger("change");
		expect(wrapper.vm.confirmedUpdates.value).toBe(false);

		await checkbox.trigger("change");
		expect(wrapper.vm.confirmedUpdates.value).toBe(true);
	});

	it("Shows signup button text conditionally", async () => {
		// signup page
		await wrapper.setProps({ page: "signup" });
		const button = wrapper.find('[data-testid="submit-button"]');
		expect(button.text()).toContain("Create an account");

		// login page
		await wrapper.setProps({ page: "login" });
		expect(button.text()).toContain("Log in");
	});

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});
});
