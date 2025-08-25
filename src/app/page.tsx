'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import SearchInput from '@/components/SearchInput';
import SectionCard from '@/components/SectionCard';
import Skeleton from '@/components/Skeleton';
import { MAIN_SECTIONS } from '@/data/content';

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
        title="Главная" 
        subtitle="Полезные материалы по плетению косичек и брейдингу" 
      />
      
      <SearchInput onSearch={handleSearch} />
      
      <div className="space-y-6">
        {filteredSections.map((section, index) => (
          <SectionCard
            key={index}
            title={section.title}
            items={section.items}
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
        <PageHeader title="Главная" subtitle="Загрузка материалов..." />
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-6 w-48" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[1, 2, 3].map((j) => (
                  <Skeleton key={j} className="h-12" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    }>
      <HomePageContent />
    </Suspense>
  );
}
