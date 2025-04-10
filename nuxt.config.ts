export default defineNuxtConfig({
	modules: ["@nuxt/eslint", "@nuxt/test-utils/module", "@nuxtjs/i18n", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
	css: ["@provetcloud/css"],
	typescript: {
		typeCheck: true,
	},
	compatibilityDate: "2025-04-07",
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => tag.includes("-"),
		},
	},
	i18n: {
		defaultLocale: "en",
		locales: [
			{ code: "en", name: "English", file: "en.json" },
			{ code: "fi", name: "Finnish", file: "fi.json" },
		],
		langDir: "locales/",
		strategy: "no_prefix",
	},
});
