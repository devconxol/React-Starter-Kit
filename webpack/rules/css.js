const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssImport = require('postcss-import');
const postcssCssnext = require('postcss-cssnext');
const postcssReporter = require('postcss-reporter');

const PATH = require('../paths');


module.exports = ({production=false, browser = false } = {})=> {
    const localIdentName = 'localIdentName=[name]__local___[hash:base64:5]'

    const createCssLoaders = embedCssInBundle => ([
        {
            loader: embedCssInBundle ? 'css-loader' : 'css-loader/locals',
            options: {
                localIdentName,
                sourceMap: true,
                modules: true,
                importLoaders: 1
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                ident: 'postcss',
                plugins: [
                    postcssImport({path: path.resolve(PATH.app, './css')}),
                    postcssCssnext({browsers: ['> 1%', 'last 2 versions']}),
                    postcssReporter({clearMessages: true})
                ]
            }
        }
    ]);

    const createBrowserLoaders = extractCssToFile => loaders => {
        if(extractCssToFile){
            return ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: loaders
            });
        }
        return [{loader: 'style-loader'}, ...loaders]
    };


    const serverLoaders = createCssLoaders(false);
    const browserLoader = createBrowserLoaders(production)(createCssLoaders(true))

    return {
        test: /\.css$/,
        use: browser ? browserLoader: serverLoaders,
        include: PATH.app
    }
};