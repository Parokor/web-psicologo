import { useState, useEffect } from 'react'

// Hook para obtener información de contacto desde el CMS
export const useContactInfo = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "Dr. [Tu Nombre]",
    title: "Psicólogo Sanitario Colegiado",
    phone: "+34 600 123 456",
    email: "consulta@psicologo.com",
    whatsapp: "34600123456",
    address: "Madrid, España",
    collegeNumber: "M-12345",
    socialMedia: {
      instagram: "https://instagram.com/psicologo_profesional",
      linkedin: "https://linkedin.com/in/psicologo-profesional",
      youtube: "https://youtube.com/@psicologia-profesional",
      facebook: "https://facebook.com/psicologo.profesional"
    }
  })

  useEffect(() => {
    // Intentar cargar información de contacto desde el archivo JSON
    const loadContactInfo = async () => {
      try {
        const response = await fetch('/contact-info.json')
        if (response.ok) {
          const data = await response.json()
          setContactInfo(data)
        }
      } catch (error) {
        console.log('Using default contact info')
      }
    }

    loadContactInfo()
  }, [])

  // Generar URLs de WhatsApp con mensajes predefinidos
  const getWhatsAppURL = (message = "Hola, me gustaría obtener más información") => {
    return `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`
  }

  const getBookingWhatsAppURL = () => {
    return getWhatsAppURL("Hola, me gustaría reservar una primera consulta. ¿Cuál sería tu disponibilidad?")
  }

  const getInfoWhatsAppURL = () => {
    return getWhatsAppURL("Hola, me gustaría obtener más información sobre tus servicios de psicología")
  }

  const getConsultationWhatsAppURL = () => {
    return getWhatsAppURL("Hola, me gustaría agendar una consulta. ¿Podrías ayudarme?")
  }

  return {
    contactInfo,
    getWhatsAppURL,
    getBookingWhatsAppURL,
    getInfoWhatsAppURL,
    getConsultationWhatsAppURL
  }
}

export default useContactInfo
