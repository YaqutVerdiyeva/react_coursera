import React from "react";
import cardPhoto1 from "../assets/images/photo1.png";
import cardPhoto2 from "../assets/images/photo2.png";
import cardPhoto3 from "../assets/images/photo3.png";
import star from "../assets/images/Star 1.png";
const Cards = () => {
  return (
    <div className="cards">
      <div className="card">
        <div className="photo">
          <img height={350} src={cardPhoto1} alt="" />
          <p>SOLD OUT</p>
        </div>
        <div className="text">
          <div className="rating">
            <img width={22} src={star} alt="" />
            <p>
              <span>5.0 </span> (6) USA
            </p>
          </div>
          <p>Life lessons with Katie Zaferes</p>
          <div className="price">
            <span>From $136 </span>
            <p> / person</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="photo">
          <img height={350} src={cardPhoto2} alt="" />
          <p>ONLINE</p>
        </div>
        <div className="text">
          <div className="rating">
            <img width={22} src={star} alt="" />
            <p>
              <span>5.0 </span> (30) USA
            </p>
          </div>
          <p>Learn wedding photography</p>
          <div className="price">
            <span>From $125 </span>
            <p> / person</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="photo">
          <img height={350} src={cardPhoto3} alt="" />
        </div>
        <div className="text">
          <div className="rating">
            <img width={22} src={star} alt="" />
            <p>
              <span>4.8 </span> (2) USA
            </p>
          </div>
          <p>Group Mountain Biking</p>
          <div className="price">
            <span>From $50 </span>
            <p> / person</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
