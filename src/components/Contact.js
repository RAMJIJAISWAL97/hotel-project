import React, { useState } from 'react';
import './Contact.css';
import './ContactForm.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact & Reservations</h2>
        <p className="section-subtitle">
          Get in touch with us for bookings, inquiries, or special requests
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="info-item">
              <i className="icon">📍</i>
              <div>
                <h4>Address</h4>
                <p>123 Luxury Avenue, Downtown<br />City Center, 10001</p>
              </div>
            </div>
            <div className="info-item">
              <i className="icon">📞</i>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
              </div>
            </div>
            <div className="info-item">
              <i className="icon">✉️</i>
              <div>
                <h4>Email</h4>
                <p>info@ramuhotel.com<br />reservations@ramuhotel.com</p>
              </div>
            </div>
            <div className="info-item">
              <i className="icon">🕒</i>
              <div>
                <h4>Hours</h4>
                <p>24/7 Reception<br />Check-in: 2:00 PM | Check-out: 12:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Book Your Stay</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
              </div>
              <div className="form-row">
                <input
                  type="date"
                  name="checkIn"
                  placeholder="Check-in Date"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                />
                <input
                  type="date"
                  name="checkOut"
                  placeholder="Check-out Date"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Special requests or questions..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="submit-btn">Send Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
