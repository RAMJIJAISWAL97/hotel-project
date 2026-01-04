import React from 'react';
import './Rooms.css';

const Rooms = () => {
  const rooms = [
    {
      type: "Deluxe Room",
      price: "$199",
      description: "Spacious room with king-size bed, city view, and modern amenities",
      features: ["King Bed", "City View", "WiFi", "Mini Bar", "AC"],
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop"
    },
    {
      type: "Executive Suite",
      price: "$299",
      description: "Luxurious suite with separate living area and premium facilities",
      features: ["King Bed", "Living Area", "Work Desk", "Premium WiFi", "Bathtub"],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop"
    },
    {
      type: "Presidential Suite",
      price: "$499",
      description: "Ultimate luxury with panoramic views and exclusive services",
      features: ["King Bed", "Dining Area", "Jacuzzi", "Butler Service", "Private Balcony"],
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop"
    },
    {
      type: "Family Room",
      price: "$249",
      description: "Perfect for families with extra space and connecting rooms",
      features: ["2 Queen Beds", "Sofa Bed", "Kids Area", "Family Package", "Pool View"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="rooms" className="rooms">
      <div className="container">
        <h2 className="section-title">Our Rooms & Suites</h2>
        <p className="section-subtitle">
          Choose from our carefully designed rooms and suites, each offering 
          unique comfort and luxury
        </p>
        
        <div className="rooms-grid">
          {rooms.map((room, index) => (
            <div key={index} className="room-card">
              <div className="room-image">
                <img src={room.image} alt={room.type} />
                <div className="room-price">
                  <span>{room.price}</span>
                  <small>/night</small>
                </div>
              </div>
              <div className="room-content">
                <h3>{room.type}</h3>
                <p>{room.description}</p>
                <ul className="room-features">
                  {room.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="book-room-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
