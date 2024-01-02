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
                    <Banner imageUrl={proposBg}/>
                    <Hug />
                </main>
                <Footer />
            </div>
    )
}

