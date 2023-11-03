import React, {useState,useReducer} from 'react';
import {useImmerReducer} from "use-immer";

const initialState={
    name:'Conny',
    score:0
}

type  TAction = {
    type: 'increment' | 'decrement',
    payload: number,
};
function reducer(state:typeof initialState,action:TAction) {
    switch (action.type) {
        case "decrement":
            state.score-=action.payload
            break;
        case "increment":
            state.score+=action.payload
            break
        default:
            break
    }
    localStorage.setItem('state',JSON.stringify(state))
}
function initialAction(initState:typeof initialState) {
    const res=localStorage.getItem('state')
    if (!!res) {
        return JSON.parse(res)
    }
    return initState;
}
function Demo1(props) {
    // 更改前
    // const [state, setState] = useState(initialState)
    // function addScore() {
    //     setState((prev)=>({...prev,score: prev.score+1}))
    // }
    //
    // function minuScore() {
    //     setState((prev)=>({...prev,score: prev.score-1}))
    // }

    const [state, dispatch] = useImmerReducer(
        reducer,
        initialState,
        initialAction
    )

    async function asycDispatch(action:TAction){
        const audio=new Audio()
        switch (action.type) {
            case "increment":
                audio.src="https://www.codehamster.com/wp-content/uploads/2022/06/up1.mp3"
                break;
            case "decrement":
                audio.src="https://www.codehamster.com/wp-content/uploads/2022/06/down1.mp3"
                break
            default:
                break;
        }
        await audio.play()
        dispatch(action)
    }

    function addScore() {
        dispatch({type:'increment',payload:1})
    }

    return (
        <div>
            {/*<div>*/}
            {/*    useState:*/}
            {/*    <span>*/}
            {/*        {state.name} - {state.score}*/}
            {/*    </span>*/}
            {/*    <button onClick={addScore}>+</button>*/}
            {/*    <button onClick={minuScore}>-</button>*/}
            {/*</div>*/}
            <div>
                useReducer:
                <span>
                       {state.name} - {state.score}
                </span>
                <button onClick={()=>asycDispatch({type:'increment',payload:2})}>+</button>
                <button onClick={() => dispatch({type: 'decrement', payload: 10})}>-</button>
            </div>
        </div>
    );
}

export default Demo1;