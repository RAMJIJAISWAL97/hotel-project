import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Ramu Hotel</h2>
            <p className="about-description">
              Nestled in the heart of the city, Ramu Hotel stands as a beacon of luxury 
              and refined hospitality. Since our inception, we have been committed to 
              providing guests with an unparalleled experience that combines traditional 
              warmth with modern sophistication.
            </p>
            <p className="about-description">
              Our hotel features elegantly designed rooms, world-class dining options, 
              state-of-the-art facilities, and a team of dedicated professionals who 
              ensure every stay is memorable. Whether you're here for business or leisure, 
              Ramu Hotel offers the perfect blend of comfort, convenience, and luxury.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Luxury Rooms</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Years of Excellence</p>
              </div>
              <div className="stat">
                <h3>10000+</h3>
                <p>Happy Guests</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Room Service</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop" 
              alt="Hotel Exterior" 
              className="hotel-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
