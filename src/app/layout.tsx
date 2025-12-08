import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SkillBoostDAO',
  description: 'SkillBoostDAO is a Web3-powered platform that combines micro-SaaS tools and educational technology to help small businesses and professionals upskill through niche expertise communities, with a decentralized approach that incentivizes both learners and educators.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
