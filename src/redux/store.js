import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from "redux-thunk"
import { rootReducer } from "./reducer/rootReducer"
import { rootSaga } from './saga/rootSaga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [sagaMiddleware, thunk]

export const store = createStore(
    persistedReducer,
    applyMiddleware(...middleware)
)

export let persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
