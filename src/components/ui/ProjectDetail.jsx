import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import {
  Close,
  LocationOn,
  DateRange,
  Category,
  Favorite,
  Visibility
} from '@mui/icons-material';

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  return ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000] flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-2xl" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
          >
            <Close className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <div className="flex items-center space-x-1">
                <Category className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{project.category}</span>
              </div>
              <div className="flex items-center space-x-1">
                <LocationOn className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <DateRange className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{project.date}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
              <Favorite className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
              <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{project.likes}</span>
              <span className="text-xs sm:text-sm">likes</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
              <Visibility className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{project.views}</span>
              <span className="text-xs sm:text-sm">views</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">About This Project</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Category:</span>
                  <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">{project.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Location:</span>
                  <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">{project.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Completed:</span>
                  <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">{project.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Duration:</span>
                  <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">8 weeks</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">Services Provided</h3>
              <div className="space-y-2">
                {[
                  'Space Planning',
                  '3D Visualization', 
                  'Material Selection',
                  'Project Management',
                  'Installation & Styling'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-sm sm:text-base">
                Get Similar Design
              </button>
              <button className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 py-3 px-6 rounded-lg font-semibold transition-colors text-sm sm:text-base">
                Contact Designer
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.getElementById('modal-root')
  );
};

export default ProjectDetail;