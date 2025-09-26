import React from 'react';
import { motion } from 'framer-motion';
import { ArrowForward, CheckCircle } from '@mui/icons-material';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  price, 
  popular = false,
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
        y: -10,
        transition: { duration: 0.2 }
      }}
      className="group relative h-full"
      style={{ zIndex: popular ? 10 : 1 }} // Ensure popular cards have higher z-index
    >
      {/* FIXED: Popular Badge - Always Visible on Hover */}
      {popular && (
        <motion.div 
          initial={{ scale: 0, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay: delay + 0.3, type: "spring", stiffness: 200 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2"
          style={{ zIndex: 50 }} // Very high z-index to stay above everything
        >
          <div className="relative">
            {/* Glow effect behind badge */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-lg opacity-60 scale-110" />
            {/* Main badge - stays visible on hover */}
            <div className="relative bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-2xl border-2 border-white dark:border-dark-50 group-hover:scale-105 group-hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center space-x-1">
                <span className="animate-pulse">⭐</span>
                <span className="font-extrabold tracking-wide">MOST POPULAR</span>
                <span className="animate-pulse">⭐</span>
              </div>
              
              {/* Extra glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-0 group-hover:opacity-20 blur-xl scale-150 transition-opacity duration-300" />
            </div>
          </div>
        </motion.div>
      )}

      <div className={`card-equal-height p-8 relative overflow-visible group ${
        popular 
          ? 'border-2 border-primary-300 dark:border-primary-700 shadow-2xl bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-primary-900/20 dark:to-secondary-900/20' 
          : 'border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800'
      }`}>
        
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5 dark:opacity-10" style={{ zIndex: 1 }}>
          <div className={`w-full h-full bg-gradient-to-br ${popular ? 'from-primary-500 to-secondary-500' : 'from-primary-500 to-secondary-500'} rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-125 transition-transform duration-500`} />
        </div>

        {/* Popular card extra glow */}
        {popular && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 dark:from-primary-500/10 dark:to-secondary-500/10 pointer-events-none" style={{ zIndex: 2 }} />
        )}

        <div className="relative h-full flex flex-col" style={{ zIndex: 3 }}>
          {/* Icon */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 text-white shadow-modern group-hover:shadow-modern-lg transition-all duration-300 ${
              popular 
                ? 'bg-gradient-to-br from-primary-500 to-secondary-500 shadow-2xl' 
                : 'bg-gradient-to-br from-gray-600 to-gray-700 group-hover:from-primary-500 group-hover:to-secondary-500'
            }`}
          >
            {icon}
          </motion.div>

          {/* Content */}
          <div className="flex-grow flex flex-col">
            <h3 className={`h4 mb-3 transition-colors duration-200 ${
              popular 
                ? 'text-primary-800 dark:text-primary-300 group-hover:text-primary-700 dark:group-hover:text-primary-200' 
                : 'text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400'
            }`}>
              {title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {description}
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-grow">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: delay + (index * 0.1) + 0.2 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Price */}
            {price && (
              <div className="mb-6">
                <div className="flex items-baseline space-x-1">
                  <span className={`text-3xl font-bold transition-colors duration-300 ${
                    popular 
                      ? 'text-primary-700 dark:text-primary-400 group-hover:text-primary-600 dark:group-hover:text-primary-300' 
                      : 'text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400'
                  }`}>
                    ₹{price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    /project
                  </span>
                </div>
              </div>
            )}

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                popular
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-2xl hover:shadow-3xl border-2 border-primary-300'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 border border-gray-200 dark:border-gray-700 hover:border-primary-300'
              }`}
            >
              <span>Get Started</span>
              <ArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
