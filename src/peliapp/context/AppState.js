import React, { useReducer } from 'react'
import DataState from './AppContext';
import { AppReducer } from './AppReducer';

export const AppState = (props) => {
    const [state, dispatch] = useReducer(AppReducer, null);
    return (
        <DataState.Provider value={{state, dispatch}}>
            {props.children}
        </DataState.Provider>
    );
};