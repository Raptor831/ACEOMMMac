const path = require('path');

const sharedModule = {
  rules: [
    {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
  ],
};

const rendererConfig = {
  module: sharedModule,
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};

module.exports = rendererConfig;
