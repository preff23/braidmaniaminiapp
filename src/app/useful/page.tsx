'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import CategoryCard from '@/components/CategoryCard';
import TabBar from '@/components/TabBar';
import { HomeIcon, StarIcon } from '@/components/Icons';
import { USEFUL_PAGE } from '@/data/content';

function UsefulPageContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Обработка параметра startapp
    const startapp = searchParams.get('startapp');
    if (startapp === 'main') {
      window.location.href = '/';
    }
  }, [searchParams]);

  // Группируем работы учеников
  const studentWorks = USEFUL_PAGE.items.filter(item => 
    item.label.includes('Работы учеников')
  );
  const otherItems = USEFUL_PAGE.items.filter(item => 
    !item.label.includes('Работы учеников')
  );

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
        {/* Работы учеников */}
        <CategoryCard
          title="Работы учеников"
          icon={
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2L16.09 6.26L21 7L16.09 7.74L14 12L11.91 7.74L7 7L11.91 6.26L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
          count={studentWorks.length}
          onClick={() => {
            // Открываем первую ссылку из работ учеников
            if (studentWorks.length > 0) {
              open(studentWorks[0].url);
            }
          }}
        />

        {/* Знакомство */}
        {otherItems.length > 0 && (
          <CategoryCard
            title="Знакомство"
            icon={
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              </svg>
            }
            count={otherItems.length}
            onClick={() => {
              // Открываем первую ссылку из знакомства
              if (otherItems.length > 0) {
                open(otherItems[0].url);
              }
            }}
          />
        )}
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
              <div className="card-icon"></div>
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
