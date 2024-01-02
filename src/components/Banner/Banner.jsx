export default function Banner({imageUrl, showText = true}) {
    return(   
            <div className="section">
                <img className="section_bg-img" src={imageUrl} alt="banner"></img>
                {showText && (
                <p className="section_bg-text">
                    Chez vous, ‎<br className="hide-br" /> partout et ailleurs
                </p>
            )}
            </div>
    )
}

/**vérifier desktop à propos ( changer banner ) */