import React, {useContext} from 'react';

import Item from "./ListItem.tsx"
import {MyTodoContext} from "./TodoContext.tsx";

function List() {
    const todoContext=useContext(MyTodoContext)
    console.log(todoContext)
    return (
        <ul className="list-group">
            {todoContext.todos.map(todo => <Item key={todo.id} {...todo}></Item>)}
        </ul>
    );
}

export default List;