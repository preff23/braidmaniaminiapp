'use client';

import React from 'react';

interface CategoryCardProps {
  title: string;
  icon: string;
  count: number;
  onClick: () => void;
  specialIcon?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  icon, 
  count, 
  onClick,
  specialIcon = false
}) => {
  return (
    <div className={`category-card ${specialIcon ? 'category-card--special-icon' : ''}`} onClick={onClick}>
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
