import React from 'react';
import { Link } from 'react-router-dom' 

export default function Cards({ id, cover, title}) {

    return(
        <Link to={`/logements/${id}`} key={id} className="cards">
            <img className="cards_img" src={cover} alt={title}/>
            <div className="cards_text">{title}</div>
        </Link> 
    )
}