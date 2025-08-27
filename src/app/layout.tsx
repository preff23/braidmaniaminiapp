import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TelegramProvider from '@/components/TelegramProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Braid Mania',
  description: 'Полезные материалы по плетению косичек и брейдингу',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div id="spark" aria-hidden="true"></div>
        <TelegramProvider>
          {children}
        </TelegramProvider>
      </body>
    </html>
  );
}
