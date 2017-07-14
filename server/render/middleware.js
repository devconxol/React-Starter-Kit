import React from 'react'
import {MemoryRouter, matchPath} from 'react-router-dom';
import createMemoryHistory from 'history/createMemoryHistory'
import configureStore from '../../app/store/configureStore'
import createRoutes, {routes} from '../../routes'
import pageRenderer from './pageRenderer'
import {matchRoutes} from 'react-router-config'
import {fromJS} from 'immutable'

export default function render(req, res) {
    const authenticated = !!req.user;
    const history = createMemoryHistory();
    const initialState = fromJS({})
    const store = configureStore(initialState, history);
    //const routes = createRoutes(store);

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

    const  location = req.url;  //.replace(basename, '');


    const markup = pageRenderer(store, req, context, location);

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


    const fetchData = () => new Promise((resolve, reject) => {
        const branch = matchRoutes(routes, req.path);
        const method = req.method.toLowerCase();
        console.log('method', method);

        const promises = branch.map(({ route, match }) => {
            let component = route.component;

            if (component) {
                while (component && !component[method]) {
                    // eslint-disable-next-line no-param-reassign
                    component = component.WrappedComponent
                }
                return component &&
                    component[method] &&
                    component[method]({ req, res, match, store })
            }

            return Promise.resolve(null)
        });
        Promise.all(promises).then(resolve).catch(reject)
    });



    fetchData().then(() => {
        console.log('context', context);

        if(context.url){
            res.redirect(context.status, context.url)
        } else {
            res.status(200).send(markup);
        }
    }).catch((err) => {
        console.log('error',err);
        res.status(500).end()
    });



}