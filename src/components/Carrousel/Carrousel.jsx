import React, { useState } from 'react';
import rightArrow from "../../assets/ArrowRight.png";
import leftArrow from "../../assets/ArrowLeft.png";
import logements from "../../jsondata/logements.json"

export default function Carrousel({ lodging }) {
    if (!lodging || !lodging.pictures) {
        return <div>Loading...</div>;
    }

    const [currentImage, setCurrentImage] = useState(1);
    const totalImages = lodging.pictures.length;

    const handleNextImage = () => {
        setCurrentImage((prevImage) => (prevImage === totalImages ? 1 : prevImage + 1));
    };

    const handlePrevImage = () => {
        setCurrentImage((prevImage) => (prevImage === 1 ? totalImages : prevImage - 1));
    };

    return (
        <>
            <div className="Wrapper-Carrousel">
                <img className="Wrapper-Carrousel_ArrowLeft" src={leftArrow} onClick={handlePrevImage} alt="Left Arrow" />
                <img className="Wrapper-Carrousel_carrouselImg" src={lodging.pictures[currentImage - 1]} alt={`Image ${currentImage}`} />
                <img className="Wrapper-Carrousel_ArrowRight" src={rightArrow} onClick={handleNextImage} alt="Right Arrow" />
            </div>
            <div className="Counter">{`${currentImage}/${totalImages}`}</div> 
        </>
    );
}