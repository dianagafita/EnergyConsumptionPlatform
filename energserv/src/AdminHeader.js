import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link, useNavigate,} from 'react-router-dom'

function AdminHeader() {
    let user = JSON.parse(localStorage.getItem('user-info'))
    const navigate = useNavigate();

    function Logout() {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Energy</Navbar.Brand>
                <Nav className="mr-auto navbar_warapper">


                    <Link to={"/register"}>AddUser </Link>
                    <Link to={"/"}>UserList </Link>


                    <Link to={"/AddDevices"}>AddDevices </Link>
                    <Link to={"/DeviceList"}>DeviceList </Link>
                </Nav>
                <Nav>
                    <NavDropdown title={user && user.name}>
                        <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </div>
    )
}

export default AdminHeader;
