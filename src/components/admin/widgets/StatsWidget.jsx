import React from 'react'
import { motion } from 'framer-motion'
import { FiTrendingUp, FiUsers, FiEye, FiHeart } from 'react-icons/fi'

const StatsWidget = ({ stats }) => {
  const statItems = [
    {
      title: 'Visitas Totales',
      value: stats?.totalViews || 0,
      change: '+12%',
      icon: FiEye,
      color: 'blue'
    },
    {
      title: 'Lectores Únicos',
      value: stats?.uniqueReaders || 0,
      change: '+8%',
      icon: FiUsers,
      color: 'green'
    },
    {
      title: 'Engagement',
      value: `${stats?.engagement || 0}%`,
      change: '+5%',
      icon: FiHeart,
      color: 'pink'
    },
    {
      title: 'Crecimiento',
      value: `${stats?.growth || 0}%`,
      change: '+15%',
      icon: FiTrendingUp,
      color: 'purple'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statItems.map((stat, index) => (
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
  )
}

export default StatsWidget
