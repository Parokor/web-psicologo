import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaWhatsapp
} from 'react-icons/fa'
import {
  FiMail,
  FiExternalLink,
  FiUsers,
  FiHeart,
  FiMessageCircle
} from 'react-icons/fi'
import Tilt from 'react-parallax-tilt'

const SocialHub = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [hoveredCard, setHoveredCard] = useState(null)

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
      id: 'tiktok',
      name: 'TikTok',
      icon: FaTiktok,
      gradient: 'from-black via-pink-500 to-cyan-500',
      url: 'https://tiktok.com/@tu_usuario',
      followers: '3.2K',
      description: 'Tips rápidos de bienestar',
      bgColor: 'bg-gradient-to-br from-gray-50 to-purple-50',
      iconColor: 'text-gray-900',
      stats: { followers: '3.2K', likes: '12K', videos: 67 }
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: FaFacebook,
      gradient: 'from-blue-500 to-blue-600',
      url: 'https://facebook.com/tu_pagina',
      followers: '1.5K',
      description: 'Comunidad y eventos',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      iconColor: 'text-blue-600',
      stats: { likes: '1.5K', posts: 156, reach: '8K' }
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
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  }

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-primary-50/50 to-white relative overflow-hidden" data-aos="fade-up">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary-200 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-200 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Conecta <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Conmigo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Sígueme en mis redes sociales para contenido exclusivo, tips diarios y actualizaciones
            </p>

            {/* Estadísticas globales */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center gap-8 mb-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">10K+</div>
                <div className="text-sm text-gray-500">Seguidores totales</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-1">500+</div>
                <div className="text-sm text-gray-500">Posts publicados</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">95%</div>
                <div className="text-sm text-gray-500">Engagement rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Grid de redes sociales */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {socialPlatforms.map((platform, index) => (
              <motion.a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                className="group block"
                onHoverStart={() => setHoveredCard(platform.id)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  scale={1.02}
                >
                  <div className={`relative ${platform.bgColor} backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 overflow-hidden h-full`}>
                    {/* Gradiente animado de fondo */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      animate={{
                        scale: hoveredCard === platform.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Contenido */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Header con icono y followers */}
                      <div className="flex items-center justify-between mb-4">
                        <motion.div
                          className={`w-16 h-16 ${platform.bgColor} rounded-2xl flex items-center justify-center shadow-lg`}
                          variants={iconVariants}
                          whileHover="hover"
                        >
                          <platform.icon className={`text-3xl ${platform.iconColor}`} />
                        </motion.div>

                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">{platform.followers}</div>
                          <div className="text-xs text-gray-500">seguidores</div>
                        </div>
                      </div>

                      {/* Nombre y descripción */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                          {platform.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {platform.description}
                        </p>
                      </div>

                      {/* Estadísticas */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {Object.entries(platform.stats).map(([key, value], idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-sm font-semibold text-gray-900">{value}</div>
                            <div className="text-xs text-gray-500 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* Botón de acción */}
                      <motion.div
                        className="flex items-center justify-between pt-4 border-t border-gray-200/50"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors duration-300">
                          {platform.id === 'whatsapp' ? 'Enviar mensaje' : 'Seguir'}
                        </span>
                        <motion.div
                          animate={{
                            x: hoveredCard === platform.id ? 5 : 0,
                            rotate: hoveredCard === platform.id ? 45 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <FiExternalLink className="text-primary-500" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Efectos de partículas */}
                    {hoveredCard === platform.id && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-primary-400 rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                              y: [0, -20, -40],
                            }}
                            transition={{
                              duration: 2,
                              delay: i * 0.2,
                              repeat: Infinity,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </Tilt>
              </motion.a>
            ))}
          </motion.div>

          {/* Call to Action especial */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <FiMail className="text-3xl text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Prefieres el contacto directo?
              </h3>
              <p className="text-gray-600 mb-6">
                Envíame un email y te responderé en menos de 24 horas
              </p>

              <motion.a
                href="mailto:consulta@psicologo.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail />
                <span>Enviar Email</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FiExternalLink />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialHub

export default SocialHub