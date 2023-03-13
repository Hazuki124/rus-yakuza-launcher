module.exports = {
  extends: 'erb/typescript',
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'class-methods-use-this': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off'
  },
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./configs/webpack.config.eslint.js')
      }
    }
  }
};
