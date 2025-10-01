import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Visibility,
  Favorite,
  Share,
  LocationOn,
  CalendarToday,
  ArrowForward
} from '@mui/icons-material';
import ProjectDetail from './ProjectDetail';

const ProjectCard = ({
  id,
  image,
  title,
  category,
  location,
  date,
  description,
  likes = 0,
  views = 0,
  delay = 0
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);
  const [showProjectDetail, setShowProjectDetail] = useState(false);

  useEffect(() => {
    if (showProjectDetail) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showProjectDetail]);

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setCurrentLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    console.log('Sharing project:', title);
  };

  const handleViewProject = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowProjectDetail(true);
  };

  const handleCloseDetail = () => {
    setShowProjectDetail(false);
  };

  const projectData = {
    id,
    title,
    category,
    location,
    date,
    description,
    image,
    likes: currentLikes,
    views
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      >
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLike}
              className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
                isLiked ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-red-500'
              }`}
            >
              <Favorite className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleShare}
              className="p-2 bg-white/20 backdrop-blur-sm text-white hover:bg-blue-500 rounded-full transition-all duration-200"
            >
              <Share className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>

          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
            <span className="px-2 sm:px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs sm:text-sm font-semibold rounded-full">
              {category}
            </span>
          </div>

          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center space-x-3 sm:space-x-4 text-white">
            <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1">
              <Visibility className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">{views.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1">
              <Favorite className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
              <span className="text-xs sm:text-sm font-medium">{currentLikes}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
            {title}
          </h3>
          
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
            {description}
          </p>

          <div className="space-y-2 mb-4 sm:mb-6">
            <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <LocationOn className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              <span>{location}</span>
            </div>
            <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <CalendarToday className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              <span>{date}</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleViewProject}
            className="w-full flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <span className="text-sm sm:text-base">View Project Details</span>
            <ArrowForward className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {showProjectDetail && (
          <ProjectDetail
            project={projectData}
            onClose={handleCloseDetail}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;