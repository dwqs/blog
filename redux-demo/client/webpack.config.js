/**
 * Created by pomy on 16/4/7.
 */

var path = require('path');
var webpack = require("webpack");

//webpack的搜索文件后缀
var extensions = ['','.js','.jsx'];

module.exports = {
    entry: path.resolve(__dirname, './page/index.js'),

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../public/assets/'),
        publicPath: path.resolve(__dirname, '/assets/')
    },

    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
            //loaders: ['style', 'css']
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-1'
            //loader: 'babel'
        }]
    },

    resolve: {
        extensions: extensions
    }
};
