import {
    SIGN_OUT,
    APP_LOAD
} from '../actions/types'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    appName: 'Holly Notes',
    appLoaded: false,
    token: null,
    currentUser: null,
    viewChangeCounter: 0
});


export default (state = defaultState, action) => {
    //console.log('defaultState', state);
    switch (action.type){
        case APP_LOAD:
            return state.set("token", action.token || null)
                .set("appLoaded", true)
                .set("currentUser", action.currentUser ? action.currentUser : null);
        case SIGN_OUT:
            return state.set('currentUser', null)
                .set('token', null);
        default:
            return state // defaultState
    }
}