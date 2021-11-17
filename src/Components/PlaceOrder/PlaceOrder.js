import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({})
        console.log(service)
        useEffect(() => {
            fetch(`https://guarded-plateau-66773.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
        },[])

    const {serviceTitle, price,image,moreDetails} = service;
    const {user} = useAuth();
    const initialInfo = {phone:'', location:'' }
    const [orderInfo, setOrderInfo] = useState(initialInfo);
    const handalOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...orderInfo};
        newInfo[field] = value;
        setOrderInfo(newInfo);
    }
    // const handalOrderSubmit = e => {

    //     const giveOrder = {
    //         ...orderInfo,
    //     }

    //      e.preventDefault();
    // }
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
            <Form>
            <Form.Floating className="mb-3">
                <Form.Control
                    className="mt-5"
                    style={{
                        textAlign:'center',
                        color:'green',
                        fontSize:'16px'
                    }}
                    id="floatingPasswordCustom"
                    type="text"
                    placeholder="Your Name"
                    defaultValue={serviceTitle}
                />
            </Form.Floating>
            <hr className='mb-5 mt-5'/>
            <center><h1>Please Give Your Address</h1></center>
           
            <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingPasswordCustom"
                    type="text"
                    placeholder="Your Name"
                    defaultValue={user.displayName}
                />
                    <label htmlFor="floatingPasswordCustom">Your Name</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="email"
                    placeholder="name@example.com"
                    defaultValue={user.email}
                />
                    <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="number"
                    name="phone"
                    placeholder="name@example.com"
                    onBlur={handalOnBlur}
                />
                    <label htmlFor="floatingInputCustom">Phone Number</label>
            </Form.Floating>
            <Form.Floating>
                <Form.Control
                    id="floatingPasswordCustom"
                    type="text"
                    name="location"
                    placeholder="Location"
                    onBlur={handalOnBlur}
                />
                    <label htmlFor="floatingPasswordCustom">Location</label>
            </Form.Floating>
            <Link to='/payment'><Button className='mt-4' variant="primary" type="submit">
                    Order Now
            </Button></Link>
            
            </Form>
            <hr className='mt-5'/>
                </Col>
                <Col xs={12} md={6}>
                    <Image className='pt-5' src={image} fluid></Image>
                    <h1>TK: {price}</h1>
                    <h3>{serviceTitle}</h3>
                    <p>{moreDetails}</p>
                </Col>
            </Row>
</Container>
    );
};

export default PlaceOrder;