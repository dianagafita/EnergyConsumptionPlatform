import Header from "../Header";
import React, {useState, useEffect, useCallback} from "react";
import {Table} from 'react-bootstrap'
import AdminHeader from "../AdminHeader";
import {Link} from "react-router-dom";

function ProductList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, [])

    async function deleteOperation(id) {
        let result = await fetch("https://localhost:44302/api/user/" + id, {
            method: 'DELETE'
        });
        result = await result.json();
        console.warn(result);
        getData();
    }

    async function getData() {
        let result = await fetch("https://localhost:44302/api/user");
        result = await result.json();
        setData(result);
    }

    return (
        <div>
            <AdminHeader/>
            <h1>Users List</h1>
            <Table>
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Role</td>
                    <td>Operations</td>
                </tr>
                </thead>
                {
                    data.map((item) =>
                        <tbody>
                        <tr>
                            <td>{item.Id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td><span onClick={() => deleteOperation(item.Id)} className={"delete"}>Delete</span></td>
                            <td>
                                <Link to={"UpdateUser/"+item.Id}>
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

export default ProductList;