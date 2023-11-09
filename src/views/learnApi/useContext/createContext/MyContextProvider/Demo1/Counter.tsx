import React, {useState} from 'react';

function Counter(props) {
    const [count,setCount]=useState(0)
    function addCount() {
        setCount(prev=>prev+1)
    }
    return (
        <div style={{border: '1px solid black'}}>
            <p>单独点击counter组件不会触发父组件渲染，AgeInfo和SavingInfo的渲染</p>
            <span>
                {count}
            </span>
            <button onClick={addCount}>add Count</button>
            <span>{Math.random()}</span>
        </div>
    );
}

export default Counter;