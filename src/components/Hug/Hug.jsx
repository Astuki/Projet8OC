import upArrow from "../../assets/ArrowForCollapseUp.png"
import downArrow from "../../assets/ArrowForCollapseDown.png"
import { useState } from "react"

export default function Hug() {
    const [selected1, setSelected1] = useState(false);
    const [selected2, setSelected2] = useState(false);
    const [selected3, setSelected3] = useState(false);
    const [selected4, setSelected4] = useState(false);
  
    const toggle1 = () => {
      setSelected1(!selected1);
    };
  
    const toggle2 = () => {
      setSelected2(!selected2);
    };
  
    const toggle3 = () => {
      setSelected3(!selected3);
    };
  
    const toggle4 = () => {
      setSelected4(!selected4);
    };
    
    return(
        <div className="maximum-width">

            <div onClick={toggle1} className="dropdown">
                <div className="wrapper">
                    <p className="wrapper_text">Fiabilité</p>
                    <img className={selected1 ? "rotate-animation" : "wrapper_upArrow"} src={upArrow}></img>
                </div>
            </div>
            <p className={selected1 ? "content show" : "content"}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les Photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes</p>

            <div onClick={toggle2} className="dropdown">
                <div className="wrapper">
                    <p className="wrapper_text">Respect</p>
                    <img className={selected2 ? "rotate-animation" : "wrapper_upArrow"} src={upArrow}></img>
                </div>
            </div>
            <p className={selected2 ? "content show" : "content"}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout Comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme</p>

            <div onClick={toggle3} className="dropdown">
                <div className="wrapper">
                    <p className="wrapper_text">Service</p>
                    <img className={selected3 ? "rotate-animation" : "wrapper_upArrow"} src={upArrow}></img>
                </div>
            </div>
            <p className={selected3 ? "content show" : "content"}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout Comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme</p>

            <div onClick={toggle4} className="dropdown">
                <div className="wrapper">
                    <p className="wrapper_text">Sécurité</p>
                    <img className={selected4 ? "rotate-animation" : "wrapper_upArrow"} src={upArrow}></img>
                </div>
            </div>
            <p className={selected4 ? "content show" : "content"}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les boyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locatoire, cela permet à nos équipes de vérigier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes</p>
        </div>
    )
}

/** Use param Hook pour logemebts récupérer les id, méthodes filter ou find 
 * page 404, accueil JSON + logements
*/