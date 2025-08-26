'use client';

import React from 'react';

interface CategoryCardProps {
  title: string;
  links?: Array<{ title: string; url: string }>;
  onClick?: () => void;
  backgroundIcon?: string;
  categoryKey?: string;
  variant?: 'default' | 'cta';
  spanFull?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  links, 
  onClick,
  backgroundIcon,
  categoryKey,
  variant = 'default',
  spanFull = false
}) => {
  const cardStyle = backgroundIcon ? {
    '--bg-icon': `url(${backgroundIcon})`
  } as React.CSSProperties : {};

  const count = links?.length ?? 0;

  const cardClasses = [
    'card',
    variant === 'cta' ? 'card--cta' : '',
    spanFull ? 'card--span-full' : ''
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={cardClasses}
      onClick={onClick}
      style={cardStyle}
      data-category={categoryKey}
      aria-hidden={backgroundIcon ? "false" : "true"}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {variant === 'default' && (
        <>
          <div className="card-badge">{count}</div>
          <div className="card-title">{title}</div>
        </>
      )}
      
      {variant === 'cta' && (
        <div className="card-content">
          <div className="card-title">{title}</div>
          <div className="card-chevron">→</div>
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
