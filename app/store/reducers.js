import {combineReducers} from 'redux-immutable';
import {reducer as formReducer} from 'redux-form';
import {routerReducer} from 'react-router-redux';
import common from './Common/reducer'

const reducers = {
    form: formReducer,
    routerReducer,
    common
};

export default combineReducers(reducers)