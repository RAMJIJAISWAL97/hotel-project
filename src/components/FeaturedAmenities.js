import React from 'react';
import './FeaturedAmenities.css';

const FeaturedAmenities = () => {
  return (
    <section className="featured-amenities">
      <h2 className="section-title">Featured Amenities</h2>
      <div className="amenities-grid">
        <div className="amenity">
          <i className="fas fa-swimming-pool"></i>
          <h3>Swimming Pool</h3>
          <p>Relax and unwind in our luxurious pool.</p>
        </div>
        <div className="amenity">
          <i className="fas fa-utensils"></i>
          <h3>Fine Dining</h3>
          <p>Enjoy gourmet meals prepared by top chefs.</p>
        </div>
        <div className="amenity">
          <i className="fas fa-spa"></i>
          <h3>Spa & Wellness</h3>
          <p>Indulge in rejuvenating spa treatments.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAmenities;
