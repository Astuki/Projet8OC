import carrouselImg from "../../assets/logementsCarrousel.png"
import rightArrow from "../../assets/ArrowRight.png"
import leftArrow from "../../assets/ArrowLeft.png"

export default function Carrousel() {
    return (
        <div className="Wrapper-Carrousel">
            <img className="Wrapper-Carrousel_ArrowLeft" src={leftArrow}></img>
            <img className="Wrapper-Carrousel_carrouselImg" src={carrouselImg}></img>
            <img className="Wrapper-Carrousel_ArrowRight" src={rightArrow}></img>
        </div>
    )
}