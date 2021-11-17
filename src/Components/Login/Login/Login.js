import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Image, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImg from '../../../images/Secure login.png';

const Login = () => {
    const {user, signInUsingGoogle, handleLogin, authError} = useAuth();

    const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'
    const handleGoogleLogin = () =>  {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_url);
        })
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }


      const handleLoginSubmit = e => {
        handleLogin(email,password, location, history)
        e.preventDefault();
        
      }

    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <h1 className="p-5">Please Login</h1>
                <Form>
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
                <Button onClick={handleLoginSubmit} className='mt-4' variant="primary" type="submit">
                    Login
                </Button>
                </Form>

                <hr className="mt-5"></hr>
                <center>
                <Button onClick={handleGoogleLogin} className='mt-4' variant="primary" type="submit">
                    Google Login
                </Button>
                
                <p className='mt-3'>
                New User? Please <Link to='/registration'>sign up</Link>
                </p>
                </center>
                {user?.email && <Alert severity="success">User Login Successfully</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
                </Col>
            
            
                <Col xs={12} md={6}>
                    <Image src={loginImg} fluid></Image>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;