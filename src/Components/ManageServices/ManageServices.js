import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';

const ManageServices = () => {
  const [services, setServices] = useState([]);


  useEffect(() => {
      fetch('https://guarded-plateau-66773.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data));
      
  },[]);
  
    // const {serviceTitle,image} = services;

    const handleDelete = id =>{
        const url = `https://guarded-plateau-66773.herokuapp.com/services/${id}`;
        fetch(url,{
            method: 'DELETE'
        })

        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
            alert('deleted')
            const remaining = services.filter(service => service._id !== id);
            setServices(remaining)
            }
        });
    }
    
    return (
        <Container>
            <center className="pt-5"><h1>Total Products: {services.length}</h1></center>
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Remove Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.serviceTitle}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right"><Image style={{width:"50px", height:"30px"}} src={row.image}></Image></TableCell>
                <TableCell align="right"><Button onClick={() => handleDelete(row._id)}>Remove</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Container>
    );
};

export default ManageServices;
