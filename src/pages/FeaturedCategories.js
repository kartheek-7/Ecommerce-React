import React from 'react';
import '../styles/CategoryCard.css'; // Correct the import statement to include the CSS file
import CategoryCard from '../components/CategoryCard';

const FeaturedCategories = () => {
  return (
    <div className='Featured-cat'>
      <CategoryCard imageSrc='images/men.jpg' categoryLink='/men'/>
      <CategoryCard imageSrc='images/women.jpg' categoryLink='/women'/>
      <CategoryCard imageSrc='images/kid.jpg' categoryLink='/kids'/>
    </div>
  );
};

export default FeaturedCategories;
