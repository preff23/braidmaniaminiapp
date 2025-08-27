'use client';

import React from 'react';
import FlagIcon from '@/public/photo/flag.svg';
import GraduationIcon from '@/public/photo/graduation.svg';
import ImageIcon from '@/public/photo/image.svg';
import LightIcon from '@/public/photo/light.svg';
import LockIcon from '@/public/photo/lock.svg';
import ScissorsIcon from '@/public/photo/scissors.svg';
import UsersIcon from '@/public/photo/users.svg';
import VideocamIcon from '@/public/photo/videocam.svg';
import BagIcon from '@/public/photo/bag.svg';

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

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'flag.svg': FlagIcon,
      'graduation.svg': GraduationIcon,
      'image.svg': ImageIcon,
      'light.svg': LightIcon,
      'lock.svg': LockIcon,
      'scissors.svg': ScissorsIcon,
      'users.svg': UsersIcon,
      'videocam.svg': VideocamIcon,
      'bag.svg': BagIcon,
    };
    
    return iconMap[iconName] || FlagIcon;
  };

  const IconComponent = getIconComponent(icon);

  return (
    <div className={cardClasses} onClick={onClick} id={id}>
      <div className="category-badge">{count}</div>
      <div className="category-title">{title}</div>
      <IconComponent 
        className="card-icon"
        aria-hidden
        id={specialIcon ? 'rocket-icon' : undefined}
      />
    </div>
  );
};

export default CategoryCard;
