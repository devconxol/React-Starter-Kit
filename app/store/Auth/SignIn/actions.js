import {

    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,

    SIGN_IN

} from '../../actions_types'


export const signInRequest = (data) => ({
    type: SIGN_IN_REQUEST,
    subtype: SIGN_IN,
    data,
});
export const signInSuccess = (user) => ({
    type: SIGN_IN_SUCCESS,
    subtype: SIGN_IN,
    user,

});
export const signInFailure = (errors) => ({
    type: SIGN_IN_FAILURE,
    subtype: SIGN_IN,
    errors
});