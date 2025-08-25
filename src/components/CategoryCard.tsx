'use client';

import React from 'react';

interface CategoryCardProps {
  title: string;
  links: Array<{ title: string; url: string }>;
  onClick: () => void;
  backgroundIcon?: string;
  categoryKey?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  links, 
  onClick,
  backgroundIcon,
  categoryKey
}) => {
  const cardStyle = backgroundIcon ? {
    '--bg-icon': `url(${backgroundIcon})`
  } as React.CSSProperties : {};

  const count = links?.length ?? 0;

  return (
    <div 
      className="card" 
      onClick={onClick}
      style={cardStyle}
      data-category={categoryKey}
      aria-hidden={backgroundIcon ? "false" : "true"}
    >
      <div className="card-badge">{count}</div>
      <div className="card-title">{title}</div>
    </div>
  );
};

export default CategoryCard;
