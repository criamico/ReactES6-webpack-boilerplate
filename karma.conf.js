const webpack = require('webpack');

module.exports = function(config){
  config.set({
    files: [
      'spec/**/*.{js,jsx}'
    ],
    preprocessors: {
      'spec/**/*.{js,jsx}': [ 'webpack' ]
    },

    // list of files to exclude
    exclude: [],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [ 'jasmine' ],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // start these browsers
    // available browser launchers:
    //  https://npmjs.org/browse/keyword/karma-launcher
    browsers: [ 'Chrome' ],

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR
    //  || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable/disable watching file and executing tests
    // whenever any file changes
    autoWatch: true,

    // web server port
    port: 9876,

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [ 'dots' ],

    plugins: [
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-jasmine')
      // require('karma-coverage')
    ],

    webpack: {
      mode:'development',
      devtool: 'inline-source-map',
      target: 'web',
      module: {
        // extensions: ['js', 'jsx'],
        rules: [
          { test: /\.js(x)$/, loader: 'babel-loader' }
        ]
      }
    }
    // webpackServer: {
    //   noInfo: true
    // }
  });
};
