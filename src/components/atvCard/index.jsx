import React from "react";
import './atvCard.css';

const AtvCard = ({image, name, year}) => {
    return (
        <div>
            <img className="atvImg" src={image} alt=""/>
            <p className="atvTitle">{name}</p>
            <p className="atvYear">{year}</p>
        </div>
    )
}

export default AtvCard;