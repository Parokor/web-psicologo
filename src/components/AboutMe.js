import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="section bg-white">
      <div className="container-custom">
        <h2 className="section-title mb-16">Sobre mí</h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile image with decorative elements */}
          <div className="lg:w-2/5 relative">
            <div className="relative z-10">
              <div className="rounded-2xl overflow-hidden shadow-soft">
                <StaticImage
                  src="../images/profile.jpg" // Añade esta imagen a src/images/
                  alt="Dr. [Nombre]"
                  className="w-full h-full object-cover"
                  placeholder="blurred"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-5 -right-5 bg-primary-500 text-white py-3 px-5 rounded-xl shadow-soft">
                <span className="block text-sm font-medium">Experiencia</span>
                <span className="block text-2xl font-bold">[X] años</span>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full -translate-x-4 translate-y-4 rounded-2xl border-2 border-primary-200 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-accent-mint -z-10"></div>
          </div>

          {/* Content */}
          <div className="lg:w-3/5">
            <div className="space-y-6">
              <div className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-2">
                Psicólogo Sanitario Colegiado Nº [Número]
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-4">Enfoque centrado en la persona</h3>

              <p className="text-lg text-neutral-700 leading-relaxed">
                Soy psicólogo sanitario colegiado con más de <span className="font-medium text-primary-700">[X] años de experiencia</span> en [especialidad].
                Me especializo en el tratamiento de [áreas específicas] utilizando enfoques basados en
                evidencia como <span className="font-medium text-primary-700">[enfoques terapéuticos]</span>.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed">
                Mi formación incluye [formación relevante] y continúo actualizándome constantemente
                para ofrecer las técnicas más efectivas y actuales.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed">
                Mi enfoque terapéutico se centra en [describe tu enfoque], creando un espacio seguro
                donde puedas explorar tus dificultades y desarrollar estrategias efectivas para mejorar tu bienestar.
              </p>

              {/* Credentials and services */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/cv" className="btn-outline">
                  Ver currículum
                </a>
                <a href="#servicios" className="btn-ghost">
                  Servicios que ofrezco
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Formación</h3>
            <p className="text-neutral-600">[Detalle tu formación académica principal]</p>
          </div>

          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Especialidad</h3>
            <p className="text-neutral-600">[Tu especialidad principal]</p>
          </div>

          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Publicaciones</h3>
            <p className="text-neutral-600">[Menciona si tienes publicaciones o investigaciones]</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe