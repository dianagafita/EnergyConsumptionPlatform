import AdminHeader from "../AdminHeader";
import withRouter from '../withRouter'
import {useParams} from "react-router-dom";
import {useState,useEffect} from 'react'
function UpdateDevice()
{
    const[data,setData]=useState([])
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("")
    const [energy_cons, setEnergy_cons] = useState("")

    const {id} =useParams();
    console.warn("props", id)

    useEffect( ()=>{
        (async()=>{
            let result = await fetch("https://localhost:44302/api/device/"+id)
            result = await result.json();
            setData(result);
            setDescription(data.description)
            setAddress(data.address)
            setEnergy_cons(data.energy_cons)
        })()})

    {
        async function editDevice(id)
        {
            const formData = new FormData();
            formData.append('description', description)
            formData.append('address', address);
            formData.append('energy_cons', energy_cons);

            let result = await fetch("https://localhost:44302/api/device/"+{id}, {
                method: 'PUT',
                body: formData

            });
            alert("Device has ben edited.")
        }
        return (
            <div>
                <AdminHeader/>
                <h1>UpdateDevice</h1>
                <input type="text"
                       onChange={(e)=>setDescription(e.target.value)}
                       defaultValue={data.description}/> <br/><br/>
                <input type="text"
                       onChange={(e)=>setAddress(e.target.value)}
                       defaultValue={data.address}/> <br/><br/>
                <input type="text"
                       onChange={(e)=>setEnergy_cons(e.target.value)}
                       defaultValue={data.energy_cons}/> <br/><br/>

                <button onClick={()=>editDevice()}>Update Device</button>
            </div>
        )
    }
}
export default withRouter(UpdateDevice);
