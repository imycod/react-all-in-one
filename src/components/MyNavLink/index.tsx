import React from 'react';
import {NavLink} from "react-router-dom";
import "./index.scss"
function MyNavLink(props) {
    return (
        <div className="my-nav-link">
            <NavLink className="list-group-item" {...props}/>
        </div>
    );
}

export default MyNavLink;