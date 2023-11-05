import React, {useContext} from 'react';
import {nanoid} from "nanoid"
import {MyTodoContext} from "./TodoContext.tsx";

function Header() {
    const {setTodo} = useContext(MyTodoContext)
    const addTodo=(event)=>{
        const {keyCode,target}=event
        if (keyCode!==13) return
        if (target.value.trim()==='') {
            // @ts-ignore
            alert('输入不能为空');
            return
        }
        setTodo({
            id:nanoid(),
            name:target.value,
            done:false,
        })
        event.target.value=""
    }
    return (
        <div>
            <input
                className="form-control"
                type="text"
                placeholder="Default input" aria-label="default input example"
                onKeyUp={addTodo}
            />
        </div>
    );
}

export default Header;