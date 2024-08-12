module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  // for <template> tag
  parser: "vue-eslint-parser",
  parserOptions: {
    // for <template> tag
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxt/eslint-config", "plugin:prettier/recommended"],
  plugins: [],
  rules: {},
};
