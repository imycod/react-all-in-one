import {Component} from 'react';

import "./index.scss"

import Header from "./Header.tsx";
import List from "./List.tsx";
import Footer from "./Footer.tsx";
import MyTodoContextContainer from "./TodoContext.tsx";

class TodoList extends Component{

    render(){
        return (
            <div className='todo-container'>
                <MyTodoContextContainer>
                    <Header></Header>
                    <List></List>
                    {/*<Footer></Footer>*/}
                </MyTodoContextContainer>
            </div>
        );
    }
}

export default TodoList;