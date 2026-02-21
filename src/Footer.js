import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div>
          <h2>FID ASIKA & CO.</h2>
          <p>Dedicated to providing excellent legal counsel and representation</p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <Link to="/OurTeam">OurTeam</Link>
          <Link to="/Contact">Contact Us</Link>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 FID ASIKA & CO. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
