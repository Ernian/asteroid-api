'use client'

import AppProvider from '@/components/appProvider'
import Header from '@/components/header'
import EarthImage from '@/components/earthImage'
import './styles/globals.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <AppProvider>
          <main className='main'>
            <EarthImage />
            <Header />
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  )
}
