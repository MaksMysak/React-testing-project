module.exports = {
    'env': {
      'browser': true,
      'jest': true,
      'es6': true,
      'node': true,
    },
    'extends': [
      'react-app', 
      'airbnb',
      'prettier',
    ],
    'plugins': [
      'prettier',
    ],
    'rules': {
      'prettier/prettier': ['error', {
        'singleQuote': true,
        'trailingComma': 'es5'
      }],
      'react/prefer-stateless-function': 'off',
      'jsx-a11y/label-has-for': 'off',
    },
    'parserOptions': {
      'ecmaFeatures': {
        'jsx': true,
      }
    }
  }