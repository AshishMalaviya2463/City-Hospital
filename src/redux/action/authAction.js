import * as ActionTypes from "../actionTypes"
import { setAlert } from "./alertAction";
export const signUpAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNUP_USER, payload: data });
    // console.log("action : ", data)
}

export const signInAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNIN_USER, payload: data });
    // console.log("action : ", data)
}


export const googleignInAction = () => (dispatch) => {
    dispatch({ type: ActionTypes.GOOGLESIGNIN_USER });
    // console.log("action : ", data)
}

export const signedinAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNEDIN_USER, payload: data })
}

export const signOut = () => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNOUT_USER })
}

export const signedOut = () => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNEDOUT_USER })
}

export const forgotAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.FORGOT_PWD, payload: data })
}