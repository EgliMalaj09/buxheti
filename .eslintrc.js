module.exports = {
  env: {
    'jest/globals': true,
  },
  root: true,
  extends: '@react-native',
  plugins: ['unused-imports'],
  rules: {
    eqeqeq: 'off',
    'no-console': 'error',
    'no-useless-escape': 'off',
    'no-undef': 'off',
    'prettier/prettier': 'error',
    'eslint-comments/no-unlimited-disable': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'unused-imports/no-unused-imports': 'error',
    'react/no-unstable-nested-components': 'off',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
  },
};
