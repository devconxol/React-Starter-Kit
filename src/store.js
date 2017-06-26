import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import {promiseMiddleWare} from './middleware'

import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';


import promiseMiddleware from 'redux-promise-middleware';

const store =createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, createLogger()),

);

export default store;