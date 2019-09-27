module.exports = api => {
  // I'm not sure why I need that but Jest screams about it
  api.cache.forever()

  const presets = ['@babel/env', '@babel/react']

  const plugins = [
    ['@babel/plugin-transform-runtime', { regenerator: true }],
    '@babel/proposal-export-default-from',
    '@babel/proposal-class-properties',
    '@babel/proposal-optional-chaining',
    ['styled-components', { displayName: false }]
  ]

  return { presets, plugins }
}
