import reducer from './reducer'
import { createStore, applyMiddleware, compose } from 'redux'
import createReduxSagaMiddleware from 'redux-saga'
import sagas from './all-sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = createReduxSagaMiddleware()

export default createStore(reducer, composeEnhancers(
    applyMiddleware(middleware)
    ))

sagas.runUsing(middleware)