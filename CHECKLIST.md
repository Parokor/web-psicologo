# Checklist de Calidad y Despliegue

Este documento proporciona una lista de verificación para asegurar que el sitio web esté listo para ser desplegado en producción.

## Contenido y Personalización

- [ ] Reemplazar todas las imágenes de placeholder:
  - [ ] `src/images/hero-psychology.jpg` (Landing.js)
  - [ ] `src/images/profile.jpg` (AboutMe.js)
  - [ ] Asegurarse de que todas las imágenes estén optimizadas para web

- [ ] Actualizar información en `gatsby-config.js`:
  - [ ] Título del sitio: `Dr. [Nombre del Psicólogo]`
  - [ ] Descripción: `Psicólogo Sanitario especializado en [especialidad]...`
  - [ ] URL del sitio: `https://www.tusitio.netlify.app/`
  - [ ] Redes sociales: Twitter, Instagram, etc.

- [ ] Personalizar textos en componentes:
  - [ ] Landing.js: Nombre, especialidad, descripción
  - [ ] AboutMe.js: Experiencia, especialidad, formación, enfoque
  - [ ] Contact.js: Dirección, teléfono, email, horario
  - [ ] SocialHub.js: URLs de redes sociales
  - [ ] Layout.js: Información de contacto en el footer

- [ ] Verificar la conexión con WordPress:
  - [ ] Actualizar URL de GraphQL en gatsby-config.js
  - [ ] Probar la obtención de posts
  - [ ] Verificar que las imágenes de los posts se muestren correctamente

## Técnico y Rendimiento

- [ ] Ejecutar `gatsby build` para verificar que no hay errores de compilación
- [ ] Verificar que todas las páginas se generan correctamente
- [ ] Comprobar que los enlaces internos funcionan
- [ ] Verificar que el formulario de contacto funciona correctamente
- [ ] Implementar un servicio real para el formulario de contacto (Netlify Forms, FormSpree, etc.)
- [ ] Verificar que el sitio es responsive en diferentes dispositivos
- [ ] Ejecutar Lighthouse para verificar rendimiento, accesibilidad, SEO y mejores prácticas

## SEO y Accesibilidad

- [ ] Verificar que todas las páginas tienen títulos y descripciones adecuadas
- [ ] Asegurar que todas las imágenes tienen atributos `alt` descriptivos
- [ ] Verificar la jerarquía de encabezados (h1, h2, h3, etc.)
- [ ] Comprobar que los textos tienen suficiente contraste
- [ ] Verificar que los elementos interactivos son accesibles por teclado
- [ ] Añadir un sitemap.xml
- [ ] Crear un archivo robots.txt

## Despliegue

- [ ] Configurar repositorio en GitHub
- [ ] Conectar repositorio a Netlify
- [ ] Configurar variables de entorno en Netlify si es necesario
- [ ] Configurar dominio personalizado en Netlify
- [ ] Configurar HTTPS
- [ ] Verificar redirecciones y encabezados en netlify.toml
- [ ] Realizar un despliegue de prueba y verificar que todo funciona correctamente

## Post-Despliegue

- [ ] Verificar que el sitio carga correctamente en diferentes navegadores
- [ ] Comprobar que los formularios funcionan en producción
- [ ] Verificar que las analíticas están configuradas correctamente
- [ ] Registrar el sitio en Google Search Console
- [ ] Compartir el sitio en redes sociales para verificar las previsualizaciones

## Notas Adicionales

- Recuerda que los textos en español deben incluir acentos y signos de puntuación correctos.
- Las imágenes deben ser relevantes para la psicología y transmitir profesionalidad.
- El tono de comunicación debe ser profesional pero cercano.
- Considera añadir testimonios de clientes (con su permiso) para aumentar la credibilidad.
