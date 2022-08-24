import * as ActionTypes from "../actionTypes"
export const signUpAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNUP_USER, payload: data });
    // console.log("action : ", data)
}

export const signInAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNIN_USER, payload: data });
    // console.log("action : ", data)
}