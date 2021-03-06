import './teamCard.css';
import facebook from '../../assets/icons/facebook.svg';
import linkedin from '../../assets/icons/linkedin.svg';

const TeamCard = ({name, position, image, link1, link2, number}) => {
    return (
        <div className='teamcard' style={{width: '12rem'}}>
            <div>
                <img src={image} alt="team" className='memImg'/>
            </div>
            <div className="memDetails">
                <p className='memName'>{name}</p>
                <p className='memPos'>{position}</p>
                <p className='memPos'>{number}</p>
                <div className='memLinks'>
                    <a href={link1} target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin" style={{width: '1.4rem'}}/>
                    </a>
                    <a href={link2} target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="facebook" style={{width: '1.4rem'}}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TeamCard;