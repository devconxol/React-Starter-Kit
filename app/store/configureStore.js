import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger'
import rootReducer from '../reducers'
import {isClient, isDebug} from '../../config/app'
import {fromJS} from 'immutable'

//import createHistory from 'history/createMemoryHistory'
import { routerMiddleware} from 'react-router-redux'




console.log('isClient', isClient, 'isDebug', isDebug);

export default function configureStore(initialState, history) {
    const reactRouterMiddleware = routerMiddleware(history);
    const preloadState = initialState;
    const middleware = [thunk];
    let store;

    if(isClient && isDebug){
        console.log('Not Server Side')
        //console.log('true Init', preloadState);
        middleware.push(createLogger());
        middleware.push(reactRouterMiddleware);
        store = createStore(rootReducer, preloadState, compose(
            applyMiddleware(...middleware),
            typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
                window.devToolsExtension(): f => f
        ))
    } else {
        store = createStore(rootReducer, preloadState, compose(
            applyMiddleware(...middleware),
            f => f
        ))
    }

    if(module.hot){
        module.hot.accept('reducers', () => {
            const nextReducers = require('../reducers');
            store.replaceReducer(nextReducers)
        })
    }
    return store;
}