import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowForward, Replay } from '@mui/icons-material';

const ResultsStep = ({ totalCost, onReset }) => {
  const costLowerBound = totalCost * 0.9;
  const costUpperBound = totalCost * 1.1;

  return (
    <div className="text-center px-2 sm:px-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, type: 'spring' }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Your Estimated Interior Cost</h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
          This is an approximate cost based on your selections. For a detailed quote, please get in touch with our design experts.
        </p>
        
        <div className="my-8 p-6 sm:p-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl max-w-md mx-auto shadow-lg">
          <p className="text-sm sm:text-base font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">Estimated Range</p>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white my-2 text-gradient">
            ₹{costLowerBound.toLocaleString()} - ₹{costUpperBound.toLocaleString()}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">*Excluding taxes and structural changes.</p>
        </div>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8">
          Ready to take the next step?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              to="/contact"
              className="btn-primary w-full inline-flex items-center justify-center space-x-2 px-6 py-3"
            >
              <span>Get a Detailed Quote</span>
              <ArrowForward />
            </Link>
          </motion.div>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            onClick={onReset} 
            className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3"
          >
            <Replay />
            <span>Start Over</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ResultsStep;