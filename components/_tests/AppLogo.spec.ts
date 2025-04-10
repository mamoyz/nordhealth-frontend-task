import { describe, beforeEach, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import AppLogo from "@/components/AppLogo.vue";

let wrapper: Awaited<ReturnType<typeof mountSuspended>>;

describe("AppLogo Component", () => {
	beforeEach(async () => {
		wrapper = await mountSuspended(AppLogo);
	});

	it("renders the SVG element", () => {
		const svgElement = wrapper.find("svg");
		expect(svgElement.exists()).toBe(true);
	});

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});
});
