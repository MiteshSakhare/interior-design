import React from 'react';
import { motion } from 'framer-motion';
import { 
  Visibility, 
  Favorite, 
  Share, 
  LocationOn,
  CalendarToday,
  ArrowForward
} from '@mui/icons-material';

const ProjectCard = ({ 
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
  const [isLiked, setIsLiked] = React.useState(false);
  const [currentLikes, setCurrentLikes] = React.useState(likes);

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setCurrentLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    console.log('Sharing project:', title);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="group cursor-pointer h-full"
    >
      <div className="card-equal-height overflow-hidden shadow-modern hover:shadow-modern-lg transition-all duration-300">
        
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            whileHover={{ scale: 1.1 }}
          />
          
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Floating Action Buttons */}
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLike}
              className={`p-2 rounded-full glass backdrop-blur-sm transition-all duration-200 ${
                isLiked 
                  ? 'bg-red-500 text-white shadow-modern' 
                  : 'bg-white/90 text-gray-700 hover:bg-red-50 hover:text-red-500 shadow-modern'
              }`}
            >
              <Favorite className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleShare}
              className="p-2 bg-white/90 text-gray-700 rounded-full glass backdrop-blur-sm hover:bg-primary-50 hover:text-primary-600 transition-all duration-200 shadow-modern"
            >
              <Share className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: delay + 0.2 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-modern"
            >
              {category}
            </motion.div>
          </div>

          {/* Stats Overlay */}
          <div className="absolute bottom-4 left-4 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center space-x-1 text-white text-sm glass bg-black/20 backdrop-blur-sm rounded-lg px-2 py-1">
              <Visibility className="w-4 h-4" />
              <span>{views.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1 text-white text-sm glass bg-black/20 backdrop-blur-sm rounded-lg px-2 py-1">
              <Favorite className="w-4 h-4" />
              <span>{currentLikes}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="h4 text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed flex-grow">
            {description}
          </p>

          {/* Metadata */}
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
            <div className="flex items-center space-x-1">
              <LocationOn className="w-3 h-3" />
              <span>{location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <CalendarToday className="w-3 h-3" />
              <span>{date}</span>
            </div>
          </div>

          {/* View Project Button */}
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gray-50 dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 py-3 px-4 rounded-xl transition-all duration-200 text-sm font-medium flex items-center justify-center space-x-2 group/button"
          >
            <span>View Project Details</span>
            <ArrowForward className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
