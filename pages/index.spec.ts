import { describe, beforeEach, it, expect, vi } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import IndexPage from "~/pages/index.vue";

const createTranslationMock = () => {
	const translations: Record<string, string> = {
		"home.title": "Mocked Title",
		"home.description": "Mocked Description",
		"home.cta_label": "Mocked CTA",
	};
	return vi.fn((key: string) => translations[key] || key);
};

const mockGlobals = {
	mocks: {
		$t: createTranslationMock(),
	},
};

let wrapper: Awaited<ReturnType<typeof mountSuspended>>;

describe("Index Page", () => {
	// Set up the wrapper before each test
	beforeEach(async () => {
		wrapper = await mountSuspended(IndexPage, {
			global: mockGlobals,
		});
	});

	it("renders mocked title", () => {
		expect(wrapper.text()).toContain("Mocked Title");
	});

	it("renders mocked description", () => {
		expect(wrapper.text()).toContain("Mocked Description");
	});

	it("renders mocked CTA label", () => {
		expect(wrapper.text()).toContain("Mocked CTA");
	});

	it("renders AppLogo component", () => {
		const appLogo = wrapper.findComponent({ name: "AppLogo" });
		expect(appLogo.exists()).toBe(true);
	});

	it("renders a NuxtLink with the correct destination", () => {
		const nuxtLink = wrapper.findComponent({ name: "NuxtLink" });
		expect(nuxtLink.exists()).toBe(true);
		expect(nuxtLink.props("to")).toBe("signup");
	});
});
