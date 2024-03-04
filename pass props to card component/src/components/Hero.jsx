import React from "react";
import groupPhoto from "../assets/images/Group 77.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="photo">
        <img src={groupPhoto} alt="" />
      </div>
      <div className="texts">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Hero;
