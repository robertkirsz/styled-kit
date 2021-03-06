const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log('❤️')

module.exports = {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 1987,
    stats: 'errors-only'
  },
  output: {
    path: `${__dirname}/demo`
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
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],
  resolve: {
    modules: ['src', 'node_modules']
  }
}
