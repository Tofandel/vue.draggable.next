module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/prettier"],
  rules: {
    "vue/multi-word-component-names": "off",
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
};
