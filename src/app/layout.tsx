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
    <html lang="ru" style={{ backgroundColor: '#F1DDE1' }}>
      <body className={inter.className} style={{ backgroundColor: '#F1DDE1' }}>
        <TelegramProvider>
          {children}
        </TelegramProvider>
      </body>
    </html>
  );
}
