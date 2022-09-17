'use strict'

const path = require('path')

module.exports = {
  entry: './src/index.js',

  target: "node",

  output: {
    path: path.join(__dirname, 'dist'),

    library: {
      type: 'umd2',
      name: 'DeityGenerator'
    }
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
