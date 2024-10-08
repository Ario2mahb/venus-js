module.exports = {
  root: false,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    "no-empty": [ "error", { "allowEmptyCatch": true } ],
  }
};
