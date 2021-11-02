import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Registration = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();

    

    const {signInUsingGoogle} = useAuth();
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

      // user registration
    const handleRegistration = e =>{
        console.log(email, password)
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user; 
        })

    }

    return (
        <div>
            <Container>
            <form>
                <h1>Please Register</h1>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input onBlur={handleEmailChange} type="email" className="form-control" placeholder="Enter email" required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onBlur={handlePasswordChange} type="password" className="form-control" placeholder="Enter password" required/>
                </div>

                {/* <div className="text-danger">{error}</div> */}

                <Button onClick={handleRegistration} type="submit" className="btn btn-primary btn-block mt-5">Sign Up</Button>
                <br/>
                <Button onClick={handleGoogleLogin} className="btn btn-info btn-block p-3 mt-3">Google Sign In</Button>
                
            </form>
                <p className="forgot-password text-right">
                    Already registered <Link to="/login">Log In?</Link>
                </p>
            </Container>
        </div>
    );
};


export default Registration;