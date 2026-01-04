import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1566079613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      alt: "Hotel Exterior",
      category: "Exterior"
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      alt: "Luxury Room",
      category: "Rooms"
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      alt: "Restaurant",
      category: "Dining"
    },
    {
      src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
      alt: "Spa",
      category: "Amenities"
    },
    {
      src: "https://images.unsplash.com/photo-1534438327276-14e5fe976c05?w=600&h=400&fit=crop",
      alt: "Fitness Center",
      category: "Amenities"
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-375248702f4b?w=600&h=400&fit=crop",
      alt: "Business Center",
      category: "Facilities"
    },
    {
      src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop",
      alt: "Lobby",
      category: "Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&h=400&fit=crop",
      alt: "Suite",
      category: "Rooms"
    }
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Photo Gallery</h2>
        <p className="section-subtitle">
          Explore our hotel through stunning visuals showcasing our facilities and services
        </p>
        
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <span className="gallery-category">{image.category}</span>
                <h4>{image.alt}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
