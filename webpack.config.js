var webpack = require('webpack');
var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');


module.exports = {

    entry: './17-promises/index.js',

    output: {
        path: path.resolve(__dirname, '17-promises'),
        filename: 'js/index.js'
    },

    plugins: [
        new HtmlPlugin()
    ],

    watch: true,

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }

};
