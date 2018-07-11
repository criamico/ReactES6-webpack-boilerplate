const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

// Define environment
const DefinePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
});

// Inject js file to index.html
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: SRC_DIR + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: {
    bundle: SRC_DIR + '/app.js'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  // enable fast sourcemaps (with generated code)
  devtool: 'eval',
  mode: 'development',
  module : {
    rules: [
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
  plugins: [
    DefinePlugin,
    HTMLWebpackPluginConfig
  ],
  // Code splitting
  optimization: {
    minimize: false,
    runtimeChunk: {
      name: 'vendor'
    },
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
          minSize: 1
        }
      }
    }
  }
};
