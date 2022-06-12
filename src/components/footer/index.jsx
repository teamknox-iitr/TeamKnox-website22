import React from "react";
import './footer.css';
import Logo from '../../assets/logo.png';
import Instagram from '../../assets/icons/instagram.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Youtube from '../../assets/icons/youtube.svg';

function Footer() {
    return (
        <>
        <div className="footer">
            <img src={Logo} alt="logo" className="footerLogo"/>
            <div className="footerInfo">
                <div className="detailsCol">
                    <h4>Address</h4>
                    <p>Mechanical & Industrial Engineering Department IIT Roorkee 247667, Uttarakhand, India</p>
                </div>
                <div className="detailsCol">
                    <h4>Contact</h4>
                    <p>Aryan Prasad - +91-8910505041</p>
                    <p>Vidit Garg - +91-7589002711</p>
                </div>
                <div className="detailsCol">
                    <h4>Email</h4>
                    <p>teamknox@iitr.ac.in</p>
                </div>
                <div className="socialLinks">
                    <p style={{cursor: 'pointer'}} onClick={() => {
                        window.open('https://www.facebook.com/teamknox.iitr', '_blank');
                    }}>
                        <img src={ Facebook } /> Facebook
                    </p>
                    <p style={{cursor: 'pointer'}} onClick={() => {
                        window.open('https://www.linkedin.com/company/team-knox-iitr/', '_blank');
                    }}>
                        <img src={ Youtube } /> LinkedIn
                    </p>
                    <p style={{cursor: 'pointer'}} onClick={() => {
                        window.open('https://www.instagram.com/teamknox.iitr/', '_blank');
                    }}>
                        <img src={ Instagram } /> Instagram
                    </p>
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