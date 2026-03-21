import "./About.css";
import { useEffect } from "react";
import heroImg from "./assets/lawlib.avif";

function About() {
 useEffect(() => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");

          // COUNT-UP LOGIC
          if (entry.target.classList.contains("stat-box")) {
            const countEl = entry.target.querySelector(".count");
            const target = +countEl.getAttribute("data-target");

            let start = 0;
            const duration = 1200;
            const increment = target / (duration / 16);

            const updateCount = () => {
              start += increment;
              if (start < target) {
                countEl.innerText = Math.floor(start);
                requestAnimationFrame(updateCount);
              } else {
                countEl.innerText = target;
              }
            };

            updateCount();
          }
        }
      });
    },
    { threshold: 0.3 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="about-hero-content">
          <p className="hero-subtitle">OUR STORY</p>

          <h1 className="hero-title">
             Fid Asika Ilobi & Co.
          </h1>

          <div className="hero-line"></div>

          <p className="hero-text">
            A law firm built on integrity and a relentless
            commitment to delivering exceptional legal results.
          </p>
        </div>
      </section>

      {/* ===== STORY SECTION ===== */}
      <section className="about-story">
        <div className="about-container">

          <div className="about-header reveal">
            <p className="about-subtitle">EST. 1964</p>
            <h2 className="about-title">Our Firm’s Story</h2>
            <div className="about-line"></div>
          </div>

          <p className="about-text reveal">
            Fidelis Asika Ilobi & Company ("The Firm") is one of Nigeria's leading low firms with a rich heritage and culture of excellence. The law firm was established in the year 1964, by Chief Fidelis Asika Ilobi of the blessed memory. We not only have the confidence to challenge existing thinking but also the willingness to push boundaries within the framework of the law. The firm provides specialized high quality legal services.

Through consistency in service delivery spanning over a period of fifty years, diligence in legal research and cutting edge information technology, we have focused on providing solutions for our clients in ways that create value for them. The firm's practice areas enhance work specialization as our lawyers provide advice and representation for clients in their specific industries. Through meticulous legal research and years of experience, our lawyers have been able to ensure that the quality of advice and service to clients is maintained and continuously improved through the years
          </p>

          <p className="about-text reveal">
        The firm is distinguished not only by the depth and scope of its specialized legal advisory services, but also by its expertise in corporate and commercial set up, financing arrangements, loan recovery and restructuring. We are known for effectiveness in assisting clients accomplish their objectives in the Nigerian market, and other markets along the west coast of Africa and beyond
          </p>

        </div>
      </section>

      {/* ===== MISSION + VALUES ===== */}
      <section className="about-content">
        <div className="about-container grid">

          <div className="mission-section reveal">
            <h3>Our Mission</h3>
            <div className="mini-line"></div>

            <p>
            Our primary objective is to constantly deliver first class service built on excellent professional practice and sustainable dient relationship
            </p>

          
          </div>

          <div className="values-section reveal">
            <h3>Our Values</h3>
            <div className="mini-line"></div>

            <div className="value-item">
              <h4>Integrity</h4>
              <p>We uphold the highest ethical standards.</p>
            </div>

            <div className="value-item">
              <h4>Excellence</h4>
              <p>Commitment to precision and top-tier service.</p>
            </div>

            <div className="value-item">
              <h4>Client Focus</h4>
              <p>Your success defines our strategy.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ===== WHY SECTION ===== */}
      <section className="why-section reveal">
        <div className="about-container">

          <div className="about-header reveal">
            <p className="about-subtitle">WHY CHOOSE US</p>
            <h2 className="about-title">
              Why Choose Fid Asika & Co.
            </h2>
            <div className="about-line"></div>
          </div>

          <div className="why-grid">
            {[
              {
                title: "Proven Track Record",
                text: "Consistently delivering successful outcomes across complex legal matters.",
              },
              {
                title: "Strategic Approach",
                text: "We align legal strategies with your long-term goals.",
              },
              {
                title: "Clear Communication",
                text: "Transparent updates at every stage of your case.",
              },
              {
                title: "Value-Driven Service",
                text: "Flexible pricing designed for maximum value.",
              },
            ].map((item, i) => (
              <div key={i} className="why-card reveal">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* ===== STATS SECTION ===== */}
<section className="stats-section">
  <div className="about-container stats-grid">

    {[
      { number: 62, suffix: "+", label: "Years Experience" },
      { number: 2000, suffix: "+", label: "Cases Handled" },
      { number: 98, suffix: "%", label: "Success Rate" },
      { number: 700, suffix: "+", label: "Clients Served" },
    ].map((stat, i) => (
      <div key={i} className="stat-box reveal">
        <h2 className="count" data-target={stat.number}>
          0{stat.suffix}
        </h2>
        <p>{stat.label}</p>
      </div>
    ))}

  </div>
</section>
     
      
<section className="memberships">
  <div className="about-container">

    {/* HEADER */}
    <div className="about-header reveal">
      <p className="about-subtitle">AFFILIATIONS</p>
      <h2 className="about-title">Memberships & Certifications</h2>
      <div className="about-line"></div>
    </div>

    {/* GRID */}
    <div className="memberships-grid">
      

      {[
        {
          title: "Nigerian Bar Association",
          text: "Registered members of the premier legal professional body in Nigeria.",
        },
        {
          title: "International Bar Association",
          text: "Active participants in global legal discourse and cross-border practice.",
        },
        {
          title: "Chartered Institute of Arbitrators",
          text: "Certified expertise in alternative dispute resolution and arbitration.",
        },
        {
          title: "Lagos Chamber of Commerce",
          text: "Supporting business growth through legal and commercial partnerships.",
        },
      ].map((item, i) => (
        <div key={i} className="membership-card reveal">
          <div className="membership-dot"></div>

          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}

    </div>
  </div>
</section>
    </>
  );
}

export default About;