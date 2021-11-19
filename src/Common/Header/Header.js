import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../src/Components/MyCarosole/MyCarosole.css';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {

    const {user, logOut} = useAuth()

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>SB PRINTING</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>                       
                    </Nav>
                    <Nav> 
                    {user?.email && <Nav.Link as={Link} to="/myorder">My Order</Nav.Link>}
                        {user?.email &&
                        <Nav.Link as={Link} to="/manage">Manage Sev</Nav.Link>
                        
                        }
                        {user?.email && <Nav.Link as={Link} to="/addservice">Add New</Nav.Link>}
                        {user?.email && <Nav.Link as={Link} to="/admin">Make Admin</Nav.Link>}
                        {
                            user?.email ?
                            <Button onClick={logOut} variant="secondary">Log Out</Button>:
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        
                        }
                        <Nav.Link><span>{user?.displayName}</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;