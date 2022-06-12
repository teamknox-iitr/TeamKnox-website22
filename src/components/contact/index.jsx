import React from "react";
import management from '../about/data/management.json';
import TeamCard from '../teamCard';
import './contact.css';

const Contact = () => {

    var width = 600;
    var height = 500;

    return (
        <div style={{background: '#0D0D0D'}}>
            <div className="map">
                <div dangerouslySetInnerHTML={{__html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1730.0110115508562!2d77.89135641744384!3d29.86363870000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3701b8099e7%3A0x88384981b4369aa6!2sTeam%20KNOx%20Workshop!5e0!3m2!1sen!2sin!4v1654795164017!5m2!1sen!2sin" width='+width+' height='+height+' style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'}} />
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