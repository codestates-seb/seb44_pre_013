module.exports = {
  root: true,
  env: {
      browser: true,
      node: true,
  },
  extends: [
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
  ],
  parserOptions: {
      parser: "@typescript-eslint/parser",
  },
  rules: {
    'prettier/prettier': [
    'error',
    {
        endOfLine: 'auto',
    },
    ],
},
};