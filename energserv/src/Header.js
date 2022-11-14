import {Navbar, Nav,NavDropdown} from 'react-bootstrap'
import {Link,useNavigate,} from 'react-router-dom'

function Header() {

    let user= JSON.parse(localStorage.getItem('user-info'))
    const navigate = useNavigate();

    function Logout()
    {
        localStorage.clear();
        navigate('./login');
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Energy</Navbar.Brand>
                <Nav className="mr-auto navbar_warapper">
                    {

                        localStorage.getItem('user-info') ?
                        <>
                        <Link to={"/login"}> Login</Link> >
                        </>
                            :
                            <>

                            </>
                    }
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

export default Header
