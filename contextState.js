import { useContext } from "react";
import React from "react";

export const initialState = {
    codigo: '',
    piso: '',
    direccion: '',
};
export const actionTypes = {
    SetCodigo: 'SET_CODIGO',
    SetPiso: 'SET_PISO',
    SetDireccion: 'SET_DIRECCION'
};
export const reducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SetCodigo:
            return {
                ...state,
                codigo: action.value
            };
        case actionTypes.SetPiso:
            return {
                ...state,
                piso: action.value
            };
        case actionTypes.SetDireccion:
            return {
                ...state,
                direccion: action.value
            };
        default:
            return state;
    }
}
export const initialContext = {
    contextState: initialState,
    setContextState: () => { },
};

const Cont = React.createContext(initialContext);

export function ContextProvider({ children, initial = initialState }) {
    const [state, dispatch] = React.useReducer(reducer, initial);

    const contextState = state;
    const setContextState = dispatch;

    return <Cont.Provider value={{ contextState, setContextState }}>{children}</Cont.Provider>;
}
export const useContextState = () => useContext(Cont);