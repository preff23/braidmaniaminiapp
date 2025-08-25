import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Tabs from '@/components/Tabs'
import TelegramProvider from '@/components/TelegramProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Braids Pro - Telegram Mini App',
  description: 'Полезные материалы по плетению косичек и брейдингу',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <TelegramProvider>
          <div className="min-h-screen bg-bg pb-20">
            {children}
            <Tabs />
          </div>
        </TelegramProvider>
      </body>
    </html>
  )
}
