import "./TrustedBy.css";

function TrustedBy() {
  const logos = [
    "/logos/PDP.jpg",
    "/logos/APC.jpg",
    "/logos/INEC.jpg",
    "/logos/UNION BANK.jpg",
    "/logos/TOTAL.jpg",
    "/logos/STERLING BANK.jpg",
    "/logos/GOVERNMENT OF IMO STATE.jpg",
  ];

  return (
    <section className="trusted">
      <div className="trusted-container">

        {/* HEADER */}
        <div className="trusted-header">
          <p className="trusted-subtitle">TRUSTED BY</p>
          <h2 className="trusted-title">Our Clients & Partners</h2>
          <div className="trusted-line"></div>
        </div>

        {/* LOGO SLIDER */}
        <div className="logo-slider">
          <div className="logo-track">
            {[...logos, ...logos].map((logo, index) => (
              <div className="logo-item" key={index}>
                <img src={logo} alt={`client-${index}`} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default TrustedBy;