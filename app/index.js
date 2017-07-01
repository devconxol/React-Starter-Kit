import 'react-hot-loader/babel'
import '../style/main.scss'

import React from 'react'
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';


import App from './containers/Appp';
import { SIGN_IN  } from './actions/types'

import store from './store'


const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed In

if(token){
    //We need to update application sate
    store.dispatch({type: SIGN_IN})
}

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
    module.hot.accept('./containers/Appp', () => render(App));

    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers');
        store.replaceReducer(nextRootReducer)
    })
}
