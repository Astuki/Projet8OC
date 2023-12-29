import { Link } from 'react-router-dom';
import Header from '../components/Header/header';
import Cards from '../components/Cards/Cards'
import Footer from '../components/Footer/Footer'
import Sectionreef from '../components/SectionReef/Sectionreef';

export default function AboutMe() {

    return(   
            <div>
                <Header />  
                <main className='container'>
                    <section>
                        <Sectionreef />
                    </section>
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
    )
}

