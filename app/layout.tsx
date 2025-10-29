import type { Metadata } from 'next'
import { Open_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'VIDELINA - Digital Library of Light',
  description: 'A digital library dedicated to the works of Omraam Mikhaël Aïvanhov',
  keywords: ['spiritual', 'wisdom', 'books', 'light', 'Omraam Mikhaël Aïvanhov'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${cormorantGaramond.variable}`}>
      <body className="font-sans bg-white text-gray-900 min-h-screen">
        {children}
      </body>
    </html>
  )
}
