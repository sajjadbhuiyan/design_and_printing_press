import React from 'react';
import { Container } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './ServiceData.css';


const ServiceData = () => {
    const [services] = useServices();
    return (
        <Container>
            <h1 className='heading'>Services</h1>
            <div className = 'service-container'>
            {
                services.slice(0,6).map(service => <Service
                key={service.id}
                service = {service}
                ></Service>)
            }
            <br/>
            
        </div>
        </Container>
    );
};

export default ServiceData;