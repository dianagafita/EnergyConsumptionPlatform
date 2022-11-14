import {Navbar, Nav} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import AdminHeader from "./AdminHeader";
import {useEffect} from "react";

function Protected(props) {
    let navigate = useNavigate();
    let Cmp=props.Cmp
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            navigate('/register')
        }
    }, [])

    return (
        <div>
            <Cmp/>
        </div>
    )
}

export default Protected;
