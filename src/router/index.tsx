
import {RouteObject} from "react-router-dom"

import {lazy, ReactNode, Suspense} from "react";
// layout 1
// import Views1 from "@/layout/views1"
const Views1 = lazy(()=>import("@/layout/views1"))
// layout 2
// import LearnApiPage from "@/views/learnApi";
// 懒加载 优化
const LearnApiPage=lazy(()=>import("@/views/learnApi"))
// import BusinessPage from "@/views/business";
const BusinessPage=lazy(()=>import('@/views/business'))
// business
// import TodoApp from "@/views/business/todoList/demo2"
const TodoApp = lazy(()=>import("@/views/business/todoList/demo2"))
// import SearchGitApp from "@/views/business/searchGit/index1.tsx";
const SearchGitApp = lazy(()=>import("@/views/business/searchGit/index1.tsx"))
// import UserList from "@/views/business/userList";
const UserList = lazy(()=>import("@/views/business/userList"))
// import UserDetail from '@/views/business/userList/userDetail.tsx'
const UserDetail = lazy(()=>import("@/views/business/userList/userDetail.tsx"))

// learnApi
// import ContextExample from "@/views/learnApi/useContext/Context"
const ContextExample = lazy(()=>import("@/views/learnApi/useContext/Context"))
// import ReducerExample from "@/views/learnApi/useReducer"
const ReducerExample = lazy(()=>import("@/views/learnApi/useReducer"))
// import Login from "@/views/login";
const Login = lazy(()=>import("@/views/login"))
const lazyLoad=(children:ReactNode):ReactNode=>{
    return (
        <Suspense fallback={<>loading</>}>
            {children}
        </Suspense>
    )
}

const router: RouteObject[] = [
    {
        path: '/',
        element: lazyLoad(<Views1/>),
        children: [
            {
                path: '/api',
                element: lazyLoad(<LearnApiPage/>),
                children: [
                    {
                        index: true,
                        element: lazyLoad(<ReducerExample/>)
                    },
                    {
                        path: "/api/context",
                        element: lazyLoad(<ContextExample/>)
                    },
                ]
            },
            {
                path: '/business',
                element: lazyLoad(<BusinessPage/>),
                children: [
                    {
                        index: true,
                        element: lazyLoad(<SearchGitApp/>)
                    },
                    {
                        path: "/business/todo",
                        element: lazyLoad(<TodoApp/>)
                    },
                    {
                        path: "/business/user",
                        element: lazyLoad(<UserList/>),
                        children:[
                            {
                                path: "/business/user",
                                element: lazyLoad(<UserDetail/>)
                            },
                            {
                                path: "/business/user/:id",
                                element: lazyLoad(<UserDetail/>)
                            },
                        ]
                    },

                ]
            }
        ]
    },
    {
        path: '/login',
        element: lazyLoad(<Login/>)
    }
];
export default router;