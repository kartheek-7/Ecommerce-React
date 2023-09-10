import React from 'react'
import ProductCard from './ProductCard'
import data from '../data';
const KidsItems = ({addToCart}) => {
  const kidsItemIds = [21,22,23,24,25,26,27,28];
  const kidsItems = data.filter((item) => kidsItemIds.includes(item.id));
  return (

    <div className="featured-items">
      {kidsItems.map((item) => (
        <ProductCard key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>);
  
    {/*
    <div className='featured-items'>
      <ProductCard imageSrc='images/kids/k1.jpg' name='Shirt' price='999' addToCart={addToCart}/>
      <ProductCard imageSrc='images/kids/k2.jpg' name='Shirt' price='1999' addToCart={addToCart}/>
      <ProductCard imageSrc='images/kids/k3.jpg' name='Shirt' price='599' addToCart={addToCart}/>
      <ProductCard imageSrc='images/kids/k4.jpg' name='girls dress' price='499' addToCart={addToCart}/>
      <ProductCard imageSrc='images/kids/k5.jpg' name='girls dress' price='1199' addToCart={addToCart}/>
      <ProductCard imageSrc='images/kids/k6.jpg' name='Shoes' price='2999' addToCart={addToCart}/>
      <ProductCard imageSrc='images/kids/k7.jpg' name='Shoes' price='2999' addToCart={addToCart}/>
      <ProductCard imageSrc='images/kids/k8.jpg' name='Sweater Boys' price='999' addToCart={addToCart}/>
</div>*/}
  
};

export default KidsItems;
