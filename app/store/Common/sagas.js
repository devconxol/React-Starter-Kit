import {take, put, call, fork} from 'redux-saga/effects';
import * as action_types from '../actions_types';
import * as actions from '../actions';
import api from '../../services/api'

export function* getCurrentUser(action) {
    let User;
    let user;
    try {
        const token = localStorage.getItem('holyToken');
        api.setToken(token);
        const {data} = yield call(api.Auth.current);
        User = () => {
            if(data.currentUser.id){
                return data.currentUser
            } else  return null
        };
        user = User();
        if(action.subtype === action_types.APP_LOAD){

            if(user){
                yield put(actions.loadAppWithUserSuccess(user));
            } else {
                yield put(actions.loadAppSuccess());
            }
        } else if(action.subtype === action_types.SIGN_IN){
            console.log('signin action', action);
            yield put(actions.signInSuccess(user))
        } else if(action.subtype === action_types.SIGN_UP){
            yield put(actions.signUpSuccess(user))
        }
        /*
        if(action.subtype === action_types.SIGN_IN){
        } else if (action.subtype === action_types.SIGN_UP){
            yield put(actions.signUpSuccess(user()))
        } else {
        }
        */
        //yield put(actions.loadAppRequestSuccess(user()));


    } catch (e) {
        console.log('error', e)
        yield put(actions.loadAppFailure(e))
    }
}


export function* watchGetCurrentUser () {
    while (true){
        const action = yield take([
            action_types.APP_LOAD_REQUEST,
            action_types.SIGN_IN_REQUEST,
            action_types.SIGN_UP_SUCCESS
        ]);
        console.log('watcherData', action)
        yield call(getCurrentUser, action)
    }
}


export function* signOutUser () {
    try {
        const {data} = yield call(api.Auth.signOut);
        localStorage.removeItem('holyToken');
        yield put(actions.signOutSuccess(data))

    }

    catch (e){
        yield put(actions.signOutFailure(e))
    }
}

export function* watchSignOutUser() {
    while (true){
        const action = yield take(action_types.SIGN_OUT_REQUEST)
        yield call(signOutUser, action)
    }
}


export default function* () {
    yield fork(watchGetCurrentUser)
    yield fork(watchSignOutUser)
}