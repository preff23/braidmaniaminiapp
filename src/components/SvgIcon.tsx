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
      'graduation.svg': '/photo/graduation.svg',
      'image.svg': '/photo/image.svg',
      'light.svg': '/photo/light.svg',
      'lock.svg': '/photo/lock.svg',
      'scissors.svg': '/photo/scissors.svg',
      'users.svg': '/photo/users.svg',
      'videocam.svg': '/photo/videocam.svg',
      'bag.svg': '/photo/bag.svg',
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