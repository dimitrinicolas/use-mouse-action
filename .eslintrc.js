module.exports = {
  env: {
    browser: true
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'arrow-body-style': 0,
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': 0,
    'consistent-return': 0,
    'function-paren-newline': 0,
    'global-require': 0,
    'import/extensions': ['warn', 'ignorePackages'],
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'max-len': ['error', { code: 150 }],
    'no-console': 0,
    'no-multi-assign': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-restricted-globals': 0,
    'no-restricted-syntax': 0,
    'no-underscore-dangle': 0,
    'prefer-arrow-callback': 0,
    'prefer-destructuring': 0,
    'prefer-rest-params': 0,
    'prefer-spread': 0,
    'react/prop-types': 0,
    strict: 0
  }
};