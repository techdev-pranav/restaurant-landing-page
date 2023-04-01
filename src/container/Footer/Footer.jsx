import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer" className="app__footer">
      <div className="app__footer-data">
        <h2>Mariachi</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipscing elit. Aliquam at dignissim nunc,
          <br />
          id maximus ex. Etiam nec dignissim elit, at
          <br />
          dignissim enim.
        </p>
      </div>
      <div className="app__footer-content">
        <h2>About</h2>
        <p>History</p>
        <p>Our Team</p>
        <p>Brand Guidelines</p>
        <p>Terms & Condition</p>
        <p>Privacy Policy</p>
      </div>
      <div className="app__footer-content">
        <h2>Services</h2>
        <p>How to order</p>
        <p>Our Product</p>
        <p>Offers</p>
        <p>Promo</p>
        <p>Payment Method</p>
      </div>
      <div className="app__footer-content">
        <h2>Other</h2>
        <p>Contact Us</p>
        <p>Help</p>

      </div>
    </div>
  );
};

export default Footer;
