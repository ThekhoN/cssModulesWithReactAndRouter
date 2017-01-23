var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./data.js')

module.exports = {
  entry: './src/router',
  output: {
    path: 'build',
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new StaticSiteGeneratorPlugin("main", data.routes, data)
  ]
};
