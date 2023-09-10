import React from 'react'
import ProductCard from './ProductCard'
import data from '../data'

const WomenItems = ({ addToCart }) => {
  const womenItemIds = [13, 14, 15, 16, 17, 18, 19, 20];
  const womenItems = data.filter((item) => womenItemIds.includes(item.id));
  
  return (
    <div className="featured-items">
      {womenItems.map((item) => (
        <ProductCard key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default WomenItems;