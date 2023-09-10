import React, { useState } from 'react';
import Discount from './Discount';
import FeaturedCategories from './FeaturedCategories';
import FeaturedItems from '../components/FeaturedItems';
const Home = () => {
    const [cart, setCart]= useState([]);
    const addToCart= (item)=>{
      cart.push(item);
      console.log("cart is: ", cart);
    }
  return (
    <div>
      <Discount />
      <p className='sideheading'>Featured Categories</p>
      <FeaturedCategories />
      <p className='sideheading'>Featured Items</p>
      <FeaturedItems addToCart={addToCart} />
    </div>
  );
};

export default Home;
