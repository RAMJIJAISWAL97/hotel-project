import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import FeaturedAmenities from './components/FeaturedAmenities'; // Importing the new component
import Footer from './components/Footer';
import SpecialOffers from './components/SpecialOffers'; // Importing the new component
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="home"><Hero /></div>
      <FeaturedAmenities /> {/* Adding the new component */}
      <SpecialOffers /> {/* Adding the new component */}
      <div id="about"><About /></div>
      <div id="rooms"><Rooms /></div>
      <div id="amenities"><Amenities /></div>
      <div id="gallery"><Gallery /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
