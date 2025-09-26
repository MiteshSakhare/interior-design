import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloat from '../ui/WhatsAppFloat';
import ChatBot from '../ui/ChatBot';

const Layout = () => {
  const location = useLocation();

  // Auto-scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-50 transition-colors duration-300">
      <Navbar />
      <motion.main
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="pt-16 lg:pt-20"
      >
        <Outlet />
      </motion.main>
      <Footer />
      {/* Add Floating Components Here */}
      <WhatsAppFloat />
      <ChatBot />
    </div>
  );
};

export default Layout;