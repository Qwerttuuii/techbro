import ceoImage from "./assets/FIDASIKA.jpeg";
import "./WhoWeAre.css";
import { Link } from "react-router-dom";

function WhoWeAre() {
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

        {/* RIGHT IMAGE SPACE (for CEO) */}
        <div className="who-image">
          {/* You will place CEO image here later */}
          <div className="who-image">
  <img src={ceoImage} alt="CEO" />
        </div>

        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
