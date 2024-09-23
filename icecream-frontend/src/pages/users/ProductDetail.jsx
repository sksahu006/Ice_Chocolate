import React from 'react'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import icecream from  '../../assets/chocolate.jpg'
import icecreamThumbnail from  '../../assets/thumbnail.jpg'


const ProductDetail = () => {
  return (
    <div className="bg-[#f7f7f7] min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-6xl w-full grid md:grid-cols-2 gap-8">
        <div className="p-8">
          <img
            src={icecream}
            alt="Product"
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div className="mt-4 flex gap-4">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={icecreamThumbnail}
                alt={`Thumbnail ${i}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:ring-2 hover:ring-[#ff3c78] transition-all"
              />
            ))}
          </div>
        </div>
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-[#1e1e1e] mb-4">Product Name</h1>
            <p className="text-[#666] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="flex items-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-[#ff3c78] text-[#ff3c78]" />
              ))}
              <span className="text-[#666]">(121)</span>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-bold text-[#1e1e1e]">$199.00</span>
              <span className="text-lg line-through text-[#666]">$210.00</span>
            </div>
            <div className="flex gap-4 mb-8">
              <button className="bg-[#ff3c78] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#e62e68] transition-colors">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="border-2 border-[#ff3c78] text-[#ff3c78] px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#ff3c78] hover:text-white transition-colors">
                <Heart className="w-5 h-5" />
                Wishlist
              </button>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold text-[#1e1e1e] mb-4">Product Details</h2>
            <ul className="list-disc list-inside text-[#666] space-y-2">
              <li>High-quality material</li>
              <li>Durable construction</li>
              <li>Easy to clean and maintain</li>
              <li>Versatile design for various uses</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail