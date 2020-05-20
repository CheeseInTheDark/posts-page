import { call, put } from 'redux-saga/effects'
import loginApi from '../api/login'

export default function* login(action) {
    try {
        const token = yield call(loginApi.post, action.value)
        yield put({ type: "SET_TOKEN", value: token })
    } catch(exception) {
        yield put({ type: "LOGIN_FAILED" })
    }

}