import React, {createContext, useContext, useState} from 'react';

type TInitialValue={
    age: 0,
    addAge:()=> {
    },
    saving: 0,
    addSaving:()=> {
    }
}
const InfoContext = createContext({} as TInitialValue);
export function useInfoContext() {
    return useContext(InfoContext)
}
type MyContextProviderProps={
    children:React.ReactNode
}
function MyContextProvider(props:MyContextProviderProps) {
    const [age,setAge]=useState(20)
    function addAge() {
        setAge(prev=>prev+1)
    }
    const [saving,setSaving]=useState(1000)
    function addSaving() {
        setSaving(prev=>prev+1000)
    }
    return (
        <InfoContext.Provider value={{
            age, addAge, saving, addSaving
        }}>
            {props.children}
        </InfoContext.Provider>
    );
}

export default MyContextProvider;