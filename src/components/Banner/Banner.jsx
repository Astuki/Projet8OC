import ReefBg from "../../assets/homepageBg.png"

export default function Sectionreef() {

    return(   
            <div className="section">
                    <img className="section_bg-img" src={ReefBg}></img>
                    <p className="section_bg-text">
                    Chez vous,
                    <br></br>
                    partout et ailleurs
                    </p>
            </div>
    )
}