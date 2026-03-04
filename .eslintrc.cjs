/* eslint-disable */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',       // New JSX transform — no need to import React
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: 'detect' },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    // Enforce no dangerouslySetInnerHTML (XSS protection)
    'react/no-danger': 'error',
    // Warn on console.log left in production code
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    // No unused variables
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    // Require key props in lists
    'react/jsx-key': 'error',
    // Prefer const
    'prefer-const': 'error',
  },
}
