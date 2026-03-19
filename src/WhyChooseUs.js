import "./WhyChooseUs.css";
import { useEffect } from "react";
import {
  FaBalanceScale,
  FaUserShield,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      title: "Experienced Attorneys",
      description:
        "Our firm is comprised of seasoned legal professionals with decades of combined experience across diverse areas of law.",
      icon: <FaBalanceScale />,
    },
    {
      title: "Confidential Consultation",
      description:
        "We uphold the highest standards of confidentiality, ensuring every consultation is handled with absolute discretion.",
      icon: <FaUserShield />,
    },
    {
      title: "Proven Track Record",
      description:
        "We have successfully represented numerous clients across complex legal matters with consistent, favorable outcomes.",
      icon: <FaChartLine />,
    },
    {
      title: "Client-Focused Approach",
      description:
        "We prioritize our clients’ needs, delivering tailored legal solutions with diligence, precision, and care.",
      icon: <FaHandshake />,
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".why-card");

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

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why">
      <div className="why-container">
        {/* HEADER */}
<div className="why-header">
  <p className="why-subtitle">WHY US</p>
 <h2 className="why-title">
  Why Choose Fid Asika Ilobi <span className="no-wrap">& Co.</span>
</h2>
  <div className="line"></div>
</div>

        {/* GRID */}
        <div className="why-grid">
          {features.map((item, index) => (
            <div
              key={index}
              className={`why-card hidden ${
                index === 1 ? "featured" : ""
              }`}
            >
              <div className="icon-box">{item.icon}</div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;