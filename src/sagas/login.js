import { takeEvery, call, put } from 'redux-saga/effects'
import loginApi from '../api/login'

export default function* login() {
    yield takeEvery("LOGIN", watchLogin)
}

function* watchLogin() {
    const token = yield call(loginApi, password)
}