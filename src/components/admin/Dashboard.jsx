import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FiHome, 
  FiEdit3, 
  FiBarChart3, 
  FiSettings, 
  FiUsers,
  FiBell,
  FiPlus,
  FiTrendingUp,
  FiCalendar,
  FiMessageSquare,
  FiEye,
  FiHeart
} from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [ref, inView] = useInView({ threshold: 0.1 })
  const [stats, setStats] = useState({
    totalViews: 2847,
    monthlyViews: 423,
    totalPosts: 15,
    engagement: 94.2,
    newMessages: 7,
    upcomingAppointments: 3
  })

  const quickActions = [
    {
      icon: FiEdit3,
      title: 'Escribir Artículo',
      description: 'Crear nuevo contenido',
      color: 'from-blue-500 to-cyan-500',
      action: () => console.log('Nuevo artículo')
    },
    {
      icon: FiCalendar,
      title: 'Agendar Cita',
      description: 'Gestionar calendario',
      color: 'from-green-500 to-emerald-500',
      action: () => console.log('Nueva cita')
    },
    {
      icon: FiMessageSquare,
      title: 'Responder Mensajes',
      description: `${stats.newMessages} mensajes nuevos`,
      color: 'from-purple-500 to-pink-500',
      action: () => console.log('Mensajes')
    },
    {
      icon: FiSettings,
      title: 'Actualizar Perfil',
      description: 'Editar información',
      color: 'from-orange-500 to-red-500',
      action: () => console.log('Perfil')
    }
  ]

  const recentActivity = [
    { type: 'view', message: 'Nuevo lector visitó "Manejo de Ansiedad"', time: '5 min ago', icon: FiEye },
    { type: 'like', message: 'Tu artículo recibió 3 nuevos likes', time: '12 min ago', icon: FiHeart },
    { type: 'message', message: 'Nuevo mensaje de consulta recibido', time: '1 hora ago', icon: FiMessageSquare },
    { type: 'appointment', message: 'Cita confirmada para mañana 16:00', time: '2 horas ago', icon: FiCalendar },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <FiHome className="text-white text-xl" />
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Panel de Control</h1>
                <p className="text-sm text-gray-500">Bienvenido de vuelta, Dr. García</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <motion.button
                className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiBell className="text-xl" />
                {stats.newMessages > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {stats.newMessages}
                  </span>
                )}
              </motion.button>
              
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'Visitas Totales', value: stats.totalViews, change: '+12%', icon: FiEye, color: 'blue' },
              { title: 'Este Mes', value: stats.monthlyViews, change: '+8%', icon: FiTrendingUp, color: 'green' },
              { title: 'Artículos', value: stats.totalPosts, change: '+2', icon: FiEdit3, color: 'purple' },
              { title: 'Engagement', value: `${stats.engagement}%`, change: '+5%', icon: FiHeart, color: 'pink' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-xl flex items-center justify-center`}>
                    <stat.icon className="text-white text-xl" />
                  </div>
                  <span className="text-green-600 text-sm font-medium">{stat.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Acciones Rápidas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <motion.button
                  key={index}
                  onClick={action.action}
                  className="group relative overflow-hidden bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 text-left transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${action.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-4`}>
                      <action.icon className="text-white text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                    <p className="text-gray-600 text-sm">{action.description}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Actividad Reciente</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <activity.icon className="text-white text-sm" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 text-sm">{activity.message}</p>
                      <p className="text-gray-500 text-xs">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Editor */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Editor Rápido</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Título del artículo..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                />
                <textarea
                  placeholder="Escribe tu idea aquí..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 resize-none"
                />
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-xl font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiPlus className="inline mr-2" />
                  Crear Borrador
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard
