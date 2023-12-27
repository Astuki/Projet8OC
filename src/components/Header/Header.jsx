import kasaLogo from "../../assets/kasaLogo.svg";
import Nav from './Nav/Nav';

export default function Header() {

    return(
            <header className="header">
                    <img 
                        className="header-logo" 
                        src={kasaLogo} 
                        alt="logo de l'agence Kasa">
                    </img>
                <Nav/>
            </header>
    )
}