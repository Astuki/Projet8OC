import kasaLogo from "../../assets/kasaLogo.svg";
import Nav from './Nav/Nav';

export default function Header({hasCarrousel}) {

    const headerClass = hasCarrousel ? "header with-carrousel" : "header";

    return(
            <header className={headerClass}>
                    <img 
                        className="header-logo" 
                        src={kasaLogo} 
                        alt="logo de l'agence Kasa">
                    </img>
                <Nav/>
            </header>
    )
}