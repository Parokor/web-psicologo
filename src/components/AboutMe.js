import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiAward, FiBook, FiHeart, FiUsers, FiTarget } from 'react-icons/fi'
import Tilt from 'react-parallax-tilt'

const AboutMe = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const specialties = [
    { icon: FiHeart, title: "Ansiedad y Estrés", description: "Técnicas efectivas para manejar la ansiedad" },
    { icon: FiUsers, title: "Terapia de Pareja", description: "Fortalecimiento de relaciones saludables" },
    { icon: FiTarget, title: "Desarrollo Personal", description: "Alcanza tu máximo potencial" },
    { icon: FiBriefcase, title: "Burnout Laboral", description: "Recupera el equilibrio vida-trabajo" },
  ]

  const timeline = [
    { year: "2014", title: "Licenciatura en Psicología", institution: "Universidad Complutense" },
    { year: "2016", title: "Máster en Psicología Clínica", institution: "Universidad Autónoma" },
    { year: "2018", title: "Especialización en TCC", institution: "Instituto Beck" },
    { year: "2020", title: "Certificación en Mindfulness", institution: "MBSR Center" },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50/30 overflow-hidden" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Mí</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprometido con tu bienestar emocional y crecimiento personal
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Imagen y estadísticas */}
            <motion.div variants={itemVariants} className="relative">
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.2}
              >
                <div className="relative">
                  {/* Decoración de fondo */}
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-3xl opacity-20 blur-2xl"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Imagen placeholder */}
                  <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-xl">
                    <div className="w-full h-96 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-2xl flex items-center justify-center">
                      <p className="text-gray-600 text-lg">Foto Profesional</p>
                    </div>
                  </div>

                  {/* Badges flotantes */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <FiAward className="text-3xl text-primary-500 mb-2" />
                    <p className="text-sm font-semibold">10+ años</p>
                    <p className="text-xs text-gray-600">Experiencia</p>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4"
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  >
                    <FiUsers className="text-3xl text-secondary-500 mb-2" />
                    <p className="text-sm font-semibold">500+</p>
                    <p className="text-xs text-gray-600">Pacientes</p>
                  </motion.div>
                </div>
              </Tilt>
            </motion.div>

            {/* Contenido */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Dr. [Nombre del Psicólogo]
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                Mi pasión por la psicología nació del deseo profundo de ayudar a las personas
                a superar sus desafíos emocionales y alcanzar una vida plena y significativa.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Con más de 10 años de experiencia, he tenido el privilegio de acompañar a
                cientos de personas en su viaje hacia el bienestar emocional, utilizando
                enfoques basados en evidencia científica y adaptados a cada individuo.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiBook className="text-primary-600" />
                  <span className="text-sm font-medium text-primary-700">Formación Continua</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 px-4 py-2 bg-secondary-100 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiHeart className="text-secondary-600" />
                  <span className="text-sm font-medium text-secondary-700">Enfoque Empático</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Especialidades */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Áreas de Especialización
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mb-4">
                      <specialty.icon className="text-2xl text-primary-600" />
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {specialty.title}
                    </h4>

                    <p className="text-sm text-gray-600">
                      {specialty.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline de formación */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Mi Trayectoria Profesional
            </h3>

            <div className="relative">
              {/* Línea central */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-200 to-secondary-200" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="flex-1" />

                    {/* Punto en la línea */}
                    <div className="relative z-10">
                      <motion.div
                        className="w-4 h-4 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full"
                        whileHover={{ scale: 1.5 }}
                      />
                    </div>

                    <div className={`flex-1 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                      <motion.div
                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className="text-sm font-semibold text-primary-600">
                          {item.year}
                        </span>
                        <h4 className="text-lg font-bold text-gray-900 mt-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.institution}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe