import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import {Provider} from 'react-redux';
import Helmet from 'react-helmet'
import staticAssets from './static-assets'
import {StaticRouter} from 'react-router'
import App from '../../app/containers/Home'
import {fromJS} from 'immutable'
import AppRoutes, {routes} from '../../routes'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

const sheet = new ServerStyleSheet();

//const html = renderToString(sheet.collectStyles(<YourApp />))



const createApp = (store, req, context, location) => renderToStaticMarkup(
    <StyleSheetManager sheet={sheet.instance}>
        <Provider store={store}>
            <StaticRouter
                location={location}
                context={context}>
                <AppRoutes/>
            </StaticRouter>
        </Provider>
    </StyleSheetManager>
);

//console.log('styles', sheet.getStyleTags())

const buildPage = ({componentHTML, initialState, headAsserts}) => {
    return `
    <!doctype html>
    <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
            ${headAsserts.title.toString()}
            ${headAsserts.meta.toString()}
            ${headAsserts.link.toString()}
            ${staticAssets.createStylesheets()}
            ${sheet.getStyleTags()}
            
        </head>
            
        <body>
            <div id="app">${componentHTML}</div>
            <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
                ${staticAssets.createAppScript()}
        </body>
    </html>
    `
};

export default (store, req, context, location) => {

    const initialState  = fromJS(store.getState());
    //console.log('inital...', initialState);
    const componentHTML = createApp(store, req, context, location);
    const headAsserts = Helmet.renderStatic();

    return buildPage({componentHTML, initialState, headAsserts})
}
