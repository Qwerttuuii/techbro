import ceoImage from "./assets/FIDASIKA.jpeg";
import "./WhoWeAre.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function WhoWeAre() {
  useEffect(() => {
    const counters = document.querySelectorAll(".stat-number");
    const elements = document.querySelectorAll(".who-text, .who-image, .stat-box");

    const sectionObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => sectionObserver.observe(el));

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
        } else if (target === 95) {
          counter.innerText = target + "%";
        } else {
          counter.innerText = target + "+";
        }
      };

      updateCount();
    };

    const counterObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => {
      counterObserver.observe(counter);
    });

    return () => {
      sectionObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return (
    <section className="who">
      <div className="who-container">
        {/* LEFT TEXT */}
        <div className="who-text hidden">
          <h2>Who We Are</h2>

          <p>
            Fidelis Asika Ilobi & Company ("The Firm"). is one of Nigeria's leading law firm with a rich heritage
            and culture of excellence. The law firm was established in the year 1964, by Chief Fidelis Asika Ilobi of the blessed memory.
            We not only have the confidence to challenge existing thinking but also the willingness to push boundaries within the framework of the law
            The firm provides specialized high quality legal services.
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



        {/* CEO image here  */}
        <div className="who-image hidden">
          <img src={ceoImage} alt="CEO" />


        </div>
      </div>
      {/* STATS SECTION */}
      <section className="who-stats">
        <div className="stats-container">

          <div className="stat-box hidden">
            <h2 className="stat-number" data-target="500">0</h2>
            <p>Cases Successfully Handled</p>
          </div>

          <div className="stat-box hidden">
            <h2 className="stat-number" data-target="95">0</h2>
            <p>Client Satisfaction Rate</p>
          </div>

          <div className="stat-box hidden">
            <h2 className="stat-number" data-target="50">0</h2>
            <p>Expert Legal Professionals</p>
          </div>

        </div>
      </section>
    </section>
  );
}

export default WhoWeAre;
