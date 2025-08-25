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
          backgroundIcon="/photo/Image.png"
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
            backgroundIcon="/photo/Users.png"
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
