// src/hooks/useContactInfo.js
import { useState, useEffect, useCallback } from 'react'
import { withPrefix } from 'gatsby'

const isBrowser = typeof window !== 'undefined'

export const useContactInfo = () => {
  const defaultContactInfo = { /* …tus datos por defecto… */ }

  const [contactInfo, setContactInfo] = useState(defaultContactInfo)
  const [lastUpdate, setLastUpdate] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const loadContactInfo = useCallback(async (showLog = false) => {
    try {
      if (showLog) console.log('🔄 Cargando info de contacto…')

      const url = withPrefix('/contact-info.json') + `?t=${Date.now()}`
      const response = await fetch(url, {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          Pragma: 'no-cache',
          Expires: '0',
        },
      })

      if (response.ok) {
        const data = await response.json()
        if (data?.name && data?.email) {
          setContactInfo(data)
          setLastUpdate(new Date())

          if (showLog) console.log('✅ Cargado del CMS:', data)

          if (isBrowser) {
            localStorage.setItem('contactInfo', JSON.stringify(data))
            localStorage.setItem('contactInfoTimestamp', Date.now().toString())
          }
          return true
        }
        if (showLog) console.warn('⚠️ Datos incompletos; usando defaults')
      } else if (showLog) {
        console.log('📝 CMS no disponible; usando defaults')
      }
      return false
    } catch (err) {
      if (showLog) console.log('📝 Error CMS; usando defaults:', err)

      if (isBrowser) {
        try {
          const cached = localStorage.getItem('contactInfo')
          if (cached) {
            setContactInfo(JSON.parse(cached))
            if (showLog) console.log('💾 Cargado desde cache local')
            return true
          }
        } catch (cacheErr) {
          if (showLog) console.log('❌ Error cache local:', cacheErr)
        }
      }
      return false
    } finally {
      setIsLoading(false)
    }
  }, [])

  // ----- Effects (sólo en browser) -----
  useEffect(() => {
    loadContactInfo(true)
  }, [loadContactInfo])

  useEffect(() => {
    if (!isBrowser) return
    const id = setInterval(() => loadContactInfo(false), 30_000)
    return () => clearInterval(id)
  }, [loadContactInfo])

  useEffect(() => {
    if (!isBrowser) return
    const handleCMSUpdate = () => setTimeout(() => loadContactInfo(true), 2000)
    window.addEventListener('cms-update', handleCMSUpdate)
    window.addEventListener('storage', (e) => {
      if (e.key === 'contactInfo') {
        try {
          setContactInfo(JSON.parse(e.newValue))
          console.log('🔄 Datos actualizados desde otra pestaña')
        } catch (err) {
          console.error('Error procesando actualización:', err)
        }
      }
    })
    return () => {
      window.removeEventListener('cms-update', handleCMSUpdate)
      window.removeEventListener('storage', handleCMSUpdate)
    }
  }, [loadContactInfo])

  // ----- Helpers -----
  const getWhatsAppURL = (msg = 'Hola, me gustaría obtener más información') =>
    `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(msg)}`

  return {
    contactInfo,
    isLoading,
    lastUpdate,
    refreshData: () => loadContactInfo(true),
    getWhatsAppURL,
    getBookingWhatsAppURL: () =>
      getWhatsAppURL('Hola, me gustaría reservar una primera consulta. ¿Cuál sería tu disponibilidad?'),
    getInfoWhatsAppURL: () =>
      getWhatsAppURL('Hola, me gustaría obtener más información sobre tus servicios de psicología'),
    getConsultationWhatsAppURL: () =>
      getWhatsAppURL('Hola, me gustaría agendar una consulta. ¿Podrías ayudarme?'),
  }
}

export default useContactInfo
