import React, { useEffect } from "react";
import './sponsor.css';
import iitrLogo from '../../assets/sponsor/iitr.png';
import guvi from '../../assets/sponsor/guvi.png';
import elite from '../../assets/sponsor/elite.png';
import skill from '../../assets/sponsor/skill.png';
import mavox from '../../assets/sponsor/mavox.png';
import mak from '../../assets/sponsor/mak.png';
import tata from '../../assets/sponsor/tata.png';
import flowgain from '../../assets/sponsor/flowgain.png';
import bpcl from '../../assets/sponsor/bpcl.png';
import paras from '../../assets/sponsor/paras.png';
import headRect from '../../assets/icons/headRect.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Sponsor = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return (
        <div className="sponsor">
            <div className="sponsorTitle">
                <div data-aos="slide-right" data-aos-once="true">
                    <img src={headRect}  className='rectAnimation' style={{transform: 'translate(-105%, -20%)'}}/>
                </div>
                <h2 style={{zIndex: 5, position: 'absolute', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto'}}>OUR &nbsp;&nbsp;<span style={{color: '#FF7C00'}}>Sponsors</span></h2>
            </div>
            <br/><br/>
            <div className="goldSponsor">
                <h2 style={{fontWeight: 400, color: '#FFFFFF'}}><span style={{fontWeight: 700}}>Powered By</span></h2>
                <a href="https://www.iitr.ac.in/" target="_blank">
                    <img src={iitrLogo} alt="iitr" className="guviImg"/>
                </a>
            </div>
            <br/><br/>
            <div className="goldSponsor">
                <h2 style={{fontWeight: 400, color: '#FFBF00'}}><span style={{fontWeight: 700}}>GOLD</span> Sponsor</h2>
                <a href="https://www.guvi.in/" target="_blank">
                    <img src={guvi} alt="guvi" className="guviImg"/>
                </a>
            </div>
            <div className="otherSponsor">
                <div className="goldSponsor">
                    <h2 style={{fontWeight: 400, color: 'rgba(255, 251, 254, 0.8)'}}><span style={{fontWeight: 700, color: '#FFFFFF'}}>KNOWLEDGE</span> Partner</h2>
                    <a href="https://www.elitetechnogroups.com/" target="_blank">
                        <img src={elite} alt="elite" className="eliteImg"/>
                    </a>
                </div>
                <div className="goldSponsor">
                    <h2 style={{fontWeight: 400, color: 'rgba(255, 251, 254, 0.8)'}}><span style={{fontWeight: 700, color: '#FFFFFF'}}>EDUCATIONAL</span> Partner</h2>
                    <a href="https://skill-lync.com/" target="_blank">
                        <img src={skill} alt="skill" className="skillImg"/>
                    </a>
                </div>
                <div className="goldSponsor" style={{paddingTop: '4rem'}}>
                    <h2 style={{fontWeight: 400, color: 'rgba(255, 251, 254, 0.8)'}}><span style={{fontWeight: 700, color: '#FFFFFF'}}>SAFETY</span> Partner</h2>
                    <a href="https://mavox.com/" target="_blank">
                        <img src={mavox} alt="mavox" className="mavoxImg"/>
                    </a>
                </div>
            </div>
            <div className="goldSponsor">
                <h2 style={{fontWeight: 400, color: 'rgba(255, 251, 254, 0.8)'}}><span style={{fontWeight: 700, color: '#FFFFFF'}}>ASSOCIATE</span> Sponsor</h2>
            </div>
            <div className="associateSponsor">
                <a href="https://www.bharatpetroleum.in/our-businesses/mak-lubricants/about-mak-lubricants.aspx" target="_blank">
                    <img src={mak} alt="mak" className="makImg"/>
                </a>
                <a href="https://www.tatamotors.com/" target="_blank">
                    <img src={tata} alt="tata" className="tataImg"/>
                </a>
                <a href="https://flowgain.com/" target="_blank">
                    <img src={flowgain} alt="flowgain" className="flowgainImg"/>
                </a>
                <a href="https://www.bharatpetroleum.in/" target="_blank">
                    <img src={bpcl} alt="bpcl" className="bpclImg"/>
                </a>
                <a style={{paddingTop: '4rem'}} href="https://www.paras.com/" target="_blank">
                    <img src={paras} alt="paras" className="parasImg"/>
                </a>
            </div>
        </div>
    )
}

export default Sponsor;