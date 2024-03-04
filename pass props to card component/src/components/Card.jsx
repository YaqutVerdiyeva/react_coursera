import React from "react";
import star from "../assets/images/Star 1.png";

const Card = ({ img,  rating1, rating2, text, text2, price }) => {
  return (
    <div>
      <div className="card">
        <div className="photo">
          <img height={350} src={img} alt="" />
          {text && <p>{text}</p>}
        </div>
        <div className="text">
          <div className="rating">
            <img width={22} src={star} alt="" />
            <p>
              <span>{rating1} </span> {rating2} USA
            </p>
          </div>
          <p>{text2}</p>
          <div className="price">
            <span>From {price} </span>
            <p> / person</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
