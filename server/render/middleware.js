import React from 'react'
import {MemoryRouter, matchPath} from 'react-router-dom';
import createMemoryHistory from 'history/createMemoryHistory'
import configureStore from '../../app/store/configureStore'
import createRoutes from '../../routes'
import pageRenderer from './pageRenderer'


export default function render(req, res) {
    const authenticated = !!req.user;
    const history = createMemoryHistory();
    const store = configureStore({}, history);
    const routes = createRoutes(store);

    //console.log('req => ' + req.url);
    let context = {};
    /*
    const html = ReactDOMServer.renderToString(
        <Provider store={store}>
        <StaticRouter
            location={req.url}
            context={context}
        >
            <App/>
        </StaticRouter>
        </Provider>
    );
    */

    const  location = req.url  //.replace(basename, '');


    const markup = pageRenderer(store, req, context, location);

    console.log('context',context);
    /*
    if (context.url) {
        res.writeHead(301, {
            Location: context.url
        });
        res.end()
    } else {
        res.write(`
      <!doctype html>
      
      <div id="app">
      ${html}</div>
    `);
        const promises = [];

        res.end()
    }
    */
    res.status(200).send(markup);
}