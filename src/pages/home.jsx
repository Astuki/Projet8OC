import { Link } from 'react-router-dom';
import Header from '../components/Header/header';
import Cards from '../components/Cards/Cards'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner';

export default function Home() {

    return(
            <div>
                <Header />  
                <main className='container-homepage'>
                    <Banner />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </main>
                <Footer />
            </div>
    )
}
