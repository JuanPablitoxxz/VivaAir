import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VivaAir - Vuelos Nacionales',
  description: 'Encuentra los mejores vuelos nacionales en Colombia con VivaAir. Reserva tu vuelo a Medellín, Cartagena, Cali y más destinos.',
  keywords: 'vuelos nacionales, Colombia, VivaAir, Medellín, Cartagena, Cali, Santa Marta, avión',
  authors: [{ name: 'VivaAir' }],
  openGraph: {
    title: 'VivaAir - Vuelos Nacionales',
    description: 'Encuentra los mejores vuelos nacionales en Colombia',
    type: 'website',
    locale: 'es_CO',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}