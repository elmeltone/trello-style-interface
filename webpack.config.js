var path = require('path');

var webpack = require('webpack');

var packageData = require('./package.json');

var filename = [packageData.name, packageData.version, 'js'];
var plugins = [];ew webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: path.resolve(__dirname, packageData.main),
  output: {
    path: path.resolve(__dirname, 'scripts'),
    filename: filename.join('.'),
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: plugins
}
