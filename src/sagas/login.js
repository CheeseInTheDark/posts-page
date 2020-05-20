import { call, put, fork } from 'redux-saga/effects'
import loadPosts from './load-posts'
import loginApi from '../api/login'


export default function* login(action) {
    try {
        const token = yield call(loginApi.post, action.value)
        yield put({ type: "SET_TOKEN", value: token })
        yield fork(loadPosts)
        yield put({ type: "ROUTE_POSTS" })
    } catch(exception) {
        yield put({ type: "LOGIN_FAILED" })
    }

}