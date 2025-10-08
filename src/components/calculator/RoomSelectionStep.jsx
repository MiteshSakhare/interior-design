import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from '@mui/icons-material';
import { CALCULATOR_DATA } from '../../utils/constants';

const RoomSelectionStep = ({ propertyType, selectedRooms, onToggleRoom }) => {
  const rooms = CALCULATOR_DATA.propertyTypes[propertyType]?.rooms || [];

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">Select Rooms to Design</h2>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-center">Choose all the areas you want to include in the estimate.</p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {rooms.map((room, index) => {
          const isSelected = selectedRooms[room];
          return (
            <motion.div
              key={room}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onToggleRoom(room)}
              className={`cursor-pointer p-4 sm:p-6 rounded-2xl transition-all duration-300 text-left relative overflow-hidden flex items-center ${
                isSelected
                  ? 'bg-primary-50 dark:bg-primary-900/30 border-2 border-primary-500 shadow-lg'
                  : 'bg-gray-50 dark:bg-gray-900 border-2 border-transparent hover:border-primary-300'
              }`}
            >
              <h3 className="font-bold text-sm sm:text-base lg:text-lg text-gray-900 dark:text-white flex-grow">{room}</h3>
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-5 h-5 sm:w-6 sm:h-6 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomSelectionStep;