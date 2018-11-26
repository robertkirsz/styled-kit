module.exports = () => ({
  presets: ['@babel/env', '@babel/react'],
  plugins: [
    '@babel/proposal-export-default-from',
    '@babel/proposal-class-properties',
    '@babel/proposal-optional-chaining',
    'styled-components'
  ]
})
