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

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="header-container">
        <h1>Jollof Junction</h1>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#section-2">About</a>
            </li>
            <li>
              <a href="#menu-section">Menu</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#" className="order-btn">
                Order Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
