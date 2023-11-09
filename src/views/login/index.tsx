import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button,DatePicker} from "antd";
const { RangePicker } = DatePicker;
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
            <RangePicker />
        </div>
    );
}

export default Login;