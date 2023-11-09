import React from 'react';

import CreateContext from "./createContext/CreateContext.tsx"
import AppContext from "./AppContext"
import NestingAtomExample from "./NestingContext";
// import {useDispatch, useSelector} from "react-redux";
// import {decrement, increment} from "@/store/features/counter.tsx";
function Context() {
    // const {value:count}=useSelector(store=>store.counter)
    // const dispatch= useDispatch()
    return (
        <>
            {/*<CreateContext></CreateContext>*/}
            {/*<AppContext></AppContext>*/}
            <NestingAtomExample></NestingAtomExample>

            {/*<div>*/}
            {/*    {count}*/}
            {/*    <button onClick={()=>dispatch(increment())}>加</button>*/}
            {/*    <button onClick={()=>dispatch(decrement())}>减</button>*/}
            {/*</div>*/}
        </>
    );
}

export default Context;