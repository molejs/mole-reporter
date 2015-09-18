var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/mole-reporter.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'mole-reporter.js',
    publicPath: '/dist/',
    libraryTarget: 'umd',
    library: 'Mole'

  },
  externals: {
    'fetch': 'isomorphic-fetch'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};