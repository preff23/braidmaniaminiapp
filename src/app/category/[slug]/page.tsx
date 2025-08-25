'use client';

import { useParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import PageHeader from '@/components/PageHeader';
import LinkPill from '@/components/LinkPill';
import Skeleton from '@/components/Skeleton';
import { MAIN_SECTIONS } from '@/data/content';

// Названия категорий
const CATEGORY_NAMES = {
  'beginner': 'С ЧЕГО НАЧАТЬ НОВИЧКУ',
  'lifehacks': 'ПОЛЕЗНЫЕ ЛАЙФХАКИ В ПЛЕТЕНИИ',
  'practice': 'ПРАКТИКА',
  'courses': 'МК И СКИДКИ УЧАСТНИКАМ ГРУППЫ',
  'tutorials': 'ТУТОРИАЛЫ НА СЕБЕ',
  'secrets': 'СЕКРЕТНЫЕ МАТЕРИАЛЫ',
};

function CategoryPageContent() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  // Находим соответствующую секцию
  const categoryName = CATEGORY_NAMES[slug as keyof typeof CATEGORY_NAMES];
  const section = MAIN_SECTIONS.find(s => s.title === categoryName);

  if (!section) {
    return (
      <div className="container mx-auto px-4 py-6">
        <PageHeader 
          title="Категория не найдена" 
          subtitle="Вернитесь на главную страницу" 
        />
        <button 
          onClick={() => router.push('/')}
          className="hlb-link-button px-6 py-3 rounded-lg text-accent"
        >
          ← Назад
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => router.push('/')}
          className="mr-4 text-accent text-lg"
        >
          ←
        </button>
        <PageHeader 
          title={section.title}
          subtitle={`${section.items.length} материалов`}
        />
      </div>
      
      <div className="space-y-2">
        {section.items.map((item, index) => (
          <LinkPill
            key={index}
            label={item.label}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}

export default function CategoryPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-6">
        <PageHeader title="Загрузка..." subtitle="Загрузка материалов..." />
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-12" />
          ))}
        </div>
      </div>
    }>
      <CategoryPageContent />
    </Suspense>
  );
}
