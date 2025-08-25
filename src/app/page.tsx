'use client';

import { Suspense } from 'react';
import Header from '@/components/Header';
import CategoryCard from '@/components/CategoryCard';
import TabBar from '@/components/TabBar';
import { HomeIcon, StarIcon } from '@/components/Icons';
import { categories } from '@/data/categories';

function HomePageContent() {
  return (
    <div className="container">
      <Header />
      
      <div className="grid">
        {categories.map((category) => (
          <CategoryCard
            key={category.key}
            title={category.title}
            links={category.links}
            backgroundIcon={category.backgroundIcon}
            categoryKey={category.key}
            onClick={() => {
              window.location.href = `/category/${category.key}`;
            }}
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

export default function HomePage() {
  return (
    <Suspense fallback={
      <div className="container">
        <Header />
        <div className="grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="card">
              <div className="card-badge">0</div>
              <div className="card-title">Загрузка...</div>
            </div>
          ))}
        </div>
      </div>
    }>
      <HomePageContent />
    </Suspense>
  );
}
