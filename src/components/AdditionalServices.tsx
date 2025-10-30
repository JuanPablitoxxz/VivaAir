'use client'

import { motion } from 'framer-motion'
import { 
  MegaphoneIcon, 
  CpuChipIcon 
} from '@heroicons/react/24/outline'

export default function AdditionalServices() {
  const services = [
    {
      icon: MegaphoneIcon,
      title: 'Compra tu viaje con asesoría personalizada',
      description: 'Nuestros agentes expertos te pueden ayudar a concretar tu viaje. ¡Consulta nuestros canales de atención!',
      buttonText: 'Conocer canales',
      gradient: 'from-blue-100 to-blue-200'
    },
    {
      icon: CpuChipIcon,
      title: 'Planea tu viaje con Inteligencia Artificial',
      description: '¿Tienes un viaje en mente y no sabes por dónde empezar? SOFIA, nuestra asistente de viajes con IA, puede guiarte.',
      buttonText: 'Chatear con SOFIA',
      gradient: 'from-purple-100 to-blue-200'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full -translate-y-16 translate-x-16 opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 group-hover:shadow-lg">
                  {service.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
