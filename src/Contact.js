import React, { useEffect } from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="contact-section">
      <div className="contact-container">

        <div className="contact-header reveal">
          <div className="gold-line"></div>
          <h1>Ready to Work Together?</h1>
          <p>
            Contact us today for a confidential consultation.
            Strategic legal representation begins with a conversation.
          </p>
        </div>

        <div className="contact-main reveal">

          {/* Contact Info */}
          <div className="contact-info">

            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <div className="info-text">
                <h4>Phone</h4>
                <p>+234 8032707050</p>
              </div>
            </div>

            <div className="vertical-divider"></div>

            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div className="info-text">
                <h4>Email</h4>
                <p>fidasikailobilawfirm@gmail.com</p>
              </div>
            </div>

          </div>

          {/* Merged Office Card */}
          <div className="office-wrapper">

            <h3 className="office-header">Our Offices</h3>

            <div className="office-card">

              <div className="office-block">
                <FaMapMarkerAlt className="location-icon" />
                <div>
                  <h4>OWERRI</h4>
                  <p>No 56 Mcc/Uratta</p>
                  <p>Professional District</p>
                  <p>Owerri, Imo State, Nigeria</p>
                </div>
              </div>

              <div className="office-divider"></div>

              <div className="office-block">
                <FaMapMarkerAlt className="location-icon" />
                <div>
                  <h4>Orlu</h4>
                  <p>No 3 Ihioma Road</p>
                  <p>Central Area</p>
                  <p>Orlu, Imo State, Nigeria</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
