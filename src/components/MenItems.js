import React from 'react'
import ProductCard from './ProductCard'
import data from '../data'

const MenItems = ({ addToCart }) => {
  const menItemIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const menItems = data.filter((item) => menItemIds.includes(item.id));
  
  return (
    <div className="featured-items">
      {menItems.map((item) => (
        <ProductCard key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default MenItems;