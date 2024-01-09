import { Link } from 'react-router-dom';
import Header from '../components/Header/header';
import Cards from '../components/Cards/Cards'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner';
import Hug from '../components/Hug/Hug'
import Collapse from '../components/Collapse/Collapse'
import aboutJSON from '../jsondata/about.json'

import proposBg from "../assets/a-proposBg.png"

export default function AboutMe() {

    return(   
            <div className='main-wrapper'>
                <Header />
                <main className='container-homepage'>
                    <Banner imageUrl={proposBg} showText={false}/>
                    <div className='about-collapse-container'>
                        {
                            aboutJSON.map(({title, content }, id) => 
                                <Collapse key={`coll-${id}`} title={title} content={content} />
                            )
                        }
                    </div>
                </main>

                <Footer />
            </div>
    )
}

/** arranger avec le SCSS */
