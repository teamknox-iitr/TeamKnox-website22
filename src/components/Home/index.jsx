import React from "react";
import './home.css';
import know from '../../assets/know.png';
import wheel from '../../assets/icons/wheel.svg';
import gear from '../../assets/icons/gear.svg';
import atv from '../../assets/atv.png';
import { Link } from "react-router-dom";
import logitech from '../../assets/icons/logitech.svg';
import google from '../../assets/icons/google.svg';
import { Carousel } from '3d-react-carousal';
import news1 from '../../assets/news1.png';
import news2 from '../../assets/news2.png';
import news3 from '../../assets/news3.png';

const Home = () => {
    let slides = [
        <img  src={news1} alt="1" />,
        <img  src={news2} alt="2" />,
        <img  src={news3} alt="3" />
    ]

    return (
        <div>
            <div className="hero">
                <div className="hero_content">
                    <h4>OFFICIAL OFF-ROAD RACING TEAM OF IIT ROORKEE</h4>
                    <h2>Passion is not by choice</h2>
                    <h2><span className="road">Road&nbsp;</span> is not an option</h2>
                    <div style={{paddingTop: '1rem'}}>
                        <h5><span style={{color: '#FF7C00', fontWeight: 700}}>Team KNOx</span> is who we are</h5>
                        <h5>Off the road we go</h5>
                    </div>
                </div>
            </div>
            <div className="know">
                <div className="left_know">
                    <img src={wheel} className="wheelImg"/>
                    <h2><span style={{color: '#FF7C00', fontWeight: 700}}>Know</span> Team KNOx</h2>
                    <p>
                        Team KNOx IIT Roorkee is the official off-road racing team of IITR. The team designs and fabricates an off-road vehicle and participate in National level competition BAJA SAE India, the most prominent engineering level competition held in the country.
                    </p>
                    <Link to="/about" className="learnMore">Learn More</Link>
                </div>
                <div className="right_know">
                    <img src={ gear } className="gearImg" />
                    <img src={ know } className="knowImg" />
                </div>
            </div>
            <div className="atv">
                <div className="left_atv">
                    <img src={atv} className="atvImg"/>
                </div>
                <div className="right_atv">
                    <h2>Our <span style={{color: '#FF7C00', fontWeight: 700}}>ATVs</span></h2>
                    <p>
                        Some text..........o you;'e trying to surf a site like myspace, hotmail or yahoo mail from work or school and its blocked.
                    </p>
                    <Link to="/atv" className="learnMore">Learn More</Link>
                </div>
            </div>
            <div className="partner">
                <h2>PARTNERS</h2>
                <div className="partLogo">
                    <img src={logitech} />
                    <img src={google} />
                </div>
            </div>
            <div className="news">
                <h2>KNOx in <span style={{color: '#FF7C00', fontWeight: 700}}>News</span></h2>
                <p style={{width: '60%', paddingLeft: '20%'}}>
                    Each and every one of us has that moment when we are suddenly stunned when we come face to face with the enormity of the universe.
                </p>
                <br/><br/><br/>
                <Carousel slides={slides} arrows={false} autoplay={true}/>
            </div>
        </div>
    )
}

export default Home;