import React, {useState} from 'react';
import AdminHeader from "../AdminHeader";
import {useNavigate} from "react-router-dom";


function AddDevices() {
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("")
    const [energy_cons, setEnergy] = useState("")

    async function addDevice() {

        let item = {description, address, energy_cons}
        console.warn(item)

        let result = await fetch("https://localhost:44302/api/device", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result =await result.json()
        localStorage.setItem("device-info",JSON.stringify(result))

    }

    return (
        <div>
            <AdminHeader/>

            <div className={"col-sm-6 offset-sm-3"}>
                <h1>Add Device </h1>

                <br/>
                <input type={"text"} value={description} onChange={(e) => setDescription(e.target.value)}
                       className={"form-control"}
                       placeholder={"Description"}/>
                <br/>
                <input type={"text"} value={address} onChange={(e) => setAddress(e.target.value)}
                       className={"form-control"} placeholder={"Address"}/>
                <br/>
                <input type={"int"} value={energy_cons} onChange={(e) => setEnergy(e.target.value)}
                       className={"form-control"}
                       placeholder={"Energy_consumption"}/>
                <br/>
                <button onClick={addDevice} className={"btn btn-primary"}>Add Device</button>

            </div>
        </div>
    )
}

export default AddDevices;