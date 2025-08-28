'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { mainCategories } from '../../../data/main';
import { usefulCategories } from '../../../data/useful';
import LinkListCard from '../../../components/LinkListCard';

interface Link {
  title: string;
  url: string;
}

interface Category {
  id: string;
  title: string;
  icon: string;
  links: Link[];
}

interface SubListPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function SubListPage({ params }: SubListPageProps) {
  const router = useRouter();
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getParams = async () => {
      try {
        const { id } = await params;
        // Объединяем все категории для поиска
        const allCategories = [...mainCategories, ...usefulCategories];
        const foundCategory = allCategories.find(cat => cat.id === id);
        setCategory(foundCategory || null);
      } catch (error) {
        console.error('Error getting params:', error);
      } finally {
        setLoading(false);
      }
    };

    getParams();
  }, [params]);

  if (loading) {
    return (
      <div className="container page-transition">
        <div className="submenu-header">
          <button className="back-button" onClick={() => router.back()}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Назад
          </button>
          <h1 className="submenu-title">Загрузка...</h1>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="container page-transition">
        <div className="submenu-header">
          <button className="back-button" onClick={() => router.back()}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M20 11H7.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
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
