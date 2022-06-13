import React, { useEffect, useState } from "react";
import management from '../about/data/management.json';
import TeamCard from '../teamCard';
import './contact.css';

const Contact = () => {

    var mapWidth = 500;
    var mapHeight = 450;

    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => {
            window.removeEventListener('resize', updateWidth);
        }   
    }, []);
    if(width <= 1320) {
        mapWidth = 400;
        mapHeight = mapWidth * 0.9;
    }
    if(width <= 945) {
        mapWidth = 350;
        mapHeight = mapWidth * 0.9;
    }
    if(width <= 880) {
        mapWidth = 575;
        mapHeight = mapWidth * 0.9;
    }
    if(width <= 756) {
        mapWidth = 400;
        mapHeight = mapWidth * 0.9;
    }
    if(width <= 436) {
        mapWidth = 350;
        mapHeight = mapWidth * 0.9;
    }

    var emailURL = 'https://mail.google.com/mail/u/0/?fs=1&to=teamknox@iitr.ac.in&su=';
    const [mail, SetMail] = useState({
        fname: '',
        email: '',
        message: ''
    })
    function sendMail(e) {
        e.preventDefault();
        emailURL = emailURL+'Message%20from%20'+mail.fname+'&body='+mail.message+'%0DFrom%20'+mail.email+'&tf=cm';
        window.open(emailURL, '_blank');
        emailURL = 'https://mail.google.com/mail/u/0/?fs=1&to=teamknox@iitr.ac.in&su=';
    }
    function handle(e) {
        const newMail = {...mail};
        newMail[e.target.id] = e.target.value;
        SetMail(newMail);
        console.log(newMail);
    }

    return (
        <div style={{background: '#0D0D0D'}}>
            <h2 className="contactHeader"><span style={{color: '#FF7C00'}}>Contact</span> Us</h2>
            <div className="map">
                <div className="contactForm">
                    <form className="form" onSubmit={(e) => sendMail(e)}>
                        <div className="nameEmail">
                            <div className="formField">
                                <p>FULL NAME</p>
                                <input onChange={(e) => handle(e)} type="text" id="fname" name="fname" placeholder="Name" required/>
                            </div>
                            <div className="formField">
                                <p>EMAIL ADDRESS</p>
                                <input onChange={(e) => handle(e)} type="email" id="email" name="email" placeholder="Email ID" required/>
                            </div>
                        </div>
                        <br/>
                        <div className="formField">
                            <p>MESSAGE</p>
                            <textarea onChange={(e) => handle(e)} type="text" id="message" name="message" placeholder="Let us know..." required/>
                        </div>
                        <br/>
                        <div id="buttons">
                            {/* <input type="reset" value="Clear" id="clear" /> */}
                            <input type="submit" value="SEND" id="submit"/>
                        </div>
                    </form>
                </div>
                <div dangerouslySetInnerHTML={{__html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1730.0110115508562!2d77.89135641744384!3d29.86363870000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3701b8099e7%3A0x88384981b4369aa6!2sTeam%20KNOx%20Workshop!5e0!3m2!1sen!2sin!4v1654795164017!5m2!1sen!2sin" width='+mapWidth+' height='+mapHeight+' style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'}} />
            </div>
            <div className="team">
                <div className="management">
                    {
                        management.map((index) => {
                            return (
                                <TeamCard 
                                    name={index.name}
                                    position={index.position}
                                    number={index.number}
                                    image={index.image}
                                    link1={index.linkedin}
                                    link2={index.facebook}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className="copyright">
                © Copyright 2022 | Team Mechanical & Industrial Engineering | All Rights Reserved.
            </div>
        </div>
    )
}

export default Contact;