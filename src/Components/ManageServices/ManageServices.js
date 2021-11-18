import React from 'react';
import { Container } from 'react-bootstrap';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services] = useServices();
    // const [services, setServices] = useState({})
    // const {serviceTitle,image} = services;

    const handleDelete = id =>{
        const url = `https://guarded-plateau-66773.herokuapp.com/services/${id}`;
        fetch(url,{
            method: 'DELETE'
        })

        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount)
            alert('deleted')
            // const remaining = services.filter(service => service._id !== id);
            // setServices(remaining)
        });
    }
    
    return (
        <Container>
            <h2>Manage Services</h2>
            {
                services.map(service =>
                 <div key = {service._id}>
                        <h1 className='pt-2'>{service.serviceTitle}</h1>
                        <h1 className='pt-2'>{service._id}</h1>
                        <button onClick={() => handleDelete(service._id)}>Delete</button>
                    
                 </div>   
                    )
            }
        </Container>
    );
};

export default ManageServices;