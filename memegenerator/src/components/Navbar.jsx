import React from "react";
import logo from "../Troll face.png";
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="text">MemeGenerator</div>
          </li>
          <li className="heading">React-course - Project 3</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
