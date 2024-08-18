import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'
import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Simulador de votos para las elecciones del 28 de julio en Venezuela',
    default: 'Simulador de votos para las elecciones del 28 de julio en Venezuela - Aprende a votar',
  },
  description: `En este sitio web podrás aprender todo lo necesario para votar en las próximas elecciones del 28 de julio en Venezuela. Aprenderás sobre los mecanismos de votación, los diferentes tipos de votos, cómo se cuenta los votos y cómo se determina el resultado final. 
  Además, podrás simular tu voto y ver cómo se reflejaría en los resultados finales. No importa si eres un experto en política o si eres totalmente nuevo en este mundo, este sitio web te ayudará a comprender cómo funciona el proceso de votación y cómo puedes participar en él de manera efectiva.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-gray-50 antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <body className="flex bg-gray-50 min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
