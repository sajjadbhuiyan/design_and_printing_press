import React from 'react';
import { Container, Image } from 'react-bootstrap';
import paymentSystemCommingSoon from '../../images/payment_systerm_comming_soon.gif';

const PaymentGetWay = () => {
    return (
        <Container>
            <center>
                <Image src={paymentSystemCommingSoon} fluid></Image>
                <h1>Payment GetWay is Comming Soon......</h1>
            </center>
            
        </Container>
    );
};

export default PaymentGetWay;