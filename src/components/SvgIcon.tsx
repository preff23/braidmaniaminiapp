import React from 'react';

interface SvgIconProps {
  iconName: string;
  className?: string;
  id?: string;
  'aria-hidden'?: boolean;
}

const SvgIcon: React.FC<SvgIconProps> = ({ iconName, className, id, 'aria-hidden': ariaHidden }) => {
  const getIconPath = (name: string) => {
    const iconMap: { [key: string]: string } = {
      'flag.svg': '/photo/flag-pink.svg',
      'light.svg': '/photo/light-pink.svg',
      'scissors.svg': '/photo/scissors-pink.svg',
      'graduation.svg': '/photo/graduation-pink.svg',
      'videocam.svg': '/photo/videocam-pink.svg',
      'lock.svg': '/photo/lock-pink.svg',
      'image.svg': '/photo/image-pink.svg',
      'users.svg': '/photo/users-pink.svg',
      'bag.svg': '/photo/bag-pink.svg',
    };
    
    return iconMap[name] || '/photo/flag-pink.svg';
  };

  return (
    <img 
      src={getIconPath(iconName)}
      alt=""
      className={className}
      id={id}
      aria-hidden={ariaHidden}
      style={{ width: '100%', height: 'auto' }}
    />
  );
};

export default SvgIcon; 