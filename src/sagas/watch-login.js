import { takeEvery } from 'redux-saga/effects'
import login from './login'

export default function* watchLogin() {
    yield takeEvery("LOGIN", login)
}