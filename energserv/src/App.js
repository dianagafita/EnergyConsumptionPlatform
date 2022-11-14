import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserList from './User/UserList'
import UpdateDevice from "./Device/UpdateDevice";
import Login from './Login'
import Register from './User/Register'
import AddDevices from "./Device/AddDevices";
import Admin from './Admin'
import User from './User/User'
import UpdateUser from "./User/UpdateUser";
import DeviceList from "./Device/DeviceList";

function App() {
    return (
            <div className="App">
                <BrowserRouter>

                    <Routes>


                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/Admin" element={<Admin/>}/>
                        <Route path="/User" element={<User/>}/>

                        <Route path="/" element={<UserList/>}/>
                        <Route path="/AddDevices" element={<AddDevices/>}/>
                        <Route path="/UpdateUser/:id" element={<UpdateUser/>}/>
                        <Route path="/DeviceList" element={<DeviceList/>}/>
                        <Route path="/UpdateDevice/:id" element={<UpdateDevice/>}/>
                        <Route path="/UpdateDevice" element={<UpdateDevice/>}/>

                    </Routes>
                </BrowserRouter>
            </div>
    )
}

export default App;
