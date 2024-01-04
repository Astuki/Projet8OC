import React from 'react';
import RedStar from '../../assets/RedStar.png'
import GreyStar from '../../assets/GreyStar.png'

const Rating = ({ value }) => {
  const maxStars = 5;
  const filledStars = Math.round(value); 

  const stars = Array.from({ length: maxStars }, (_, index) => (
    <img
      key={index}
      src={index < filledStars ? RedStar : GreyStar}
      alt={`Star ${index + 1}`}
      className="Stars"
    />
  ));

  return <div className="rating">{stars}</div>;
};

export default Rating;