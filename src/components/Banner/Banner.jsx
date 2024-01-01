import ReefBg from "../../assets/homepageBg.png"

export default function Sectionreef() {

    return(   
            <div className="section">
                    <img className="section_bg-img" src={ReefBg}></img>
                    <p className="section_bg-text">
                    Chez vous,
                    <br className="hide-br"></br>
                    partout et ailleurs
                    </p>
            </div>
    )
}

/** faire que le texte soit au milieu après breakpoint du scss + voir changer animation flèche collapse avant tutorat + vérifier desktop à propos ( changer banner ) */