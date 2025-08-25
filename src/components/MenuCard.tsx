'use client';

import { useRouter } from 'next/navigation';

interface MenuCardProps {
  title: string;
  count: number;
  icon: string;
  route: string;
}

export default function MenuCard({ title, count, icon, route }: MenuCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <div 
      className="hlb-menu-card p-6 fade-in-up"
      onClick={handleClick}
    >
      {/* Оранжевый кружок с числом */}
      <div className="hlb-count-badge">
        {count}
      </div>
      
      {/* Иконка */}
      <div className="text-4xl mb-4 text-text-primary opacity-80">
        {icon}
      </div>
      
      {/* Заголовок */}
      <h3 className="text-text-primary text-lg font-bold leading-tight">
        {title}
      </h3>
    </div>
  );
}
