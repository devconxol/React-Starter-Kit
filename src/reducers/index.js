import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import auth_reducer from './auth_reducer'
import commons_reducer from './commons_reducer'

const rootReducer = combineReducers({
    form: formReducer,
    auth: auth_reducer,
    commons: commons_reducer

});

export default rootReducer;