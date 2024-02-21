import React from "react";
import logo from "../assets/image/react.png"
const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img width="40px" height="40px" src={logo} alt="" />
          <h2>ReactFacts</h2>
        </div>
        <div>
          <h4>React Course - Project 1</h4>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
