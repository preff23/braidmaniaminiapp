'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import SearchInput from '@/components/SearchInput';
import MenuCard from '@/components/MenuCard';
import Skeleton from '@/components/Skeleton';
import { MAIN_SECTIONS } from '@/data/content';

// Иконки для категорий
const CATEGORY_ICONS = {
  'С ЧЕГО НАЧАТЬ НОВИЧКУ': '🏁',
  'ПОЛЕЗНЫЕ ЛАЙФХАКИ В ПЛЕТЕНИИ': '💡',
  'ПРАКТИКА': '🖐️',
  'МК И СКИДКИ УЧАСТНИКАМ ГРУППЫ': '🎓',
  'ТУТОРИАЛЫ НА СЕБЕ': '📹',
  'СЕКРЕТНЫЕ МАТЕРИАЛЫ': '🔒',
};

// Маршруты для категорий
const CATEGORY_ROUTES = {
  'С ЧЕГО НАЧАТЬ НОВИЧКУ': '/category/beginner',
  'ПОЛЕЗНЫЕ ЛАЙФХАКИ В ПЛЕТЕНИИ': '/category/lifehacks',
  'ПРАКТИКА': '/category/practice',
  'МК И СКИДКИ УЧАСТНИКАМ ГРУППЫ': '/category/courses',
  'ТУТОРИАЛЫ НА СЕБЕ': '/category/tutorials',
  'СЕКРЕТНЫЕ МАТЕРИАЛЫ': '/category/secrets',
};

function HomePageContent() {
  const [filteredSections, setFilteredSections] = useState(MAIN_SECTIONS);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Обработка параметра startapp
    const startapp = searchParams.get('startapp');
    if (startapp === 'useful') {
      // Перенаправляем на полезное
      window.location.href = '/useful';
    }
  }, [searchParams]);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredSections(MAIN_SECTIONS);
      return;
    }

    const filtered = MAIN_SECTIONS.map(section => ({
      ...section,
      items: section.items.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      )
    })).filter(section => section.items.length > 0);

    setFilteredSections(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <PageHeader 
        title="Braid Mania" 
        subtitle="Полезные материалы по плетению косичек и брейдингу" 
      />
      
      <SearchInput onSearch={handleSearch} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredSections.map((section, index) => (
          <MenuCard
            key={index}
            title={section.title}
            count={section.items.length}
            icon={CATEGORY_ICONS[section.title as keyof typeof CATEGORY_ICONS] || '📁'}
            route={CATEGORY_ROUTES[section.title as keyof typeof CATEGORY_ROUTES] || '/category/default'}
          />
        ))}
      </div>
      
      {filteredSections.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-secondary text-lg">
            По вашему запросу ничего не найдено
          </p>
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-6">
        <PageHeader title="Braid Mania" subtitle="Загрузка материалов..." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-32" />
          ))}
        </div>
      </div>
    }>
      <HomePageContent />
    </Suspense>
  );
}
