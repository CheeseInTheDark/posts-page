import reducer from './reducer'
import { createStore, applyMiddleware } from 'redux'
import createReduxSagaMiddleware from 'redux-saga'
import sagas from './all-sagas'

const middleware = createReduxSagaMiddleware()

export default createStore(reducer, applyMiddleware(middleware))

sagas.runUsing(middleware)