// src/components/ui/ProductList.jsx
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Vanilla Dream', price: 5, image: '/placeholder.svg?height=200&width=300' },
    { id: 2, name: 'Chocolate Delight', price: 7, image: '/placeholder.svg?height=200&width=300' },
    { id: 3, name: 'Strawberry Bliss', price: 6, image: '/placeholder.svg?height=200&width=300' },
    { id: 4, name: 'Mint Chip Madness', price: 8, image: '/placeholder.svg?height=200&width=300' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;