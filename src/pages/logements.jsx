import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logements from '../jsondata/logements.json'; 

import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';
import Carrousel from '../components/Carrousel/Carrousel';
import LogementsDesc from '../components/LogementsDesc/LogementsDesc';

export default function Lodgings() {
    const { id } = useParams();

    const [lodging, setLodging] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const selectedLodging = logements.find((lodging) => lodging.id === String(id)); 

        if(!selectedLodging) {
            navigate('/404');  
            return;
        }

    setLodging(selectedLodging);
    }, [id, navigate]);

    return(
            <div className='main-wrapper-logement'>
                <Header hasCarrousel={lodging && lodging.pictures && lodging.pictures.length > 0} />
                <main className='container-logements'>
                     <Carrousel lodging={lodging}/>
                     <LogementsDesc lodging={lodging}/>
                </main>
                <Footer />  
            </div>
    )
}

/** Error404 header collé à gauche  */
/** voir lors évaluation   */