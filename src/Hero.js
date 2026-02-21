import "./Hero.css";
import heroBg from "./assets/hero-bg.png";

function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

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
            onClick={() => scrollToSection("contact")}
          >
            Schedule Consultation →
          </button>

          <button
            className="secondary-btn"
            onClick={() => scrollToSection("about")}
          >
            Learn About Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
