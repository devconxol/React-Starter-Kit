import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import { fromJS } from 'immutable';
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import AppRoutes from '../routes'
import configureStore from './store/configureStore';


const initialState = fromJS(window.__INITIAL_STATE__);
//console.log('init', initialState);
const history = createHistory();

const store = configureStore(initialState, history);

//const routes = createRoutes(store);
const  root = document.getElementById('app');


//console.log('IN....');
const renderApp = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppRoutes/>
        </ConnectedRouter>
    </Provider>
);

render(renderApp(), root);

if (module.hot) {
    module.hot.accept('../routes', () => {
        require('../routes');
        render(renderApp(), root)
    })
}
