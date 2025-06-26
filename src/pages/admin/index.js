import React, { useEffect } from 'react'

const AdminPage = () => {
  useEffect(() => {
    // Dynamically import Decap CMS
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      // Initialize CMS
      if (window.DecapCMS) {
        window.DecapCMS.init()
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div>
      <div id="nc-root"></div>
    </div>
  )
}

export default AdminPage

export const Head = () => (
  <>
    <title>Panel de Control - Psicólogo</title>
    <meta name="description" content="Panel de administración para gestionar contenido y configuración del sitio web" />
    <meta name="robots" content="noindex, nofollow" />
    <link href="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.css" rel="stylesheet" />
  </>
)
