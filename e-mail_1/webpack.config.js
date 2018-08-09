const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
        app: './src/index.js'
    },
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
        rules: [
        ]
    },
    target: 'web'
};