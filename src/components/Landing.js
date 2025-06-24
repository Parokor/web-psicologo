import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import TypewriterComponent from 'typewriter-effect'
import { FiArrowRight, FiCalendar, FiMessageCircle, FiUsers, FiHeart } from 'react-icons/fi'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import Tilt from 'react-parallax-tilt'

const Landing = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Partículas flotantes animadas
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 30 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 5,
  }))

  // Variantes de animación
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Partículas animadas de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: `radial-gradient(circle, rgba(12, 164, 184, 0.15) 0%, rgba(90, 156, 242, 0.1) 100%)`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradiente animado de fondo */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, #0ca4b8 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, #5a9cf2 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, #38bfd1 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Patrón de ondas SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 320" className="w-full">
          <motion.path
            fill="url(#wave-gradient)"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,122.7C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ca4b8" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#38bfd1" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#5a9cf2" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          style={{ y, opacity }}
          className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 gap-12"
        >
          {/* Contenido de texto */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {/* Badge animado */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100/50 backdrop-blur-sm rounded-full text-primary-700 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Disponible para consultas online y presenciales
            </motion.div>

            {/* Título con Typewriter */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
            >
              Tu bienestar emocional{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                <TypewriterComponent
                  options={{
                    strings: [
                      'es mi prioridad',
                      'importa',
                      'es posible',
                      'comienza hoy',
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 80,
                  }}
                />
              </span>
            </motion.h1>

            {/* Descripción */}
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Psicólogo profesional especializado en terapia cognitivo-conductual.
              Te acompaño en tu proceso de crecimiento personal y bienestar emocional
              con un enfoque cálido, empático y basado en evidencia científica.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-400 to-primary-600 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiCalendar className="mr-2" />
                Reservar Primera Consulta
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />

                {/* Efecto de brillo */}
                <motion.div
                  className="absolute inset-0 -top-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 rounded-full"
                  initial={{ x: '-200%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.7 }}
                />
              </motion.button>

              <motion.button
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white border-2 border-primary-400 rounded-full hover:bg-primary-50 hover:border-primary-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMessageCircle className="mr-2" />
                Contactar por WhatsApp
              </motion.button>
            </motion.div>

            {/* Estadísticas */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-8"
            >
              {[
                { icon: FiUsers, value: 500, label: 'Pacientes ayudados', suffix: '+' },
                { icon: FiHeart, value: 98, label: 'Satisfacción', suffix: '%' },
                { icon: FiCalendar, value: 10, label: 'Años de experiencia', suffix: '+' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <stat.icon className="text-primary-500 text-2xl" />
                    <span className="text-3xl font-bold text-gray-900">
                      {inView && (
                        <CountUp
                          end={stat.value}
                          duration={2.5}
                          suffix={stat.suffix}
                        />
                      )}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Imagen/Visual del psicólogo */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.02}
            >
              <div className="relative">
                {/* Blob animado de fondo */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-3xl opacity-30"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Placeholder para imagen del psicólogo */}
                <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-2xl">
                  <div className="w-full h-96 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-2xl flex items-center justify-center">
                    <p className="text-gray-600 text-lg">Imagen del Profesional</p>
                  </div>

                  {/* Tarjetas flotantes con información */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4"
                    animate={{
                      y: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium">Disponible ahora</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4"
                    animate={{
                      y: [5, -5, 5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">⭐</span>
                      <span className="text-sm font-medium">4.9/5 valoración</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Landing