import React from "react";
import './about.css';
import aboutHeroImg from '../../assets/aboutHero.png';
import aboutHeroImg2 from '../../assets/aboutHero2.png';

const About = () => {
    return (
        <div>
            <div className="aboutHero">
                <img src={aboutHeroImg} width='100%' />
                <div className="aboutDesc">
                    <p>
                        Team KNOx IIT Roorkee is the official off-road racing team of IITR. The team designs and fabricates an off-road vehicle and participate in National level competition BAJA SAE India, the most prominent engineering level competition held in the country. Team KNOx provides a big platform to all the creative people who starve to work out of the box and are willing to sweat it out to achieve something. The team is open to all students of all disciplines with passion and dedication being the two main prerequisites. Mechanical design and marketing are the two main verticals under which the students work in the team.
                    </p>
                </div>
                <img src={aboutHeroImg2} width='100%' />
            </div>
        </div>
    )
}

export default About;