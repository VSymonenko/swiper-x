const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.[tj]s'],
  addons: ['@storybook/preset-typescript'],
  webpackFinal: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };
    return config;
  },
};