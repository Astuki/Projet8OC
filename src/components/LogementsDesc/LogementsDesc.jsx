import React from 'react';
import Hug from '../Hug/Hug'

export default function LogementsDesc({ lodging }) {
    if (!lodging) {

        return <div>Loading...</div>;

    }

    return (
        <div className='wrapper-logementsDesc'>
            {/* <img src={lodging.pictures[0]} alt={lodging.title} />  For Carrousel need to add this line of code instead of the buddha thingy */}
            <h1 className='wrapper-logementsDesc_title'>{lodging.title}</h1>
            <h2 className='wrapper-logementsDesc_location'>{lodging.location}</h2>
            <div className='wrapper-logementsDesc_tags'>
                {lodging.tags[0] && <h3>{lodging.tags[0]}</h3>}
                {lodging.tags[1] && <h3>{lodging.tags[1]}</h3>}
                {lodging.tags[2] && <h3>{lodging.tags[2]}</h3>}
            </div>
            <div className='wrapper-logementsDesc_ratingHost'>
                <div className='rating'>{lodging.rating}</div>
                <div className='host'>
                    <p className='hostName'>{lodging.host.name}</p>
                    <img className='hostImg' src={lodging.host.picture} alt={lodging.host.name}/>
                </div>
            </div>
            <div className='wrapper-logementsDesc_Hug'>
                <Hug 
                    showDropdowns={[true, true, false, false]}
                    titles ={[
                        "Description",
                        "Equipements",
                    ]}
                    contents={[
                        `${lodging.description}`,
                        `${lodging.equipments}`,
                    ]}/>
            </div>
            {/* <p>{lodging.description}</p> {/* Hug / Collapse */}
        </div>
    )
}