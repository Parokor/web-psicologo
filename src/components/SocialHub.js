import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaWhatsapp
} from 'react-icons/fa'
import {
  FiExternalLink
} from 'react-icons/fi'
import Tilt from 'react-parallax-tilt'

const SocialHub = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  // Datos simplificados sin conflictos GraphQL
  const socialPlatforms = [
    {
      id: 'instagram',
      name: 'Instagram',
      icon: FaInstagram,
      gradient: 'from-pink-500 via-red-500 to-yellow-500',
      url: 'https://instagram.com/tu_usuario',
      followers: '2.5K',
      description: 'Consejos diarios y reflexiones',
      bgColor: 'bg-gradient-to-br from-pink-50 to-orange-50',
      iconColor: 'text-pink-600',
      stats: { posts: 245, followers: '2.5K', engagement: '4.2%' }
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: FaLinkedin,
      gradient: 'from-blue-600 to-blue-700',
      url: 'https://linkedin.com/in/tu_perfil',
      followers: '1.8K',
      description: 'Contenido profesional y networking',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      iconColor: 'text-blue-600',
      stats: { connections: '1.8K', articles: 28, views: '15K' }
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: FaYoutube,
      gradient: 'from-red-500 to-red-600',
      url: 'https://youtube.com/tu_canal',
      followers: '890',
      description: 'Videos educativos semanales',
      bgColor: 'bg-gradient-to-br from-red-50 to-pink-50',
      iconColor: 'text-red-600',
      stats: { subscribers: '890', videos: 35, hours: '1.2K' }
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: FaWhatsapp,
      gradient: 'from-green-500 to-green-600',
      url: 'https://wa.me/34600123456',
      followers: 'Chat',
      description: 'Contacto directo e inmediato',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      iconColor: 'text-green-600',
      stats: { available: '24/7', response: '< 1h', rating: '5.0★' }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-primary-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-blue-50/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Conecta{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Conmigo
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Sígueme en mis redes sociales para contenido diario sobre bienestar mental
          </motion.p>
        </motion.div>

        {/* Social Platforms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {socialPlatforms.map((platform) => {
            const IconComponent = platform.icon
            return (
              <motion.a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="block group"
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={250}
                >
                  <div className={`${platform.bgColor} rounded-2xl p-6 border border-white/20 shadow-lg backdrop-blur-sm hover:shadow-2xl transition-all duration-500 h-full`}>
                    {/* Icon and Name */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${platform.gradient}`}>
                        <IconComponent className="text-2xl text-white" />
                      </div>
                      <FiExternalLink className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {platform.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {platform.description}
                    </p>

                    {/* Stats */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Seguidores</span>
                        <span className="font-semibold text-gray-900">{platform.followers}</span>
                      </div>
                      {Object.entries(platform.stats).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-sm text-gray-500 capitalize">{key}</span>
                          <span className="font-medium text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hover Effect */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`h-1 bg-gradient-to-r ${platform.gradient} rounded-full`}></div>
                    </div>
                  </div>
                </Tilt>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para comenzar tu transformación?
            </h3>
            <p className="text-gray-600 mb-6">
              Conecta conmigo en cualquiera de mis plataformas y comienza tu viaje hacia el bienestar mental
            </p>
            <a
              href="https://wa.me/34600123456"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaWhatsapp className="text-xl" />
              Contactar por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialHub
