import React from 'react';
import {useNavigate} from "react-router-dom";

function Login(props) {
    const navigate=useNavigate()
    const login = () => {
        navigate('/')
    }
    return (
        <div>
            Login
            <button onClick={login}>login</button>
        </div>
    );
}

export default Login;