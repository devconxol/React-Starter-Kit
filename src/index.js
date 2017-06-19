import 'react-hot-loader/babel'
import '../style/main.scss'

import React from 'react'
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

import App from './containers/App/App';

const store =createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

const rootEl = document.getElementById('root');

const render = Component =>
    ReactDom.render(
        <Provider store={store} >
            <AppContainer>
                <Component/>
            </AppContainer>
        </Provider>, rootEl
    );


render(App);

if(module.hot){
    module.hot.accept('./containers/App/App', () => render(App));

    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers');
        store.replaceReducer(nextRootReducer)
    })
}
