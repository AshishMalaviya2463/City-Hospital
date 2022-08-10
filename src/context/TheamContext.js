import { useReducer } from "react";
import { createContext } from "react";
import { TOGGLE_THEAM } from "./ActionTypes";
import { theamReducer } from "./reducer/theam.reducer";

const TheamContext = createContext();

const initVal = {
    theam: "light"
}

export const TheamProvider = ({ children }) => {
    const [theam, dispatch] = useReducer(theamReducer, initVal);

    const toggleTheam = (val) => {
        const theamColor = val === "light" ? "dark" : "light";
        dispatch({ type: TOGGLE_THEAM, payload: theamColor })
    }
    return (
        <TheamContext.Provider value={{
            theam,
            toggleTheam
        }}>
            {children}
        </TheamContext.Provider>
    );
};

export default TheamContext