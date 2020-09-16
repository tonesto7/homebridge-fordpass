module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'brace-style': ['warn'],
    curly: ['warn', 'all'],
    'dot-notation': 'warn',
    eqeqeq: 'warn',
    'linebreak-style': ['warn', 'unix'],
    'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
    'no-await-in-loop': ['warn'],
    'prefer-arrow-callback': ['warn'],
    semi: ['warn', 'always'],
    '@typescript-eslint/explicit-function-return-type': ['warn'],
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/camelcase': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-this-alias': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['warn'],
  },
};
