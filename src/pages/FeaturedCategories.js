import React from 'react';
import '../styles/CategoryCard.css'; // Correct the import statement to include the CSS file
import CategoryCard from '../components/CategoryCard';

const FeaturedCategories = () => {
  return (
    <div className='Featured-cat'>
      <CategoryCard imageSrc='/Ecommerce-React/images/men.jpg' categoryLink='/men'/>
      <CategoryCard imageSrc='/Ecommerce-React/images/women.jpg' categoryLink='/women'/>
      <CategoryCard imageSrc='/Ecommerce-React/images/kid.jpg' categoryLink='/kids'/>
    </div>
  );
};

export default FeaturedCategories;
