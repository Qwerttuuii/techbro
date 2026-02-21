import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">FID ASIKA & CO</div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
       
        <li>
          <NavLink to="/OurTeam">OurTeam</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
