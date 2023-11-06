/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-09-29 00:37:04
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-11-03 05:27:27
 * @FilePath: \react-all-in-one\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {Suspense} from "react";
import {Route, Routes, useRoutes} from "react-router-dom";

// layout 1
import Views1 from "@/layout/views1"
// layout 2
import LearnApiPage from "@/views/learnApi";
import BusinessPage from "@/views/business";
// business
import TodoApp from "@/views/business/todoList/demo2"
import SearchGitApp from "@/views/business/searchGit/index1.tsx";
// learnApi
import ContextExample from "@/views/learnApi/useContext/Context"
import ReducerExample from "@/views/learnApi/useReducer"
import Login from "@/views/login";
import router from "./router";
import {ConfigProvider} from "antd";
function App() {
    // https://juejin.cn/post/7167701003976835102?searchId=20231106213323D01676CC1C871813A637#heading-24
    return (
        <ConfigProvider theme={{token:{colorPrimary:'#f40'}}}>
            {useRoutes(router)}
        </ConfigProvider>
    )
}
// <>
//     {/*<Routes>*/}
//     {/*    <Route path="/" element={<Views1/>}>*/}
//     {/*        <Route path="/api" element={<LearnApiPage/>}>*/}
//     {/*            <Route index element={<ReducerExample/>}></Route>*/}
//     {/*            <Route path="/api/context" element={<ContextExample/>}></Route>*/}
//     {/*        </Route>*/}
//     {/*        <Route path="/business" element={<BusinessPage/>}>*/}
//     {/*            <Route index element={<SearchGitApp/>}></Route>*/}
//     {/*            <Route path="/business/todo" element={<TodoApp/>}></Route>*/}
//     {/*        </Route>*/}
//     {/*    </Route>*/}
//     {/*    <Route path="/login" element={<Login/>}></Route>*/}
//     {/*</Routes>*/}
// </>

export default App;
