import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "vue/no-deprecated-slot-attribute": "off",
    "vue/html-self-closing": "off",
  },
});
