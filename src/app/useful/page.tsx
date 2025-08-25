'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import LinkPill from '@/components/LinkPill';
import Skeleton from '@/components/Skeleton';
import { USEFUL_PAGE } from '@/data/content';

export default function UsefulPage() {
  const [isLoading, setIsLoading] = useState(false); // Изменено на false
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

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-6">
        <PageHeader title="Полезное" subtitle="Загрузка..." />
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-12" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <PageHeader 
        title="Полезное" 
        subtitle="Работы учеников и дополнительные материалы" 
      />
      
      <div className="space-y-6">
        {/* Работы учеников */}
        <div>
          <h2 className="text-text-primary text-lg font-bold mb-4">
            Работы учеников
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
          <div>
            <h2 className="text-text-primary text-lg font-bold mb-4">
              Дополнительно
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
