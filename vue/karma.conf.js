// Karma configuration
// Generated on Wed Apr 12 2017 23:20:09 GMT+0900 (JST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      "node_modules/vue/dist/vue.js",
      "src/script/*.js",
      "test/unit/spec/*.js"
    ],
    exclude: [],
    preprocessors: {
      'src/script/*.js': ['coverage']
    },
    reporters: ['spec', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
