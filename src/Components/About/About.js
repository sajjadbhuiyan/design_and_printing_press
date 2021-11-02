import React from 'react';
import { Container } from 'react-bootstrap';
import about1 from '../../../src/images/3.png';
import about2 from '../../../src/images/4.png';
import './About.css';

const About = () => {
    return (
        <Container>
            <div className='box_container'>
            <div className = 'image_style pt-5'>
                <img style={{height:'700px', width:'600px'}} src={about1} alt=""/>
            </div>
            <div>
                <h1 className='heading'>WHO WE ARE</h1>
                <h3>We are here not for income, but for outcome</h3>
                <p>Bangladesh is a poor country.  There are lots of children in this country who live on the streets and in slums.  Doesn't get any chance to study.  They work on the streets.  We are working for their purpose. Even if he works, he does not get any benefits.  Doesn't get a good job.  They were later found to be associated with various terrorist causes and worse. We are basically a project to bring and educate these disadvantaged people. Our teaching methods are a little different. Our teaching methods are a little different. <br/><br/>

                In order to achieve our goals, we will start by working to improve the despairing conditions of communities that suffer the most. Worldwide, children are the ones most affected by abject conditions, and this is the case in Liberia as well. Our goal is to provide Liberian children with basic nutrition, healthcare and education so they can reach adulthood, become self-supporting individuals, and be able to work for the benefit of their community in the future.</p>
                
                </div>
            <div>
            <h1 className='heading'>WHAT WE DO</h1>
                
                <p>We provide them with very high quality education.  Because we know that if the quality of education is not good, in fact no good nation can be formed and a nation cannot establish an empire in nation building.We use projectors and high-definition classrooms and very technology-rich classrooms for teaching. <br/><br/>

                In order to achieve our goals, we will start by working to improve the despairing conditions of communities that suffer the most. Worldwide, children are the ones most affected by abject conditions, and this is the case in Liberia as well. Our goal is to provide Liberian children with basic nutrition, healthcare and education so they can reach adulthood, become self-supporting individuals, and be able to work for the benefit of their community in the future.</p>
            </div>
            <div className = 'image_style pb-5'>
                <img style={{height:'700px', width:'600px'}} src={about2} alt="" />
            </div>
            
        </div>
        </Container>
    );
};

export default About;