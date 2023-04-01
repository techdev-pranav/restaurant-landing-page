import React from "react";
import "./Offers.css";
import { images } from "../../constants";

const Offers = () => {
  return (
    <div id="offers" className="app__offers">
      <div className="app__offers-content">
        <h1 className="app__heading">See our Offers</h1>
        <p className="app__text">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipscing elit. Vivamus lacinia odio vitae
          <br />
          vestibulum vestibulum
        </p>
        <button className="app__button">SEE OFFERS</button>
      </div>
      <div className="app__offers-image">
        <img src={images.img5} />
      </div>
    </div>
  );
};

export default Offers;
