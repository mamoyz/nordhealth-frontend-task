export default defineNuxtConfig({
	modules: ["@nuxt/eslint", "@nuxt/test-utils/module"],
	eslint: {},

	typescript: {
		typeCheck: true,
	},

	compatibilityDate: "2025-04-07",
});
