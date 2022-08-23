import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from "redux-thunk"
import { rootReducer } from "./reducer/rootReducer"
import { rootSaga } from './saga/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, thunk]

export const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
)

sagaMiddleware.run(rootSaga)
