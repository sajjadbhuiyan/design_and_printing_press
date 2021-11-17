import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import off from '../../images/off.jpg';
import visitintCard from '../../images/visiting_card.jpeg';
import './Offer.css';

const Offer = () => {
    return (
        <Container>
            <div className='offer_container pt-5 pb-5'>
                <div>
                    <h3 style={{color:'green', weight:'700'}}>Visitig Card 2000 pic</h3>
                    <Image src={visitintCard} fluid/>
                </div>
                <div>
                    <Image className='pt-3' src={off} fluid />
                    <p className="pt-3">You can get 30% off in this week</p>
                    <Button className=''>Get Offer</Button>
                </div>
            </div>
        </Container>
    );
};

export default Offer;