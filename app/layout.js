import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/component/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js learing',
  description: 'Building awesome stuffs Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar className='bg-primay ' />
        <main className='px-8 py-20 max-w-6xl mx-auto '> {children}</main>
      </body>
    </html>
  )
}
