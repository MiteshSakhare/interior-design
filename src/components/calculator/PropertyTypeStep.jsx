import React from 'react';
import { motion } from 'framer-motion';
import { Home, Apartment, Villa } from '@mui/icons-material';
import { CALCULATOR_DATA } from '../../utils/constants';

const PropertyTypeStep = ({ selected, onSelect }) => {
  const { propertyTypes } = CALCULATOR_DATA;

  const getIcon = (type) => {
    if (type.includes('Villa')) return <Villa className="w-8 h-8 sm:w-10 sm:h-10 text-inherit" />;
    if (type.includes('BHK')) return <Apartment className="w-8 h-8 sm:w-10 sm:h-10 text-inherit" />;
    return <Home className="w-8 h-8 sm:w-10 sm:h-10 text-inherit" />;
  };

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">Select Your Property Type</h2>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-center">This helps us tailor the next steps for you.</p>
      
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {Object.entries(propertyTypes).map(([key, value], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(key)}
            className={`cursor-pointer p-4 sm:p-6 rounded-2xl transition-all duration-300 text-center flex flex-col items-center justify-center ${
              selected === key
                ? 'bg-primary-50 dark:bg-primary-900/30 border-2 border-primary-500 shadow-lg'
                : 'bg-gray-50 dark:bg-gray-900 border-2 border-transparent hover:border-primary-300'
            }`}
          >
            <div className={`mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 text-gray-600 dark:text-gray-300 ${
              selected === key
                ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}>
              {getIcon(value.name)}
            </div>
            <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">{value.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PropertyTypeStep;