import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

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


      const handleLogin = e => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })

    }

    return (
        <div>
            <Container>
            <form>
                <h1>Please Login</h1>

                <div className="form-group">
                    <label>Email address</label>
                    <input onBlur={handleEmailChange} type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onBlur={handlePasswordChange} type="password" className="form-control" placeholder="Enter password" />
                </div>
                {/* <div className="text-danger">{error}</div> */}

                <Button onClick={handleLogin} type="submit" className="btn btn-primary btn-block mt-5">Login</Button>
                <br/>
                <Button onClick={handleGoogleLogin} className="btn btn-info btn-block p-3 mt-3">Google Sign In</Button>
                
            </form>

            <p className="forgot-password text-right">
                    New User? Please <Link to='/registration'>sign up</Link>
                </p>
            </Container>
        </div>
    );
};

export default Login;