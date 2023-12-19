import Header from '@/Components/Header'
import './globals.css'
import { Inter } from 'next/font/google'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className='h-[100vh] overflow-hidden' >
      <Header />
        {children}
      </body>
    </html>
  )
}
