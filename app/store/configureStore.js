import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleWare from 'redux-saga';
import {createLogger} from 'redux-logger'
import rootReducer from './reducers'
import {isClient, isDebug} from '../../config/app'
import {fromJS, Collection} from 'immutable';
import sagas from './sagas';


//import createHistory from 'history/createMemoryHistory'
import { routerMiddleware} from 'react-router-redux'


export default function configureStore(initialState, history) {
    initialState = fromJS(initialState)
    console.log('init', initialState);
    const reactRouterMiddleware = routerMiddleware(history);
    const sagaMiddleware = createSagaMiddleWare()
    //const preloadState = fromJS(initialState);
    const middleware = [thunk, sagaMiddleware];
    let store;
    let sagasTask;

    if(isClient && isDebug){
        //console.log('true Init', preloadState);
        middleware.push(createLogger());
        middleware.push(reactRouterMiddleware);
        store = createStore(rootReducer, initialState, compose(
            applyMiddleware(...middleware),
            typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
                window.devToolsExtension(): f => f
        ));
        sagasTask = sagaMiddleware.run(sagas);
    } else {
        store = createStore(rootReducer, initialState, compose(
            applyMiddleware(...middleware),
            f => f
        ));
        sagasTask = sagaMiddleware.run(sagas);
    }

    if(module.hot){
        module.hot.accept('reducers', () => {
            const nextReducers = require('../reducers');
            store.replaceReducer(nextReducers)
        });

        module.hot.accept('./sagas', () => {
            const nextSagas = require('./sagas').default;
            sagasTask.cancel();
            sagasTask.done.then(() => {
                sagasTask = sagaMiddleware.run(nextSagas)
            })
        })
    }
    return store;
}