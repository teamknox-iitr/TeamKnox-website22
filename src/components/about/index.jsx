import React, { useEffect, useState } from "react";
import './about.css';
import powertrain from '../../assets/icons/powertrain.svg';
import rollcage from '../../assets/icons/rollcage.svg';
import suspension from '../../assets/icons/suspension.svg';
import steering from '../../assets/icons/steering.svg';
import braking from '../../assets/icons/braking.svg';
import marketing from '../../assets/icons/marketing.svg';
import design from '../../assets/icons/design.svg';
import powertrainData from './data/powertrain.json';
import rollcageData from './data/rollcage.json';
import suspensionData from './data/suspension.json';
import steeringData from './data/steering.json';
import brakingData from './data/braking.json';
import marketingData from './data/marketing.json';
import designData from './data/design.json';
import faculty from './data/faculty.json';
import management from './data/management.json';
import TeamCard from "../teamCard";
import FacultyCard from "../facultyCard";
import AlumCard from "../alumCard";
import previous from '../../assets/icons/previous.svg';
import next from '../../assets/icons/next.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init({once: true})
    }, []);
    const [data, setData] = useState(powertrainData);
    const [tabStyle1, setTabStyle1] = useState("activeTeamTab");
    const [tabStyle2, setTabStyle2] = useState("teamTab");
    const [tabStyle3, setTabStyle3] = useState("teamTab");
    const [tabStyle4, setTabStyle4] = useState("teamTab");
    const [tabStyle5, setTabStyle5] = useState("teamTab");
    const [tabStyle6, setTabStyle6] = useState("teamTab");
    const [tabStyle7, setTabStyle7] = useState("teamTab");

    const changeStyle1 = () => {
        setTabStyle1("activeTeamTab");
        setTabStyle2("teamTab");
        setTabStyle3("teamTab");
        setTabStyle4("teamTab");
        setTabStyle5("teamTab");
        setTabStyle6("teamTab");
        setTabStyle7("teamTab");
        setData(powertrainData);
    };
    const changeStyle2 = () => {
        setTabStyle1("teamTab");
        setTabStyle2("activeTeamTab");
        setTabStyle3("teamTab");
        setTabStyle4("teamTab");
        setTabStyle5("teamTab");
        setTabStyle6("teamTab");
        setTabStyle7("teamTab");
        setData(rollcageData);
    };
    const changeStyle3 = () => {
        setTabStyle1("teamTab");
        setTabStyle2("teamTab");
        setTabStyle3("activeTeamTab");
        setTabStyle4("teamTab");
        setTabStyle5("teamTab");
        setTabStyle6("teamTab");
        setTabStyle7("teamTab");
        setData(suspensionData);
    };
    const changeStyle4 = () => {
        setTabStyle1("teamTab");
        setTabStyle2("teamTab");
        setTabStyle3("teamTab");
        setTabStyle4("activeTeamTab");
        setTabStyle5("teamTab");
        setTabStyle6("teamTab");
        setTabStyle7("teamTab");
        setData(steeringData);
    };
    const changeStyle5 = () => {
        setTabStyle1("teamTab");
        setTabStyle2("teamTab");
        setTabStyle3("teamTab");
        setTabStyle4("teamTab");
        setTabStyle5("activeTeamTab");
        setTabStyle6("teamTab");
        setTabStyle7("teamTab");
        setData(brakingData);
    };
    const changeStyle6 = () => {
        setTabStyle1("teamTab");
        setTabStyle2("teamTab");
        setTabStyle3("teamTab");
        setTabStyle4("teamTab");
        setTabStyle5("teamTab");
        setTabStyle6("activeTeamTab");
        setTabStyle7("teamTab");
        setData(marketingData);
    };
    const changeStyle7 = () => {
        setTabStyle1("teamTab");
        setTabStyle2("teamTab");
        setTabStyle3("teamTab");
        setTabStyle4("teamTab");
        setTabStyle5("teamTab");
        setTabStyle6("teamTab");
        setTabStyle7("activeTeamTab");
        setData(designData);
    };

    const [alumYear, setAlumYear] = useState(2022);
    const [alumData, setAlumData] = useState([]);

    async function getAlumData(alumYear) {
        console.log(alumYear);
        try {
            const response = await import("./alumData/" + alumYear + ".json");
            console.log(response.default);
            setAlumData(response.default);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAlumData(2022);
    }, []);
    
    return (
        <div>
            <div className="aboutHero">
                <img src='https://ik.imagekit.io/difw0fvlzb/aboutHero_5Ed__nXTE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654197746567' width='100%' />
                <div className="aboutDesc">
                    <p data-aos="fade-up">
                        Team KNOx IIT Roorkee is the official off-road racing team of IITR. The team designs and fabricates an off-road vehicle and participate in National level competition BAJA SAE India, the most prominent engineering level competition held in the country. Team KNOx provides a big platform to all the creative people who starve to work out of the box and are willing to sweat it out to achieve something. The team is open to all students of all disciplines with passion and dedication being the two main prerequisites. Mechanical design and marketing are the two main verticals under which the students work in the team.
                    </p>
                </div>
                <div className="aboutTitle">
                    <h1 data-aos="fade-up">About Us</h1>
                </div>
                <img src='https://ik.imagekit.io/difw0fvlzb/aboutHero2_N4NTLoPDn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654197753720' width='100%' />
            </div>
            <div className="team">
                <h2>The <span style={{color: '#FF7C00'}}>Team</span></h2>
                <p>The strength of the team is each individual member</p>
                <p>The strength of each member is the team</p>
                <div className="management">
                    {
                        faculty.map((index) => {
                            return (
                                <FacultyCard 
                                    name={index.title}
                                    position={index.position}
                                    image={index.image}
                                    link1={index.link}
                                    link2={index.email}
                                />
                            )
                        })
                    }
                </div>
                <div className="management">
                    {
                        management.map((index) => {
                            return (
                                <TeamCard 
                                    name={index.name}
                                    position={index.position}
                                    image={index.image}
                                    link1={index.linkedin}
                                    link2={index.facebook}
                                />
                            )
                        })
                    }
                </div>
                <br/><br/><br/><br/>
                <div className="teamTabs">
                    <div className={tabStyle1} onClick={changeStyle1}>
                        <img src={powertrain} height='60vh'/>
                        <h3>Powertrain</h3>
                    </div>
                    <div className={tabStyle2} onClick={changeStyle2}>
                        <img src={rollcage} height='60vh'/>
                        <h3>Rollcage</h3>
                    </div>
                    <div className={tabStyle3} onClick={changeStyle3}>
                        <img src={suspension} height='60vh'/>
                        <h3>Suspension</h3>
                    </div>
                    <div className={tabStyle4} onClick={changeStyle4}>
                        <img src={steering} height='60vh'/>
                        <h3>Steering</h3>
                    </div>
                    <div className={tabStyle5} onClick={changeStyle5}>
                        <img src={braking} height='60vh'/>
                        <h3>Braking</h3>
                    </div>
                    <div className={tabStyle6} onClick={changeStyle6}>
                        <img src={marketing} height='60vh'/>
                        <h3>Marketing</h3>
                    </div>
                    <div className={tabStyle7} onClick={changeStyle7}>
                        <img src={design} height='60vh'/>
                        <h3>Design</h3>
                    </div>
                </div>
                <div className="teamMembers">
                    {
                        data.map((index) => {
                            return (
                                <TeamCard 
                                    name={index.name}
                                    position={index.position}
                                    image={index.image}
                                    link1={index.linkedin}
                                    link2={index.facebook}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className="team">
                <h2>Our <span style={{color: '#FF7C00'}}>Alumni</span></h2>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={previous} style={{cursor: "pointer"}} onClick={() => {
                        setAlumYear(Math.max(alumYear-1, 2011));
                        getAlumData(Math.max(alumYear-1, 2011));
                    }}/>
                    <p className="yearChange">{alumYear}</p>
                    <img src={next} style={{cursor: "pointer"}} onClick={() => {
                        setAlumYear(Math.min(alumYear+1, 2022));
                        getAlumData(Math.min(alumYear+1, 2022));
                    }}/>
                </div>
                <div className="teamMembers">
                    {
                        alumData && alumData.map((index) => {
                            console.log(index);
                            return (
                                <AlumCard 
                                    name={index.name}
                                    position={index.position}
                                    org={index.org}
                                    image={index.image}
                                    link1={index.linkedin}
                                    link2={index.facebook}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default About;