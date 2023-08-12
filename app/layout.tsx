import './styles/globals.scss'
import type { Metadata } from 'next'
import Header from '@/components/header'
import Cart from '@/components/cart'

export const metadata: Metadata = {
  title: 'Asteroid API',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <main className='main'>
          <Header />
          {children}
          <Cart />
        </main>
      </body>
    </html>
  )
}
