'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function Tabs() {
  const router = useRouter();
  const pathname = usePathname();
  
  const isMain = pathname === '/';
  const isUseful = pathname === '/useful';

  const handleTabClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 premium-card border-t border-accent/18 px-4 py-3 z-50 backdrop-blur-sm">
      <div className="flex gap-2 max-w-md mx-auto">
        <button
          onClick={() => handleTabClick('/')}
          className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
            isMain
              ? 'bg-accent text-bg font-bold shadow-lg'
              : 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-card-hover'
          }`}
        >
          Главная
        </button>
        <button
          onClick={() => handleTabClick('/useful')}
          className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
            isUseful
              ? 'bg-accent text-bg font-bold shadow-lg'
              : 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-card-hover'
          }`}
        >
          Полезное
        </button>
      </div>
    </div>
  );
}
