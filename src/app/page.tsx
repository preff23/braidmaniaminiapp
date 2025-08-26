'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PageHeader from '../components/PageHeader';
import BottomNav from '../components/BottomNav';
import CategoryCard from '../components/CategoryCard';
import { mainCategories } from '../data/main';

export default function HomePage() {
  const router = useRouter();

  const handleCategoryClick = (id: string) => {
    router.push(`/list/${id}`);
  };

  return (
    <div className="container">
      <PageHeader />
      
      <div className="grid">
        {mainCategories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            icon={category.icon}
            count={category.links.length}
            onClick={() => handleCategoryClick(category.id)}
            specialIcon={category.id === 'self'}
          />
        ))}
      </div>

      <BottomNav activeTab="home" />
    </div>
  );
}
