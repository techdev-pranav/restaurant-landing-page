import React from "react";
import "./About.css";
import { images } from "../../constants";

const About = () => {
  return (
    <div id="about" className="app__about">
      <div className="app__about-image">
        <img src={images.img6} />
      </div>
      <div className="app__about-content">
        <h1 className="app__heading">About Mariachi</h1>
        <p className="app__text">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipscing elit. Vivamus lacinia odio vitae
          <br />
          vestibulum vestibulum
        </p>
        <button className="app__button">TELL ME MORE</button>
      </div>
    </div>
  );
};

export default About;
