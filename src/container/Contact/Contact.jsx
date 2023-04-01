import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="app__contact">
      <h1 className="app__heading">Get our Latest Offers!</h1>
      <p className="app__text">
        Lorem ipsum dolor sit amet, consectetur adipscing elit. Vivamus lac-
        <br />
        inia odio vitae vestibulum vestibulum.
      </p>

      <div className="app__contact-input">
        <input type="email" placeholder="Your Email"></input>
        <button>SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default Contact;
