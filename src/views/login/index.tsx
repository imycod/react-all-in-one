import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "antd";

function Login(props) {
    const navigate=useNavigate()
    const login = () => {
        navigate('/')
    }
    return (
        <div>
            Login
            <button onClick={login}>login</button>
            <Button type="primary">测试</Button>
        </div>
    );
}

export default Login;