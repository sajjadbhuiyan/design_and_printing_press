import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container>
            <div className='box_container'>
            <div>
            <h1 className="pt-5">Contact Us With your Email</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                     <Form.Label>Please Describe Your Informatin What are your needs</Form.Label>
                     <Form.Control as="textarea" rows={16} />
                    </Form.Group>
            </Form>
            <Button className='mb-5' variant="success">Submit</Button>
            <br/>
            <p>Phone: 0170000000000</p>
            <p>Location: xyz,abc,Dkaka</p>
            </div> 
            
            <div className="pt-5">
            </div>
        </div>
        </Container>
    );
};

export default Contact;

