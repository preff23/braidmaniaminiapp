import React from 'react';

interface BottomNavProps {
  activeTab: 'home' | 'useful';
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab }) => {
  return (
    <nav className="bottom-nav">
      <button 
        className={`nav-button ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => window.location.href = '/'}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
        Главная
      </button>
      <button 
        className={`nav-button ${activeTab === 'useful' ? 'active' : ''}`}
        onClick={() => window.location.href = '/useful'}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        Полезное
      </button>
    </nav>
  );
};

export default BottomNav;
