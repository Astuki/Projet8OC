import downArrow from "../../assets/ArrowForCollapseDown.png"
import { useState } from "react"

export default function Hug({ showDropdowns = [true, true, false, false], contents = [], titles = [], }) {
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
          {showDropdowns[0] && (
            <div onClick={toggle1} className="dropdown">
                <div className="wrapper">
                    <p className="wrapper_text">{titles[0]}</p>
                    <img className={selected1 ? "rotate-animation" : "wrapper_upArrow"} src={downArrow}></img>
                </div>
            </div>
          )}
          {showDropdowns[0] && <p className={selected1 ? "content show" : "content"}>{contents[0]}</p>}{/** Les annonces postées sur Kasa garantissent une fiabilité totale. Les Photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes */}

          {showDropdowns[1] && (   
            <div onClick={toggle2} className="dropdown">
                <div className="wrapper">
                    <p className="wrapper_text">{titles[1]}</p>
                    <img className={selected2 ? "rotate-animation" : "wrapper_upArrow"} src={downArrow}></img>
                </div>
            </div>
          )}
          {showDropdowns[1] && <p className={selected2 ? "content show" : "content"}>{contents[1]}</p>}{/** La bienveillance fait partie des valeurs fondatrices de Kasa. Tout Comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme */}

          {showDropdowns[2] && (
            <div onClick={toggle3} className="dropdown">
                <div className="wrapper">
                    <p className="wrapper_text">{titles[2]}</p>
                    <img className={selected3 ? "rotate-animation" : "wrapper_upArrow"} src={downArrow}></img>
                </div>
            </div>
          )}
          {showDropdowns[2] &&   <p className={selected3 ? "content show" : "content"}>{contents[2]}</p>}{/** La bienveillance fait partie des valeurs fondatrices de Kasa. Tout Comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme */}

          {showDropdowns[3] && (
            <div onClick={toggle4} className="dropdown">
                <div className="wrapper">
                    <p className="wrapper_text">{titles[3]}</p>
                    <img className={selected4 ? "rotate-animation" : "wrapper_upArrow"} src={downArrow}></img>
                </div>
            </div>
          )}
          {showDropdowns[3] &&  <p className={selected4 ? "content show" : "content"}>{contents[3]}</p>} {/** La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les boyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locatoire, cela permet à nos équipes de vérigier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes*/}
        </div>
    )
}

