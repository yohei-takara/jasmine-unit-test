// Karma configuration
// Generated on Wed Apr 12 2017 23:20:09 GMT+0900 (JST)

module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    files: [
      "main/node_modules/vue/dist/vue.js",
      "main/script/*.js",
      "spec/*.js"
    ],
    exclude: [],
    preprocessors: {
      'main/script/*.js': ['coverage']
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
