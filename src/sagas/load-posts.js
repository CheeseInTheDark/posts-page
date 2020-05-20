import { call, put } from 'redux-saga/effects'
import getPosts from '../api/getPosts'

export default function* loadPosts() {
    const posts = yield call(getPosts)
    yield put({ type: "LOAD_POSTS", value: posts })
}