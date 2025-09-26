import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import {
  ArrowBackIos,
  ArrowForwardIos,
  PlayArrow,
  Pause,
  Star,
  TrendingUp,
  Groups,
  Home,
  Person,
  Email,
  Send,
  CheckCircle
} from '@mui/icons-material';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Hero Form Management
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm();

  // EmailJS Configuration (Your actual keys)
  const EMAILJS_SERVICE_ID = 'service_hwlbexr';
  const EMAILJS_TEMPLATE_ID = 'template_yohhy7a';
  const EMAILJS_PUBLIC_KEY = 'xkLsSVlNKa-DLWhK2';

  // Hero Form Submit Handler
  const onHeroFormSubmit = async (data) => {
    setIsSubmittingForm(true);
    
    try {
      // EmailJS Integration
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        to_name: 'Interior Design Team',
        message: `New lead from homepage: ${data.name} (${data.email}) is interested in interior design services.`,
        reply_to: data.email,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setFormSuccess(true);
      reset();
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setFormSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmittingForm(false);
    }
  };

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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={overlayVariants}
                initial="initial"
                animate="animate"
                className="text-white order-2 lg:order-1"
              >
                <motion.p 
                  variants={itemVariants}
                  className="text-primary-400 text-sm sm:text-base lg:text-lg font-semibold mb-4 tracking-wide uppercase"
                >
                  {currentSlideData.subtitle}
                </motion.p>
                
                <motion.h1 
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
                >
                  {currentSlideData.title}
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl leading-relaxed"
                >
                  {currentSlideData.description}
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  className="grid grid-cols-3 gap-4 mb-6 sm:mb-8"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-lg sm:text-xl font-bold text-primary-400">{currentSlideData.stats.projects}</div>
                    <div className="text-xs sm:text-sm text-gray-300">Projects</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-lg sm:text-xl font-bold text-primary-400">{currentSlideData.stats.clients}</div>
                    <div className="text-xs sm:text-sm text-gray-300">Clients</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-lg sm:text-xl font-bold text-yellow-400">{currentSlideData.stats.rating}</div>
                    <div className="text-xs sm:text-sm text-gray-300">Rating</div>
                  </div>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="space-y-2 sm:space-y-3 mb-6 sm:mb-8"
                >
                  {[
                    "Free 3D Design & Quote",
                    "45-Day Move-in Guarantee",  
                    "5-Year Warranty"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-200 font-medium">{feature}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <span>{currentSlideData.cta}</span>
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-semibold rounded-lg transition-all duration-200"
                  >
                    <PlayArrow className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Watch Demo</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* UPDATED: Added 'hidden lg:block' to hide the form on smaller screens */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
              className="hidden lg:block order-1 lg:order-2"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl max-w-md mx-auto lg:max-w-none">
                <div className="text-center mb-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    Get Free Quote
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Book a free consultation with our design experts</p>
                </div>

                {formSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-4 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-green-800 font-semibold text-sm">Thank you!</p>
                      <p className="text-green-600 text-xs">We'll contact you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onHeroFormSubmit)} className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Person className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      {...register('name', { 
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })}
                      type="text"
                      placeholder="Enter your name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-sm sm:text-base"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Email className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-sm sm:text-base"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmittingForm}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmittingForm ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Get Free Quote</span>
                      </>
                    )}
                  </motion.button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting, you agree to our terms and privacy policy
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4 sm:space-x-6 bg-black/30 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="p-2 text-white hover:text-primary-400 transition-colors duration-200"
            aria-label="Previous slide"
          >
            <ArrowBackIos className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary-400 shadow-lg' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="p-2 text-white hover:text-primary-400 transition-colors duration-200"
            aria-label="Next slide"
          >
            <ArrowForwardIos className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleAutoplay}
            className="p-2 text-white hover:text-primary-400 transition-colors duration-200 ml-2"
            aria-label={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
          >
            {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <PlayArrow className="w-4 h-4 sm:w-5 sm:h-5" />}
          </motion.button>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-black/20 z-20">
        <motion.div
          key={currentSlide}
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: 'linear' }}
        />
      </div>

      <div className="hidden lg:block">
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-black/30 backdrop-blur-sm text-white hover:text-primary-400 rounded-full transition-all duration-300 shadow-lg"
          aria-label="Previous slide"
        >
          <ArrowBackIos className="w-6 h-6" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-black/30 backdrop-blur-sm text-white hover:text-primary-400 rounded-full transition-all duration-300 shadow-lg"
          aria-label="Next slide"
        >
          <ArrowForwardIos className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroCarousel;