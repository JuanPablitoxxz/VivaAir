'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { 
  CalendarDaysIcon, 
  UserIcon, 
  MapPinIcon,
  ArrowPathIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

const searchSchema = z.object({
  origin: z.string().min(1, 'Origen es requerido'),
  destination: z.string().min(1, 'Destino es requerido'),
  departureDate: z.string().min(1, 'Fecha de ida es requerida'),
  returnDate: z.string().optional(),
  passengers: z.number().min(1, 'Mínimo 1 pasajero'),
  flightType: z.enum(['round-trip', 'one-way', 'multi-city'])
})

type SearchFormData = z.infer<typeof searchSchema>

export default function SearchForm() {
  const [flightType, setFlightType] = useState<'round-trip' | 'one-way' | 'multi-city'>('round-trip')
  const [isSearching, setIsSearching] = useState(false)

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      origin: 'Bogotá, Bogotá D.C.',
      destination: '',
      departureDate: '',
      returnDate: '',
      passengers: 1,
      flightType: 'round-trip'
    }
  })

  const swapOriginDestination = () => {
    const origin = watch('origin')
    const destination = watch('destination')
    setValue('origin', destination)
    setValue('destination', origin)
  }

  const onSubmit = async (data: SearchFormData) => {
    setIsSearching(true)
    
    // Simular búsqueda
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Búsqueda realizada:', data)
    alert(`Buscando vuelos de ${data.origin} a ${data.destination}`)
    
    setIsSearching(false)
  }

  return (
    <div className="gradient-blue py-12">
      <div className="container">
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-6">
            <h1 className="text-3xl font-bold text-blue-600">Vuelos Nacionales</h1>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Flight Type Tabs */}
              <div className="flex bg-gray-100 rounded-full p-1">
                {[
                  { key: 'round-trip', label: 'Ida y vuelta' },
                  { key: 'one-way', label: 'Solo ida' },
                  { key: 'multi-city', label: 'Multidestino' }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setFlightType(tab.key as any)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      flightType === tab.key
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Airlines Button */}
              <div className="relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                  Mejores precios
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transition-colors duration-200">
                  <span>✈️</span>
                  <span>Avianca, LATAM, VivaAir</span>
                </button>
              </div>
            </div>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Origin and Destination */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
              <div className="lg:col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ORIGEN
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                  <input
                    {...register('origin')}
                    className="input-field pl-10 bg-gray-50"
                    readOnly
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={swapOriginDestination}
                  className="p-3 bg-gray-100 hover:bg-blue-100 text-blue-600 rounded-full transition-colors duration-200"
                >
                  <ArrowPathIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="lg:col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  DESTINO
                </label>
                <div className="relative">
                  <MapPinIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500" />
                  <input
                    {...register('destination')}
                    placeholder="Ingresa hacia donde quieres viajar"
                    className="input-field pl-10"
                  />
                </div>
                {errors.destination && (
                  <p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>
                )}
              </div>
            </div>

            {/* Dates and Passengers */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  FECHAS
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <CalendarDaysIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500" />
                    <input
                      {...register('departureDate')}
                      type="date"
                      className="input-field pl-10"
                    />
                    {errors.departureDate && (
                      <p className="text-red-500 text-sm mt-1">{errors.departureDate.message}</p>
                    )}
                  </div>
                  <div className="relative">
                    <CalendarDaysIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500" />
                    <input
                      {...register('returnDate')}
                      type="date"
                      className="input-field pl-10"
                      disabled={flightType === 'one-way'}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  PASAJEROS Y CLASE
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500" />
                  <select
                    {...register('passengers', { valueAsNumber: true })}
                    className="input-field pl-10"
                  >
                    <option value={1}>1 persona, Económica</option>
                    <option value={2}>2 personas, Económica</option>
                    <option value={3}>3 personas, Económica</option>
                    <option value={4}>4 personas, Económica</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Cheaper Date Toggle */}
            <div className="flex justify-center">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="sr-only" />
                <div className="relative">
                  <input type="checkbox" className="sr-only" />
                  <div className="w-12 h-6 bg-gray-300 rounded-full shadow-inner"></div>
                  <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200"></div>
                </div>
                <span className="text-gray-700 font-medium">Cualquier fecha más barata</span>
              </label>
            </div>

            {/* Search Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSearching}
                className="bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white px-12 py-4 rounded-lg font-bold text-lg flex items-center space-x-3 transition-colors duration-200"
              >
                {isSearching ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Buscando...</span>
                  </>
                ) : (
                  <>
                    <MagnifyingGlassIcon className="w-6 h-6" />
                    <span>Buscar</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
