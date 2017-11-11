var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var SRC_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist');

// Define environment
var DefinePlugin = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('development')
  }
});

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
    // loaders enable babel and hot reloading
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader'
        // use : ['react-hot-loader', 'babel-loader']
        // react-hot-loader deactivated, it doesn't work with react 16 so far
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
        use: ['style-loader', 'css-loader', 'sass-loader']
        // same as loaders, for multiple loaders
      },
      // serves images in asset folder
      {
        test: /\.(jpe?g|png|gif|svg|mp3)$/i,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  devtool: 'eval',
  plugins: [DefinePlugin, HTMLWebpackPluginConfig]
};
