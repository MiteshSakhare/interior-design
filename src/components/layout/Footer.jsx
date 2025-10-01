import React from 'react';
import { motion } from 'framer-motion';
import {
  LocationOn,
  Email,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  ArrowForward
} from '@mui/icons-material';
// --- THIS IS THE CORRECTED LINE ---
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();
import { 
  LocationOn, 
  Email, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  LinkedIn,
  ArrowForward
} from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#' },
    { name: 'LinkedIn', icon: <LinkedIn className="w-5 h-5" />, href: '#' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Residential Design',
    'Commercial Design',
    'Space Planning',
    '3D Visualization',
    'Color Consultation',
    'Lighting Design'
  ];

  const contactInfo = [
    {
      icon: <LocationOn className="w-5 h-5" />,
      text: 'Warehouse no 8, Burudgaon rd, Near Bhoslay Lawns, Ahmednagar 414001'
    },
    {
      icon: <Email className="w-5 h-5" />,
      text: 'apdesignandconstructionl@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: '+91 8087999989'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: '+91 9175899989'
      text: 'FC Road, Pune Central, Maharashtra 411005'
    },
    {
      icon: <Email className="w-5 h-5" />,
      text: 'info@interiordesign.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: '+91 20 2567 8900'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 lg:py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Company Info */}
            <motion.div
            
            {/* Company Info - Full width on mobile, spans 2 cols on md+ */}
            <motion.div 
              variants={itemVariants}
              className="md:col-span-2 lg:col-span-1"
            >
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10  from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                    <img src={darkMode ? '/light-logo.png' : '/light-logo.png'} alt="Interior Hub Logo" className="object-contain p-1" />
                  </div>
                  <span className="text-xl font-bold">Interior Hub</span>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Transforming spaces into beautiful, functional environments.
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">ID</span>
                  </div>
                  <span className="text-xl font-bold">InteriorDesign</span>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Transforming spaces into beautiful, functional environments. 
                  Over 15 years of excellence in interior design.
                </p>
              </div>

              {/* Newsletter Signup */}
              {/* Newsletter Signup - Mobile Optimized */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                  <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 whitespace-nowrap">
                    <span className="hidden sm:inline">Subscribe</span>
                    <ArrowForward className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="lg:ml-8">
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <ArrowForward className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm leading-relaxed"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-primary-400 mt-1 flex-shrink-0">
                      {info.icon}
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {info.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              {/* Business Hours - Mobile Friendly */}
              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <h4 className="text-sm font-semibold text-primary-400 mb-2">Business Hours</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <div className="flex justify-between">
                    <span>Mon - Fri:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        {/* Bottom Footer - Responsive */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 pt-8 pb-4"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} InteriorDesign. All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            {/* Legal Links - Stack on mobile */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>

            {/* Back to Top */}
            {/* Back to Top - Mobile Friendly */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm group"
              aria-label="Back to top"
            >
              <span className="hidden sm:inline">Back to Top</span>
              <ArrowForward className="w-4 h-4 transform -rotate-90 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
