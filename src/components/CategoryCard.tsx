'use client';

import React from 'react';

interface CategoryCardProps {
  title: string;
  icon: string;
  count: number;
  onClick: () => void;
  specialIcon?: boolean;
  premium?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  icon, 
  count, 
  onClick,
  specialIcon = false,
  premium = false
}) => {
  const cardClasses = [
    'category-card',
    specialIcon ? 'category-card--special-icon' : '',
    premium ? 'category-card--premium' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} onClick={onClick}>
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
