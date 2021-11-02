import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../src/Components/MyCarosole/MyCarosole.css';
import logo from '../../../src/logo.png';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {

    const {user, logOut} = useAuth()

    const navStyle = {
        color: 'white',
        textDecoration: 'none' ,
        marginLeft: '20px',
        fontSize:'20px',
        fontWeight:'600',
    }

    return (
        <Navbar collapseOnSelect expand="lg"  className='menu'>
        <Container>
            <Navbar.Brand href="/home"><Link to= "/home"><img src={logo} alt="" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto text-color">
                        </Nav>
    
                        <Nav>
                            <Link style= {navStyle} to= "/home">HOME</Link>
                            <Link style= {navStyle} to= "/about">ABOUT</Link>
                            <Link style= {navStyle} to= "/services">SERVICE</Link>
                            <Link style= {navStyle} to= "/contact">CONTACT</Link>
                            {
                                user?.email ?
                                <Button style= {navStyle} onClick={logOut} className="ml-3 mr-3" variant="secondary">Log Out</Button>:
                                <Link style= {navStyle} to= "/login">Log In</Link>
                            }
                            <Navbar.Text>
                                <p className='ml-3'>{user?.displayName}</p>
                            </Navbar.Text>
                        </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;