const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const entryPoints = {
  style: './src/sass/style.scss',
};

const compiledEntries = {};

for (let prop in entryPoints) {
  compiledEntries[prop] = entryPoints[prop];
}

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';

  return {
    context: __dirname,
    entry: compiledEntries,

    output: {
      path: __dirname + '/dist',
      filename: "[name].js"
    },

    plugins: [
      // The below will shim global jquery, the first two lines will replace $/jQuery when require('jquery') is called
      // The third line, which we probably will always need with Drupal, then uses the window.jQuery instead of the
      // module jquery when require('jquery') is called
      // new webpack.ProvidePlugin({
      //   $: "jquery",
      //   jQuery: "jquery",
      //   "window.jQuery": "jquery"
      // }),

      new MiniCssExtractPlugin({ filename: "[name].css" })
    ],

    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [{
            loader: MiniCssExtractPlugin.loader
          }, {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: isDev
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDev
            }
          }, {
            loader: "sass-loader",
            options: {
              includePaths: [path.resolve(__dirname, "./node_modules/foundation-sites/scss")],
              sourceMap: isDev
            }
          }]
        }
      ]
    }
  };
};
