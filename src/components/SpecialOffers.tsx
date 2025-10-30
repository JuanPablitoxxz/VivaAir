'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface OfferCardProps {
  type: 'hotels' | 'discount' | 'flights' | 'vivaair'
  title: string
  subtitle?: string
  discount: string
  description?: string
  buttonText: string
  image: string
  alt: string
  icon?: string
}

export default function SpecialOffers() {
  const offers: OfferCardProps[] = [
    {
      type: 'hotels',
      title: 'VUELOS AVANCA',
      discount: 'HASTA 50% DTO',
      description: 'Paga a 3 CUOTAS SIN INTERESES',
      buttonText: 'VER OFERTAS AVANCA',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
      alt: 'Avión Avianca',
      icon: '✈️'
    },
    {
      type: 'discount',
      title: 'LATAM COLOMBIA',
      discount: 'Hasta $200.000 DTO',
      description: 'Nequi, Banco de Bogotá, Banco Popular',
      buttonText: 'VER OFERTAS LATAM',
      image: 'https://images.unsplash.com/photo-1506905925346-14bda5d4a4b0?w=400&h=300&fit=crop',
      alt: 'Avión LATAM'
    },
    {
      type: 'flights',
      title: 'VUELOS nacionales',
      discount: 'Hasta $300.000 DTO',
      description: 'Bogotá, Medellín, Cali y más!',
      buttonText: 'Explorar destinos',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop',
      alt: 'Ciudad colombiana',
      icon: '✈️'
    },
    {
      type: 'vivaair',
      title: 'VivaAir',
      subtitle: 'ft. SHAKIRA',
      discount: 'VUELOS ECONÓMICOS',
      buttonText: 'Busca ya tu viaje',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop',
      alt: 'Shakira'
    }
  ]

  const getCardStyles = (type: string) => {
    switch (type) {
      case 'hotels':
        return 'bg-gradient-to-br from-blue-600 to-blue-400 text-white'
      case 'discount':
        return 'bg-blue-300 text-white'
      case 'flights':
        return 'bg-blue-300 text-white'
      case 'vivaair':
        return 'bg-blue-600 text-white'
      default:
        return 'bg-gray-100 text-gray-900'
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`${getCardStyles(offer.type)} rounded-2xl overflow-hidden shadow-lg group cursor-pointer`}
            >
              <div className="p-6 flex flex-col justify-between h-64">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    {offer.icon && <span className="text-2xl">{offer.icon}</span>}
                    <div>
                      <h3 className="text-xl font-bold">{offer.title}</h3>
                      {offer.subtitle && (
                        <p className="text-sm opacity-80">{offer.subtitle}</p>
                      )}
                    </div>
                  </div>
                  
                  {offer.discount && (
                    <div className="text-2xl font-bold mb-4">
                      {offer.discount}
                    </div>
                  )}
                  
                  {offer.description && (
                    <div className="text-sm opacity-90 mb-4">
                      {offer.description}
                    </div>
                  )}
                </div>
                
                <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 group-hover:bg-white/40">
                  {offer.buttonText}
                </button>
              </div>
              
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
