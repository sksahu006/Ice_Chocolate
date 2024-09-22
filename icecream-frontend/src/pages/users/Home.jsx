import React from 'react';
import HeroSection from '../../componentes/ui/HeroSection';
import ProductList from '../../componentes/ui/ProductList';


function Home() {
  return (
    <div>
      <HeroSection />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Popular Flavors</h2>
        <ProductList />
      </div>
    </div>
  );
}

export default Home;