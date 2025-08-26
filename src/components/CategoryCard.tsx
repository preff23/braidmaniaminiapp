'use client';

import React from 'react';

interface CategoryCardProps {
  title: string;
  icon: string;
  count: number;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  icon, 
  count, 
  onClick 
}) => {
  return (
    <div className="category-card" onClick={onClick}>
      <div className="category-badge">{count}</div>
      <div className="category-title">{title}</div>
      <img 
        src={`/photo/${icon}`} 
        alt="" 
        className="watermark"
      />
    </div>
  );
};

export default CategoryCard;
