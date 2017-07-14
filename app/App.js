import React, {Component} from 'react'
import {Provider, connect} from 'react-redux'
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import fetchDataForRoute from './utlis/fetchDataForRoutes'
import configureStore from './store/configureStore';
import AppRoutes from '../routes'


const initialState = window.__INITIAL_STATE__;
const history = createHistory();
const store = configureStore(initialState, history);



function onUpdate() {
    // Prevent duplicate fetches when first loaded.
    // Explanation: On server-side render, we already have __INITIAL_STATE__
    // So when the client side onUpdate kicks in, we do not need to fetch twice.
    // We set it to null so that every subsequent client-side navigation will
    // still trigger a fetch data.
    // Read more: https://github.com/choonkending/react-webpack-node/pull/203#discussion_r60839356
    if (window.__INITIAL_STATE__ !== null) {
        window.__INITIAL_STATE__ = null;
        return;
    }

    store.dispatch({ type: types.CREATE_REQUEST });
    fetchDataForRoute(this.state)
        .then((data) => {
            return store.dispatch({ type: types.REQUEST_SUCCESS, data });
        });
}

class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <ConnectedRouter history={history} onUpdate={onUpdate} >
                    <AppRoutes/>
                </ConnectedRouter>
            </Provider>
        )
    }
}


export default App;