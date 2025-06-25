import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiCalendar,
  FiClock,
  FiArrowRight,
  FiTag,
  FiEye,
  FiHeart,
  FiShare2
} from 'react-icons/fi'
import { Link } from 'gatsby'
import Tilt from 'react-parallax-tilt'
import { mockBlogPosts } from '../data/mock/blogPosts'

const BlogPreview = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [hoveredCard, setHoveredCard] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Datos importados desde archivo separado para evitar conflictos con GraphQL
  const blogPosts = mockBlogPosts

  const categories = ['all', 'Ansiedad', 'Autoestima', 'Mindfulness', 'Relaciones', 'Estrés', 'Bienestar']

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50/50" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Últimos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Artículos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Contenido valioso para tu bienestar emocional y crecimiento personal
            </p>

            {/* Filtros de categoría */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-700 border border-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category === 'all' ? 'Todos' : category}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Grid de artículos */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {filteredPosts.slice(0, 3).map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={cardVariants}
                  className="group relative"
                  onHoverStart={() => setHoveredCard(post.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <Tilt
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    perspective={1000}
                    glareEnable={true}
                    glareMaxOpacity={0.1}
                    scale={1.02}
                  >
                    <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                      {/* Badge de destacado */}
                      {post.featured && (
                        <motion.div
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="absolute top-4 left-4 z-10 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                        >
                          Destacado
                        </motion.div>
                      )}

                      {/* Imagen */}
                      <div className="relative h-48 overflow-hidden rounded-t-3xl">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200"
                          animate={{
                            scale: hoveredCard === post.id ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-gray-600 font-medium">Imagen del artículo</span>
                        </div>

                        {/* Overlay con estadísticas */}
                        <motion.div
                          className="absolute inset-0 bg-black/50 flex items-center justify-center gap-6"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: hoveredCard === post.id ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex items-center gap-1 text-white text-sm">
                            <FiEye />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center gap-1 text-white text-sm">
                            <FiHeart />
                            <span>{post.likes}</span>
                          </div>
                          <motion.button
                            className="p-2 bg-white/20 rounded-full backdrop-blur-sm"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FiShare2 className="text-white" />
                          </motion.button>
                        </motion.div>
                      </div>

                      {/* Contenido */}
                      <div className="p-6 flex flex-col h-64">
                        {/* Metadata */}
                        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <FiCalendar className="text-primary-500" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiClock className="text-secondary-500" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        {/* Categoría */}
                        <div className="flex items-center gap-2 mb-3">
                          <FiTag className="text-primary-500" />
                          <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>

                        {/* Título */}
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Link de leer más */}
                        <Link
                          to={post.slug}
                          className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 group"
                        >
                          <span>Leer más</span>
                          <motion.div
                            animate={{ x: hoveredCard === post.id ? 5 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                          </motion.div>
                        </Link>
                      </div>

                      {/* Borde gradiente animado */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: 'linear-gradient(45deg, #0ca4b8, #5a9cf2, #0ca4b8)',
                          backgroundSize: '300% 300%',
                        }}
                        animate={{
                          backgroundPosition: hoveredCard === post.id ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%',
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>
                  </Tilt>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Botón Ver todos */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <Link to="/blog">
              <motion.button
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Efecto de brillo */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  initial={{ x: '-200%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.8 }}
                />

                <span className="relative">Ver todos los artículos</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogPreview

export default BlogPreview