import {
    APP_LOAD_SUCCESS,
    APP_LOAD_WITH_USER_SUCCESS,
    APP_LOAD_FAILURE,

    SIGN_OUT_SUCCESS,
    SIGN_IN_SUCCESS,
    SIGN_UP_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_UP_FAILURE,
} from '../actions_types'
import {fromJS} from 'immutable'


const initialState = fromJS(
    {
        appLoaded: false,
        authenticated: false,
        user: null
    }
);

export default (state = initialState, action) => {
    switch (action.type){
        case APP_LOAD_SUCCESS:
            return state.set('appLoaded', true);

        case APP_LOAD_WITH_USER_SUCCESS:
            return state.set('appLoaded', true)
                .set('user', action.user)
                .set('authenticated', true);
        case APP_LOAD_FAILURE:
            return state.set('appLoaded', false)
                .set('user', null);

        case SIGN_OUT_SUCCESS:
            return state.set('user', null)
                .set('authenticated', false);

        case SIGN_IN_SUCCESS:
            return state
                .set('user', action.user)
                .set('authenticated', true);
        case SIGN_IN_FAILURE:
            return state
                .set('user', null)
                .set('authenticated', false);

        case SIGN_UP_SUCCESS:
            return state
                .set('user', action.user)
                .set('authenticated', true);
        case SIGN_UP_FAILURE:
            return state
                .set('user', null)
                .set('authenticated', false);
        default:
            return state
    }
}