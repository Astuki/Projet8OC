import { Link } from 'react-router-dom';
import Header from '../components/Header/header';
import Cards from '../components/Cards/Cards'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner';

import React from "react";
import { useEffect, useState } from 'react';

export default function Home() {

    const [numOfCards, setNumOfCards] = React.useState(4);

    React.useEffect(() => {
        const handleResize = () => {
            setNumOfCards(window.innerWidth > 1280 ? 6 : 3);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return(
            <div>
                <Header />  
                <main className='container-homepage'>
                    <Banner />
                    <section className='grid'>
                        {[...Array(numOfCards)].map((_, index) => (
                            <Cards key={index} />
                        ))}
                    </section>
                </main>
                <Footer />
            </div>
    )
}
