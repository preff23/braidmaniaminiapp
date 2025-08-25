'use client';

import { useEffect } from 'react';

interface TelegramProviderProps {
  children: React.ReactNode;
}

// Типы для Telegram WebApp
declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready: () => void;
        expand: () => void;
        themeParams?: {
          bg_color?: string;
          text_color?: string;
          secondary_bg_color?: string;
        };
        openTelegramLink?: (url: string) => void;
      };
    };
  }
}

export default function TelegramProvider({ children }: TelegramProviderProps) {
  useEffect(() => {
    // Загружаем Telegram WebApp SDK
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-web-app.js';
    script.async = true;
    document.head.appendChild(script);

    const initTelegram = () => {
      const w = window.Telegram?.WebApp;
      if (w) {
        w.ready();
        w.expand();
        
        // Применяем тему если доступна
        if (w.themeParams) {
          const root = document.documentElement;
          if (w.themeParams.bg_color) {
            root.style.setProperty('--bg', `#${w.themeParams.bg_color}`);
          }
          if (w.themeParams.text_color) {
            root.style.setProperty('--text-primary', `#${w.themeParams.text_color}`);
          }
          if (w.themeParams.secondary_bg_color) {
            root.style.setProperty('--card', `#${w.themeParams.secondary_bg_color}`);
          }
        }
      }
    };

    script.onload = () => {
      // Проверяем готовность Telegram WebApp
      if (window.Telegram?.WebApp) {
        initTelegram();
      } else {
        // Ждем загрузки скрипта
        const checkTelegram = setInterval(() => {
          if (window.Telegram?.WebApp) {
            initTelegram();
            clearInterval(checkTelegram);
          }
        }, 100);
      }
    };
  }, []);

  return <>{children}</>;
}
