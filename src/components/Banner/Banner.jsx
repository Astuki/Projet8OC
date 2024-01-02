import ReefBg from "../../assets/homepageBg.png";

export default function Banner({imageUrl}) {
    return(   
            <div className="section">
                <img className="section_bg-img" src={imageUrl} alt="banner"></img>
                <p className="section_bg-text">
                Chez vous, ‎ 
                <br className="hide-br"></br>
                partout et ailleurs
                </p>
            </div>
    )
}

/**vérifier desktop à propos ( changer banner ) */