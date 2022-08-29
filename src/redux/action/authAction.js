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

export const signedinAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNEDIN_USER, payload: data })
}

export const signOut = () => (dispatch) => {
    dispatch(setAlert({ text: "Logout Successfull.", color: "success" }))
    dispatch({ type: ActionTypes.SIGNOUT_USER })
}