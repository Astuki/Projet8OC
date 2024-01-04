import { Link } from 'react-router-dom';
import Header from '../components/Header/header';
import Cards from '../components/Cards/Cards'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner';
import Hug from '../components/Hug/Hug'

import proposBg from "../assets/a-proposBg.png"

export default function AboutMe() {

    return(   
            <div>
                <Header />
                <main className='container-homepage'>
                    <Banner imageUrl={proposBg} showText={false}/>
                    <Hug 
                    showDropdowns={[true, true, true, true]}
                    titles ={[
                        "Fiabilité",
                        "Respect",
                        "Service",
                        "Sécurité",
                    ]}
                    contents={[
                      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les Photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes",
                      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout Comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme",
                      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout Comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme",
                      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les boyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locatoire, cela permet à nos équipes de vérigier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes",                      
                    ]}/>
                </main>
                <Footer />
            </div>
    )
}

