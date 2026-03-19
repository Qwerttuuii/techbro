import "./PracticeSection.css";
import { useEffect, useRef, useState } from "react";

function PracticeSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardsRef = useRef([]);

  const practiceAreas = [
  {
    title: "Corporate & Commercial Practice",
    description:
      "We provide strategic legal counsel to businesses at every stage of growth, including company formation, governance, mergers and acquisitions, and complex commercial transactions.",
    services: [
      "Company formation & structuring",
      "Mergers & acquisitions",
      "Corporate governance",
      "Commercial contract drafting",
    ],
  },
  {
    title: "Banking & Finance Law",
    description:
      "We advise financial institutions, corporations, and individuals on complex financing arrangements, including project finance, syndicated lending, and regulatory compliance.",
    services: [
      "Litigation & dispute resolution",
      "Leases and Assignments",
      "Banking compliance",
      "Mortgage advisory services",
      "Debt restructuring",
      "capital market Documentation",
    ],
  },
  {
    title: "Intellectual Property Law",
    description:
      "We assist clients in protecting, managing, and enforcing intellectual property rights, ensuring long-term value and competitive advantage.",
    services: [
      "Trademark registration",
      "Copyright protection",
      "IP enforcement",
      "Licensing agreements",
    ],
  },
  {
    title: "Real Estate & Property Law",
    description:
      "We provide comprehensive legal services in property acquisition, management, and transactions for both corporate and individual clients.",
    services: [
      "Property acquisition",
      "Lease agreements",
      "Title verification",
      "Property management advisory",
      "Dispute resolution",
      "Legal assistance in structuring, financing, and managing real estate projects",
    ],
  },
  {
    title: "Advocacy & Litigation",
    description:
      "We represent clients in complex disputes while also advising on strategic settlements, ensuring the most commercially beneficial outcomes.",
    services: [
      "Civil litigation",
      "Commercial disputes",
      "Arbitration & mediation",
      "Settlement negotiation",
    ],
  },
  {
    title: "Election & Political Law",
    description:
      "We advise political parties, candidates, and institutions on electoral compliance, disputes, and governance matters.",
    services: [
      "Electoral compliance",
      "Election petitions",
      "Campaign advisory",
      "Political risk assessment",
    ],
  },
];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            entry.target.style.transitionDelay = `${index * 0.15}s`;
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
  }, []);

  return (
    <section className="practice">
      <div className="practice-container">
        <h2>Practice Areas</h2>

        <p className="practice-subtext">
          Our firm delivers comprehensive legal services tailored to meet the
          evolving needs of individuals, corporations, and institutions.
        </p>

        <div className="practice-cards">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              data-index={index}
              className="card hidden"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="card-content">
                <h3 className="title">{area.title}</h3>
                <p>{area.description}</p>

                {/* VIEW MORE BUTTON */}
                <span
                  className="view-more"
                  onClick={() =>
                    setActiveIndex(index === activeIndex ? null : index)
                  }
                >
                  {activeIndex === index ? "View Less" : "View More"}{" "}
                  <span className="arrow">→</span>
                </span>

                {/* EXPANDABLE CONTENT */}
               {activeIndex === index && (
              <div className="extra-content">
              <ul>
              {area.services.map((service, i) => (
             <li key={i}>{service}</li>
              ))}
            </ul>
            </div>
            )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PracticeSection;