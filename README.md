# Web Psicólogo - Sitio Web Profesional

<p align="center">
  <img alt="Logo" src="src/images/gatsby-icon.png" width="60" />
</p>

Este proyecto es un sitio web profesional para psicólogos, desarrollado con Gatsby y React. Incluye una sección de blog que se conecta a WordPress mediante GraphQL, y está optimizado para SEO y rendimiento.

## 🚀 Inicio rápido

1.  **Instalar dependencias.**

    Navega al directorio del proyecto e instala las dependencias.

    ```shell
    cd web-psicologo/
    npm install
    ```

2.  **Iniciar el entorno de desarrollo.**

    Inicia el servidor de desarrollo de Gatsby.

    ```shell
    npm run develop
    ```

3.  **Abre el navegador y comienza a editar.**

    Tu sitio está ahora corriendo en `http://localhost:8000`!

    También puedes acceder a GraphiQL en `http://localhost:8000/___graphql` para explorar los datos disponibles.

## 📋 Estructura del proyecto

El proyecto sigue la estructura estándar de Gatsby con algunas personalizaciones:

```
/
├── content/           # Contenido del blog (si no usas WordPress)
├── node_modules/      # Dependencias instaladas
├── public/            # Archivos generados en la compilación
├── src/
│   ├── components/    # Componentes React reutilizables
│   ├── images/        # Imágenes estáticas
│   ├── pages/         # Páginas del sitio
│   ├── styles/        # Estilos globales
│   └── templates/     # Plantillas para páginas generadas dinámicamente
├── .gitignore         # Archivos ignorados por Git
├── gatsby-browser.js  # Configuración del navegador
├── gatsby-config.js   # Configuración principal de Gatsby
├── gatsby-node.js     # Configuración de nodos de Gatsby
├── gatsby-ssr.js      # Configuración de renderizado en servidor
├── netlify.toml       # Configuración de Netlify
├── package.json       # Dependencias y scripts
└── README.md          # Documentación del proyecto
```

## 🧐 Personalización

Para personalizar el sitio, debes modificar los siguientes archivos:

1. **gatsby-config.js**: Actualiza la información del sitio en `siteMetadata`.
2. **src/components/**: Modifica los componentes según tus necesidades.
3. **src/images/**: Reemplaza las imágenes con las tuyas propias.

## 💫 Despliegue en Netlify

Este proyecto está configurado para ser desplegado fácilmente en Netlify:

1. Sube tu repositorio a GitHub.
2. Conéctalo a Netlify.
3. Netlify detectará automáticamente la configuración en `netlify.toml`.

## 🔌 Integración con WordPress

El sitio está configurado para obtener contenido de WordPress a través de GraphQL:

1. Asegúrate de tener un sitio WordPress con el plugin WPGraphQL instalado.
2. Actualiza la URL de GraphQL en `gatsby-config.js`.
3. Personaliza las consultas GraphQL según la estructura de tu contenido.

## 📝 Tareas pendientes

- [ ] Reemplazar todas las imágenes de placeholder
- [ ] Actualizar la información de contacto
- [ ] Personalizar los textos del sitio
- [ ] Verificar la conexión con WordPress
- [ ] Configurar el dominio en Netlify

## 🧪 Pruebas

Para ejecutar pruebas:

```shell
npm test
```

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
