import React from 'react';

interface Link {
  title: string;
  url: string;
}

interface LinkListCardProps {
  links: Link[];
}

const LinkListCard: React.FC<LinkListCardProps> = ({ links }) => {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="submenu-list">
      {links.map((link, index) => (
        <div 
          key={index}
          className="submenu-item"
          onClick={() => handleLinkClick(link.url)}
        >
          <div className="submenu-item-title">{link.title}</div>
          <div className="submenu-item-arrow">→</div>
        </div>
      ))}
    </div>
  );
};

export default LinkListCard;
