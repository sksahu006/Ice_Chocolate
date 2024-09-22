// src/components/ui/ProductCard.jsx
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <Link to={`/product/${product.id}`} className="bg-[#FF5E8C] text-white px-4 py-2 rounded-full hover:bg-[#FF4D7D] transition duration-300">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;