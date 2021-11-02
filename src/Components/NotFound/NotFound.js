import React from 'react';
import notfound from '../../../src/images/notfound.jpg';

const NotFound = () => {
    return (
        <div style={{textAlign:'center'}}>
            <img style={{height:'500px', width:'1200px'}} src={notfound} alt=""/>
        </div>
    );
};

export default NotFound;