import React from 'react';
import { useReducer, useContext } from 'react';
import AddressReducer from '../hooks/addressReducer';
export const AddressContext = React.createContext(null);

export function AddressProvider(props){
    const [address, dispatch] = useReducer(AddressReducer, []);
    return (<AddressContext.Provider value={{address, dispatch}}>{props.children}</AddressContext.Provider>);
}

export function useAddress(){
    const context = useContext(AddressContext);
    if(!context)
    throw "context must be initilized";
    return context;
}