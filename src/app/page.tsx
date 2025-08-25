'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import CategoryCard from '@/components/CategoryCard';
import TabBar from '@/components/TabBar';
import { HomeIcon, StarIcon } from '@/components/Icons';
import { categories } from '@/data/categories';

function HomePageContent() {
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Обработка параметра startapp
    const startapp = searchParams.get('startapp');
    if (startapp === 'useful') {
      router.push('/useful');
    }
  }, [searchParams, router]);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredCategories(categories);
      return;
    }

    const filtered = categories.map(category => ({
      ...category,
      links: category.links.filter(link =>
        link.title.toLowerCase().includes(query.toLowerCase())
      )
    })).filter(category => category.links.length > 0);

    setFilteredCategories(filtered);
  };

  const handleCategoryClick = (categoryKey: string) => {
    router.push(`/category/${categoryKey}`);
  };

  return (
    <div className="container">
      <Header />
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Поиск по материалам…"
          onChange={(e) => handleSearch(e.target.value)}
          className="search"
        />
      </div>
      
      <div className="grid">
        {filteredCategories.map((category) => (
          <CategoryCard
            key={category.key}
            title={category.title}
            icon={category.icon}
            count={category.links.length}
            onClick={() => handleCategoryClick(category.key)}
          />
        ))}
      </div>
      
      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted">По вашему запросу ничего не найдено</p>
        </div>
      )}
      
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
              <div className="card-icon"></div>
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
