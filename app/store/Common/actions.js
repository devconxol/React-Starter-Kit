import {
    APP_LOAD,
    APP_LOAD_REQUEST,
    APP_LOAD_SUCCESS,
    APP_LOAD_WITH_USER_SUCCESS,
    APP_LOAD_FAILURE,

    SIGN_OUT,
    SIGN_OUT_REQUEST,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILURE,
} from '../actions_types'

export const loadAppRequest = () => ({
    type: APP_LOAD_REQUEST,
    subtype: APP_LOAD
});

export const loadAppWithUserSuccess = (user) => ({
    type: APP_LOAD_WITH_USER_SUCCESS,
    subtype: APP_LOAD,
    user
});
export const loadAppSuccess = () => ({
    type: APP_LOAD_SUCCESS,
    subtype: APP_LOAD,
});

export const loadAppFailure = (error) => ({
    type: APP_LOAD_FAILURE,
    subtype: APP_LOAD,
    error
});

export const signOutRequest = () => ({
    type: SIGN_OUT_REQUEST,
    subtype: SIGN_OUT
});

export const signOutSuccess = (user) => ({
    type: SIGN_OUT_SUCCESS,
    subtype: SIGN_OUT,
    user
});

export const signOutFailure = (error) => ({
    type: SIGN_OUT_FAILURE,
    subtype: SIGN_OUT,
    error
});