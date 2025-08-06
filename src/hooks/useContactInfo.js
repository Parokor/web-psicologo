<script>
// Archivo: src/hooks/useContactInfo.js

import { useState, useEffect, useCallback } from 'react'

export const useContactInfo = () => {
  // ✅ Datos por defecto inmediatamente disponibles
  const defaultContactInfo = {
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
    },
    schedule: {
      weekdays: "Lun-Vie: 9:00-20:00",
      saturday: "Sáb: 10:00-14:00", 
      sunday: "Cerrado"
    }
  }

  const [contactInfo, setContactInfo] = useState(defaultContactInfo)
  const [lastUpdate, setLastUpdate] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // ✅ Función para cargar datos del CMS
  const loadContactInfo = useCallback(async (showLog = false) => {
    try {
      if (showLog) console.log('🔄 Cargando información de contacto...');
      
      // ✅ Agregar timestamp para evitar cache
      const timestamp = new Date().getTime();
      const response = await fetch(`/contact-info.json?t=${timestamp}`, {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });

      if (response.ok) {
        const data = await response.json();
        
        // ✅ Verificar si los datos son válidos
        if (data && data.name && data.email) {
          setContactInfo(data);
          setLastUpdate(new Date());
          
          if (showLog) {
            console.log('✅ Información cargada desde CMS:', data);
            console.log('📅 Última actualización:', new Date().toLocaleString());
          }
          
          // ✅ Guardar en localStorage para persistencia
          localStorage.setItem('contactInfo', JSON.stringify(data));
          localStorage.setItem('contactInfoTimestamp', timestamp.toString());
          
          return true;
        } else {
          if (showLog) console.warn('⚠️ Datos del CMS incompletos, usando defaults');
          return false;
        }
      } else {
        if (showLog) console.log('📝 CMS no disponible, usando datos por defecto');
        return false;
      }
    } catch (error) {
      if (showLog) console.log('📝 Error cargando CMS, usando datos por defecto:', error);
      
      // ✅ Intentar cargar desde localStorage
      try {
        const cached = localStorage.getItem('contactInfo');
        if (cached) {
          const cachedData = JSON.parse(cached);
          setContactInfo(cachedData);
          if (showLog) console.log('💾 Cargado desde cache local');
          return true;
        }
      } catch (cacheError) {
        if (showLog) console.log('❌ Error en cache local:', cacheError);
      }
      
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // ✅ Cargar datos al montar el componente
  useEffect(() => {
    loadContactInfo(true);
  }, [loadContactInfo]);

  // ✅ Polling cada 30 segundos para cambios en el CMS
  useEffect(() => {
    const interval = setInterval(() => {
      loadContactInfo(false); // Sin logs para polling automático
    }, 30000); // 30 segundos

    return () => clearInterval(interval);
  }, [loadContactInfo]);

  // ✅ Escuchar eventos del CMS (cuando esté en la misma pestaña)
  useEffect(() => {
    const handleCMSUpdate = () => {
      setTimeout(() => {
        loadContactInfo(true);
      }, 2000); // Esperar 2 segundos después del evento CMS
    };

    // Escuchar eventos personalizados
    window.addEventListener('cms-update', handleCMSUpdate);
    
    // Escuchar cambios en localStorage (cuando otros tabs actualicen)
    window.addEventListener('storage', (e) => {
      if (e.key === 'contactInfo') {
        try {
          const newData = JSON.parse(e.newValue);
          setContactInfo(newData);
          console.log('🔄 Datos actualizados desde otra pestaña');
        } catch (error) {
          console.error('Error procesando actualización:', error);
        }
      }
    });

    return () => {
      window.removeEventListener('cms-update', handleCMSUpdate);
      window.removeEventListener('storage', handleCMSUpdate);
    };
  }, [loadContactInfo]);

  // ✅ Función manual para forzar actualización
  const refreshData = () => {
    return loadContactInfo(true);
  };

  // ✅ Generar URLs de WhatsApp
  const getWhatsAppURL = (message = "Hola, me gustaría obtener más información") => {
    return `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  const getBookingWhatsAppURL = () => {
    return getWhatsAppURL("Hola, me gustaría reservar una primera consulta. ¿Cuál sería tu disponibilidad?");
  };

  const getInfoWhatsAppURL = () => {
    return getWhatsAppURL("Hola, me gustaría obtener más información sobre tus servicios de psicología");
  };

  const getConsultationWhatsAppURL = () => {
    return getWhatsAppURL("Hola, me gustaría agendar una consulta. ¿Podrías ayudarme?");
  };

  return {
    contactInfo,
    isLoading,
    lastUpdate,
    refreshData,
    getWhatsAppURL,
    getBookingWhatsAppURL,
    getInfoWhatsAppURL,
    getConsultationWhatsAppURL
  };
};

export default useContactInfo;
</script>
