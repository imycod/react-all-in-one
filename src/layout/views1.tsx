// 视图布局1
import React from 'react';

import {NavLink, Outlet, Route, Routes} from "react-router-dom";
import MyNavLink from "@/components/MyNavLink";
import Header from "./Header.tsx";
function Views1(props) {
    return (
        <>
            <Header></Header>
            <div className="row">
                <div className="col-xs-offset-2 col-md-2">
                    <div className="list-group">
                        <MyNavLink to="/api">api</MyNavLink>
                        <NavLink className="list-group-item" to="/business">business</NavLink>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="panel">
                        <div className="card-body">
                          <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Views1;