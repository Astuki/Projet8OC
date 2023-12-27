import { Link } from "react-router-dom";

export default function Nav() {

    return(
        <div>
            <nav className="nav-header">
                <Link to="/" className="nav-header_link-home">
                    Accueil
                </Link>

                <Link to ="/a-propos" className="nav-header_link-about">
                    A Propos
                </Link>
            </nav>
        </div>
    )
}