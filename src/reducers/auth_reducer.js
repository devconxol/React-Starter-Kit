import {fromJS} from 'immutable';

import {
    SIGN_IN,
    SIGN_UP,
    ASYNC_START,
    ASYNC_END,
    LOGIN_PAGE_UNLOADED,
    SIGN_OUT,
    AUTH_ERROR} from '../actions/types';

const immutableState= fromJS({
    inProgress: false,
    authenticated: false,
    isError:false,
    errors: null
});


export default function (state = immutableState, action) {
    switch(action.type) {
        case SIGN_IN:
        case SIGN_UP:
           return state.set("inProgress", false)
               .set("authenticated", true)
               .set("isError", false)
               .set("errors", null);
        case ASYNC_START:
            if(action.subtype === SIGN_IN || action.subtype === SIGN_UP){
                return state.set('inProgress',true);
            }
            break;
        case SIGN_OUT:
            return state.set("authenticated", false)
                .set("errors", null);
        case AUTH_ERROR:
            return state.set("errors", action.payload)
                .set("inProgress", false)
                .set("isError", true);
        default:
            return state
    }
}