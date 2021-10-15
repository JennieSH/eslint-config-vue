module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/recommended", "@vue/airbnb", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    // Forbids call expressions inside mustache interpolation
    "vue/no-restricted-syntax": [
      "error",
      {
        selector: "VElement > VExpressionContainer CallExpression",
        message: "Call expressions are not allowed.",
      },
    ],
    // enforce tag names to pascal case
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: false,
        ignores: ["/^router-/", "/^keep-/", "/^transition-/"],
      },
    ],
  },
};
