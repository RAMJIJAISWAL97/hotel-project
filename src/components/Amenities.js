import React from 'react';
import './Amenities.css';

const Amenities = () => {
  const amenities = [
    {
      name: "Swimming Pool",
      description: "Rooftop infinity pool with stunning city views",
      icon: "🏊‍♂️",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      name: "Spa & Wellness",
      description: "Full-service spa with professional therapists",
      icon: "💆‍♀️",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop"
    },
    {
      name: "Fine Dining",
      description: "Multi-cuisine restaurant with expert chefs",
      icon: "🍽️",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop"
    },
    {
      name: "Fitness Center",
      description: "State-of-the-art gym with personal trainers",
      icon: "💪",
      image: "https://images.unsplash.com/photo-1534438327276-14e5fe976c05?w=400&h=300&fit=crop"
    },
    {
      name: "Business Center",
      description: "Fully equipped business facilities and meeting rooms",
      icon: "💼",
      image: "https://images.unsplash.com/photo-1497366216548-375248702f4b?w=400&h=300&fit=crop"
    },
    {
      name: "24/7 Concierge",
      description: "Round-the-clock assistance for all your needs",
      icon: "🛎️",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="amenities" className="amenities">
      <div className="container">
        <h2 className="section-title">Hotel Amenities</h2>
        <p className="section-subtitle">
          Enjoy world-class facilities designed to make your stay exceptional
        </p>
        
        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-card">
              <div className="amenity-image">
                <img src={amenity.image} alt={amenity.name} />
                <div className="amenity-overlay">
                  <span className="amenity-icon">{amenity.icon}</span>
                </div>
              </div>
              <div className="amenity-content">
                <h3>{amenity.name}</h3>
                <p>{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
