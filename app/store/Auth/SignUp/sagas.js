import {take, put, call, fork} from 'redux-saga/effects'
import * as actions_types from '../../actions_types'
import * as actions from '../../actions'
import api from '../../../services/api'

export function* createUser (newData) {
    try {
        const data = yield call(api.Auth.signUp, newData);

        const hasError = data.hasOwnProperty('errors');

        if(hasError){
            const errorMsg = data.errors.map(error => error.message);
            yield put(actions.signUpFailure(errorMsg))
            localStorage.removeItem('holyToken')
        } else {
            console.log('data', data);
            console.log('token', data.data.signup.token);
            localStorage.setItem('holyToken', data.data.signup.token)
            yield put(actions.signUpSuccess(data));
        }

    } catch (e){
        yield put(actions.signUpFailure(e))

    }
}

export function* watchSignUpRequest() {
    while(true){
        const {data} = yield take(actions_types.SIGN_UP_REQUEST);
        console.log('watcherData',data);
        yield call(createUser, data)
    }
}

export default function* () {
    yield fork(watchSignUpRequest)
}