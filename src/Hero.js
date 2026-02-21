import "./Hero.css";
import heroBg from "./assets/hero-bg.png";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-content">
        <h1>
          Your Trusted Legal <br /> Partner
        </h1>

        <p>
          At FID ASIKA & CO., we provide comprehensive legal services with
          unwavering dedication to our clients. Our expert team combines
          decades of experience with innovative solutions.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/Contact")}
          >
            Schedule Consultation →
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/About")}
          >
            Learn About Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;