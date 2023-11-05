import React, {useContext, useState} from 'react';

import styles from "./listItem.module.css"
import {MyTodoContext} from "./TodoContext.tsx";

function ListItem(todo) {
    const [active,setActive]=useState(false)
    const [edit,setEdit]=useState(false)
    const [name,setName]=useState(todo.name)
    const className=`list-group-item ${styles['flex-between']}  ${active ? 'list-group-item-success':null}`
    const todoContext=useContext(MyTodoContext)
    // @ts-ignore
    return (
        <li className={className} onMouseLeave={() => setActive(false)} onMouseEnter={() => setActive((true))}>
            {
                edit ?
                    <input
                        type="text"
                        value={name}
                        onChange={e=>setName(e.target.value)}
                    /> :
                    <div>
                        <input
                            className="form-check-input me-1"
                            type="checkbox"
                            name="listGroupRadio"
                            value=""
                            id="firstRadio"
                            onChange={(event) => {
                                todoContext.setCheckById(todo.id, event.target.checked)
                            }}
                            checked={todo.done}
                        />
                        <label className="form-check-label" htmlFor="firstRadio">{todo.name}</label>
                    </div>
            }
            <div  style={{display: active ? 'block' : 'none'}}>
                <button
                    onClick={() => {
                        setEdit(!edit)
                        console.log(todo.id)
                        todoContext.updateTodo({
                            id:todo.id,
                            name:name
                        })
                    }}
                    type="button"
                    className="btn btn-primary">
                    {edit ? '更新':'编辑'}
                </button>
                <button
                    onClick={() => {
                        if (window.confirm('确认删除')) {
                            todoContext.handleDelete(todo.id)
                        }
                    }}
                    type="button"
                    className="btn btn-danger">
                    删除
                </button>
            </div>
        </li>
    );
}

export default ListItem;