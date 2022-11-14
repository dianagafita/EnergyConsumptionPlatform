import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import AdminHeader from "./AdminHeader";

function Admin() {
    return (
        <div>
            <AdminHeader/>
            <h1>Hello Admin</h1>
        </div>
    )
}

export default Admin
