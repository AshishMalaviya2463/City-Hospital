import * as ActionTypes from "../actionTypes"
export const authAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNUP_USER, payload: data });
    // console.log("action : ", data)
}