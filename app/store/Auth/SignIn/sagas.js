import {take, put, call, fork} from 'redux-saga/effects'
import * as actions_types from '../../actions_types'
import * as actions from '../../actions'
import api from '../../../services/api'

import {getCurrentUser} from '../../Common/sagas'

export function* signInAttempt (action) {
    try {
        const data = yield call(api.Auth.signIn, action.data);
        const hasError = data.hasOwnProperty('errors');

        if(hasError){
            const errorMsg = data.errors.map(error => error.message);
            localStorage.removeItem('holyToken')
            yield put(actions.signInFailure(errorMsg))
        } else {
            console.log('data', data);
            console.log('token', data.data.signin.token);
            localStorage.setItem('holyToken', data.data.signin.token);
            yield call(getCurrentUser, action)
        }

    } catch (e){
        yield put(actions.signInFailure(e))

    }
}


export function* watchSignInRequest() {
    while(true){
        const action = yield take(actions_types.SIGN_IN_REQUEST);
        yield call(signInAttempt, action)
    }
}

export default function* () {
    yield fork(watchSignInRequest)
}