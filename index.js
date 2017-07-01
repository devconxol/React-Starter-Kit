const path = require('path');
const express = require('express');
const app = express();

// Step 1: Create & configure a webpack compiler
const webpack = require('webpack');
const webpackConfig = require('./oldeweb');
const compiler = webpack(webpackConfig);

const options = {
    publicPath  : webpackConfig.output.publicPath,
    hot         : true,
    historyApiFallback: true,
    quiet       : false,
    noInfo      : false,
    lazy        : false,
    stats       : 'normal'
};

// Step 2: Attach the dev middleware to the compiler & the server
app.use(require("webpack-dev-middleware")(compiler, options));

// Step 3: Attach the hot middleware to the compiler & the server
app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));
//app.use(express.static('./public'));
module.exports = app;
