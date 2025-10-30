'use client'

import { useState } from 'react'
import { 
  PhoneIcon, 
  HomeIcon, 
  QuestionMarkCircleIcon, 
  BriefcaseIcon,
  UserCircleIcon,
  Bars3Icon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Top Header */}
      <div className="gradient-blue text-white py-3 shadow-lg">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white text-blue-500 rounded-full flex items-center justify-center font-bold text-xl">
                V
              </div>
              <span className="text-2xl font-bold">VivaAir</span>
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors duration-200">
                <PhoneIcon className="w-4 h-4" />
                <span className="text-sm font-medium">Ventas 01 800 518 9327</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              
              <a href="#" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
                <HomeIcon className="w-4 h-4" />
                <span className="text-sm">Aerolíneas</span>
              </a>
              
              <a href="#" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
                <QuestionMarkCircleIcon className="w-4 h-4" />
                <span className="text-sm">Ayuda</span>
              </a>
              
              <a href="#" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
                <BriefcaseIcon className="w-4 h-4" />
                <span className="text-sm">Mis Viajes</span>
              </a>
            </div>

            {/* User Section */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="text-right">
                <div className="text-sm font-semibold">Beneficios Pasaporte</div>
                <div className="text-xs opacity-80">Cupones, puntos y más.</div>
              </div>
              
              <div className="relative">
                <UserCircleIcon className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity duration-200" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  1
                </span>
              </div>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                <Bars3Icon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md py-4">
        <div className="container">
          <div className="flex justify-center space-x-8 overflow-x-auto">
            {[
              { icon: '✈️', label: 'Vuelos', active: true },
              { icon: '🏷️', label: 'Ofertas', active: false },
              { icon: '🎫', label: 'Actividades', active: false },
              { icon: '🚗', label: 'Carros', active: false },
              { icon: '🚌', label: 'Traslados', active: false },
              { icon: '📱', label: 'App', active: false },
              { icon: '💳', label: 'Pagos', active: false },
              { icon: '📞', label: 'Contacto', active: false },
            ].map((item, index) => (
              <button
                key={index}
                className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                  item.active
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
