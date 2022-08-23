import { all, call, put, takeEvery } from 'redux-saga/effects'
import { signupapi } from '../../common/api/authApi';
import * as ActionTypes from "../actionTypes"

function* signUp(action) {
    try {
        yield call(signupapi, action.payload);
        // yield console.log("saga : ", action.payload)
        //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
        console.log(e)
        //   yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* authWatcher() {
    yield takeEvery(ActionTypes.SIGNUP_USER, signUp);
}

export default function* allAuthSagaWatcher() {
    yield all([
        authWatcher()
    ])
}