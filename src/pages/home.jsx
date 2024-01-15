import Header from '../components/Header/header';
import Cards from '../components/Cards/Cards'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner';

import React from "react";
import ReefBg from "../assets/homepageBg.png"

/* Json Imported Here */
import logements from '../jsondata/logements.json'; 

export default function Home() {
    return(
            <div className='main-wrapper'>
                <Header />  
                <main className='container-homepage'>
                    <Banner imageUrl={ReefBg} />
                    <section className='grid'>
                    {logements.map((logement) => (
                        <Cards key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
                    ))}
                    </section>
                </main>
                <Footer />
            </div>
    )
}
