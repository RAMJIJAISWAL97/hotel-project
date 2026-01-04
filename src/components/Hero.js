import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero" style={{ position: 'relative' }}>
      <video autoPlay loop muted style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
        <source src="https://videos.pexels.com/videos/856858/856858-hd-1080p.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Ramu Hotel</h1>
        <p className="hero-subtitle">
          Experience luxury and comfort in the heart of the city
        </p>
        <p className="hero-description">
          Discover exceptional hospitality, world-class amenities, and unforgettable moments 
          at our premium hotel. Your perfect stay awaits.
        </p>
        <div className="hero-buttons">
          <a href="#booking" className="btn btn-primary" style={{ backgroundColor: '#FF9933', color: 'white' }}>Book Your Stay</a>
          <a href="#rooms" className="btn btn-secondary">Explore Rooms</a>
        </div>
      </div>
      <div className="hero-features"> 
        <div className="feature">
          <i className="icon">🏨</i>
          <span>5-Star Luxury</span>
        </div>
        <div className="feature">
          <i className="icon">🍽️</i>
          <span>Fine Dining</span>
        </div>
        <div className="feature">
          <i className="icon">🏊</i>
          <span>Pool & Spa</span>
        </div>
        <div className="feature">
          <i className="icon">🚗</i>
          <span>Free Parking</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
