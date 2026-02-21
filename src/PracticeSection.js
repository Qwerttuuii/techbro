import "./PracticeSection.css";
import {
  FaBalanceScale,
  FaShieldAlt,
  FaBriefcase,
  FaUsers,
} from "react-icons/fa";
import { useEffect, useRef } from "react";

function PracticeSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
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

    cardsRef.current.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section className="practice">
      <div className="practice-container">
        <h2>Practice Areas</h2>

        <p className="practice-subtext">
          We specialize in a diverse range of legal services to meet the unique
          needs of individuals, businesses, and organizations.
        </p>

        <div className="practice-cards">
          {/* Card 1 */}
          <div
            className="card hidden"
            ref={(el) => (cardsRef.current[0] = el)}
          >
            <FaBalanceScale className="icon" />
            <h3>Corporate Law</h3>
            <p>
              Comprehensive legal support for businesses of all sizes, from
              formation to complex corporate transactions.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="card hidden"
            ref={(el) => (cardsRef.current[1] = el)}
          >
            <FaShieldAlt className="icon" />
            <h3>Litigation & Dispute Resolution</h3>
            <p>
              Expert representation in disputes, enforcement, and complex
              litigation matters.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="card hidden"
            ref={(el) => (cardsRef.current[2] = el)}
          >
            <FaBriefcase className="icon" />
            <h3>Intellectual Property</h3>
            <p>
              Protection and management of intellectual property assets,
              including patents, trademarks, and copyrights.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="card hidden"
            ref={(el) => (cardsRef.current[3] = el)}
          >
            <FaUsers className="icon" />
            <h3>Employment Law</h3>
            <p>
              Guidance on employment contracts, workplace compliance, and labor
              dispute resolution for employers and employees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PracticeSection;
