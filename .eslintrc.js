// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true, // Enable Jest global variables
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended', // Add Jest recommended rules
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jest'], // Include Jest plugin
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
  },
};