import React from 'react';
import Rating from '../Rating/Rating';
import Collapse from '../Collapse/Collapse'

export default function LogementsDesc({ lodging }) {
    if (!lodging) {

        return <div>Loading...</div>;

    }
 
    const equipmentsList = lodging.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
    ));

    return (
        <div className='wrapper-logementsDesc'>
            <h1 className='wrapper-logementsDesc_title'>{lodging.title}</h1>
            <h2 className='wrapper-logementsDesc_location'>{lodging.location}</h2>
            <div className='wrapper-logementsDesc_tags'>
                {lodging.tags[0] && <h3>{lodging.tags[0]}</h3>}
                {lodging.tags[1] && <h3>{lodging.tags[1]}</h3>}
                {lodging.tags[2] && <h3>{lodging.tags[2]}</h3>}
            </div>
            <div className='wrapper-logementsDesc_ratingHost'>
                <Rating value={lodging.rating} />
                <div className='host'>
                    <p className='hostName'>{lodging.host.name}</p>
                    <img className='hostImg' src={lodging.host.picture} alt={lodging.host.name}/>
                </div>
            </div>
            <div className='wrapper-logementsDesc_Hug'>
                <Collapse 
                title="Description"
                content={lodging.description}
                />
                <Collapse 
                title="Equipements"
                content={lodging.equipments}
                />
            </div>
        </div>
    )
}


{/**
                 * <Hug 
                    showDropdowns={[true, true, false, false]}
                    titles ={[
                        "Description",
                        "Equipements",
                    ]}
                    contents={[
                        `${lodging.description}`,
                        equipmentsList,
                    ]}
                    IsLogementPage={lodging && lodging.host.picture }
                />
                */}