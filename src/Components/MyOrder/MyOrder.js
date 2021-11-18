import { Button, Container, Table } from '@mui/material';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const MyOrder = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        const url = `https://guarded-plateau-66773.herokuapp.com/orders?email=${user.email}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setOrders(data))
    },[])

    // const {serviceTitle,price,userName,image} = orders;
    // console.log(orders)

    
    return (
        <Container>
            <center className="pt-5"><h1>Your Total Order: {orders.length}</h1></center>
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
            {orders.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.serviceTitle}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right"><Image style={{width:"50px", height:"30px"}} src={row.image}></Image></TableCell>
                <TableCell align="right"><Button>Remove</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Container>
    );
};

export default MyOrder;