'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loaders: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'The X Effect',
      template: './src/index.ejs'
    })
  ],
  devServer: {
    contentBase: './dist',
    overlay: true
  }
}
