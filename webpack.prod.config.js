const path = require('path')

const components = path.resolve(__dirname, 'src/components')

module.exports = {
  mode: 'production',
  entry: {
    Div: `${components}/Div`,
    HeightTransition: `${components}/HeightTransition`
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: components,
        use: ['babel-loader']
      }
    ]
  },
  externals: {
    'prop-types': 'commonjs2 prop-types',
    react: 'commonjs2 react',
    'react-dom': 'commonjs2 react-dom',
    'styled-components': 'commonjs2 styled-components'
  }
}
