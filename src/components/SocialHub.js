import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedin, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'

// Instala los paquetes de FontAwesome:
// npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons

const SocialHub = () => {
  const socialNetworks = [
    {
      name: "Twitter",
      url: "https://twitter.com/tuusuario",
      icon: faTwitter,
      description: "Reflexiones sobre psicología",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/tuusuario",
      icon: faInstagram,
      description: "Contenido visual y consejos",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/tuusuario",
      icon: faLinkedin,
      description: "Perfil profesional",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/c/tucanal",
      icon: faYoutube,
      description: "Videos educativos",
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@tuusuario",
      icon: faTiktok,
      description: "Consejos rápidos",
    },
  ]

  return (
    <section id="redes" className="section bg-accent-lavender/30">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Conecta conmigo
          </span>
          <h2 className="section-title mb-4">Sígueme en redes sociales</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Comparto contenido relevante sobre psicología, bienestar emocional y desarrollo personal
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {socialNetworks.map((network) => (
            <a
              href={network.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300 h-full"
              key={network.name}
              aria-label={`Perfil de ${network.name}`}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  icon={network.icon}
                  className="text-3xl text-primary-600"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-800">{network.name}</h3>
              <p className="text-neutral-600 text-sm mb-0">{network.description}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:contacto@tudominio.com"
            className="btn-outline inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contactar por email
          </a>
        </div>
      </div>
    </section>
  )
}

export default SocialHub