import AdminHeader from "../AdminHeader";
import withRouter from '../withRouter'
import {useParams} from "react-router-dom";
import {useState,useEffect} from 'react'
function UpdateUser()
{
    const[data,setData]=useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")

    const {id} =useParams();
    console.warn("props", id)

    useEffect( ()=>{
        (async()=>{
            let result = await fetch("https://localhost:44302/api/user/"+id)
            result = await result.json();
            setData(result);
            setName(data.name)
            setEmail(data.email)
            setRole(data.role)
        })()})

    {
            async function editUser(id)
            {
                const formData = new FormData();
                formData.append('name', name)
                formData.append('email', email);
                formData.append('role', role);

                let result = await fetch("https://localhost:44302/api/user/"+{id}, {
                    method: 'PUT',
                    body: formData

                });
                alert("User has ben edited.")
            }
        return (
            <div>
                <AdminHeader/>
                <h1>UpdateUser</h1>
                <input type="text"
                       onChange={(e)=>setName(e.target.value)}
                       defaultValue={data.name}/> <br/><br/>
                <input type="text"
                       onChange={(e)=>setEmail(e.target.value)}
                       defaultValue={data.email}/> <br/><br/>
                <input type="text"
                       onChange={(e)=>setRole(e.target.value)}
                       defaultValue={data.role}/> <br/><br/>

                <button onClick={()=>editUser()}>Update User</button>
            </div>
        )
    }
}
    export default withRouter(UpdateUser);
