const path = require('path')

const components = path.resolve(__dirname, 'src/components')
const providers = path.resolve(__dirname, 'src/providers')

module.exports = {
  mode: 'production',
  entry: {
    Div: `${components}/Div`,
    Container: `${components}/Container`,
    Row: `${components}/Row`,
    Col: `${components}/Col`,
    HeightTransition: `${components}/HeightTransition`,
    Slider: `${components}/Slider`,
    MediaQueriesProvider: `${providers}/MediaQueriesProvider`,
    ScreenSizeProvider: `${providers}/ScreenSizeProvider`
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }]
  },
  externals: {
    'prop-types': 'commonjs2 prop-types',
    react: 'commonjs2 react',
    'react-dom': 'commonjs2 react-dom',
    'styled-components': 'commonjs2 styled-components'
  }
}
