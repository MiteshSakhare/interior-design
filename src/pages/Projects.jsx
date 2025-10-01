import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowForward, FilterList, GridView, ViewList } from '@mui/icons-material';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProjectCard from '../components/ui/ProjectCard';

const Projects = () => {
  const [heroRef, heroInView] = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [visibleProjects, setVisibleProjects] = useState(9);
  const [isLoading, setIsLoading] = useState(false);

  const filters = ['All', 'Residential', 'Commercial', 'Office', 'Restaurant', 'Hotel', 'Retail'];

  const allProjects = [
    {
      id: 1,
      title: "Modern Penthouse",
      category: "Residential",
      location: "New York, NY",
      date: "2024",
      description: "Luxury penthouse design featuring contemporary aesthetics and stunning city views with premium materials.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 245,
      views: 3200
    },
    {
      id: 2,
      title: "Executive Office Suite",
      category: "Office",
      location: "Chicago, IL", 
      date: "2024",
      description: "Modern office space designed for productivity and employee satisfaction with ergonomic furniture.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 156,
      views: 1800
    },
    {
      id: 3,
      title: "Boutique Restaurant",
      category: "Restaurant",
      location: "San Francisco, CA",
      date: "2023",
      description: "Intimate restaurant design with warm atmosphere and natural textures creating memorable dining experience.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 298,
      views: 4100
    },
    {
      id: 4,
      title: "Luxury Hotel Lobby",
      category: "Hotel",
      location: "Miami, FL",
      date: "2024",
      description: "Elegant hotel lobby design combining luxury with comfort, featuring premium materials and stunning lighting.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 189,
      views: 2100
    },
    {
      id: 5,
      title: "Minimalist Apartment",
      category: "Residential",
      location: "Los Angeles, CA",
      date: "2023",
      description: "Clean, minimalist apartment design maximizing space efficiency while maintaining aesthetic appeal and functionality.",
      image: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 167,
      views: 2300
    },
    {
      id: 6,
      title: "Fashion Retail Store",
      category: "Retail",
      location: "Las Vegas, NV",
      date: "2023",
      description: "Contemporary retail space designed to enhance shopping experience with innovative display solutions and lighting.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 134,
      views: 1900
    },
    {
      id: 7,
      title: "Cozy Family Home",
      category: "Residential",
      location: "Austin, TX",
      date: "2024",
      description: "Warm and inviting family home with functional spaces designed for modern living and entertainment.",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 312,
      views: 5200
    },
    {
      id: 8,
      title: "Tech Startup Office",
      category: "Commercial",
      location: "Seattle, WA",
      date: "2024",
      description: "Innovative workspace design for tech startup featuring collaborative areas, modern amenities, and flexible layouts.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 201,
      views: 2800
    },
    {
      id: 9,
      title: "Elegant Dining Room",
      category: "Residential", 
      location: "Boston, MA",
      date: "2023",
      description: "Sophisticated dining room design with classic elements and modern touches creating perfect entertaining space.",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 278,
      views: 3400
    },
    {
      id: 10,
      title: "Corporate Headquarters",
      category: "Commercial",
      location: "Denver, CO",
      date: "2024",
      description: "Large-scale corporate office design promoting collaboration and productivity with sustainable materials and smart technology.",
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 445,
      views: 6200
    },
    {
      id: 11,
      title: "Spa & Wellness Center",
      category: "Commercial",
      location: "Phoenix, AZ",
      date: "2023",
      description: "Tranquil spa design focusing on relaxation and wellness with natural materials and calming color palette.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 189,
      views: 2600
    },
    {
      id: 12,
      title: "Modern Kitchen Design",
      category: "Residential",
      location: "Portland, OR",
      date: "2024",
      description: "Contemporary kitchen with state-of-the-art appliances, custom cabinetry, and functional island for family gathering.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 356,
      views: 4800
    },
    {
      id: 13,
      title: "Boutique Hotel Suite",
      category: "Hotel",
      location: "Nashville, TN",
      date: "2023",
      description: "Luxurious hotel suite design blending local culture with modern amenities for unforgettable guest experience.",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 223,
      views: 3100
    },
    {
      id: 14,
      title: "Creative Agency Office",
      category: "Office",
      location: "San Diego, CA",
      date: "2024",
      description: "Vibrant office space for creative agency with flexible work areas, inspiring artwork, and collaborative zones.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 267,
      views: 3700
    },
    {
      id: 15,
      title: "Fine Dining Restaurant",
      category: "Restaurant",
      location: "New Orleans, LA",
      date: "2023",
      description: "Upscale restaurant interior combining elegance with comfort, featuring custom lighting and sophisticated finishes.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 412,
      views: 5600
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleProjects(prev => prev + 6);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="overflow-hidden">
      {/* Responsive Hero Section */}
      <section ref={heroRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/10 relative overflow-hidden">
        {/* Background Decorations - Hidden on small screens */}
        <div className="absolute inset-0 overflow-hidden hidden lg:block">
          <div className="absolute w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-200/30 to-secondary-200/20 rounded-full top-10 right-10 animate-pulse"></div>
          <div className="absolute w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-secondary-200/30 to-primary-200/20 rounded-full bottom-10 left-10 animate-pulse"></div>
          <div className="absolute w-32 h-32 lg:w-48 lg:h-48 bg-gradient-to-br from-primary-300/20 to-secondary-300/20 rounded-full top-1/2 left-1/3 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.0 }}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-block text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base lg:text-lg tracking-wide uppercase mb-4 px-3 sm:px-4 py-1 sm:py-2 bg-primary-50 dark:bg-primary-900/30 rounded-full">
                  Our Portfolio
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                  Inspiring Interior Design 
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent block mt-2">
                    Projects
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
                  Explore our diverse portfolio of completed projects, from luxurious residential homes to 
                  innovative commercial spaces. Each project tells a unique story of creativity, functionality, and style.
                </p>

                {/* Responsive Project Categories */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {['Residential', 'Commercial', 'Hotels', 'Restaurants'].map((category, index) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs sm:text-sm font-semibold"
                    >
                      {category}
                    </motion.div>
                  ))}
                </div>
                
                {/* Responsive Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById('projects-gallery').scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <span>Explore Projects</span>
                    <ArrowForward className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-semibold rounded-lg transition-all duration-200"
                  >
                    <FilterList className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Filter by Category</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Responsive Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.3 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Our Projects"
                    className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </motion.div>

                {/* Responsive Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-sm sm:text-base lg:text-lg">15+</span>
                    </div>
                    <div>
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white">Projects</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Portfolio</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-sm sm:text-base lg:text-lg">7</span>
                    </div>
                    <div>
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white">Categories</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Expertise</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Responsive Project Gallery */}
      <section id="projects-gallery" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Responsive Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 mb-8 sm:mb-12"
          >
            
            {/* Responsive Filter Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setActiveFilter(filter);
                    setVisibleProjects(9);
                  }}
                  className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg transform -translate-y-0.5'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-primary-300'
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </div>

            {/* Responsive View Mode Toggle */}
            <div className="flex items-center justify-center sm:justify-start lg:justify-end space-x-2 bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl p-1 border border-gray-200 dark:border-gray-600">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('grid')}
                className={`p-2 sm:p-3 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 shadow-md'
                    : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
              >
                <GridView className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('list')}
                className={`p-2 sm:p-3 rounded-lg transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 shadow-md'
                    : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
              >
                <ViewList className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Responsive Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`grid gap-4 sm:gap-6 lg:gap-8 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1 lg:grid-cols-2'
              }`}
            >
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Responsive Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-8 sm:mt-12 lg:mt-16"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLoadMore}
                disabled={isLoading}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Loading More...</span>
                  </>
                ) : (
                  <>
                    <span>Load More Projects</span>
                    <ArrowForward className="w-4 h-4 sm:w-5 sm:h-5" />
                  </>
                )}
              </motion.button>
              
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3 sm:mt-4">
                Showing {displayedProjects.length} of {filteredProjects.length} projects
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Responsive Project Stats */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed", color: "from-blue-500 to-indigo-500" },
              { number: "50+", label: "Awards Won", color: "from-yellow-500 to-orange-500" },
              { number: "1200+", label: "Happy Clients", color: "from-green-500 to-emerald-500" },
              { number: "15+", label: "Years Experience", color: "from-purple-500 to-pink-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{stat.number.charAt(0)}</span>
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
