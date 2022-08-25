import { all, call, put, takeEvery } from 'redux-saga/effects'
import { signinapi, signupapi } from '../../common/api/authApi';
import { setAlert } from '../action/alertAction';
import * as ActionTypes from "../actionTypes"

function* signUp(action) {
    try {
        const user = yield call(signupapi, action.payload);
        yield put(setAlert({ text: user.payload, color: "success" }))
    } catch (e) {
        yield put(setAlert({ text: e.payload, color: "error" }))
    }
}

function* signIn(action) {
    try {
        const user = yield call(signinapi, action.payload);
        yield put(setAlert({ text: user.payload, color: "success" }))
    } catch (e) {
        yield put(setAlert({ text: e.payload, color: "error" }))
    }
}

function* signUpWatcher() {
    yield takeEvery(ActionTypes.SIGNUP_USER, signUp);
}

function* signInWatcher() {
    yield takeEvery(ActionTypes.SIGNIN_USER, signIn);
}

export default function* allAuthSagaWatcher() {
    yield all([
        signUpWatcher(),
        signInWatcher()
    ])
}