import { Link } from 'react-router-dom';
import Header from '../components/Header/header';
import Cards from '../components/Cards/Cards'

export default function AboutMe() {

    return(   
            <div>
                <Header />  
                <main className='main-container'>
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </main>
                <footer>
                    footer Compo
                </footer>
            </div>
    )
}

