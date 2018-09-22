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

const mainConfig = {
  entry: [
    path.resolve(__dirname, 'src/index.js'),
  ],
  module: sharedModule,
};

module.exports = mainConfig;
