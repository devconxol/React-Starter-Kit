import {
    SIGN_UP,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,

    SIGN_OUT,
    SIGN_OUT_REQUEST,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILURE

} from '../../actions_types'

export const signUpRequest = (data) => ({
    type: SIGN_UP_REQUEST,
    subtype: SIGN_UP,
    data,
});
export const signUpSuccess = (user) => ({
    type: SIGN_UP_SUCCESS,
    subtype: SIGN_UP,
    user,

});
export const signUpFailure = (errors) => ({
    type: SIGN_UP_FAILURE,
    subtype: SIGN_UP,
    errors
});
