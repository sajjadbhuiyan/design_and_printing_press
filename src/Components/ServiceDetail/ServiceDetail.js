import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({})
        console.log(service)
        useEffect(() => {
            fetch(`https://guarded-plateau-66773.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
        },[])

    const {serviceTitle,price,image,serviceDescription,moreDetails} = service;

    
    return (
        <Container>
            <div className='service_details'>
            <div>
            <Image className='mt-3' style={{borderRadius: '10px'}} src={image} fluid alt=""/>
            <h1 className='pt-2'>{serviceTitle}</h1>
            <h6 className='pt-3'>{serviceDescription}</h6>
            <p className='pt-4 pb-5'>{moreDetails}</p>
            <h3>TK: {price}</h3>
            <Link to={`/placeorder/${serviceId}`} className='btn btn-info p-3'>Place Order</Link>      
        </div>
        </div>
        </Container>
    );
};

export default ServiceDetail;