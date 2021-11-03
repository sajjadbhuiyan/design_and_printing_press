
import { faPaintBrush, faPrint, faTshirt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import './Speciality.css';


const Speciality = () => {
    return (
        <Container>
            <div className='speciality_heading'>
            <h2>SB PRINTING AND PRINTING PRESS</h2>
            <span>All kinds of Printing Press & Garments Accessories Manufacturer & Supplier</span>
            </div>
            <div className='specility_container'>
            <div>
                <span><FontAwesomeIcon  icon={faPrint} className="icon m-5"></FontAwesomeIcon></span>
                <p>High quality short and long-run commercial printing – on time, within budget. We can help with your all printing needs. We are printing firm that can provide you with amazing printing services suitable to any product requirement or budget. Our experts in offset printing and digital printing work hand-in-hand with you… from the idea stage, to design, to printing, to finishing and packaging, to delivering your finished product to your door.</p>
                </div>
            <div>
                <FontAwesomeIcon icon={faPaintBrush} className="icon m-5"></FontAwesomeIcon>
                <p>We are speicialized in all kinds of Screen Print & Color Combination. You'll never imagine our prints were produced on a gang-run. Our focus has always been on the consistent output of high-quality prints. Using our expertise and commitment to quality control, we are able to produce a print quality that is only comparable to more expensive single-project print runs.</p>
                </div>
            <div><FontAwesomeIcon icon={faTshirt} className="icon m-5"></FontAwesomeIcon>
                <p>
                We are Manufacturer all kinds of woven label, care label, hang tag, webbing, packing box, silk screen printed label, embroidery badge, woven patch, plastic tag, leather patch, zipper puller, ribbon, pvc label, bar code sticker, rubber etc. We have professional technical support and high-quality pre-sales and after-sales service. All goods will be 100% checked very carefully before shipping. All inquiries will be replied within 24 hours.
                </p>
            </div>
            </div>
        </Container>
    );
};

export default Speciality;