import Header from '@/components/Header'
import SearchForm from '@/components/SearchForm'
import DestinationCard from '@/components/DestinationCard'
import SpecialOffers from '@/components/SpecialOffers'
import AdditionalServices from '@/components/AdditionalServices'

const destinations = [
  {
    destination: 'Vuelos a Cartagena de Indias',
    city: 'Cartagena',
    price: '$ 247.516',
    dates: '8 febrero 2026 - 19 febrero 2026',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
    alt: 'Cartagena de Indias'
  },
  {
    destination: 'Vuelos a Medellín',
    city: 'Medellín',
    price: '$ 143.815',
    dates: '1 febrero 2026 - 5 febrero 2026',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop',
    alt: 'Medellín'
  },
  {
    destination: 'Vuelos a Santa Marta',
    city: 'Santa Marta',
    price: '$ 262.454',
    dates: '3 febrero 2026 - 12 febrero 2026',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    alt: 'Santa Marta'
  },
  {
    destination: 'Vuelos a Cali',
    city: 'Cali',
    price: '$ 138.920',
    dates: '11 noviembre 2025 - 15 noviembre 2025',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop',
    alt: 'Cali'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <SearchForm />
      
      {/* Popular Destinations */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Encuentra vuelos baratos a los destinos más populares
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((dest, index) => (
              <DestinationCard
                key={index}
                destination={dest.destination}
                city={dest.city}
                price={dest.price}
                dates={dest.dates}
                image={dest.image}
                alt={dest.alt}
              />
            ))}
          </div>
        </div>
      </section>

      <SpecialOffers />
      <AdditionalServices />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                  V
                </div>
                <span className="text-2xl font-bold">VivaAir</span>
              </div>
              <p className="text-gray-400">
                Tu compañía de vuelos nacionales en Colombia
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Vuelos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Medellín</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cartagena</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cali</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Santa Marta</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Asistencia 24/7</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Check-in online</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Equipaje</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cambios y cancelaciones</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Ventas: 01 800 518 9327</li>
                <li>WhatsApp: +57 300 123 4567</li>
                <li>Email: info@vivaair.com</li>
                <li>Bogotá, Colombia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 VivaAir. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}