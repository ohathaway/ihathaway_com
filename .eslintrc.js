module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'no-var': 'off',
        'no-console': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 'off'
      }
    }
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
};
