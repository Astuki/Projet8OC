import { Link } from 'react-router-dom';

export default function aboutMe() {

    return(     
            <div>
                <p>Page a propos</p>
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to ="/logements">Nos Logements</Link>
                </nav>
            </div>
    )
}

