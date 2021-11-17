import React from 'react';
import MyCarosole from '../MyCarosole/MyCarosole';
import Offer from '../Offer/Offer';
import ServiceData from '../ServiceData/ServiceData';
import Speciality from '../Speciality/Speciality';

const Home = () => {
    return (
        <div>
            <MyCarosole></MyCarosole>
            <Speciality></Speciality>
            <ServiceData></ServiceData>
            <Offer></Offer>
        </div>
    );
};

export default Home;