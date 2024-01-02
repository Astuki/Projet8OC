import React from 'react';
import logements from '../../jsondata/logements.json';
import { Link } from 'react-router-dom' 

export default function Cards({ id, cover, title}) {

    return(
        <Link to={`/logements/${id}`} key={id} className="cards">
            <img className="cards_img" src={cover} alt={title}/>
            <p className="cards_text">{title}</p>
        </Link> 
    )
}