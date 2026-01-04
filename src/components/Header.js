import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Mobile Contact Toggle - Integrated into Header */}
        <div className="mobile-header-contact">
          <button className="contact-toggle-btn" onClick={toggleContact}>
            Contact Detail <i className={`fas fa-chevron-${showContact ? 'up' : 'down'}`}></i>
          </button>
          {showContact && (
            <div className="header-contact-dropdown">
              <a href="tel:+919696248024"><i className="fas fa-phone-alt"></i> +91 9696248024</a>
              <a href="mailto:home@ayodhyatourstravels.com"><i className="fas fa-envelope"></i> home@ayodhyatourstravels.com</a>
              <div className="header-socials">
                <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#twitter"><i className="fab fa-x-twitter"></i></a>
                <a href="#instagram"><i className="fab fa-instagram"></i></a>
                <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          )}
        </div>

        <div className="nav-wrapper">
          <div className="logo">
            <h1>Ramu Hotel</h1>
            <span className="tagline">Luxury & Comfort</span>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#rooms">Rooms</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#booking" className="booking-btn">Book Now</a></li>
            </ul>
          </nav>

          <button className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
