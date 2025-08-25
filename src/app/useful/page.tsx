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
      
      <div className="space-y-4">
        {/* Работы учеников */}
        <div className="hlb-card p-4 fade-in-up">
          <div className="flex items-center mb-4">
            <div className="text-2xl mr-3 text-accent">
              🎨
            </div>
            <h2 className="text-text-primary text-lg font-bold tracking-wide">
              Работы учеников
            </h2>
          </div>
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

        {/* Другие материалы */}
        {otherItems.length > 0 && (
          <div className="hlb-card p-4 fade-in-up">
            <div className="flex items-center mb-4">
              <div className="text-2xl mr-3 text-accent">
                👋
              </div>
              <h2 className="text-text-primary text-lg font-bold tracking-wide">
                Знакомство
              </h2>
            </div>
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
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-12" />
          ))}
        </div>
      </div>
    }>
      <UsefulPageContent />
    </Suspense>
  );
}
