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

// Netlify Identity initialization
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
}