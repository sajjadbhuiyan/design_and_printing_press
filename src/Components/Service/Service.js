import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    // const {service} = props;
    console.log(service);
    const {_id,serviceTitle,price,image} = service;
    return (
        
        <div className='service'>
            <img src={image} alt=""/>
            <h3>{serviceTitle}</h3>
            <h2>TK:{price}</h2>
            <Link to={`/service/${_id}`}><button className='btn btn-success service_btn'>More Detail</button></Link>
        </div>
    );
};

export default Service;