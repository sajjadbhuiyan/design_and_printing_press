import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Cart = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({})
        console.log(service)
        useEffect(() => {
            fetch(`https://guarded-plateau-66773.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
        },[])

    const {serviceTitle,price,image,} = service;
    return (
        <Container>
        <h1>Cart</h1>
        <div>
        <Image className='mt-3' style={{borderRadius: '10px', width:'200', height:'100px'}} src={image} fluid alt=""/>
        <h1 className='pt-2'>{serviceTitle}</h1>
        <h3>TK: {price}</h3>
        <Link to={`/placeorder/${serviceId}`} className='btn btn-info p-3'>Place Order</Link>      
    </div>
    </Container>
    );
};

export default Cart;