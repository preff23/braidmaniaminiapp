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
    <div className="fixed bottom-0 left-0 right-0 hlb-nav px-4 py-3 z-50">
      <div className="flex gap-2 max-w-md mx-auto">
        <button
          onClick={() => handleTabClick('/')}
          className={`hlb-nav-button flex-1 py-3 px-4 rounded-lg font-medium relative ${
            isMain ? 'active' : ''
          }`}
        >
          🏠 Главная
        </button>
        <button
          onClick={() => handleTabClick('/useful')}
          className={`hlb-nav-button flex-1 py-3 px-4 rounded-lg font-medium relative ${
            isUseful ? 'active' : ''
          }`}
        >
          🌟 Полезное
        </button>
      </div>
    </div>
  );
}
