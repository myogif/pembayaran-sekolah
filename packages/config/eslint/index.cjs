module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks'
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es2022: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: [
          '.',
          '../../apps/api',
          '../../apps/web'
        ]
      }
    ]
  }
};
