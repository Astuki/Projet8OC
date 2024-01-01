import upArrow from "../../assets/ArrowForCollapseUp.png"
import downArrow from "../../assets/ArrowForCollapseDown.png"
import { useState } from "react"

export default function Hug() {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }

        setSelected(i);
    }

    return(
        <div className="maximum-width">

            <div onClick={() => toggle("fiabilite")} className="dropdown">
                <div className="wrapper">
                    <p className="dropdown_text">Fiabilité</p>
                    <img className="dropdown_upArrow" src={selected === "fiabilite" ? downArrow : upArrow}></img>
                </div>
            </div>
            <p className={selected === "fiabilite" ? "content show" : "content"}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les Photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes</p>

            <div onClick={() => toggle("Respect")} className="dropdown">
                <div className="wrapper">
                    <p className="dropdown_text">Respect</p>
                    <img className="dropdown_upArrow" src={selected === "Respect" ? downArrow : upArrow}></img>
                </div>
            </div>
            <p className={selected === "Respect" ? "content show" : "content"}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout Comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme</p>

            <div onClick={() => toggle("Service")} className="dropdown">
                <div className="wrapper">
                    <p className="dropdown_text">Service</p>
                    <img className="dropdown_upArrow" src={selected === "Service" ? downArrow : upArrow}></img>
                </div>
            </div>
            <p className={selected === "Service" ? "content show" : "content"}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout Comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme</p>

            <div onClick={() => toggle("Sécurité")} className="dropdown">
                <div className="wrapper">
                    <p className="dropdown_text">Sécurité</p>
                    <img className="dropdown_upArrow" src={selected === "Sécurité" ? downArrow : upArrow}></img>
                </div>
            </div>
            <p className={selected === "Sécurité" ? "content show" : "content"}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les boyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locatoire, cela permet à nos équipes de vérigier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes</p>
        </div>
    )
}