import React from "react";
import "./Homepage.css";
import { images } from "../../constants";

const Homepage = () => {
  return (
    <div id="home" className="app__home">
      <div className="app__home-content">
        <img src={images.logo} />
        <h1 className="app__heading">Mariachi</h1>
        <p className="app__text">
          Lorem ipsum dolor sit amet, consectetur adi-
          <br />
          pscing elit. Vivamus lacinia odio vitae vestibu-
          <br />
          lum vestibulum.
        </p>
        <button className="app__button">Order Now</button>
      </div>
      <div className="app__home-image"></div>
    </div>
  );
};

export default Homepage;
