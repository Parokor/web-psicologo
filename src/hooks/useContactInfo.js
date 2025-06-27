import { useState, useEffect } from 'react'

// Hook para obtener información de contacto desde el CMS
export const useContactInfo = () => {
  // Use the real contact info directly for immediate functionality
  const [contactInfo, setContactInfo] = useState({
    name: "Dr. María García",
    title: "Psicóloga Sanitaria Colegiada",
    phone: "+34 612 345 678",
    email: "contacto@psicologamaria.com",
    whatsapp: "34612345678",
    address: "Madrid, España",
    collegeNumber: "M-12345",
    socialMedia: {
      instagram: "https://instagram.com/psicologamaria",
      linkedin: "https://linkedin.com/in/psicologamaria",
      youtube: "https://youtube.com/@psicologamaria",
      facebook: "https://facebook.com/psicologamaria"
    }
  })

  useEffect(() => {
    // Try to load contact info from JSON file (for future CMS updates)
    const loadContactInfo = async () => {
      try {
        const response = await fetch('/contact-info.json')
        if (response.ok) {
          const data = await response.json()
          setContactInfo(data)
          console.log('Contact info loaded from CMS:', data)
        }
      } catch (error) {
        console.log('Using default contact info:', error)
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
