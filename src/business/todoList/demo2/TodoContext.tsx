import {Component, createContext, useState} from "react";

export const MyTodoContext= createContext({})
export default function MyTodoContextContainer(props){
    const initialState={
        todos: [
            {
                id: '001',
                name: '吃饭',
                done: false,
            },
            // {
            //     id: '002',
            //     name: '睡觉',
            //     done: false,
            // }, {
            //     id: '003',
            //     name: '打代码',
            //     done: true,
            // },
        ]
    }
    const [state,setState]=useState(initialState)

    const setTodo = (todo) => {
        const {todos} = state
        const newTodos = [todo, ...todos]
        setState({
            todos: newTodos
        })
    };

    const setCheckById=(id,done)=>{
        const {todos}=state
        const newTodos= todos.map(todo=>{
            if (todo.id==id){
                return {
                    ...todo,
                    done,
                }
            }else{
                return todo
            }
        })
        setState({ todos:newTodos })
    }
    const handleDelete = (id) => {
        // const {todos} = state
        // const newTodos = todos.filter(todo => todo.id != id)
        setState(prev=>{
            console.log(({...prev,todos:[]}))
            return [];
        })
    };

    const handleCheckAll=(done)=>{
        const {todos}=state
        console.log(done)
        const newTodos= todos.map(todo=>{
            return {
                ...todo,
                done
            }
        })
        setState({todos:newTodos})
    }
    const handleClear=()=>{
        const {todos}= state
        const newTodos= todos.filter(todo=>!todo.done)
        setState({todos:newTodos})
    }

    return (
        <MyTodoContext.Provider value={{
            todos:state.todos,
            setTodo:setTodo,
            setCheckById:setCheckById,
            handleCheckAll:handleCheckAll,
            handleDelete:handleDelete,
            handleClear:handleClear
        }}>
            {props.children}
        </MyTodoContext.Provider>
    )
};