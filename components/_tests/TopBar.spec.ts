import { describe, beforeEach, it, expect, vi } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import TopBar from "@/components/TopBar.vue";
import { createI18n } from "vue-i18n";

let wrapper: Awaited<ReturnType<typeof mountSuspended>>;
describe("TopBar Component", () => {
	const i18n = createI18n({});

	beforeEach(async () => {
		wrapper = await mountSuspended(TopBar, {
			global: {
				plugins: [i18n],
			},
		});
	});

	it("Contains AppLogo component", async () => {
		const appLogo = wrapper.find('[data-testid="app-logo"]');
		expect(appLogo.exists()).toBe(true);
	});

	it("Contains language selector", async () => {
		const languageSelector = wrapper.find('[data-testid="language-selector"]');
		expect(languageSelector.exists()).toBe(true);
	});

	it("Contains home link", () => {
		const homeLink = wrapper.findComponent({ name: "NuxtLink" });
		expect(homeLink.exists()).toBe(true);
		expect(homeLink.props("to")).toBe("/");
	});

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});
});
