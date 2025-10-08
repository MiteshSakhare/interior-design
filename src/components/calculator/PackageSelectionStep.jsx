import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from '@mui/icons-material';
import { CALCULATOR_DATA } from '../../utils/constants.js';

const PackageSelectionStep = ({ selectedRooms, packageChoices, onSelectPackage }) => {
  const { packages } = CALCULATOR_DATA;
  const roomsToDesign = Object.keys(selectedRooms).filter(room => selectedRooms[room]);

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">Choose Your Style Package</h2>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-center">Select a package for each room to get a cost estimate.</p>
      
      <div className="space-y-8">
        {roomsToDesign.map((room, index) => (
          <motion.div
            key={room}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card-modern p-4 sm:p-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-left">{room}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {Object.entries(packages).map(([key, value]) => {
                const isSelected = packageChoices[room] === key;
                return (
                  <motion.div
                    key={key}
                    whileHover={{ y: -5, scale: 1.02 }}
                    onClick={() => onSelectPackage(room, key)}
                    className={`cursor-pointer rounded-2xl transition-all duration-300 overflow-hidden flex flex-col h-full ${
                      isSelected
                        ? 'bg-primary-50 dark:bg-primary-900/30 ring-2 ring-primary-500 shadow-xl'
                        : 'bg-gray-50 dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-primary-400'
                    }`}
                  >
                    <img src={value.image} alt={value.name} className="w-full h-36 sm:h-40 object-cover" />
                    <div className="p-4 sm:p-5 flex flex-col flex-grow">
                      <h4 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white">{value.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-4 flex-grow">{value.description}</p>
                      <ul className="space-y-2 text-sm">
                        {value.perks.map((perk, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PackageSelectionStep;