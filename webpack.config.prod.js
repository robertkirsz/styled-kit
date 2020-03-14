module.exports = {
  mode: 'production',
  entry: {
    Div: 'components/Div',
    HeightTransition: 'components/HeightTransition',
    'utils/withUnit': 'utils/withUnit'
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
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  externals: {
    react: 'commonjs2 react',
    'styled-components': 'commonjs2 styled-components'
  },
  resolve: {
    modules: ['src', 'node_modules']
  }
}
