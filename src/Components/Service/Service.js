import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    //const {service} = props;
    console.log(service);
    const {id,serviceTitle,image} = service;
    return (
        
        <div className='service'>
            <img src={image} alt=""/>
            <h3>{serviceTitle}</h3>
            <Link to={`/service/${id}`}><button className='btn btn-success service_btn'>More Detail</button></Link>
        </div>
    );
};

export default Service;