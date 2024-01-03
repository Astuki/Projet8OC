import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logements from '../jsondata/logements.json'; 

import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';

export default function Lodgings() {
    const { id } = useParams();

    /**{logements.map((logement) => (
        console.log(logement.id)
    ))} */

    const [lodging, setLodging] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const selectedLodging = logements.find((lodging) => lodging.id === String(id)); /** parseInt(id) */

        if(!selectedLodging) {
            navigate('/404');  
            return;
        }

    setLodging(selectedLodging);
    }, [id, navigate]);

    return(
            <div>
                <Header />
                <main className='container-homepage'>
                     /** Carousel */
                     /** LogementsDesc */
                </main>
                <Footer />  
            </div>
    )
}

