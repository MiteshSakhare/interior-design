import React from 'react';
import { motion } from 'framer-motion';
import { Star, FormatQuote } from '@mui/icons-material';

const TestimonialCard = ({ 
  name, 
  role, 
  company, 
  content, 
  rating, 
  avatar,
  delay = 0 
}) => {
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
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="group h-full"
    >
      <div className="card-equal-height p-8 relative overflow-hidden shadow-modern group-hover:shadow-modern-lg transition-all duration-300">
        
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-5 dark:opacity-10">
          <FormatQuote className="w-full h-full text-primary-500 transform rotate-12" />
        </div>

        {/* Quote Icon */}
        <div className="absolute top-6 left-6">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: delay + 0.2, duration: 0.5 }}
            className="w-8 h-8 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/50 dark:to-secondary-900/50 rounded-lg flex items-center justify-center"
          >
            <FormatQuote className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative pt-6 h-full flex flex-col">
          {/* Rating */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.3 }}
            className="flex items-center space-x-1 mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: delay + 0.4 + (i * 0.1) }}
              >
                <Star
                  className={`w-5 h-5 transition-colors duration-200 ${
                    i < rating 
                      ? 'text-yellow-400 group-hover:text-yellow-500' 
                      : 'text-gray-200 dark:text-gray-600'
                  }`}
                />
              </motion.div>
            ))}
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2 font-medium">
              ({rating}/5)
            </span>
          </motion.div>

          {/* Testimonial Content */}
          <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic flex-grow group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-200">
            "{content}"
          </blockquote>

          {/* Author Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-secondary-400 flex-shrink-0 shadow-modern">
                {avatar ? (
                  <img
                    src={avatar}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">
                    {name.charAt(0)}
                  </div>
                )}
              </div>
              {/* Online indicator */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white dark:border-dark-100 rounded-full shadow-sm" />
            </div>
            
            <div className="flex-grow">
              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                {name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {role}{company && (
                  <>
                    <span className="text-gray-400 mx-1">at</span>
                    <span className="text-primary-600 dark:text-primary-400 font-medium">{company}</span>
                  </>
                )}
              </p>
            </div>
          </motion.div>

          {/* Verified Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.6 }}
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
              <Star className="w-3 h-3" />
              <span>Verified</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
