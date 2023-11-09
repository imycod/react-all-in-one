import React from 'react';
import {useNavigate} from "react-router-dom"
function Header(props) {
    // @ts-ignore
    const navigate =new useNavigate()
    // https://blog.csdn.net/Clearlove_2019/article/details/123372467

    function back() {
        navigate(-1)
    }
    return (
        <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
                <h1>标题</h1>
            </div>
            <button onClick={back}>back</button>
        </div>
    );
}

export default Header;