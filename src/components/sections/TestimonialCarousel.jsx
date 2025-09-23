import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowBackIos, ArrowForwardIos, PlayArrow, Pause } from '@mui/icons-material';
import TestimonialCard from '../ui/TestimonialCard';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  const testimonials = [
    {
  id: 1,
  name: "Sarah Johnson",
  role: "Homeowner", 
  company: null,
  content: "The team transformed our home into a masterpiece. Their attention to detail and understanding of our vision was exceptional. We couldn't be happier with the results!",
  rating: 5,
  avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" // Updated Sarah Johnson image
},
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "TechStart Inc.",
      content: "Our office redesign exceeded all expectations. The space now perfectly reflects our company culture and has significantly improved employee satisfaction and productivity.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Restaurant Owner",
      company: "Bella Vista",
      content: "The restaurant interior design created the perfect ambiance for our customers. Sales have increased by 30% since the renovation, and we receive compliments daily.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Property Developer",
      company: "Thompson Estates",
      content: "Working with this team on multiple projects has been incredible. Their innovative designs consistently help our properties sell faster and at premium prices.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Boutique Owner",
      company: "Luxe Fashion",
      content: "The retail space design perfectly captures our brand essence. Customer engagement has improved dramatically, and the space photographs beautifully for our social media.",
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 6,
      name: "James Miller",
      role: "Hotel Manager",
      company: "Grand Plaza Hotel",
      content: "The lobby and suite redesigns have elevated our guest experience significantly. We've seen a 25% increase in positive reviews mentioning our beautiful interiors.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

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
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  // Get visible testimonials for desktop (3 cards)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push({ ...testimonials[index], index });
    }
    return visible;
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <section className="section-padding bg-gradient-secondary">
      <div className="max-w-7xl mx-auto container-padding">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="h2 text-gray-900 dark:text-white mb-4">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="body text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Desktop View - 3 Cards */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-8">
              <AnimatePresence mode="wait" custom={direction}>
                {getVisibleTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={`${currentSlide}-${index}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="card-equal-height"
                  >
                    <TestimonialCard
                      {...testimonial}
                      delay={index * 0.1}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile/Tablet View - 1 Card */}
          <div className="lg:hidden">
            <div className="max-w-lg mx-auto">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="card-equal-height"
                >
                  <TestimonialCard {...testimonials[currentSlide]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-12 space-x-6">
            
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-3 card-modern text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 shadow-modern hover:shadow-modern-lg transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ArrowBackIos className="w-5 h-5" />
            </motion.button>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-primary-500 shadow-lg' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-3 card-modern text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 shadow-modern hover:shadow-modern-lg transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ArrowForwardIos className="w-5 h-5" />
            </motion.button>

            {/* Play/Pause Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleAutoplay}
              className="p-3 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 rounded-full shadow-modern hover:shadow-modern-lg transition-all duration-200"
              aria-label={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <PlayArrow className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "98%", label: "Client Satisfaction" },
              { number: "1200+", label: "Happy Customers" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
