import React from 'react';

import "./index.scss"

import Header from "./Header.tsx";
import List from "./List.tsx";
import Footer from "./Footer.tsx";

import MyTodoContextContainer from "./TodoContext.tsx";

function TodoApp(){
    return (
        <div className='todo-container'>
            <MyTodoContextContainer>
                <Header></Header>
                <List></List>
                <Footer></Footer>
            </MyTodoContextContainer>
        </div>
    );
}

export default TodoApp;