import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;
  const stepNames = ["Property Type", "Select Rooms", "Choose Packages", "Your Details", "Get Estimate"];

  return (
    <div className="mb-8 px-2 sm:px-0">
      <div className="flex justify-between items-center mb-3">
        <p className="text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400">
          Step {currentStep}: <span className="text-gray-800 dark:text-white font-bold">{stepNames[currentStep - 1]}</span>
        </p>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
          {currentStep} / {totalSteps}
        </p>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;