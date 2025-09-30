import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Taher Said - Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Next.js, Node.js, and AWS. Building modern web applications with a focus on performance and user experience.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'TypeScript', 'AWS'],
  authors: [{ name: 'Taher Said' }],
  creator: 'Taher Said',
  openGraph: {
    title: 'Taher Said - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, and AWS.',
    url: 'https://tahersaid.dev',
    siteName: 'Taher Said Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taher Said - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, and AWS.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
