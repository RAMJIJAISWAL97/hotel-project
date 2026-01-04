import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ramu Hotel</h3>
            <p>
              Experience luxury and comfort at Ramu Hotel, where every stay is 
              designed to exceed your expectations.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook">📘</a>
              <a href="https://twitter.com" aria-label="Twitter">🐦</a>
              <a href="https://instagram.com" aria-label="Instagram">📷</a>
              <a href="https://linkedin.com" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#rooms">Rooms</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Room Service</a></li>
              <li><a href="#">Spa Services</a></li>
              <li><a href="#">Restaurant</a></li>
              <li><a href="#">Conference Rooms</a></li>
              <li><a href="#">Airport Transfer</a></li>
              <li><a href="#">Laundry Service</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📍 123 Luxury Avenue, Downtown</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ info@ramuhotel.com</li>
              <li>🕒 24/7 Reception</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Ramu Hotel. All rights reserved.</p>
          <p>
            <a href="/privacy-policy">Privacy Policy</a> | 
            <a href="/terms-of-service">Terms of Service</a> | 
            <a href="/cookie-policy">Cookie Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
