import {Component, createContext} from 'react';
import Item from "./ListItem.tsx"
import {MyTodoContext} from "./TodoContext.tsx";

const MyContext=createContext(MyTodoContext)
class List extends Component{
    static contextType=MyContext
    render(){
        const context=this.context._currentValue
        const {todos}=context
        return (
            <>
                <ul className="list-group">
                    {todos.map(todo=><Item key={todo.id} {...todo} {...context}></Item>)}
                </ul>
            </>
        );
    }
}

export default List;