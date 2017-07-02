'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './app/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loaders: [
          'babel-loader',
          'eslint-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'The X Effect',
      template: './app/index.ejs'
    })
  ],
  devServer: {
    contentBase: './dist',
    overlay: true
  }
}
