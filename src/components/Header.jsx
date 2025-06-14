import React, { useState, useEffect } from "react";
import "./Header.css";
import "./About";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="header-container">
        <h1>Jollof Junction</h1>
        <nav className="navbar">
          <ul>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="nav-link"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("menu")}
                className="nav-link"
              >
                Menu
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="nav-link"
              >
                Contact
              </button>
            </li>
            <li>
              <button className="order-btn">Order Now</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
