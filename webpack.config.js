var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: './src/app/app.module',
    watch: true,
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ],
    },
    devServer: {
        contentBase: __dirname + '/public',
        publicPath: __dirname + '/public'
    },
    output: {
        path: path.join(__dirname, '/www/js/'),
        filename: 'app.js'
    }
};