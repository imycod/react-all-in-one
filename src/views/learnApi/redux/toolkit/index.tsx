import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "@/store/redux/toolkit/features/counter.tsx";

function ReduxToolkitContainer(props) {
    const {value}= useSelector(store=>store.counter)
    const dispatch=useDispatch()
    return (
        <div>
            <span>
                {value}
            </span>
            <button onClick={()=>dispatch(increment())}>加</button>
            <button onClick={()=>dispatch(decrement())}>减</button>
            <p>
                react-redux注意store在mainjs根组件如何使用
            </p>
        </div>
    );
}

export default ReduxToolkitContainer;