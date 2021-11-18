import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
        console.log(data);
        axios.post('https://guarded-plateau-66773.herokuapp.com/services', data)
        .then(res => {
            if( res.data.insertedId){
                alert('Insert Successfully');
                reset();
            }
        })
    };
    return (
        <div className='add_service'>
            <h2>Add Services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("serviceTitle", { required: true, maxLength: 20 })} placeholder='Service Title' />
                <textarea {...register("serviceDescription")} placeholder='Service Description' />
                <input {...register("moreDetails")} placeholder='More Details'/>
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("image")} placeholder='image url'/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;