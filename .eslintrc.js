module.exports = {
  extends: 'react-app',
  plugins: ['babel'],
  rules: {
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    "no-unused-expressions": "off", // This doesn't work with '?.' operator syntax, so we disable it...
    "babel/no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }], // ...and enable this one instead, which is a modern version of the former
  }
}
