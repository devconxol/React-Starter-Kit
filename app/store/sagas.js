import {fork, all} from 'redux-saga/effects'
//const req = require.context('.', true, /\.\/.+\/sagas\.js$/)
import SignUpSaga from './Auth/SignUp/sagas'
import SignInSaga from './Auth/SignIn/sagas'
import CommonSaga from './Common/sagas'

const sagas = [SignInSaga, SignUpSaga, CommonSaga];

export default function* () {
    yield all(sagas.map(fork))
}