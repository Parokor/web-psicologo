import React from 'react'
import Dashboard from '../../components/admin/Dashboard'

const AdminPage = () => {
  return <Dashboard />
}

export default AdminPage

export const Head = () => (
  <>
    <title>Panel de Control - Psicólogo</title>
    <meta name="description" content="Panel de administración para gestionar contenido y configuración del sitio web" />
    <meta name="robots" content="noindex, nofollow" />
  </>
)
