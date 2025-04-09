import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Landing = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero background image */}
      <StaticImage
        src="../images/hero-psychology.jpg" // Añade esta imagen a src/images/
        alt="Psicología"
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.85]"
        placeholder="blurred"
        loading="eager"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-overlay z-10"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 z-20 bg-pattern"></div>

      {/* Content */}
      <div className="relative z-30 container-custom h-screen flex flex-col justify-center items-center text-white text-center">
        <div className="animate-fade-in">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6 animate-pulse-slow">
            Psicología basada en evidencia científica
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight animate-slide-up">
            Dr. [Nombre del<br className="hidden sm:block" /> Psicólogo]
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto font-light">
            Psicólogo Sanitario especializado en <span className="font-medium text-white">[especialidad]</span>
          </p>

          <p className="text-lg mb-10 max-w-2xl mx-auto text-white/80">
            Acompañamiento profesional para tu bienestar mental.
            Terapia personalizada para ayudarte a superar tus desafíos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="btn-primary group"
            >
              Solicitar cita
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="#sobre-mi"
              className="btn-outline border-white text-white hover:bg-white/10"
            >
              Conocer más
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#sobre-mi" aria-label="Scroll down">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Landing