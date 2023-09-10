import React from 'react';
import ProductCard from './ProductCard';
import '../styles/FeaturedItems.css';
import data from '../data';

const FeaturedItems = ({ addToCart }) => {
  // Define an array of featured item IDs
  const featuredItemIds = [8, 6, 15, 14, 5, 9, 22, 28];

  // Filter the data array to include only items with featured IDs
  const featuredItems = data.filter((item) => featuredItemIds.includes(item.id));

  return (
    <div className="featured-items">
      {featuredItems.map((item) => (
        <ProductCard key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default FeaturedItems;
