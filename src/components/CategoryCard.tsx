'use client';

import React from 'react';

interface CategoryCardProps {
  title: string;
  count: number;
  onClick: () => void;
  backgroundIcon?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  count, 
  onClick,
  backgroundIcon 
}) => {
  const cardStyle = backgroundIcon ? {
    '--bg-icon': `url(${backgroundIcon})`
  } as React.CSSProperties : {};

  return (
    <div 
      className="card" 
      onClick={onClick}
      style={cardStyle}
    >
      <div className="card-badge">{count}</div>
      <div className="card-title">{title}</div>
    </div>
  );
};

export default CategoryCard;
