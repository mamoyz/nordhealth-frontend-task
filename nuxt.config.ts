export default defineNuxtConfig({
	modules: ["@nuxt/eslint", "@nuxt/test-utils/module"],
	eslint: {},

	typescript: {
		typeCheck: true,
	},
	css: ["@provetcloud/css"],
	compatibilityDate: "2025-04-07",
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => tag.includes("-"),
		},
	},
});
