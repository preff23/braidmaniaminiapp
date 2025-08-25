'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import CategoryCard from '@/components/CategoryCard';
import TabBar from '@/components/TabBar';
import { HomeIcon, StarIcon } from '@/components/Icons';
import { extraSections } from '@/data/categories';

function UsefulPageContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Обработка параметра startapp
    const startapp = searchParams.get('startapp');
    if (startapp === 'main') {
      window.location.href = '/';
    }
  }, [searchParams]);

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
      
      <div className="grid">
        {extraSections.map((section) => (
          <CategoryCard
            key={section.key}
            title={section.title}
            links={section.links}
            backgroundIcon={section.backgroundIcon}
            categoryKey={section.key}
            onClick={() => {
              // Открываем первую ссылку из секции
              if (section.links.length > 0) {
                open(section.links[0].url);
              }
            }}
          />
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

export default function UsefulPage() {
  return (
    <Suspense fallback={
      <div className="container">
        <Header />
        <div className="grid">
          {[1, 2].map((i) => (
            <div key={i} className="card">
              <div className="card-badge">0</div>
              <div className="card-title">Загрузка...</div>
            </div>
          ))}
        </div>
      </div>
    }>
      <UsefulPageContent />
    </Suspense>
  );
}
