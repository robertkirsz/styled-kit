module.exports = {
  extends: 'react-app',
  rules: {
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }]
  }
}
