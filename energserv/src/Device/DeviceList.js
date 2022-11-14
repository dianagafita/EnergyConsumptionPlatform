import React, {useState, useEffect} from "react";
import {Table} from 'react-bootstrap'
import AdminHeader from "../AdminHeader";
import {Link} from "react-router-dom";

function DeviceList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, [])

    async function deleteOperation(id) {
        let result = await fetch("https://localhost:44302/api/device/" + id, {
            method: 'DELETE'
        });
        result = await result.json();
        console.warn(result);
        getData();
    }

    async function getData() {
        let result = await fetch("https://localhost:44302/api/device");
        result = await result.json();
        setData(result);
    }

    return (
        <div>
            <AdminHeader/>
            <h1>Devices List</h1>
            <Table>
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Description</td>
                    <td>Address</td>
                    <td>Energy_Consumption</td>
                    <td>Operations</td>
                </tr>
                </thead>
                {
                    data.map((item) =>
                        <tbody>
                        <tr>
                            <td>{item.Id}</td>
                            <td>{item.description}</td>
                            <td>{item.address}</td>
                            <td>{item.energy_cons}</td>
                            <td><span onClick={() => deleteOperation(item.Id)} className={"delete"}>Delete</span></td>
                            <td>
                                <Link to={"UpdateDevice/"+item.Id}>
                                    <span className={"update"}>Update</span>
                                </Link>
                            </td>
                        </tr>
                        </tbody>
                    )
                }
            </Table>
        </div>
    )
}

export default DeviceList;