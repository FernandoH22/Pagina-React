import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">Brandon Lee</Link>
        <div className="navbar-links">
          <ul>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // evita navegación por el href
                  handleScroll("BioSection");
                }}
              >
                Biografia
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // evita navegación por el href
                  handleScroll("Filmografia");
                }}
              >
                Filmografia
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // evita navegación por el href
                  handleScroll("Galeria");
                }}
              >
                Biografia
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
