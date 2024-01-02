import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';


export default function Error404() {

    return(
            <div>
                <Header />
                <main className='main-Wrapper'>
                    <span className='main-Wrapper_Error'>404</span>
                    <h1 className='main-Wrapper_Text'>Oups la page que vous avez demandez n'existe pas.</h1>
                    <Link className='main-Wrapper_Link' to={'/'}>Retourner sur la page d'accueil</Link>
                </main>
                <Footer />
            </div>
    )
}