import { all, call, put, takeEvery } from 'redux-saga/effects'
import { forgotApi, signinapi, signOutApi, signupapi } from '../../common/api/authApi';
import { setAlert } from '../action/alertAction';
import * as ActionTypes from "../actionTypes"
import { signedinAction, signedOut } from "../action/authAction"
import { history } from "../../history"

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
        yield put(signedinAction(user))
        yield history.push("/")
        yield put(setAlert({ text: "Login Succesfull.", color: "success" }))
    } catch (e) {
        yield put(setAlert({ text: e.payload, color: "error" }))
    }
}

function* signOut(action) {
    try {
        const user = yield call(signOutApi)
        yield put(signedOut())
        yield history.push("/")
        yield put(setAlert({ text: user.payload, color: "success" }))
    } catch (e) {
        yield put(setAlert({ text: e.payload, color: "error" }))
    }
}

function* forgotPwd(action) {
    try {
        const user = yield call(forgotApi, action.payload)
        yield history.push("/")
        yield put(setAlert({ text: user.payload, color: "success" }))
    } catch (e) {
        console.log(e)
        yield put(setAlert({ text: e.payload, color: "error" }))
    }
}

function* signUpWatcher() {
    yield takeEvery(ActionTypes.SIGNUP_USER, signUp);
}

function* signInWatcher() {
    yield takeEvery(ActionTypes.SIGNIN_USER, signIn);
}

function* signOutWatcher() {
    yield takeEvery(ActionTypes.SIGNOUT_USER, signOut);
}

function* forgotPwdWatcher() {
    yield takeEvery(ActionTypes.FORGOT_PWD, forgotPwd);
}



export default function* allAuthSagaWatcher() {
    yield all([
        signUpWatcher(),
        signInWatcher(),
        signOutWatcher(),
        forgotPwdWatcher()
    ])
}