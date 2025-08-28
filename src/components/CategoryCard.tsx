'use client';

import React from 'react';
import SvgIcon from './SvgIcon';

interface CategoryCardProps {
  title: string;
  icon: string;
  count: number;
  onClick: () => void;
  specialIcon?: boolean;
  premium?: boolean;
  id?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  icon, 
  count, 
  onClick,
  specialIcon = false,
  premium = false,
  id
}) => {
  const cardClasses = [
    'category-card',
    specialIcon ? 'category-card--special-icon' : '',
    premium ? 'category-card--premium' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} onClick={onClick} id={id}>
      <div className="card-content card-content-padding">
        <div className="category-badge">{count}</div>
        <div className="category-title">{title}</div>
      </div>
      <SvgIcon 
        iconName={icon}
        className="card-icon"
        data-icon={icon}
        aria-hidden
        id={specialIcon ? 'rocket-icon' : undefined}
      />
    </div>
  );
};

export default CategoryCard;
