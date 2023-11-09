import React,{ createContext, useState} from "react";

const initialState = [
    {
        id: '001',
        name: '吃饭',
        done: false,
    },
    {
        id: '002',
        name: '睡觉',
        done: false,
    }, {
        id: '003',
        name: '打代码',
        done: true,
    },
];
export const MyTodoContext= createContext()
export default function MyTodoContextContainer(props){

    const [todoList,setTodoList]=useState(initialState)

    const setTodo = (todo) => {
        setTodoList([todo, ...todoList])
    };

    const setCheckById=(id,done)=>{
        const newTodos= todoList.map(todo=>{
            if (todo.id==id){
                return {
                    ...todo,
                    done,
                }
            }else{
                return todo
            }
        })
        setTodoList(newTodos)
    }
    const handleDelete = (id) => {
        setTodoList(todoList.filter(todo => todo.id != id))
    };

    const handleCheckAll=(done)=>{
        const newTodos= todoList.map(todo=>{
            return {
                ...todo,
                done
            }
        })
        setTodoList(newTodos)
    }
    const handleClear=()=>{
        const newTodos= todoList.filter(todo=>!todo.done)
        setTodoList(newTodos)
    }

    const updateTodo=(todo)=>{
        const newTodoList=[...todoList]
        const index = newTodoList.findIndex(t => t.id == todo.id);
        if (index!==-1){
            newTodoList[index] = todo
            setTodoList(newTodoList)
        }
    }

    return (
        <MyTodoContext.Provider value={{
            todos:todoList,
            setTodo,
            setCheckById,
            handleCheckAll,
            handleDelete,
            handleClear,
            updateTodo
        }}>
            {props.children}
        </MyTodoContext.Provider>
    )
};