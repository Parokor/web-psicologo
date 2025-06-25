// Mock data para SocialHub - Sin sintaxis GraphQL
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaWhatsapp
} from 'react-icons/fa'

export const mockSocialPlatforms = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: FaInstagram,
    gradient: 'from-pink-500 via-red-500 to-yellow-500',
    url: 'https://instagram.com/tu_usuario',
    followers: '2.5K',
    description: 'Consejos diarios y reflexiones',
    bgColor: 'bg-gradient-to-br from-pink-50 to-orange-50',
    iconColor: 'text-pink-600',
    stats: { posts: 245, followers: '2.5K', engagement: '4.2%' }
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: FaLinkedin,
    gradient: 'from-blue-600 to-blue-700',
    url: 'https://linkedin.com/in/tu_perfil',
    followers: '1.8K',
    description: 'Contenido profesional y networking',
    bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    iconColor: 'text-blue-600',
    stats: { connections: '1.8K', articles: 28, views: '15K' }
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: FaYoutube,
    gradient: 'from-red-500 to-red-600',
    url: 'https://youtube.com/tu_canal',
    followers: '890',
    description: 'Videos educativos semanales',
    bgColor: 'bg-gradient-to-br from-red-50 to-pink-50',
    iconColor: 'text-red-600',
    stats: { subscribers: '890', videos: 35, hours: '1.2K' }
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: FaTiktok,
    gradient: 'from-black via-pink-500 to-cyan-500',
    url: 'https://tiktok.com/@tu_usuario',
    followers: '3.2K',
    description: 'Tips rápidos de bienestar',
    bgColor: 'bg-gradient-to-br from-gray-50 to-purple-50',
    iconColor: 'text-gray-900',
    stats: { followers: '3.2K', likes: '12K', videos: 67 }
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: FaFacebook,
    gradient: 'from-blue-500 to-blue-600',
    url: 'https://facebook.com/tu_pagina',
    followers: '1.5K',
    description: 'Comunidad y eventos',
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    iconColor: 'text-blue-600',
    stats: { likes: '1.5K', posts: 156, reach: '8K' }
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: FaWhatsapp,
    gradient: 'from-green-500 to-green-600',
    url: 'https://wa.me/34600123456',
    followers: 'Chat',
    description: 'Contacto directo e inmediato',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
    iconColor: 'text-green-600',
    stats: { available: '24/7', response: '< 1h', rating: '5.0★' }
  }
]
