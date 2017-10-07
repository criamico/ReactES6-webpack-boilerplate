var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var SRC_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist');


// copy compiled css file to dist folder
var ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: 'assets/styles/main.css',
  publicPath: BUILD_DIR + 'dist/assets/styles/',
  allChunks: true
});

// Inject js file to index.html
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: SRC_DIR + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

// minify bundle.js for production
var UglifyJsPluginConfig = new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  compress: {
    warnings: false
  }
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
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        exclude: /node_modules/,
        use : ['react-hot-loader', 'babel-loader']
      },
      // compiles scss files
      {
        test: /\.scss$/,
        loaders: ExtractTextPluginConfig.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      // copies images in dist/assets/images folder
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        // eslint-disable-line max-len
        loader: 'file-loader?name=/assets/images/[name].[ext]&publicPath='+ BUILD_DIR
      },
      // copies sounds in dist/assets/media folder
      {
        test: /\.(mp3)$/i,
        // eslint-disable-line max-len
        loader: 'file-loader?name=/assets/media/[name].[ext]&publicPath='+ BUILD_DIR
      }
    ]
  },
  plugins: [
    ExtractTextPluginConfig,
    HTMLWebpackPluginConfig,
    UglifyJsPluginConfig
  ]
};
