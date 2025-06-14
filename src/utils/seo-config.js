
/**
 * 🔍 CONFIGURACIÓN SEO AVANZADA
 * Configuración optimizada para máximo rendimiento en buscadores
 */

export const seoConfig = {
  "defaultTitle": "Consulta de Psicología Profesional",
  "titleTemplate": "%s | Psicólogo Sanitario",
  "defaultDescription": "Psicólogo Sanitario especializado en bienestar mental. Terapia individual, de pareja y online. Acompañamiento profesional con enfoque humanista.",
  "siteUrl": "https://psychology-pro.netlify.app",
  "defaultImage": "/img/psychology-social-card.jpg",
  "twitterUsername": "@psychology_pro",
  "author": "Dr. Psicólogo Profesional"
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Consulta de Psicología Profesional",
  "description": "Psicólogo Sanitario especializado en bienestar mental",
  "url": "https://psychology-pro.netlify.app",
  "telephone": "+34 600 123 456",
  "email": "contacto@psychology-pro.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle de la Salud Mental, 123",
    "addressLocality": "Madrid",
    "postalCode": "28001",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.4168",
    "longitude": "-3.7038"
  },
  "openingHours": "Mo-Fr 09:00-20:00, Sa 10:00-14:00",
  "priceRange": "€€",
  "serviceType": "Psychological Counseling"
};
