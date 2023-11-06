import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "@/store/redux/toolkit/features/counter.tsx";

function ReduxContainer(props) {
    const {value}= useSelector(store=>store.counter)
    const dispatch=useDispatch()
    return (
        <div>
            {value}
            <button onClick={()=>dispatch(increment())}>加</button>
            <button onClick={()=>dispatch(decrement())}>减</button>
        </div>
    );
}

export default ReduxContainer;