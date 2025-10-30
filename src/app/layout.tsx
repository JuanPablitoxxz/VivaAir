import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VivaAir - Vuelos Nacionales | Avianca, LATAM, VivaAir',
  description: 'Compara y reserva vuelos nacionales en Colombia. Encuentra las mejores ofertas de Avianca, LATAM, VivaAir y más aerolíneas. Medellín, Cartagena, Cali, Santa Marta.',
  keywords: 'vuelos nacionales, Colombia, Avianca, LATAM, VivaAir, EasyFly, Medellín, Cartagena, Cali, Santa Marta, avión, aerolíneas',
  authors: [{ name: 'VivaAir' }],
  openGraph: {
    title: 'VivaAir - Comparador de Vuelos Nacionales',
    description: 'Compara precios de vuelos nacionales en Colombia. Avianca, LATAM, VivaAir y más.',
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