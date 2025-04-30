import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Rafael Satyro - Frontend Engineer Portfolio',
  description: 'Desenvolvedor de software',
}

const nunito = Nunito({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.className} bg-background text-primary`}>{children}</body>
    </html>
  )
}
