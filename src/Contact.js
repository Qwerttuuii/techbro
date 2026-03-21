import React, { useEffect, useState } from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import heroImg from "./assets/contactus.avif";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

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
    return () => observer.disconnect();
  }, []);

  // ✅ VALIDATION
  const validate = (form) => {
    const newErrors = {};

    if (!form.name.value.trim()) newErrors.name = "Name is required";
    if (!form.email.value.includes("@")) newErrors.email = "Valid email required";
    if (!form.message.value.trim()) newErrors.message = "Message required";

    return newErrors;
  };

  // ✅ SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mzdjwqbe", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        alert("Something went wrong.");
      }
    } catch {
      alert("Network error.");
    }

    setLoading(false);
  };

  return (
    <>
      {/* HERO */}
      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay"></div>
        <div className="contact-hero-content">
          <p className="hero-subtitle">CONTACT</p>
          <h1>Get In Touch</h1>
          <div className="hero-line"></div>
          <p>We are here to provide clarity and legal direction.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-main">

            {/* ===== FORM ===== */}
            <form onSubmit={handleSubmit} className="contact-form reveal">
              <h2>Send a Message</h2>

              <input name="name" placeholder="Your Name" />
              {errors.name && <span className="error">{errors.name}</span>}

              <input name="email" placeholder="Your Email" />
              {errors.email && <span className="error">{errors.email}</span>}

              <input name="subject" placeholder="Subject" />

              <textarea name="message" rows={6} placeholder="Your Message" />
              {errors.message && <span className="error">{errors.message}</span>}

              <button type="submit" disabled={loading}>
                {loading ? <span className="spinner"></span> : "Send Message"}
              </button>
            </form>

            {/* ===== INFO ===== */}
            <div className="contact-info reveal">

              <div className="info-intro">
                <h2>Let's Discuss Your Case</h2>
                <p>
                  Reach out for a confidential consultation. Our team is ready
                  to provide the legal guidance you need.
                </p>
              </div>

              <div className="info-row">
                <div className="info-box">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <h4>OFFICES</h4>

                  <p>
                    <strong>Owerri:</strong><br />
                    {/* ADD ADDRESS */}
                    No 56 MCC/Uratta Road, Owerri
                  </p>

                  <p style={{ marginTop: "10px" }}>
                    <strong>Orlu:</strong><br />
                    {/* ADD ADDRESS */}
                    No 3 Ihioma Road, Orlu
                  </p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-box">
                  <FaPhoneAlt />
                </div>
                <div className="info-content">
                  <h4>PHONE</h4>
                  <p>+234 8032707050</p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-box">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h4>EMAIL</h4>
                  <p>fidasikailobilawfirm@gmail.com</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SUCCESS MODAL */}
      {success && (
        <div className="success-modal">
          <div className="success-box">
            <h3>Message Sent ✅</h3>
            <p>We’ll get back to you within 24 hours.</p>
            <button onClick={() => setSuccess(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;