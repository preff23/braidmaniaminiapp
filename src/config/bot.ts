// Конфигурация Telegram Bot
export const BOT_CONFIG = {
  token: process.env.TELEGRAM_BOT_TOKEN || '8408738770:AAEBJnp2it6gbxHfaakxyCi-XMDFdtiMJGA',
  username: 'Braid_mania_bot',
  webAppUrl: process.env.WEBAPP_URL || 'https://braidmaniaminiapp.vercel.app',
};

// Ссылки для открытия Mini App
export const MINI_APP_LINKS = {
  main: `https://t.me/${BOT_CONFIG.username}/app?startapp=main`,
  useful: `https://t.me/${BOT_CONFIG.username}/app?startapp=useful`,
};
