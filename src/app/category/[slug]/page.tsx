'use client';

import { useParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import Header from '@/components/Header';
import LinkPill from '@/components/LinkPill';
import TabBar from '@/components/TabBar';
import { HomeIcon, StarIcon } from '@/components/Icons';
import { categories } from '@/data/categories';

function CategoryPageContent() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  // Находим соответствующую категорию
  const category = categories.find(c => c.key === slug);

  if (!category) {
    return (
      <div className="container">
        <Header />
        <div className="text-center py-12">
          <h2 className="text-xl font-bold mb-4">Категория не найдена</h2>
          <button 
            onClick={() => router.push('/')}
            className="link-button px-6 py-3"
          >
            ← Назад
          </button>
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

  return (
    <div className="container">
      <Header />
      
      <div className="mb-6">
        <button 
          onClick={() => router.push('/')}
          className="link-button mb-4"
        >
          ← Назад
        </button>
        <h2 className="text-xl font-bold mb-2">{category.title}</h2>
        <p className="text-muted">{category.links.length} материалов</p>
      </div>
      
      <div className="space-y-2 mb-20">
        {category.links.map((link, index) => (
          <LinkPill
            key={index}
            label={link.title}
            url={link.url}
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

export default function CategoryPage() {
  return (
    <Suspense fallback={
      <div className="container">
        <Header />
        <div className="text-center py-12">
          <p className="text-muted">Загрузка...</p>
        </div>
      </div>
    }>
      <CategoryPageContent />
    </Suspense>
  );
}
