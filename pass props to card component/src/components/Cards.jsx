import React from "react";
import cardPhoto1 from "../assets/images/photo1.png";
import cardPhoto2 from "../assets/images/photo2.png";
import cardPhoto3 from "../assets/images/photo3.png";
import Card from "./Card";
const Cards = () => {
  return (
    <div className="cards">
      <img src="../assets/images/photo1.png" alt="" />
      <Card
        img={cardPhoto1}
        text="SOLD OUT"
        rating1="5.0"
        rating2="(6)"
        text2="Life lessons with Katie Zaferes"
        price="$136"
      />
      <Card
        img={cardPhoto2}
        text="ONLINE"
        rating1="5.0"
        rating2="(30)"
        text2="Learn wedding photography"
        price="$125"
      />
      <Card
        img={cardPhoto3}
        rating1="4.8"
        rating2="(2)"
        text2="Group Mountain Biking"
        price="$50"
      />
    </div>
  );
};

export default Cards;
