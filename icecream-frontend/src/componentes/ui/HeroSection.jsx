import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="bg-pink-100 py-20">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold text-pink-600 mb-6">Indulge in Gelato Bliss</h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl">Experience the rich, creamy flavors of our handcrafted gelato. Made fresh daily with the finest ingredients.</p>
        <Link to="/menu" className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition duration-300">
          Explore Our Flavors
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;