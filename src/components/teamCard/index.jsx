import './teamCard.css';
import facebook from '../../assets/icons/facebook.svg';
import linkedin from '../../assets/icons/linkedin.svg';

const TeamCard = ({name, position, image, link1, link2}) => {
    return (
        <div className='teamcard'>
            <div>
                <img src={image} alt="team" className='memImg'/>
            </div>
            <div className="memDetails">
                <p className='memName'>{name}</p>
                <p className='memPos'>{position}</p>
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