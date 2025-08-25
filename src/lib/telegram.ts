export function openTelegramLink(url: string) {
  const w = window.Telegram?.WebApp;
  if (w?.openTelegramLink) return w.openTelegramLink(url);
  window.open(url, '_blank', 'noopener,noreferrer');
}
