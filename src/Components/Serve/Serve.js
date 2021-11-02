import React from 'react';
import { Container } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Serve = () => {
    const [services] = useServices();
    return (
        <div>
            <Container>
            <h1 className='heading'>Services</h1>
            <div className = 'service-container'>
            {
                services.map(service => <Service
                key={service.id}
                service = {service}
                ></Service>)
            }
            <br/>
            
        </div>
        </Container>
        </div>
    );
};

export default Serve;