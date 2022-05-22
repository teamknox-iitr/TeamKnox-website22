import facebook from '../../assets/mail.png';
import linkedin from '../../assets/web-icon.jpg';

const FacultyCard = ({name, position, image, link1, link2}) => {
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
                    <a href={"mailto:"+link2} target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="facebook" style={{width: '1.4rem'}}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FacultyCard;