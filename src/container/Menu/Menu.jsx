import React from "react";
import "./Menu.css";
import { images } from "../../constants";

const Menu = () => {
  return (
    <div id="menu" className="app__menu">
      <div className="app__menu-content">
        <h1 className="app__heading">Don't Miss our Menu!</h1>
        <p className="app__text">
          Lorem ipsum dolor sit amet, consectetur adipscing elit. Vivamus
          <br />
          lacinia odio vitae vestibulum vestibulum.
        </p>
        <button className="app__button">SEE MENU</button>
      </div>
      <div className="app__menu-image">
        <img src={images.img4} />
      </div>
    </div>
  );
};

export default Menu;
