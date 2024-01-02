import { Link } from 'react-router-dom';
import Header from '../components/Header/header';
import Cards from '../components/Cards/Cards'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner';

import React from "react";
import { useEffect, useState } from 'react';

import ReefBg from "../assets/homepageBg.png"
import logements from '../jsondata/logements.json'; 

export default function Home() {
    return(
            <div>
                <Header />  
                <main className='container-homepage'>
                    <Banner imageUrl={ReefBg} showText={true}/>
                    <section className='grid'>
                    {logements.map((logement) => (
                        <Cards key={logement.id} title={logement.title} cover={logement.cover} />
                    ))}
                    </section>
                </main>
                <Footer />
            </div>
    )
}
