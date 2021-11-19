import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Image, Row } from 'react-bootstrap';
import adminImg from '../../../src/images/admin.jpg';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false);
    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e =>{

        const user = {email};

        fetch('https://guarded-plateau-66773.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data);
                setAdminSuccess(true);
            }
            
        })

        e.preventDefault()
    }
    return (
        <Container>
            <Row>
            <Col xs={12} md={6}>
                    <Image src={adminImg} fluid></Image>
                </Col>
                <Col xs={12} md={6}>
                    <h1 className="p-5">Make a Admin</h1>
                <Form>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    onBlur={handleOnBlur}
                    className="mb-3"
                >
                    <Form.Control type="email" />
                </FloatingLabel>
                <Button onClick={handleAdminSubmit} className='mt-4' variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                {adminSuccess && <Alert severity="success">Admin Making Successfully</Alert>}
                </Col>
            </Row>
        </Container>
    );
};

export default MakeAdmin;