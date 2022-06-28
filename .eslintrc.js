module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Remove as soon as possible
        'react-hooks/exhaustive-deps': 'off',

        // Gradually remove
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react-native/no-inline-styles': 'off',
        'eslint-comments/no-unlimited-disable': 'off',
        'react-native-a11y/has-valid-accessibility-ignores-invert-colors': 'off',
        '@typescript-eslint/no-unused-vars': ['error'], // Clean up code base

        // Do not remove
        'no-shadow': 'off', // Creates a problem with createSelector() calls
        '@typescript-eslint/ban-ts-comment': 'off', // Some tests require '// @ts-ignore' command
        '@typescript-eslint/no-empty-function': 'off', // Complains about every empty arrow function, too much work to fix
        'no-unused-vars': 'off', // You must disable the base rule as it can report incorrect errors
        'react-native-a11y/has-accessibility-hint': 'off',
      }
    }
  ]
}
