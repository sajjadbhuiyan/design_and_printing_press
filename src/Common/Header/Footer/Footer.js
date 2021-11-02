import React from "react"
import { Link } from "react-router-dom"
import logo from '../../../logo.png'
import './Footer.css'

const Footer = () => {
    return(
        <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row content_style">
            <div className="col-md-6 mt-md-0 mt-3">
                <img src={logo} alt=""/>
                <h3>About</h3>
                <p>Our students are very poor and they can't afford <br/> to drink tea and wear good clothes for them so we can make<br/>  them good quality.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase pt-5">Page Link</h5>
                <ul className="list-unstyled">
                    <li><Link style={{textDecoration:'none'}} to='/home'>Home</Link></li>
                    <li><Link style={{textDecoration:'none'}} to='/about'>About</Link></li>
                    <li><Link style={{textDecoration:'none'}} to='/services'>Service</Link></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase pt-5">Importent Link</h5>
                <ul className="list-unstyled">
                <li><Link style={{textDecoration:'none'}} to='/contact'>Contact</Link></li>
                    <li>Phone : 01613922248</li>
                    <li>Email : sajjadbhuiyan2018@gmail.com</li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright content_style text-center py-3">© 2020 Copyright:
        <a href="https://github.com/sajjadbhuiyan"> Sajjad Bhuiyan</a>
    </div>

</footer>
    )
}
 

export default Footer