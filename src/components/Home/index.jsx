import React, { useEffect } from "react";
import './home.css';
import wheel from '../../assets/icons/wheel.svg';
import gear from '../../assets/icons/gear.svg';
import { Link } from "react-router-dom";
import { Carousel } from '3d-react-carousal';
import iitr from '../../assets/sponsor/iitr.png';
import guvi from '../../assets/sponsor/guvi.png';
import elite from '../../assets/sponsor/elite.png';
import skill from '../../assets/sponsor/skill.png';
import mavox from '../../assets/sponsor/mavox.png';
import mak from '../../assets/sponsor/mak.png';
import tata from '../../assets/sponsor/tata.png';
import flowgain from '../../assets/sponsor/flowgain.png';
import paras from '../../assets/sponsor/paras.png';
import bpcl from '../../assets/sponsor/bpcl.png';
import tyreRight from '../../assets/TyreRight.png';
import tyreLeft from '../../assets/TyreLeft.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import NewCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    let slides = [
        <img  src='https://ik.imagekit.io/difw0fvlzb/news/Media_8_rRlz8uqMb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654198619259' alt="1" height={400} />,
        <img  src='https://ik.imagekit.io/difw0fvlzb/news/Media_7_CvAqce5dR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654198618951' alt="2" height={400}/>,
        <img  src='https://ik.imagekit.io/difw0fvlzb/news/Earlier_Media_5_EOiVvF0Ed.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654198618790' alt="3" height={400}/>,
        <img  src='https://ik.imagekit.io/difw0fvlzb/news/Earlier_Media_1_JrSImAfd6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654198617455' alt="4" height={400}/>,
        <img  src='https://ik.imagekit.io/difw0fvlzb/news/Earlier_Media_3_KIoX1UitC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654198617931' alt="5" height={400}/>,
        <img  src='https://ik.imagekit.io/difw0fvlzb/news/Earlier_Media_2_LeTW3Mkzs.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654198617567' alt="6" height={400}/>,
    ];

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div style={{background: '#0D0D0D'}}>
            <div className="hero">
                <div className="hero_content">
                    <h4 data-aos="fade-up">OFFICIAL OFF-ROAD RACING TEAM OF IIT ROORKEE</h4>
                    <h2 data-aos="fade-up">Passion is not by choice</h2>
                    <h2 data-aos="fade-up"><span className="road">Road&nbsp;</span> is not an option</h2>
                    <div style={{paddingTop: '1rem'}}>
                        <h5 data-aos="fade-up"><span style={{color: '#FF7C00', fontWeight: 700}}>Team KNOx</span> is who we are</h5>
                        <h5 data-aos="fade-up">Off the road we go</h5>
                    </div>
                </div>
            </div>
            <div className="know">
                <div className="left_know" data-aos="fade-up"  >
                    <img src={wheel} className="wheelImg"/>
                    <h2><span style={{color: '#FF7C00', fontWeight: 700}}>Know</span> Team KNOx</h2>
                    <p>
                        Team KNOx IIT Roorkee is the official off-road racing team of IITR. The team designs and fabricates an off-road vehicle and participate in National level competition BAJA SAE India, the most prominent engineering level competition held in the country.
                    </p>
                    <Link to="/about" className="learnMore">Learn More</Link>
                </div>
                <div className="right_know">
                    <div className="gearImg">
                        <img src={ gear } className='gearSpin1'/>
                    </div>
                    <img src='https://ik.imagekit.io/difw0fvlzb/know_1SgD5BTUM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654197753443' className="knowImg" data-aos="fade-up"/>
                </div>
            </div>
            <div className="stats">
                <div className="statLine1" data-aos="fade-up"  >
                    <div className="statInfo" style={{maxWidth:'18rem'}}>
                        <p>Rank</p>
                        <h2>1</h2>
                        <p>among all IITs</p>
                    </div>
                    <div className="statInfo" style={{maxWidth:'18rem'}}>
                        <p>A Top 10 Finish</p>
                        <h2>7</h2>
                        <p>times since 2021</p>
                    </div>
                    <div className="statInfo" style={{maxWidth:'18rem'}}>
                        <p>An experience of</p>
                        <h2>12</h2>
                        <p>years in building awesome ATVs</p>
                    </div>
                    <div className="statInfo" style={{maxWidth:'18rem'}}>
                        <p>A family of</p>
                        <h2>12.5k+</h2>
                        <p>people who have watched us grow</p>
                    </div>
                </div>
            </div>
            <div className="rollingStats">
                <img src={tyreLeft} className="tyreLeft" />
                <NewCarousel responsive={responsive} arrows={false} swipeable={false} autoPlay={true} infinite={true} containerClass="bajaStats">
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Rank</p>
                                <h2 style={{fontSize: '6rem'}}>6</h2>
                            </div>
                            <div className="statDesc">
                                <p>DYNAMIC EVENT</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>ACCELERATION</span> event</h2>
                            </div>
                            <p className="statCardTitle">BAJA SAE 2022</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Rank</p>
                                <h2 style={{fontSize: '6rem'}}>6</h2>
                            </div>
                            <div className="statDesc">
                                <p>DYNAMIC EVENT</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>VALIDATION</span> event</h2>
                            </div>
                            <p className="statCardTitle">BAJA SAE 2022</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Rank</p>
                                <h2 style={{fontSize: '6rem'}}>6</h2>
                            </div>
                            <div className="statDesc">
                                <p>STATIC EVENT</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>MANUFACTURING</span></h2>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>EVALUATION</span> event</h2>
                            </div>
                            <p className="statCardTitle">BAJA SAE 2022</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Rank</p>
                                <h2 style={{fontSize: '6rem'}}>7</h2>
                            </div>
                            <div className="statDesc">
                                <p>STATIC EVENT</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>COST EVALUATION</span></h2>
                                <h2>event</h2>
                            </div>
                            <p className="statCardTitle">BAJA SAE 2022</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Rank</p>
                                <h2 style={{fontSize: '6rem'}}>7</h2>
                            </div>
                            <div className="statDesc">
                                <p>STATIC EVENT</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>SALES EVALUATION</span></h2>
                                <h2>event</h2>
                            </div>
                            <p className="statCardTitle">BAJA SAE 2021</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Rank</p>
                                <h2 style={{fontSize: '6rem'}}>10</h2>
                            </div>
                            <div className="statDesc">
                                <p>STATIC EVENT</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>CAE EVALUATION</span></h2>
                                <h2>event</h2>
                            </div>
                            <p className="statCardTitle">BAJA SAE 2021</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Rank</p>
                                <h2 style={{fontSize: '6rem'}}>10</h2>
                            </div>
                            <div className="statDesc">
                                <p>STATIC EVENT</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>MANUFACTURING</span></h2>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>EVALUATION</span> event</h2>
                            </div>
                            <p className="statCardTitle">BAJA SAE 2021</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Rank</p>
                                <h2 style={{fontSize: '6rem'}}>7</h2>
                            </div>
                            <div className="statDesc">
                                <p>VIRTUAL EVENT</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>DESIGN EVALUATION</span></h2>
                                <h2>event</h2>
                            </div>
                            <p className="statCardTitle">BAJA SAE 2017</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Rank</p>
                                <h2 style={{fontSize: '6rem'}}>2</h2>
                            </div>
                            <div className="statDesc">
                                <p>STATIC EVENT</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>CAE EVALUATION</span></h2>
                                <h2>event</h2>
                            </div>
                            <p className="statCardTitle">BAJA SAE 2013</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Rank</p>
                                <h2 style={{fontSize: '6rem'}}>13</h2>
                            </div>
                            <div className="statDesc">
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>OVERALL</span></h2>
                            </div>
                            <p className="statCardTitle">BAJA SAE 2012</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Rank</p>
                                <h2 style={{fontSize: '6rem'}}>10</h2>
                            </div>
                            <div className="statDesc">
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>OVERALL</span></h2>
                            </div>
                            <p className="statCardTitle">BAJA SAE 2011</p>
                        </div>
                    </div>
                </NewCarousel>
                <img src={tyreRight} className="tyreRight"/>
            </div>
            <div className="atv">
                <div className="left_atv" data-aos="fade-up">
                    <img style={{transform: 'scaleX(-1)', objectPosition: '10% 50%'}} src='https://ik.imagekit.io/difw0fvlzb/atv_uVP98nxe-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654197745829' className="atvImg"/>
                </div>
                <div className="right_atv" data-aos="fade-up">
                    <h2>Our <span style={{color: '#FF7C00', fontWeight: 700}}>ATVs</span></h2>
                    <p>
                        Our journey so far has been phenomenal. We’ve built more than ten ATVs over the years and each new addition to the contigent is better than ever.
                    </p>
                    <Link to="/atv" className="learnMore">Learn More</Link>
                </div>
            </div>
            <div className="partner">
                <h2>PARTNERS</h2>
                <marquee>
                    <div className="partLogo">
                        <div>
                            <p className="logoTitle">POWERED BY</p>
                            <img src={iitr} style={{height: '7rem'}}/>
                        </div>
                        <div>
                            <p className="logoTitle">Gold Sponsor</p>
                            <img src={guvi} style={{height: '7rem'}}/>
                        </div>
                        <div>
                            <p className="logoTitle">Knowledge Partner</p>
                            <img src={elite} style={{height: '7rem'}}/>
                        </div>
                        <div>
                            <p className="logoTitle">Educational Partner</p>
                            <img src={skill} style={{height: '7rem'}}/>
                        </div>
                        <div>
                            <p className="logoTitle">Safety Partner</p>
                            <img src={mavox} style={{height: '7rem'}}/>
                        </div>
                        <div>
                            <p className="logoTitle">Associate Sponsors</p>
                            <div style={{display: 'flex', gap: '3rem'}}>
                                <img src={mak} style={{height: '7rem'}}/>
                                <img src={tata} style={{height: '7rem'}}/>
                                <img src={flowgain} style={{height: '7rem'}}/>
                                <img src={paras} style={{height: '7rem'}}/>
                                <img src={bpcl} style={{height: '7rem'}}/>
                            </div>
                        </div>
                    </div>
                </marquee>
            </div>
            <div className="news">
                <h2>KNOx in <span style={{color: '#FF7C00', fontWeight: 700}}>News</span></h2>
                <p style={{width: '60%', paddingLeft: '20%'}}>
                    Each and every one of us has that moment when we are suddenly stunned when we come face to face with the enormity of the universe.
                </p>
                <br/><br/><br/>
                <Carousel slides={slides} arrows={true} autoplay={false}/>
            </div>
        </div>
    )
}

export default Home;