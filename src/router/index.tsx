
import {RouteObject} from "react-router-dom"


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

const router: RouteObject[] = [
    {
        path: '/',
        element: <Views1/>,
        children: [
            {
                path: '/api',
                element: <LearnApiPage/>,
                children: [
                    {
                        index: true,
                        element: <ReducerExample/>
                    },
                    {
                        path: "/api/context",
                        element: <ContextExample/>
                    },
                ]
            },
            {
                path: '/business',
                element: <BusinessPage/>,
                children: [
                    {
                        index: true,
                        element: <SearchGitApp/>
                    },
                    {
                        path: "/business/todo",
                        element: <TodoApp/>
                    },
                ]
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
];
export default router;