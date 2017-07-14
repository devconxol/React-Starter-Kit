import {
    APP_LOAD,
    ASYNC_START,
    ASYNC_END,
    AUTH_ERROR,
    SIGN_IN,
    SIGN_UP,
    SIGN_OUT
} from './types'
import agent from '../services/api/index'

export function signIn(email, password, history) {
    return function (dispatch) {
        dispatch({ type: ASYNC_START, subtype: SIGN_IN });
        agent.Auth.signIn(email, password).then(res => {
            //console.log('RESULTAT', res);
           // console.log('ERRORS', res.errors);
            if(res.errors === undefined){
                const token = res.data.login.token;
                localStorage.setItem('token', token);
                agent.setToken(token);
                getCurrentUser(token, dispatch, true, history);
            } else {
                dispatch(authError(res.errors))

            }
        })
    }
}

export function signUp(email, password, history) {
    return function (dispatch) {
        dispatch({type: ASYNC_START, subtype:SIGN_UP});
        agent.Auth.signUp(email, password).then(res => {
           // console.log('RESULTAT', res);
            //console.log('ERRORS', res.errors);
            if(res.errors === undefined){
                const token = res.data.signup.token;
                localStorage.setItem('token', token);
                agent.setToken(token);
                getCurrentUser(token, dispatch, true, history);
            } else {
                dispatch(authError(res.errors))
            }

        })
    }
}


export function signOut() {
    return function (dispatch) {
        agent.Auth.signOut().then(res => {
           // console.log('userOut', res);
            localStorage.removeItem('token');
            agent.setToken(null);
            dispatch({
                type: SIGN_OUT
            })
        });
    }

}


export function authError(error) {
    return {
        type: AUTH_ERROR,
        error: true,
        payload: error
    }
}

 export function loadApp(token, currentUser) {
    return {
        type: APP_LOAD,
        currentUser:currentUser,
        token
    }

}

function getCurrentUser(token, dispatch, redirect, history) {
    return agent.Auth.current().then(res => {
        const currentUser = res.data.currentUser;
        //console.log('RESULTAT', res);
        //console.log('currentUser', currentUser);
        //console.log('ERRORS', res.errors);
        if(res.errors === undefined){
            if(currentUser.id === null) {
                dispatch({type: SIGN_OUT});
                dispatch(loadApp(token));

            } else {
                dispatch(loadApp(token, currentUser));
                dispatch({type: SIGN_IN});
                if(redirect) history.push('/');

            }
        } else {
            dispatch(loadApp(token));
            dispatch({type: SIGN_OUT});
            dispatch(authError(res.errors))
        }
    });
}


export function onLoad(token) {
    return function (dispatch) {
        agent.setToken(token);
        dispatch(loadApp(token));
        getCurrentUser(token, dispatch)
    };
}


export function getEvents(events) {
    return function (dispatch) {
        agent.Event.list()//.then(res => //console.log('EVENTS', res))
    }
}