// src/components/ui/Navbar.jsx
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-[#FF5E8C]">Scoops & Smiles</Link>
        <div className="flex gap-2 items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-[#FF5E8C]">Home</Link>
          <Link to="/menu" className="text-gray-600 hover:text-[#FF5E8C]">Menu</Link>
          <Link to="/about" className="text-gray-600 hover:text-[#FF5E8C]">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-[#FF5E8C]">Contact</Link>
          <Link className="text-gray-600 hover:text-[#FF5E8C]" href="/cart">
            <ShoppingCart className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;