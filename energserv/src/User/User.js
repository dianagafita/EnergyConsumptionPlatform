import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import UserHeader from "./UserHeader";

function User() {
    return (
        <div>
            <UserHeader/>
            <h1>Hello User</h1>
        </div>
    )
}

export default User
