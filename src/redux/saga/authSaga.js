import { all, call, takeEvery } from 'redux-saga/effects'
import { signupapi } from '../../common/api/authApi';
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

function* signUpWatcher() {
    yield takeEvery(ActionTypes.SIGNUP_USER, signUp);
}

export default function* allAuthSagaWatcher() {
    yield all([
        signUpWatcher()
    ])
}