'use client';

import { openTelegramLink } from '@/lib/telegram';

interface LinkPillProps {
  label: string;
  url: string;
}

export default function LinkPill({ label, url }: LinkPillProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openTelegramLink(url);
  };

  return (
    <button
      onClick={handleClick}
      className="hlb-link-button group flex items-center justify-between w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50"
    >
      <span className="text-text-primary text-sm font-medium leading-relaxed">
        {label}
      </span>
      <span className="text-accent text-lg font-bold ml-3 group-hover:translate-x-1 transition-transform duration-300">
        →
      </span>
    </button>
  );
}
