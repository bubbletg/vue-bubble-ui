
// 注意，使用vue cli 时
var webpackConfig = require('@vue/cli-service/webpack.config.js');
// 自己配置时
// var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    files: ['tests/**/*.spec.js'],
    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap'],
    },
    autoWatch: true,
    webpack: webpackConfig,
    reporters: ['spec'],
    browsers: ['ChromeHeadless'],
  });
};