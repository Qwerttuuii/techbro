import ceoImage from "./assets/FIDASIKA.jpeg";
import "./WhoWeAre.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function WhoWeAre() {
  useEffect(() => {
  const counters = document.querySelectorAll(".stat-number");

  const startCounting = (counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const updateCount = () => {
      count += increment;

      if (count < target) {
        if (target === 95) {
          counter.innerText = Math.floor(count) + "%";
        } else {
          counter.innerText = Math.floor(count) + "+";
        }
        requestAnimationFrame(updateCount);
      } else {
        if (target === 95) {
          counter.innerText = target + "%";
        } else {
          counter.innerText = target + "+";
        }
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => {
    observer.observe(counter);
  });

}, []);
  return (
    <section className="who">
      <div className="who-container">
        {/* LEFT TEXT */}
        <div className="who-text">
          <h2>Who We Are</h2>

          <p>
            FID ASIKA & CO. was founded on the principle that exceptional legal
            counsel should be accessible to those who need it most. Our team of
            experienced attorneys is dedicated to providing strategic,
            results-driven representation.
          </p>

          <p>
            With a track record of successful cases and satisfied clients, we
            pride ourselves on our attention to detail, ethical practice, and
            commitment to excellence in all aspects of our work.
          </p>

          <Link to="/about" className="read-more">
            Read Our Full Story →
          </Link>
        </div>

        
        
          {/* You will place CEO image here later */}
          <div className="who-image">
  <img src={ceoImage} alt="CEO" />
        

        </div>
      </div>
      {/* STATS SECTION */}
<section className="who-stats">
  <div className="stats-container">

    <div className="stat-box">
      <h2 className="stat-number" data-target="500">0</h2>
      <p>Cases Successfully Handled</p>
    </div>

    <div className="stat-box">
      <h2 className="stat-number" data-target="95">0</h2>
      <p>Client Satisfaction Rate</p>
    </div>

    <div className="stat-box">
      <h2 className="stat-number" data-target="50">0</h2>
      <p>Expert Legal Professionals</p>
    </div>

  </div>
</section>
    </section>
  );
}

export default WhoWeAre;
