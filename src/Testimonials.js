import "./Testimonials.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Testimonials() {
  const navigate = useNavigate();

useEffect(() => {
  const cards = document.querySelectorAll(".testimonial-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {

        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("show");
          }, index * 200); // 200ms delay between each card
        });

        observer.disconnect(); // run only once
      }
    });
  }, { threshold: 0.2 });

  if (cards.length > 0) {
    observer.observe(cards[0]);
  }

}, []);

  return (
    <section className="testimonials">
      <div className="testimonial-container">

        <div className="testimonial-header">
          <h2>What Our Clients Say</h2>
          <p>
            Real results from real clients. We’re proud of the relationships
            we’ve built and the outcomes we’ve achieved.
          </p>
        </div>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>
              "FID ASIKA & CO. handled our corporate merger seamlessly.
              Their expertise and strategic thinking made a complex
              transaction straightforward. Highly recommended."
            </p>
            <h4>Sarah Johnson</h4>
            <span>CEO, TechVision Inc.</span>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>
              "When we faced a critical IP dispute, the team acted decisively
              and protected our interests completely. Their knowledge
              of intellectual property law is exceptional."
            </p>
            <h4>Michael Chen</h4>
            <span>Founder, InnovateLabs</span>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>
              "Outstanding employment law counsel. The team guided us
              through a complex workplace matter with professionalism
              and clarity."
            </p>
            <h4>Rebecca Martinez</h4>
            <span>HR Director, Global Solutions Ltd.</span>
          </div>

        </div>

        {/* CTA SECTION */}
        <div className="testimonial-cta">
          <p>Meet the experienced team behind these success stories</p>

          <button
            className="team-btn"
            onClick={() => navigate("/OurTeam")}
          >
            View Our Team
          </button>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;