import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FilterList, GridView, ViewList } from '@mui/icons-material';
import ProjectCard from '../ui/ProjectCard';

const ProjectGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const filters = [
    'All',
    'Residential',
    'Commercial',
    'Office',
    'Restaurant',
    'Hotel',
    'Retail'
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Living Space",
      category: "Residential",
      location: "New York, NY",
      date: "2024",
      description: "A contemporary living space featuring clean lines, natural materials, and sophisticated color palette.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 245,
      views: 3200
    },
    {
      id: 2,
      title: "Luxury Hotel Suite",
      category: "Hotel",
      location: "Miami, FL",
      date: "2024",
      description: "Elegant hotel suite design combining luxury with comfort, featuring premium materials and stunning views.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 189,
      views: 2100
    },
    {
      id: 3,
      title: "Corporate Office Design",
      category: "Office",
      location: "Chicago, IL",
      date: "2024",
      description: "Modern office space designed to boost productivity and employee satisfaction with innovative layouts.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 156,
      views: 1800
    },
    {
      id: 4,
      title: "Boutique Restaurant",
      category: "Restaurant",
      location: "San Francisco, CA",
      date: "2023",
      description: "Intimate restaurant design featuring warm lighting, natural textures, and inviting atmosphere.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 298,
      views: 4100
    },
    {
      id: 5,
      title: "Minimalist Apartment",
      category: "Residential",
      location: "Los Angeles, CA",
      date: "2023",
      description: "Clean, minimalist apartment design maximizing space efficiency while maintaining aesthetic appeal.",
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
      description: "Contemporary retail space designed to enhance the shopping experience with innovative display solutions.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 134,
      views: 1900
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-100">
      <div className="max-w-7xl mx-auto container-padding">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="h2 text-gray-900 dark:text-white mb-4">
            Our Project <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="body text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our diverse collection of interior design projects, from residential spaces to commercial environments.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 space-y-4 lg:space-y-0"
        >
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-modern transform -translate-y-1'
                    : 'card-modern text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-300'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 card-modern p-1 border border-gray-200 dark:border-gray-700 rounded-xl">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-lg transition-all duration-200 ${
                viewMode === 'grid'
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 shadow-md'
                  : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
              }`}
            >
              <GridView className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-lg transition-all duration-200 ${
                viewMode === 'list'
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 shadow-md'
                  : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
              }`}
            >
              <ViewList className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 lg:grid-cols-2'
            }`}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="card-equal-height"
              >
                <ProjectCard
                  {...project}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary shadow-modern hover:shadow-modern-lg"
          >
            Load More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGallery;
