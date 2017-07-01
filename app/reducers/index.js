import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import auth_reducer from './auth_reducer'
import commons_reducer from './commons_reducer'
//import { combineReducers } from 'redux-immutable';
import { routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
    form: formReducer,
    auth: auth_reducer,
    commons: commons_reducer,
    router: routerReducer

});

export default rootReducer;