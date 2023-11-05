import React from 'react';
import {Link} from "react-router-dom";

function UserList(props) {
    return (
        <div>
            user
            <ul>
                <li>
                    <Link to={'/business/user/1'}>用户1</Link>
                </li>
                <li>
                    <Link to={'/business/user/2'}>用户2</Link>
                </li>
                <li>
                    <Link to={'/business/user/3'}>用户3</Link>
                </li>
            </ul>
        </div>
    );
}

export default UserList;