import React, { useState } from "react"

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formState.name.trim()) {
      newErrors.name = "El nombre es obligatorio"
    }

    if (!formState.email.trim()) {
      newErrors.email = "El email es obligatorio"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "El formato del email no es válido"
    }

    if (!formState.message.trim()) {
      newErrors.message = "El mensaje es obligatorio"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulación de envío de formulario
    // En producción, aquí iría la lógica para enviar el formulario a un servicio como Netlify Forms,
    // FormSpree, o tu propio backend
    try {
      // Simular una petición
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Resetear el formulario tras envío exitoso
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
      setSubmitSuccess(true)

      // Ocultar el mensaje de éxito después de 5 segundos
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="section bg-accent-mint/30">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Estoy para ayudarte
          </span>
          <h2 className="section-title mb-4">Contacto</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Si tienes alguna pregunta o quieres solicitar una cita, no dudes en contactarme
          </p>
        </div>

        <div className="max-w-4xl mx-auto card overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/5 bg-gradient-to-br from-primary-600 to-primary-700 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Dirección:</p>
                    <p className="text-white/80">[Tu dirección profesional]</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Teléfono:</p>
                    <p className="text-white/80">[Tu número de teléfono]</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email:</p>
                    <p className="text-white/80">[Tu email profesional]</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Horario:</p>
                    <p className="text-white/80">Lunes a Viernes: 9:00 - 20:00</p>
                    <p className="text-white/80">Sábados: 10:00 - 14:00</p>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full -mb-16 -mr-16"></div>
              <div className="absolute top-0 left-0 w-20 h-20 bg-white/5 rounded-full -mt-10 -ml-10"></div>
            </div>

            <div className="md:w-3/5 p-8 relative">
              {submitSuccess ? (
                <div className="bg-primary-50 border border-primary-200 text-primary-700 px-4 py-3 rounded-xl mb-6" role="alert">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="font-bold">¡Mensaje enviado!</p>
                      <p>Gracias por contactar. Te responderé lo antes posible.</p>
                    </div>
                  </div>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="form-label">Nombre *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''}`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && <p className="form-error">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''}`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && <p className="form-error">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="form-label">Teléfono (opcional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Tu número de teléfono"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="form-label">Mensaje *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    className={`form-input ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''}`}
                    placeholder="¿En qué puedo ayudarte?"
                  ></textarea>
                  {errors.message && <p className="form-error">{errors.message}</p>}
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : 'Enviar mensaje'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact