'use client';

import { ReactNode } from 'react';

interface CategoryCardProps {
  title: string;
  icon: ReactNode;
  count: number;
  onClick: () => void;
}

export default function CategoryCard({ title, icon, count, onClick }: CategoryCardProps) {
  return (
    <button className="card" onClick={onClick}>
      <div className="card-badge">{count}</div>
      <div className="card-icon">{icon}</div>
      <div className="card-title">{title}</div>
    </button>
  );
}
