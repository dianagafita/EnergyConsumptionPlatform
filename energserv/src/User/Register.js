import React, {useState} from 'react';
import AdminHeader from "../AdminHeader";

function Register() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")

    async function signUp() {

        let item = {name, password, email, role}
        console.warn(item)

        let result = await fetch("https://localhost:44302/api/user", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result =await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))

    }

    return (
        <div>
            <AdminHeader/>
        <div className={"col-sm-6 offset-sm-3"}>

            <h1>Add User</h1>
            <br/>
            <input type={"text"} value={name} onChange={(e) => setName(e.target.value)} className={"form-control"}
                   placeholder={"name"}/>
            <br/>
            <input type={"password"} value={password} onChange={(e) => setPassword(e.target.value)}
                   className={"form-control"} placeholder={"password"}/>
            <br/>
            <input type={"text"} value={email} onChange={(e) => setEmail(e.target.value)} className={"form-control"}
                   placeholder={"email"}/>
            <br/>
            <input type={"text"} value={role} onChange={(e) => setRole(e.target.value)} className={"form-control"}
                   placeholder={"role"}/>
            <br/>
            <button onClick={signUp} className={"btn btn-primary"}>Register</button>

        </div>
        </div>
    )
}

export default Register;