import {Component} from 'react';

import "./index.scss"

import Header from "./Header.tsx";
import List from "./List.tsx";
import Footer from "./Footer.tsx";

class TodoList extends Component{
    state={
        todos: [
            {
                id: '001',
                name: '吃饭',
                done: false,
            }, {
                id: '002',
                name: '睡觉',
                done: false,
            }, {
                id: '003',
                name: '打代码',
                done: true,
            },
        ]
    }
    setTodo=(todo)=>{
        const {todos}=this.state
        const newTodos=[todo,...todos]
        this.setState({
            todos:newTodos
        })
    }

    setCheckById=(id,done)=>{
        const {todos}=this.state
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
        this.setState({ todos:newTodos },()=>{
            // console.log('all',this.state)
        })
    }
    handleDelete=(id)=>{
        const {todos}=this.state
        const newTodos= todos.filter(todo=>todo.id!=id)
        this.setState({todos:newTodos})
    }

    handleCheckAll=(done)=>{
        const {todos}=this.state
        console.log(done)
        const newTodos= todos.map(todo=>{
            return {
                ...todo,
                done
            }
        })
        this.setState({todos:newTodos})
    }
    handleClear=()=>{
        const {todos}= this.state
        const newTodos= todos.filter(todo=>!todo.done)
        this.setState({todos:newTodos})
    }
    render(){
        const {todos}=this.state
        return (
            <div className='todo-container'>
                <Header setTodo={this.setTodo}></Header>
                <List todos={todos} setCheckById={this.setCheckById} handleDelete={this.handleDelete}></List>
                <Footer todos={todos} handleCheckAll={this.handleCheckAll} handleClear={this.handleClear}></Footer>
            </div>
        );
    }
}

export default TodoList;