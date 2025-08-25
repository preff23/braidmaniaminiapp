'use client';

const open = (url: string) => {
  const telegram = window.Telegram?.WebApp;
  if (telegram?.openTelegramLink) {
    telegram.openTelegramLink(url);
  } else {
    window.open(url, '_blank');
  }
};

interface LinkPillProps {
  label: string;
  url: string;
}

export default function LinkPill({ label, url }: LinkPillProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    open(url);
  };

  return (
    <button
      onClick={handleClick}
      className="link-button"
    >
      <span>{label}</span>
      <span className="arrow">→</span>
    </button>
  );
}
