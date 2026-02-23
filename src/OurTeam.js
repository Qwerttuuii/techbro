import React from "react";
import "./OurTeam.css";
import { useEffect } from "react";

function OurTeam() {
  useEffect(() => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
}, []);
  return (
    <div className="team-page">

      {/* HERO SECTION */}
      <section className="team-hero">
        <h1>Our Team</h1>
        <p>
          Meet the experienced legal professionals dedicated to serving
          our clients with excellence and integrity.
        </p>
      </section>

      {/* TEAM SECTION */}
      
<section className="team-section parallax-section">
  <div className="team-subheader fade-in">
  <h2>Leadership & Legal Team</h2>
  <p>
    Our team combines experience, strategic insight, and dedication
    to deliver exceptional legal representation.
  </p>
</div>

  {/* Senior Partner */}
  <div className="senior-wrapper">
    <div className="team-card senior fade-in">
      <img src="/images/senior.jpeg" alt="Senior Partner" className="team-img" />
        <div className="team-info">
      <h3>Mbuba Ilobi Asika</h3>
      <span>Senior Partner</span>
    </div>
    </div>
  </div>

  {/* Other Team Members */}
  <div className="team-container">   

    <div className="team-card fade-in">
      <img src="/images/partner1.png" alt="Partner" className="team-img" />
      <div className="team-info">
      <h3>Partner Name</h3>
      <span>Partner</span>
    </div>
    </div>

    <div className="team-card fade-in">
      <img src="/images/partner2.png" alt="Partner" className="team-img" />
        <div className="team-info">
      <h3>Partner Name</h3>
      <span>Partner</span>
    </div>
    </div>

    <div className="team-card fade-in">
      <img src="/images/partner3.png" alt="Partner" className="team-img" />
      <div className="team-info">
      <h3>Partner Name</h3>
      <span>Partner</span>
    </div>
    </div>

    <div className="team-card fade-in">
      <img src="/images/partner4.png" alt="Partner" className="team-img" />
      <div className="team-info">
      <h3>Partner Name</h3>
      <span>Partner</span>
    </div>
    </div>

    <div className="team-card fade-in">
      <img src="/images/secretary1.png" alt="Secretary" className="team-img" />
      <div className="team-info">
      <h3>Secretary Name</h3>
      <span>Executive Secretary</span>
    </div>
    </div>

    <div className="team-card fade-in">
      <img src="/images/secretary2.png" alt="Secretary" className="team-img" />
       <div className="team-info">
      <h3>Secretary Name</h3>
      <span>Administrative Secretary</span>
    </div>
    </div>

  </div>
  <br></br><br></br>
  {/* WHY FID ASIKA SECTION */}
<section className="why-firm-section">

  <div className="why-firm-header fade-in">
    <h2>Why FID ASIKA & CO.</h2>
  </div>

  <div className="why-firm-grid">

    {/* Left Column */}
    <div className="why-column fade-in delay-1">
      <h3>Experienced Leadership</h3>
      <p>
        Led by Fidelis Asika with over 25 years of distinguished legal
        experience, our senior partner guides the firm’s strategic
        direction with clarity and vision. Each partner brings
        14–18 years of specialized expertise across diverse
        practice areas.
      </p>

      <ul>
        <li>Corporate Law & M&A</li>
        <li>Litigation & Dispute Resolution</li>
        <li>Intellectual Property Law</li>
        <li>Employment & Real Estate</li>
      </ul>
    </div>

    {/* Right Column */}
    <div className="why-column fade-in delay-2">
      <h3>Professional Excellence</h3>
      <p>
        Our administrative and legal teams ensure seamless client
        service and operational efficiency. We combine deep legal
        expertise with meticulous attention to detail and
        uncompromising professional standards.
      </p>

      <ul>
        <li>Client-focused service</li>
        <li>Proven track record</li>
        <li>Efficient operations</li>
        <li>Commitment to integrity</li>
      </ul>
    </div>

  </div>

</section>
</section>
    </div>
  );
}

export default OurTeam;