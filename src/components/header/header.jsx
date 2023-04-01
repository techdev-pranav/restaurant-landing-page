import React from "react";
import "./header.css";

const Header = () => {
  return (
    <nav className="app__header">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#offers">Offers</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
