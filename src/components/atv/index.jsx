import './atv.css';
import React from 'react';
import AtvCard from '../atvCard';
import atvData from './atvData.json';

function ATV () {
    return (
        <div>
            <div className="atvHero">
                helo
            </div>
            <div className='sponsor'>
                <div className="sponsorTitle">
                    <h2>OUR ATVs &nbsp;<span style={{color: '#FF7C00'}}>JOURNEY</span></h2>
                    <br/><br/>
                    <div className='allAtvs'>
                        {
                            atvData.map((index) => {
                                return (
                                    <AtvCard image={index.image} name={index.name} year={index.year}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ATV;