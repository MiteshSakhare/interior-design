import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowBackIos, 
  ArrowForwardIos, 
  PlayArrow, 
  Pause,
  Star,
  TrendingUp,
  Groups,
  Home
} from '@mui/icons-material';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  const slides = [
    {
      id: 1,
      title: "Transform Your Space",
      subtitle: "Modern Interior Design Solutions",
      description: "Create stunning interiors that reflect your personality with our expert design team and innovative solutions.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      cta: "Explore Designs",
      stats: { projects: "500+", clients: "1200+", rating: "4.9" }
    },
    {
      id: 2,
      title: "Luxury Living Spaces",
      subtitle: "Premium Interior Experiences",
      description: "Discover the perfect blend of comfort and elegance with our luxury interior design services tailored to your lifestyle.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      cta: "View Portfolio",
      stats: { projects: "300+", clients: "800+", rating: "4.8" }
    },
    {
      id: 3,
      title: "Sustainable Design",
      subtitle: "Eco-Friendly Interior Solutions",
      description: "Build a greener future with our sustainable interior design approaches that combine style with environmental responsibility.",
      image: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      cta: "Learn More",
      stats: { projects: "200+", clients: "600+", rating: "4.9" }
    },
    {
      id: 4,
      title: "Smart Home Integration",
      subtitle: "Technology Meets Design",
      description: "Experience the future of living with our smart home interior solutions that seamlessly integrate technology and design.",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      cta: "Get Started",
      stats: { projects: "150+", clients: "400+", rating: "5.0" }
    }
  ];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  const overlayVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-dark-100 to-gray-900">
      {/* Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${currentSlideData.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={overlayVariants}
                initial="initial"
                animate="animate"
                className="text-white"
              >
                <motion.p 
                  variants={itemVariants}
                  className="text-primary-400 text-lg font-semibold mb-4 tracking-wide uppercase"
                >
                  {currentSlideData.subtitle}
                </motion.p>
                
                <motion.h1 
                  variants={itemVariants}
                  className="h1 mb-6 leading-tight"
                >
                  {currentSlideData.title}
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  className="body text-gray-300 mb-8 max-w-2xl"
                >
                  {currentSlideData.description}
                </motion.p>

                {/* Stats */}
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-wrap gap-6 mb-8"
                >
                  <div className="flex items-center space-x-2 glass bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <Home className="w-5 h-5 text-primary-400" />
                    <span className="text-sm text-gray-300">Projects:</span>
                    <span className="font-semibold">{currentSlideData.stats.projects}</span>
                  </div>
                  <div className="flex items-center space-x-2 glass bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <Groups className="w-5 h-5 text-primary-400" />
                    <span className="text-sm text-gray-300">Happy Clients:</span>
                    <span className="font-semibold">{currentSlideData.stats.clients}</span>
                  </div>
                  <div className="flex items-center space-x-2 glass bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm text-gray-300">Rating:</span>
                    <span className="font-semibold">{currentSlideData.stats.rating}</span>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary shadow-modern-lg"
                  >
                    <span>{currentSlideData.cta}</span>
                    <TrendingUp className="w-5 h-5 ml-2" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    <PlayArrow className="w-5 h-5 mr-2" />
                    <span>Watch Demo</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6 glass bg-black/30 backdrop-blur-sm rounded-full px-6 py-3">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="p-2 text-white hover:text-primary-400 transition-colors duration-200"
            aria-label="Previous slide"
          >
            <ArrowBackIos className="w-5 h-5" />
          </motion.button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary-400 shadow-lg' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="p-2 text-white hover:text-primary-400 transition-colors duration-200"
            aria-label="Next slide"
          >
            <ArrowForwardIos className="w-5 h-5" />
          </motion.button>

          {/* Play/Pause Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleAutoplay}
            className="p-2 text-white hover:text-primary-400 transition-colors duration-200 ml-2"
            aria-label={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <PlayArrow className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute top-0 left-0 w-full h-1 bg-black/20 z-20">
        <motion.div
          key={currentSlide}
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: 'linear' }}
        />
      </div>

      {/* Side Navigation Arrows (Desktop) */}
      <div className="hidden lg:block">
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 p-3 glass bg-black/30 backdrop-blur-sm text-white hover:text-primary-400 rounded-full transition-all duration-300 shadow-modern"
          aria-label="Previous slide"
        >
          <ArrowBackIos className="w-6 h-6" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 p-3 glass bg-black/30 backdrop-blur-sm text-white hover:text-primary-400 rounded-full transition-all duration-300 shadow-modern"
          aria-label="Next slide"
        >
          <ArrowForwardIos className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroCarousel;
