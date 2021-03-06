// Karma configuration
// Generated on Wed Apr 06 2016 14:18:09 GMT+0200 (CEST)
var buble = require('rollup-plugin-buble');

module.exports = (config) => {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    // If multiple patterns match the same file, it's included as if it only matched the first pattern.
    files: [
      'node_modules/d3/build/d3.min.js',
      'dist/proteic.js',
      'test/test*.js'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/!(defaults)/*.js': ['coverage'],
      'test/test.*.js': ['rollup']
    },

    rollupPreprocessor: {
      plugins: [
        require('rollup-plugin-istanbul')({
          exclude: ['test/**/*.js', 'node_modules/**/*']
        }),
        buble() // ES2015 compiler by the same author as Rollup
      ],
      // will help to prevent conflicts between different tests entries
      format: 'iife',
      sourceMap: 'inline',
      globals: {
        d3: 'd3',
        chai: 'chai',
       // 'proteus-colors': 'proteus-colors'
      },
      external: ['d3', 'chai']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      'progress',
      // Output code coverage files
      'coverage'
    ],

    coverageReporter: {
      includeAllSources: true,
      reporters: [
        // generates ./coverage/lcov.info
        { type: 'lcovonly', subdir: '.' },
        // generates ./coverage/coverage-final.json
        { type: 'json', subdir: '.' },
        // generates HTML reports
        { type: 'html', dir: 'coverage/' }
      ]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    customLaunchers: {
      ChromeES6: {
        base: 'Chrome',
        flags: ['--javascript-harmony', '--no-sandbox']
      }
    },

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeES6'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
