
// src/empty-module.js
import React from 'react'

// Para react-hot-toast
export const toast = () => {}
export const Toaster = () => null

// Para framer-motion
export const motion = {}
export const AnimatePresence = ({ children }) => children

// Para react-icons
export const GenIcon = () => React.createElement('span')
export const IconBase = () => React.createElement('span')

// Exports por defecto
export default { 
  toast, 
  Toaster, 
  motion, 
  AnimatePresence,
  GenIcon,
  IconBase
}
