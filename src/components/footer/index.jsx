import React from "react";
import './footer.css';
import Logo from '../../assets/logo.png';
import Instagram from '../../assets/icons/instagram.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Youtube from '../../assets/icons/youtube.svg';

function Footer() {
    return (
        <>
        <div className="footer" id="footer">
            <img src={Logo} alt="logo" className="footerLogo"/>
            <div className="footerInfo">
                <div className="details">
                    <div className="detailsCol">
                        <h4>Address</h4>
                        <p>Mechanical & Industrial Engineering Department IIT Roorkee 247667, Uttarakhand, India</p>
                    </div>
                    <div className="detailsCol">
                        <h4>Contact</h4>
                        <p>Abhinandan K Malik - +91-9465060887</p>
                        <p>Gaurav Singhal - +91-9813421501</p>
                    </div>
                    <div className="detailsCol">
                        <h4>Email</h4>
                        <p>knoxracers@gmail.com</p>
                        <p>teamknox@iitr.ac.in</p>
                    </div>
                </div>
                <div className="socialLinks">
                    <p><img src={ Facebook } /> Facebook</p>
                    <p><img src={ Youtube } /> LinkedIn</p>
                    <p><img src={ Instagram } /> Instagram</p>
                </div>
            </div>
        </div>
        <div className="copyright">
            © Copyright 2022 | Team Mechanical & Industrial Engineering | All Rights Reserved.
        </div>
        </>
    )
}

export default Footer;