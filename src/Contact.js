import React from "react";
import "./Contact.css";
import owerriImg from "../src/assets/owerri.png";
import orluImg from "../src/assets/orlu.png";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We would love to hear from you</p>
      </div>

      <div className="contact-container">

        {/* Locations */}
        <div className="locations">

          <div className="location-card reveal">
            <h1>OWERRI</h1>
            <h2>N0 56 Mcc/Uratta Road, Opposite Unit One Office Complex, Owerri 460242.</h2>
            <img src={owerriImg} alt="Owerri address" />
          </div>

          <div className="location-card reveal">
            <h1>ORLU</h1>
            <h2>N0 3 Ihioma Road Orlu, Imo State Nigeria.</h2>
            <img src={orluImg} alt="Orlu address" />
          </div>

        </div>

        {/* Contact Info */}
        <div className="contact-info reveal">
          <div className="info-block">
            <h1>Call Us</h1>
            <p>+234 8032707050</p>
          </div>

          <div className="info-block">
            <h2>E-mail</h2>
            <p>your@email.com</p>
          </div>

          <div className="info-block">
            <h2>Hours of Operation</h2>
            <p>9:00 AM – 6:00 PM WAT<br />Monday – Friday</p>
          </div>

          <div className="socials">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
