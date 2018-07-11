const webpack = require('webpack');

module.exports = function(config){
  config.set({
    // base path that will be used to resolve all  patterns (files, exclude)
    basePath: '.',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [ 'jasmine' ],

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'node_modules/jasmine-core/lib/jasmine-core.js' },
      { pattern: 'spec/helpers/jasmine_setup.js' },
      { pattern: 'spec/helpers/enzyme_setup.js' },
      { pattern: 'src/**/*.+(js|jsx)' },
      { pattern: 'spec/**/*.+(js|jsx)' }
    ],

    // list of files to exclude
    exclude: [],

    // preprocessors matching files before serving them to the browsers
    // available preprocessors:
    // https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'spec/**/*.+(js|jsx)': [ 'webpack' ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [ 'dots', 'kjhtml' ],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR
    //  || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable/disable watching file and executing tests
    // whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers:
    //  https://npmjs.org/browse/keyword/karma-launcher
    browsers: [ 'ChromeHeadless' ],

    // Continuous integration module
    // if true, Kamra captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency logLevel
    // how many browsers should be started simultaneous
    concurrency: Infinity,

    // enabled plugins
    plugins: [
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-jasmine-html-reporter')
      // require('karma-coverage')
    ],

    // webpack options
    webpack: {
      mode:'development',
      devtool: 'inline-source-map',
      target: 'web',
      module: {
        rules: [
          {
            test: /\.js(x)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          }
        ]
      },
      // workaround to remove issue with 'fs'
      // try to remove it after an update!
      node: {
        fs: 'empty',
        child_process: 'empty'
      }
    }
    // webpackServer: {
    //   noInfo: true
    // }
  });
};
