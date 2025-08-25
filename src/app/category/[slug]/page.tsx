'use client';

import { useParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import { HomeIcon, StarIcon } from '@/components/Icons';
import { categories } from '@/data/categories';

function CategoryPageContent() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  // Находим соответствующую категорию
  const category = categories.find(c => c.key === slug);

  if (!category) {
    return (
      <div className="container">
        <Header />
        <div className="text-center py-12">
          <h2 className="text-xl font-bold mb-4">Категория не найдена</h2>
          <button 
            onClick={() => router.push('/')}
            className="back-button"
          >
            ← Назад
          </button>
        </div>
        <TabBar
          items={[
            { key: 'home', label: 'Главная', icon: <HomeIcon /> },
            { key: 'useful', label: 'Полезное', icon: <StarIcon /> },
          ]}
        />
      </div>
    );
  }

  const open = (url: string) => {
    const telegram = window.Telegram?.WebApp;
    if (telegram?.openTelegramLink) {
      telegram.openTelegramLink(url);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="container">
      <Header />
      
      <div className="category-header">
        <button 
          onClick={() => router.push('/')}
          className="category-back-button"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div>
          <h2 className="category-title">{category.title}</h2>
          <p className="category-subtitle">{category.links.length} материалов</p>
        </div>
      </div>
      
      <div className="submenu-grid">
        {category.links.map((link, index) => (
          <div
            key={index}
            className="submenu-card"
            onClick={() => open(link.url)}
          >
            <div className="submenu-card-left">
              <div className="submenu-card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="submenu-card-text">{link.title}</div>
            </div>
            <div className="submenu-card-arrow">→</div>
          </div>
        ))}
      </div>
      
      <TabBar
        items={[
          { key: 'home', label: 'Главная', icon: <HomeIcon /> },
          { key: 'useful', label: 'Полезное', icon: <StarIcon /> },
        ]}
      />
    </div>
  );
}

export default function CategoryPage() {
  return (
    <Suspense fallback={
      <div className="container">
        <Header />
        <div className="text-center py-12">
          <p className="text-muted">Загрузка...</p>
        </div>
      </div>
    }>
      <CategoryPageContent />
    </Suspense>
  );
}
