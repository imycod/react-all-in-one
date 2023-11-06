import React from 'react';

import ContextExample from "@/views/learnApi/useContext/Context"
import ReducerExample from "@/views/learnApi/useReducer"
import MyNavLink from "@/components/MyNavLink";
import {Outlet} from "react-router-dom";
function LearnApiPage(props) {
    return (
        <div>
            LearnApiPage
            <div className="bd">
                <MyNavLink to="/api/">useReducer</MyNavLink>
                <MyNavLink to="/api/redux/toolkit">redux-toolkit</MyNavLink>
                <MyNavLink to="/api/redux/react">redux-react</MyNavLink>
                <MyNavLink to="/api/redux/raw">redux-raw</MyNavLink>
                <MyNavLink to="/api/context">useContext</MyNavLink>
            </div>
            <div>
                <Outlet></Outlet>
            </div>

            {/*<div>*/}
            {/*    <h4>useContext</h4>*/}
            {/*    <ContextExample></ContextExample>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <h4>useReducer</h4>*/}
            {/*    <ReducerExample></ReducerExample>*/}
            {/*</div>*/}
        </div>
    );
}

export default LearnApiPage;