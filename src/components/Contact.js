import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useInView } from 'react-intersection-observer'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheck,
  FiMessageCircle,
  FiUser,
  FiCalendar
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import toast from 'react-hot-toast'
import Tilt from 'react-parallax-tilt'

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm()

  const watchedFields = watch()

  const onSubmit = async (data) => {
    setIsSubmitting(true)

    try {
      // Envío real usando Netlify Forms
      const formData = new FormData()
      formData.append('form-name', 'contact')
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })

      if (response.ok) {
        toast.success('¡Mensaje enviado con éxito! Te contactaré pronto.', {
          duration: 5000,
          icon: '✅',
        })

        setIsSubmitted(true)
        reset()

        // Reset después de 5 segundos
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error('Error en el envío')
      }
    } catch (error) {
      toast.error('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.', {
        duration: 5000,
        icon: '❌',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: FiPhone, label: 'Teléfono', value: '+34 600 123 456', link: 'tel:+34600123456' },
    { icon: FiMail, label: 'Email', value: 'consulta@psicologo.com', link: 'mailto:consulta@psicologo.com' },
    { icon: FiMapPin, label: 'Ubicación', value: 'Madrid, España', link: '#' },
    { icon: FiClock, label: 'Horario', value: 'Lun-Vie: 9:00-20:00', link: '#' },
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

  return (
    <section className="py-20 bg-gradient-to-b from-primary-50/30 to-white relative overflow-hidden" data-aos="fade-up">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
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
              ¿Listo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">comenzar?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dar el primer paso es el acto más valiente. Estoy aquí para acompañarte.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Información de Contacto
                </h3>
                <p className="text-gray-600 mb-8">
                  Puedes contactarme a través de cualquiera de estos medios.
                  Respondo en un plazo máximo de 24 horas.
                </p>
              </div>

              {/* Cards de contacto */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="block group"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary-50 group-hover:to-secondary-50">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="text-2xl text-primary-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        <p className="text-lg font-semibold text-gray-900">{info.value}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Mapa o imagen */}
              <motion.div variants={itemVariants}>
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.1}
                >
                  <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-xl h-64 flex items-center justify-center">
                    <p className="text-gray-600">Mapa de ubicación</p>
                  </div>
                </Tilt>
              </motion.div>
            </motion.div>

            {/* Formulario */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Envíame un mensaje
                </h3>

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                    >
                      {/* Hidden Netlify form fields */}
                      <input type="hidden" name="form-name" value="contact" />
                      <input type="hidden" name="bot-field" />

                      {/* Nombre */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre completo
                        </label>
                        <div className="relative">
                          <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            {...register('name', {
                              required: 'El nombre es requerido',
                              minLength: { value: 3, message: 'Mínimo 3 caracteres' }
                            })}
                            className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-100 ${
                              errors.name
                                ? 'border-red-300 focus:border-red-500'
                                : watchedFields.name
                                  ? 'border-green-300 focus:border-green-500'
                                  : 'border-gray-200 focus:border-primary-500'
                            }`}
                            placeholder="Tu nombre"
                          />
                          {watchedFields.name && !errors.name && (
                            <FiCheck className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500" />
                          )}
                        </div>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.name.message}
                          </motion.p>
                        )}
                      </motion.div>

                      {/* Email */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <div className="relative">
                          <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            {...register('email', {
                              required: 'El email es requerido',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email inválido'
                              }
                            })}
                            type="email"
                            className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-100 ${
                              errors.email
                                ? 'border-red-300 focus:border-red-500'
                                : watchedFields.email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(watchedFields.email)
                                  ? 'border-green-300 focus:border-green-500'
                                  : 'border-gray-200 focus:border-primary-500'
                            }`}
                            placeholder="tu@email.com"
                          />
                          {watchedFields.email && !errors.email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(watchedFields.email) && (
                            <FiCheck className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500" />
                          )}
                        </div>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.email.message}
                          </motion.p>
                        )}
                      </motion.div>

                      {/* Teléfono */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Teléfono (opcional)
                        </label>
                        <div className="relative">
                          <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            {...register('phone')}
                            type="tel"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-100"
                            placeholder="+34 600 000 000"
                          />
                        </div>
                      </motion.div>

                      {/* Tipo de consulta */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tipo de consulta
                        </label>
                        <div className="relative">
                          <FiCalendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <select
                            {...register('consultType', { required: 'Selecciona un tipo de consulta' })}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-100 appearance-none"
                          >
                            <option value="">Selecciona una opción</option>
                            <option value="primera-consulta">Primera consulta</option>
                            <option value="terapia-individual">Terapia individual</option>
                            <option value="terapia-pareja">Terapia de pareja</option>
                            <option value="consulta-online">Consulta online</option>
                            <option value="informacion">Información general</option>
                          </select>
                        </div>
                        {errors.consultType && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.consultType.message}
                          </motion.p>
                        )}
                      </motion.div>

                      {/* Mensaje */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mensaje
                        </label>
                        <div className="relative">
                          <FiMessageCircle className="absolute left-4 top-4 text-gray-400" />
                          <textarea
                            {...register('message', {
                              required: 'El mensaje es requerido',
                              minLength: { value: 10, message: 'Mínimo 10 caracteres' }
                            })}
                            rows={4}
                            className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-100 resize-none ${
                              errors.message
                                ? 'border-red-300 focus:border-red-500'
                                : watchedFields.message && watchedFields.message.length >= 10
                                  ? 'border-green-300 focus:border-green-500'
                                  : 'border-gray-200 focus:border-primary-500'
                            }`}
                            placeholder="Cuéntame cómo puedo ayudarte..."
                          />
                          {watchedFields.message && watchedFields.message.length >= 10 && !errors.message && (
                            <FiCheck className="absolute right-4 top-4 text-green-500" />
                          )}
                        </div>
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.message.message}
                          </motion.p>
                        )}
                      </motion.div>

                      {/* Checkbox de privacidad */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-start gap-3"
                      >
                        <input
                          {...register('privacy', { required: 'Debes aceptar la política de privacidad' })}
                          type="checkbox"
                          className="mt-1 w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <label className="text-sm text-gray-600">
                          He leído y acepto la{' '}
                          <a href="#" className="text-primary-600 hover:text-primary-700 underline">
                            política de privacidad
                          </a>{' '}
                          y el tratamiento de mis datos personales.
                        </label>
                      </motion.div>
                      {errors.privacy && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm"
                        >
                          {errors.privacy.message}
                        </motion.p>
                      )}

                      {/* Botón de envío */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full relative group overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="relative bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                          {/* Efecto de onda */}
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            initial={{ scale: 0, opacity: 1 }}
                            whileHover={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 0.6 }}
                          />

                          <span className="relative flex items-center justify-center gap-2">
                            {isSubmitting ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Enviando...
                              </>
                            ) : (
                              <>
                                <FiSend />
                                Enviar mensaje
                              </>
                            )}
                          </span>
                        </div>
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <FiCheck className="text-3xl text-green-600" />
                      </motion.div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">
                        ¡Mensaje enviado!
                      </h4>
                      <p className="text-gray-600">
                        Te responderé lo antes posible.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Botón flotante de WhatsApp */}
      <motion.a
        href="https://wa.me/34600123456?text=Hola,%20me%20gustaría%20agendar%20una%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          {/* Pulse effect */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />

          {/* Button */}
          <div className="relative bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <FaWhatsapp className="text-3xl" />
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white text-sm py-2 px-4 rounded-lg whitespace-nowrap">
              ¡Chatea conmigo!
              <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900" />
            </div>
          </div>
        </div>
      </motion.a>
    </section>
  )
}

export default Contact