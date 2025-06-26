import React from 'react'
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const SocialHub = () => {
  // Enlaces sociales funcionales
  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/psicologo_profesional', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/psicologo-profesional', color: 'hover:text-blue-600' },
    { name: 'YouTube', icon: FaYoutube, url: 'https://youtube.com/@psicologia-profesional', color: 'hover:text-red-600' },
    { name: 'Facebook', icon: FaFacebook, url: 'https://facebook.com/psicologo.profesional', color: 'hover:text-blue-700' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/34600123456?text=Hola,%20me%20gustaría%20contactar%20contigo', color: 'hover:text-green-600' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary-50/50 to-white" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conecta <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Conmigo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sígueme en mis redes sociales para contenido exclusivo
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center gap-2 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              aria-label={social.name}
            >
              <social.icon className={`text-5xl text-gray-600 transition-colors duration-300 ${social.color}`} />
              <span className="text-sm font-medium text-gray-700">{social.name}</span>
            </a>
          ))}
        </div>
        
        <div className="text-center bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
          <FiMail className="text-5xl text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Prefieres el email?
          </h3>
          <p className="text-gray-600 mb-6">
            Envíame un mensaje y te responderé en menos de 24 horas
          </p>
          <a
            href="mailto:consulta@psicologo.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Enviar Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default SocialHub
