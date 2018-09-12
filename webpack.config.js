const VueLoaderPlugin = require('./node_modules/vue-loader/lib/plugin')
const path = require('path')

module.exports = {

    watch: true,

    target: 'electron-main',

    entry: './app/src/entry.js',

    output: {
        path: __dirname + '/dist',
        publicPath: 'dist/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },

        ]
    },

    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },

    plugins: [
      new VueLoaderPlugin()
    ],

}
