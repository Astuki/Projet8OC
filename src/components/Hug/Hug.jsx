import upArrow from "../../assets/ArrowForCollapseUp.png"

export default function Hug() {

    return(
        <div className="maximum-width">

            <div className="dropdown">
                <p className="dropdown_text">Fiabilité</p>
                <img className="dropdown_upArrow" src={upArrow}></img>
            </div>

            <div className="dropdown">
                <p className="dropdown_text">Respect</p>
                <img className="dropdown_upArrow" src={upArrow}></img>
            </div>

            <div className="dropdown">
                <p className="dropdown_text">Service</p>
                <img className="dropdown_upArrow" src={upArrow}></img>
            </div>

            <div className="dropdown">
                <p className="dropdown_text">Sécurité</p>
                <img className="dropdown_upArrow" src={upArrow}></img>
            </div>
        </div>
    )
}