import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import ServiceDetailSpecific from '../ServiceDetailSpecific/ServiceDetailSpecific';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const serviceIdintoNumber = parseInt(serviceId)
    let [services] = useServices();
     const result = services.filter(service => {
        return service.id === serviceIdintoNumber;
      })
    return (
        <Container>
            <div className='service_details'>
            {
                result.map(result => <ServiceDetailSpecific result={result}></ServiceDetailSpecific>)
            }
        </div>
        </Container>
    );
};

export default ServiceDetail;