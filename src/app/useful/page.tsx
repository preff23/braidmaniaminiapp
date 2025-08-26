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

  const openDM = () => {
    const url = 'https://t.me/arinabraids';
    const telegram = window.Telegram?.WebApp;
    if (telegram?.openTelegramLink) {
      telegram.openTelegramLink(url);
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="container">
      <Header />
      
      <div className="grid">
        {/* Существующие карточки */}
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

        {/* CTA кнопка "КУПИТЬ КУРС" внизу */}
        <CategoryCard
          title="КУПИТЬ КУРС"
          onClick={openDM}
          variant="cta"
          ctaIcon="/photo/bag.png"
        />
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
          {/* CTA skeleton */}
          <div className="card card--cta">
            <div className="card-content">
              <div className="card-cta-icon">
                <div style={{ width: '24px', height: '24px', background: '#ccc', borderRadius: '4px' }}></div>
              </div>
              <div className="card-title">Загрузка...</div>
              <div className="card-chevron">→</div>
            </div>
          </div>
        </div>
      </div>
    }>
      <UsefulPageContent />
    </Suspense>
  );
}
