// Custom typefaces
import "@fontsource-variable/montserrat" // Main display font
import "@fontsource-variable/inter" // Main sans-serif font
import "@fontsource/merriweather" // Serif font for blog content

// Normalize CSS across browsers
import "./src/normalize.css"

// Custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

// Tailwind CSS
import './src/styles/global.css'

// Importaciones para animaciones
// import React from 'react'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import { Toaster } from 'react-hot-toast'

// Wrapper para añadir Toaster
// export const wrapRootElement = ({ element }) => {
//   return (
//     <>
//       {element}
//       <Toaster
//         position="bottom-right"
//         toastOptions={{
//           duration: 4000,
//           style: {
//             background: '#1A365D',
//             color: '#fff',
//             borderRadius: '1rem',
//             padding: '1rem',
//           },
//           success: {
//             iconTheme: {
//               primary: '#38B2AC',
//               secondary: '#fff',
//             },
//           },
//         }}
//       />
//     </>
//   )
// }

// Inicializar AOS cuando el cliente carga
export const onClientEntry = () => {
  // Initialize Netlify Identity
  if (typeof window !== 'undefined' && window.netlifyIdentity) {
    window.netlifyIdentity.on('init', user => {
      if (!user) {
        window.netlifyIdentity.on('login', () => {
          document.location.href = '/admin/'
        })
      }
    })

    window.netlifyIdentity.on('logout', () => {
      document.location.href = '/'
    })
  }

  // Inicializar AOS
  // if (typeof window !== 'undefined') {
  //   window.setTimeout(() => {
  //     AOS.init({
  //       duration: 800,
  //       once: true,
  //       offset: 100,
  //       easing: 'ease-out-cubic',
  //     })
  //   }, 0)
  // }
}