import * as ActionTypes from "../actionTypes"
const initState = {
    isLoading: false,
    user: null,
    error: ""
}
export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.SIGNEDIN_USER:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }
        case ActionTypes.SIGNOUT_USER:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: null
            }
        default:
            return state
    }
}