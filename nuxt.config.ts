export default defineNuxtConfig({
	modules: ["@nuxt/eslint", "@nuxt/test-utils/module", "@nuxtjs/i18n"],
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
	i18n: {
		defaultLocale: "fi",
		locales: [
			{ code: "en", name: "English", file: "en.json" },
			{ code: "fi", name: "Finnish", file: "fi.json" },
		],
		langDir: "locales/",
		strategy: "no_prefix",
	},
});
