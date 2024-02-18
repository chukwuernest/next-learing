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
        <Navbar />
        <main className='px-8 py-5 max-w-6xl' mx-auto></main>
        <div className='px-20'>{children}</div>
      </body>
    </html>
  )
}
