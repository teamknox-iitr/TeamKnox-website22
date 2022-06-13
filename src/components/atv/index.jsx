import './atv.css';
import React, { useEffect } from 'react';
import AtvCard from '../atvCard';
import atvData from './atvData.json';
import dropDown from '../../assets/icons/dropDown.svg';
import BAJAgear1 from '../../assets/icons/BAJAgear1.svg';
import BAJAgear2 from '../../assets/icons/BAJAgear2.svg';
import headRect from '../../assets/icons/headRect.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from '../footer';

function ATV () {
    useEffect(() => {
        Aos.init({duration: 2000, once: true});
    }, [])
    return (
        <div style={{background: '#0D0D0D'}}>
            <div className="atvHero">
                <div className="atv_hero_content">
                    <h2 data-aos="fade-up"><span className="atvTHE">The</span> KNIGHT</h2>
                    <div style={{paddingRight: '1rem', textAlign: 'right'}}>
                        <h5 data-aos="fade-up">...in shining armor</h5>
                    </div>
                    <br/>
                    <a href='#BAJA2022Results'>
                        <img src={dropDown} data-aos="fade-up"/>
                    </a>
                </div>
            </div>
            <div className='BAJA2022Res' id='BAJA2022Results' style={{overflow: 'hidden'}}>
                <div className='BAJA2022Left_content' data-aos="fade-up">
                    <h2>BAJA SAE 2022</h2>
                    <h2 style={{color: '#FF7C00'}}>Achievements</h2>
                    <br/>
                    <div style={{display: 'flex', gap: '2rem'}}>
                        <div className='eventRes2022'>
                            <p>Accleration</p>
                            <p>Validation</p>
                            <p>Manufacturing</p>
                            <p>Cost</p>
                            <p>Go Green</p>
                            <p>CAE</p>
                            <br/>
                            <p style={{color: '#FF7C00', fontWeight: 700}}>OVERALL</p>
                        </div>
                        <div className='eventRes2022'>
                            <p>6th</p>
                            <p>6th</p>
                            <p>6th</p>
                            <p>7th</p>
                            <p>15th</p>
                            <p>18th</p>
                            <br/>
                            <p style={{color: '#FF7C00', fontWeight: 700}}>18th</p>
                        </div>
                    </div>
                </div>
                <div className='BAJAgear1'>
                    <img src={BAJAgear1} className='gearSpin1'/>
                </div>
                <div className='BAJAgear2'>
                    <img src={BAJAgear2} className='gearSpin2'/>
                </div>
                <div className='BAJA2022Right_content' data-aos="slide-left">
                    <img src='https://ik.imagekit.io/difw0fvlzb/BAJA2022_UizyQFqyB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654199584281' />
                </div>
            </div>
            <div className='BAJA2022Res' id='BAJA2022Results' style={{overflow: 'hidden'}}>
                <div className='BAJA2022Left_content' data-aos="fade-up">
                    <h2>BAJA SAE 2021</h2>
                    <h2 style={{color: '#FF7C00'}}>TITAN</h2>
                    <br/>
                    <div style={{display: 'flex', gap: '2rem'}}>
                        <div className='eventRes2022'>
                            <p>Sales</p>
                            <p>CAE</p>
                            <p>Manufacturing</p>
                            <br/>
                            <p style={{color: '#FF7C00', fontWeight: 700}}>OVERALL STATIC</p>
                        </div>
                        <div className='eventRes2022'>
                            <p>7th</p>
                            <p>10th</p>
                            <p>10th</p>
                            <br/>
                            <p style={{color: '#FF7C00', fontWeight: 700}}>18th</p>
                        </div>
                    </div>
                </div>
                <div className='BAJA2022Right_content' data-aos="slide-left" id="Titan2021">
                    <img src='https://ik.imagekit.io/difw0fvlzb/Rectangle_16_eu5Fh8Awe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655105777639' />
                </div>
            </div>
            <div className='sponsor'>
                <br/>
                <br/>
                <br/>
                <div className="sponsorTitle">
                    <div data-aos="slide-right" data-aos-once="true">
                        <img src={headRect}  className='rectAnimation'/>
                    </div>
                    <h2 style={{zIndex: 5, position: 'absolute', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto'}}>OUR ATVs &nbsp;<span style={{color: '#FF7C00'}}>JOURNEY</span></h2>
                    <br/><br/>
                    <br/><br/>
                    <div className='allAtvs'>
                        {
                            atvData.map((index) => {
                                return (
                                    <AtvCard image={index.image} name={index.name} year={index.year} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ATV;