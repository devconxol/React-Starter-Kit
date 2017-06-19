const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUNDLE_LIBS = [
    'react',
    'react-dom',
    'react-router-dom',
    'react-redux',
    'redux',
    'redux-thunk'
];

const VENDOR_LIBS = [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './src/index.js',
    // the entry point of our app
];

module.exports = {
    entry: {
        bundle: BUNDLE_LIBS ,
        vendor: VENDOR_LIBS
    },

    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name]-[hash].js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader', 'sass-loader'],
                test: /\.scss$/
            }
        ]
    },

    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest', 'bundle']
        }),

        new HtmlWebpackPlugin({
            template: 'index.html'
        }),

        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NamedModulesPlugin(),

    ],
    devServer: {
        historyApiFallback: true,
        compress: true,
        contentBase: path.resolve(__dirname, 'public')
    }
};