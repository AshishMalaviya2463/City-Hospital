import { TOGGLE_THEAM } from "../ActionTypes"

export const theamReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_THEAM:
            return {
                ...state,
                theam: action.payload
            }
        default:
            return state
    }
}