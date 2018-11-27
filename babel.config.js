module.exports = api => {
  // I'm not sure why I need that but Jest screams about it
  api.cache.forever()

  const presets = ['@babel/env', '@babel/react']

  const plugins = [
    '@babel/proposal-export-default-from',
    '@babel/proposal-class-properties',
    '@babel/proposal-optional-chaining',
    'styled-components'
  ]

  return { presets, plugins }
}
