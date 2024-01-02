import React from 'react';
import logements from '../../jsondata/logements.json'; 

export default function Cards({ cover, title }) {

    return(
        <div className="cards">
            <img className="cards_img" src={cover} alt={title}/>
            <p className="cards_text">{title}</p>
        </div> 
    )
}