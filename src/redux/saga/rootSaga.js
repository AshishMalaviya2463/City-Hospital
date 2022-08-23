import { all } from "redux-saga/effects";
import allAuthSagaWatcher from "./authSaga"

export function* rootSaga() {
    yield all([
        allAuthSagaWatcher()
    ])
}