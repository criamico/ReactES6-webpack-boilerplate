const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const BundleAnalyzerPlugin =
// require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

// Define environment
const DefinePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
});

// copy compiled css file to dist folder
const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: 'assets/styles/main.[contenthash].css'
});

// Inject js file to index.html
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: SRC_DIR + '/index.html',
  filename: 'index.html',
  inject: false,
  hash: true
});

module.exports = {
  entry: {
    bundle: SRC_DIR + '/app.js'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].[chunkhash].js'
  },
  // enable slower sourcemaps (with original code)
  devtool: 'source-map',
  mode: 'production',
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        exclude: /node_modules/,
        use : ['babel-loader']
        // use : ['react-hot-loader', 'babel-loader']
      },
      // compiles scss files
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      // copies images in dist/assets/images folder
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        // eslint-disable-line max-len
        loader: 'file-loader?name=/assets/images/[name].[ext]&publicPath='+ BUILD_DIR,
        exclude: /node_modules/
      },
      // copies sounds in dist/assets/media folder
      {
        test: /\.(mp3)$/i,
        // eslint-disable-line max-len
        loader: 'file-loader?name=/assets/media/[name].[ext]&publicPath='+ BUILD_DIR,
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    // code splitting
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
    },
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js($|\?)/i,
        cache:true,
        parallel:true,
        sourceMap: true,
        uglifyOptions: {
          compress: false,
          ecma: 6
        }
      })
    ]
  },
  plugins: [
    DefinePlugin,
    HTMLWebpackPluginConfig,
    MiniCssExtractPluginConfig
    // new BundleAnalyzerPlugin()
  ]
};
