'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import LinkPill from '@/components/LinkPill';
import Skeleton from '@/components/Skeleton';
import { USEFUL_PAGE } from '@/data/content';

function UsefulPageContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Обработка параметра startapp
    const startapp = searchParams.get('startapp');
    if (startapp === 'main') {
      // Перенаправляем на главную
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

  return (
    <div className="container mx-auto px-4 py-6">
      <PageHeader 
        title="ПОЛЕЗНОЕ" 
        subtitle="Работы учеников и дополнительные материалы" 
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Работы учеников */}
        <div className="hlb-menu-card p-6 fade-in-up">
          <div className="hlb-count-badge">
            {studentWorks.length}
          </div>
          <div className="text-4xl mb-4 text-text-primary opacity-80">
            🎨
          </div>
          <h3 className="text-text-primary text-lg font-bold leading-tight mb-4">
            Работы учеников
          </h3>
          <div className="space-y-2">
            {studentWorks.map((item, index) => (
              <LinkPill
                key={index}
                label={item.label}
                url={item.url}
              />
            ))}
          </div>
        </div>

        {/* Знакомство */}
        {otherItems.length > 0 && (
          <div className="hlb-menu-card p-6 fade-in-up">
            <div className="hlb-count-badge">
              {otherItems.length}
            </div>
            <div className="text-4xl mb-4 text-text-primary opacity-80">
              👋
            </div>
            <h3 className="text-text-primary text-lg font-bold leading-tight mb-4">
              Знакомство
            </h3>
            <div className="space-y-2">
              {otherItems.map((item, index) => (
                <LinkPill
                  key={index}
                  label={item.label}
                  url={item.url}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function UsefulPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-6">
        <PageHeader title="ПОЛЕЗНОЕ" subtitle="Загрузка..." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <Skeleton key={i} className="h-32" />
          ))}
        </div>
      </div>
    }>
      <UsefulPageContent />
    </Suspense>
  );
}
