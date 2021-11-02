import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetailSpecific = ({result}) => {
        // console.log(result)
        const {serviceTitle,image,serviceDescription,moreDetails} = result;
    return (
        <div>
            <img className='mt-3' style={{height: '500px', width: '700px',borderRadius: '10px'}} src={image} alt=""/>
            <h1 className='pt-2'>{serviceTitle}</h1>
            <h6 className='pt-3'>{serviceDescription}</h6>
            <p className='pt-4 pb-5'>{moreDetails}</p>
            <Link to='/services' className='btn btn-info'>More Services</Link>      
        </div>
    );
};

export default ServiceDetailSpecific;