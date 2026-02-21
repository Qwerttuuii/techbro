import "./About.css";
import { useEffect } from "react";



function About() {
  useEffect(() => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
}, []);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About FID ASIKA & CO.</h1>
          <p>
            A law firm built on integrity, expertise, and unwavering
            commitment to our clients' success.
          </p>
        </div>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="about-content">

        {/* LEFT SIDE - MISSION */}
        <div className="mission-section reveal">
          <h2>Our Mission</h2>
          <p>
            To provide exemplary legal services that empower our clients
            to achieve their goals and navigate complex legal challenges
            with confidence and clarity.
          </p>

          <p>
            We believe in building lasting relationships based on trust,
            transparency, and a deep understanding of our clients’ needs.
          </p>
        </div>

        {/* RIGHT SIDE - VALUES */}
        <div className="values-section reveal">
          <h2>Our Values</h2>

          <div className="value-item">
            <h4>Integrity</h4>
            <p>Honesty and ethical conduct in all our dealings.</p>
          </div>

          <div className="value-item">
            <h4>Excellence</h4>
            <p>Commitment to the highest standards of legal practice.</p>
          </div>

          <div className="value-item">
            <h4>Client Focus</h4>
            <p>Your needs and goals drive our strategy.</p>
          </div>
        </div>

      </div>
      {/* Timeline Section */}
{/* WHY CHOOSE US SECTION */}
<section className="why-section">
  <div className="why-container">

    <h2>Why Choose Us</h2>

    <div className="why-grid">

      <div className="why-card">
        <h3>Proven Track Record</h3>
        <p>
          With hundreds of successful cases and satisfied clients,
          we have consistently delivered results across diverse
          practice areas and industries.
        </p>
      </div>

      <div className="why-card">
        <h3>Strategic Approach</h3>
        <p>
          We don't just handle cases—we develop comprehensive
          strategies aligned with your long-term goals and
          business objectives.
        </p>
      </div>

      <div className="why-card">
        <h3>Client Communication</h3>
        <p>
          Regular updates, clear explanations, and accessibility.
          You'll always know where your matter stands and what
          to expect next.
        </p>
      </div>

      <div className="why-card">
        <h3>Competitive Pricing</h3>
        <p>
          Transparent billing practices and flexible fee
          arrangements designed to provide exceptional value
          for your legal investment.
        </p>
      </div>

    </div>

  </div>
</section>




      
    </>
    
  );
  
}

export default About;
