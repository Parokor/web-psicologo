import React from 'react'
import { Link } from 'gatsby'

const BlogPreview = () => {
  // Componente simplificado sin datos mock problemáticos
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50/50" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Últimos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Artículos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contenido valioso para tu bienestar emocional
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Manejo de la Ansiedad
              </h3>
              <p className="text-gray-600 mb-4">
                Técnicas efectivas para reducir la ansiedad en tu día a día.
              </p>
              <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-semibold">
                Leer más →
              </Link>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-secondary-100 to-primary-100"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Autoestima Saludable
              </h3>
              <p className="text-gray-600 mb-4">
                Construye una autoestima sólida y duradera paso a paso.
              </p>
              <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-semibold">
                Leer más →
              </Link>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Mindfulness Moderno
              </h3>
              <p className="text-gray-600 mb-4">
                La práctica de mindfulness adaptada a la vida actual.
              </p>
              <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-semibold">
                Leer más →
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/blog">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Ver todos los artículos
              <span>→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview
