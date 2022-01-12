const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader'
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: { name: 'images/[hash]-[name].[ext]' }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: "./index.html"
    })
  ]
}
