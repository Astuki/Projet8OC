import React from 'react';

export default function LogementsDesc({ lodging }) {
    if (!lodging) {

        return <div>Loading...</div>;

    }

    return (
        <div>
            <h2>{lodging.title}</h2>
            <img src={lodging.pictures[0]} alt={lodging.title} />
            <p>{lodging.description}</p>
        </div>
    )
}