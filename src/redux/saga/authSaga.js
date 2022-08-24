import { all, call, takeEvery } from 'redux-saga/effects'
import { signinapi, signupapi } from '../../common/api/authApi';
import * as ActionTypes from "../actionTypes"

function* signUp(action) {
    try {
        const user = yield call(signupapi, action.payload);
        console.log(user)
    } catch (e) {
        if (e.payload === "auth/email-already-in-use") {
            console.log("This E-mail is Already Registered.")
        }
    }
}

function* signIn(action) {
    try {
        const user = yield call(signinapi, action.payload);
        console.log(user)
    } catch (e) {
        if (e.payload === "auth/wrong-password") {
            console.log("Wrong E-mail or password.")
        }
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