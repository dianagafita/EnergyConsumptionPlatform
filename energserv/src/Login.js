import React, { useState, useEffect, Fragment } from "react";
import Header from './Header'
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { Link, useNavigate, } from 'react-router-dom'

function Login() {

    let navigate = useNavigate();
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // useEffect(() => {
    //     if (localStorage.getItem('user-info')) {
    //         //navigate('/addUser')
    //     }
    // }, [])

    // async function login() {
    //     console.warn(email, password)
    //     let item = (email, password);
    //     let result = await fetch("https://localhost:44302/api/user/login", {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json",
    //         },
    //         body: JSON.stringify(item)
    //     });
    //     result = await result.json()
    //     localStorage.setItem("user-info", JSON.stringify(result));
    //     console.log(JSON.stringify(result))

    //     //navigate('/Admin');


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");



    const handleEmailChange = (value) => {
        setEmail(value);
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
    };

    const handleRoleChange = (value) => {
        setRole(value);
    };

    const handleLogin = () => {
        const data = {
            email: email,
            password: password,
            role: role
        };

        const url = "https://localhost:44302/api/user/login";
        axios.post(url, data).then((result) => {
            alert(result.data);
            if (result.data == 'User valid') {
                if (data.role == 'user')
                    navigate('/User')
                if (data.role == 'admin')
                    navigate('/Admin')
            }
            }).catch((error) => {
                alert(error);

            
        })

}
return (

    <div>
        <Header />
        <h1>Login Page</h1>
        <div className={"col-sm-6 offset-sm-3"}>
            <input type={"text"} placeholder={"email"} onChange={(e) => handleEmailChange(e.target.value)}
                className={"form-control"} />
            <br />
            <input type={"password"} placeholder={"password"} onChange={(e) => handlePasswordChange(e.target.value)}
                className={"form-control"} />
            <br />
            <input type={"role"} placeholder={"role"} onChange={(e) => handleRoleChange(e.target.value)}
                className={"form-control"} />
            <br />
            <button onClick={() => handleLogin()}>Login</button>

        </div>

    </div>
)
}


export default Login;