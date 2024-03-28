import React, { useState } from "react";
import memesData from "../data.js";

const Hero = () => {
  const [image, setImage] = useState("");

  function handleClick(e) {
    e.preventDefault();
    const memeImage = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeImage.length);
    setImage(memeImage[randomNumber].url);
    console.log(memeImage[randomNumber].url);
  }
  return (
    <div className="hero-section">
      <form action="">
        <div className="inputs">
          <input type="text" placeholder="Top text" />
          <input type="text" placeholder="Bottom text" />
        </div>
        <button onClick={handleClick} className="add-btn">
          Get a newmeme image
        </button>
        <img width="650px" height="350px" src={image} alt="" />
      </form>
    </div>
  );
};

export default Hero;
