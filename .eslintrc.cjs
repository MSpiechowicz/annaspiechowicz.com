module.exports = {
  root: true,
  plugins: [
    "react",
  ],
  ignorePatterns: [
    '**/third-parties/**',
    '**/dist/**',
    '**/__tests__/**',
    '**/generated/**',
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  overrides: [
    {
      files: ['*.jsx', '*.js'],
    },
  ],
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  rules: {},
  env: {
    "jest": true,
    "browser": true,
  },
  settings: {
    "react": {
      "version": "latest"
    }
  }
};
