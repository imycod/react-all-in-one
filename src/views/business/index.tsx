import React from 'react';

// import TodoList from "@/views/business/todoList/demo1"
import TodoApp from "@/views/business/todoList/demo2"
// import SearchGitApp from "@/views/business/searchGit";
import SearchGitApp from "@/views/business/searchGit/index1.tsx";
import MyNavLink from "@/components/MyNavLink";
import {Outlet, Route, Routes} from "react-router-dom";
function BusinessPage(props) {
    return (
        <div>
            BusinessPage
            <div className="bd">
                <MyNavLink to="/business/">git</MyNavLink>
                <MyNavLink to="/business/todo">todo</MyNavLink>
                <MyNavLink to="/business/user">user</MyNavLink>
                <MyNavLink to="/business/redux/person/list">redux person list</MyNavLink>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            {/*<TodoList></TodoList>*/}
            {/*<TodoApp></TodoApp>*/}
            {/*<SearchGitApp></SearchGitApp>*/}
        </div>
    );
}

export default BusinessPage;