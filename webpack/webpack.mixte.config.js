const PATHS = require('./paths');
const rules = require('./rules');
const plugins = require('./plugins');
const externals = require('./externals');
const resolve = require('./resolve');


const hotMiddlewareScript = 'webpack-hot-middleware/client';
const node = {__dirname: true, __filename:true};



module.exports  = [

    {
        name: 'client',
        devtool: 'eval',
        context: PATHS.app,
        entry: {app: ['./client', hotMiddlewareScript]},
        node,
        output: {
            path: PATHS.assets,
            filename: '[name].js',
            publicPath: PATHS.public
        },
        module: {rules: rules({production:false, browser:true})},
        resolve,
        plugins: plugins({production:false, browser:true})
    },


    {
        name: 'server',
        devtool: 'sourcemap',
        context: PATHS.app,
        entry: {server: '../server/index'},
        target: 'node',
        node,
        externals,
        output: {
            path: PATHS.compiled,
            filename: '[name].dev.js',
            publicPath: PATHS.public,
            libraryTarget: 'commonjs2'
        },
        module: {rules: rules({production: false, browser: false})},
        resolve,
        plugins: plugins({production:false, browser:false})
    }
    ]
