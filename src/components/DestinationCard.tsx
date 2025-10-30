'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface DestinationCardProps {
  destination: string
  city: string
  airline: string
  price: string
  dates: string
  image: string
  alt: string
}

export default function DestinationCard({ 
  destination, 
  city, 
  airline,
  price, 
  dates, 
  image, 
  alt 
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="card overflow-hidden group cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold mb-3">
          VUELO
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
          {destination}
        </h3>
        
        <p className="text-gray-600 text-sm mb-1">Partiendo desde Bogotá</p>
        <p className="text-gray-600 text-sm mb-4">Por {airline}</p>
        
        <button className="bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 mb-4">
          Ida y vuelta
        </button>
        
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            {price}
          </div>
          <div className="text-gray-500 text-sm text-right">
            {dates}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
