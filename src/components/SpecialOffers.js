import React from 'react';
import './SpecialOffers.css';

const SpecialOffers = () => {
  return (
    <section className="special-offers">
      <h2 className="section-title">Special Offers</h2>
      <div className="offers-grid">
        <div className="offer">
          <h3>Weekend Getaway</h3>
          <p>Book a weekend stay and get 20% off!</p>
        </div>
        <div className="offer">
          <h3>Family Package</h3>
          <p>Stay 3 nights and get the 4th night free!</p>
        </div>
        <div className="offer">
          <h3>Romantic Escape</h3>
          <p>Enjoy a complimentary dinner for two with your stay.</p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
