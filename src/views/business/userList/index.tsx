import React from 'react';
import {Link, Outlet, Route, Routes} from "react-router-dom";
import UserDetail from "./userDetail.tsx";

function UserList(props) {
    return (
        <div>
            user
            <ul>
                <li>
                    <Link to={'/business/user/1'}>用户1</Link>
                </li>
                <li>
                    <Link to={'/business/user/?id=2'}>用户2</Link>
                </li>
                <li>
                    <Link to={{pathname:'/business/user',state:{id:3}}}>用户3</Link>
                </li>
            </ul>
            <div>
                {/*<Routes>*/}
                {/*    <Route path="/business/user" element={<UserDetail/>}></Route>*/}
                {/*</Routes>*/}
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default UserList;