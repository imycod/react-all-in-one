import React, {useState,useReducer} from 'react';

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
            return {...state, score: state.score - action.payload}
        case "increment":
            return {...state, score: state.score + action.payload}
        default:
            return state
    }
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

    const [state, dispatch] = useReducer(reducer,initialState)
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
                <button onClick={addScore}>+</button>
                <button onClick={() => dispatch({type: 'decrement', payload: 10})}>-</button>
            </div>
        </div>
    );
}

export default Demo1;