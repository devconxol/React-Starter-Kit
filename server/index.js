import express from 'express';
import webpack from 'webpack';

import {isDebug} from '../config/app';
import initExpress from './init/express';
import renderMiddleware from './render/middleware'

const app = express();


if(isDebug){
    // enable webpacik hot module replacement
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('../webpack/webpack.config');
    const devBrowserConfig = webpackConfig({ browser: true });
    const compiler = webpack(devBrowserConfig);
    app.use(webpackDevMiddleware(compiler, { noInfo: false, publicPath: devBrowserConfig.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));



}

initExpress(app);


app.get('*', renderMiddleware);

app.listen(app.get('port'));