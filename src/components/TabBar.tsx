'use client';

import { ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface TabItem {
  key: string;
  label: string;
  icon: ReactNode;
}

interface TabBarProps {
  items: TabItem[];
}

export default function TabBar({ items }: TabBarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleTabClick = (key: string) => {
    if (key === 'home') {
      router.push('/');
    } else if (key === 'useful') {
      router.push('/useful');
    }
  };

  const isActive = (key: string) => {
    if (key === 'home') return pathname === '/';
    if (key === 'useful') return pathname === '/useful';
    return false;
  };

  return (
    <div className="tabbar">
      {items.map((item) => (
        <button
          key={item.key}
          className={`tab ${isActive(item.key) ? 'active' : ''}`}
          onClick={() => handleTabClick(item.key)}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </div>
  );
}
