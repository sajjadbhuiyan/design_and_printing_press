import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Image, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import registrationImg from '../../images/Secure login.png';

const Registration = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    console.log(name)
    
// const auth = getAuth();
const {user,signInUsingGoogle, handleRegistration, authError} = useAuth();
const location = useLocation();
const history = useHistory();
const redirect_url = location.state?.from || '/home'
const handleGoogleLogin = () =>  {
    signInUsingGoogle()
    .then(result => {
        history.push(redirect_url);
    })
}

const handleNameChange = e => {
    setName(e.target.value);
  }

const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  // user registration
const handalLoginSubmit = (e) =>{
    handleRegistration(email,password,name)
    e.preventDefault();
}


    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <h1 className="p-5">Please Registration</h1>
                <Form>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Your Name"
                    className="mb-3"
                >
                    <Form.Control onBlur={handleNameChange} type="text" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                </FloatingLabel>
                <Button onClick={handalLoginSubmit} className='mt-4' variant="primary" type="submit">
                    Sign Up
                </Button>
                </Form>

                <hr className="mt-5"></hr>
                <center>
                <Button onClick={handleGoogleLogin} className='mt-4' variant="primary" type="submit">
                    Google Login
                </Button>
                <br/>
                <p className='mt-3'>
                    Have you a account, Please login <Link to='/login'>Login</Link>
                </p>
                </center>
                {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
                </Col>
            
            
                <Col xs={12} md={6}>
                    <Image src={registrationImg} fluid></Image>
                </Col>
            </Row>
        </Container>
    );
};


export default Registration;