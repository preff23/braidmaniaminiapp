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
      'flag.svg': '/photo/flag-green.svg',
      'light.svg': '/photo/light-green.svg',
      'scissors.svg': '/photo/scissors-green.svg',
      'graduation.svg': '/photo/graduation-green.svg',
      'videocam.svg': '/photo/videocam-green.svg',
      'lock.svg': '/photo/lock-green.svg',
      'image.svg': '/photo/image-green.svg',
      'users.svg': '/photo/users-green.svg',
      'bag.svg': '/photo/bag-green.svg',
    };
    
    return iconMap[name] || '/photo/flag-green.svg';
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