'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { mainCategories } from '../../../data/main';
import { usefulCategories } from '../../../data/useful';
import LinkListCard from '../../../components/LinkListCard';

interface SubListPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SubListPage({ params }: SubListPageProps) {
  const router = useRouter();
  const { id } = await params;

  // Объединяем все категории для поиска
  const allCategories = [...mainCategories, ...usefulCategories];
  const category = allCategories.find(cat => cat.id === id);

  if (!category) {
    return (
      <div className="container page-transition">
        <div className="submenu-header">
          <button className="back-button" onClick={() => router.back()}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Назад
          </button>
          <h1 className="submenu-title">Категория не найдена</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container page-transition">
      <div className="submenu-header">
        <button className="back-button" onClick={() => router.back()}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Назад
        </button>
        <h1 className="submenu-title">{category.title}</h1>
      </div>

      <LinkListCard links={category.links} />
    </div>
  );
}
