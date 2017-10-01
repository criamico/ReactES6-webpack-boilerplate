var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var SRC_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist');

// Inject js file to index.html
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: SRC_DIR + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: {
    javascript: SRC_DIR + '/app.js'
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      // enables babel and hot reloading
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        exclude: /node_modules/,
        loader : ['react-hot-loader', 'babel-loader']
      },
      // add linter step before compilation (needs .eslintrc file)
      {
        test: /\.js$/,
        include: [
          path.resolve(SRC_DIR)
        ],
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
             failOnWarning: false,
             failOnError: true
           }
      },
      // compiles scss files
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      // serves images in asset folder
      {
        test: /\.(jpe?g|png|gif|svg|mp3)$/i,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
