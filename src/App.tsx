/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-09-29 00:37:04
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-11-03 05:27:27
 * @FilePath: \react-all-in-one\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import ContextExample from "./useContext/Context"
import ReducerExample from "./useReducer"
// @ts-ignore
// import TodoList from "@/business/todoList/demo1"
import TodoApp from "@/business/todoList/demo2"
// import SearchGitApp from "./business/searchGit";
import SearchGitApp from "./business/searchGit/index1.tsx";
import {BrowserRouter, Link, Route, Router, Routes} from "react-router-dom";
function App() {
    return (
        <div style={{display:'flex',justifyContent:"space-between"}}>
            {/*<div>*/}
            {/*    <h4>useContext</h4>*/}
            {/*    <ContextExample></ContextExample>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <h4>useReducer</h4>*/}
            {/*    <ReducerExample></ReducerExample>*/}
            {/*</div>*/}

            {/*<TodoList></TodoList>*/}
            {/*<TodoApp></TodoApp>*/}
            {/*<SearchGitApp></SearchGitApp>*/}

            <div>
                <Link className="list-group-item" to="/business/git">git</Link>
                <Link className="list-group-item" to="/business/todo">todo</Link>
            </div>
            <div>
                <Routes>
                    <Route path="/business/git" Component={SearchGitApp}></Route>
                    <Route path="/business/todo" Component={TodoApp}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
