import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowForward, 
  PlayCircle, 
  CheckCircle,
  Star,
  Brush,
  Architecture,
  ColorLens,
  EmojiEvents,
  Analytics,
  Support
} from '@mui/icons-material';
import { useScrollReveal } from '../hooks/useScrollReveal';
import HeroCarousel from '../components/sections/HeroCarousel';
import StatsCounter from '../components/sections/StatsCounter';
import TestimonialCarousel from '../components/sections/TestimonialCarousel';
import ServiceCard from '../components/ui/ServiceCard';
import ProjectCard from '../components/ui/ProjectCard';

const Home = () => {
  const [aboutRef, aboutInView] = useScrollReveal();
  const [servicesRef, servicesInView] = useScrollReveal();
  const [whyUsRef, whyUsInView] = useScrollReveal();
  const [ctaRef, ctaInView] = useScrollReveal();
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    if (showVideoModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showVideoModal]);

  const handleWatchVideo = () => {
    setShowVideoModal(true);
  };

  const handleCloseVideo = () => {
    setShowVideoModal(false);
  };

  const handleViewPortfolio = () => {
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const featuredServices = [
    {
      icon: <Brush className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Interior Design",
      description: "Complete residential and commercial interior design solutions with modern aesthetics.",
      features: ["Space Planning", "3D Visualization", "Material Selection", "Project Management"],
      price: "25,000",
      popular: true
    },
    {
      icon: <Architecture className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Space Planning",
      description: "Optimize your space utilization with expert planning and functional layout design.",
      features: ["Traffic Flow Analysis", "Functional Zones", "Storage Solutions", "Accessibility"],
      price: "15,000"
    },
    {
      icon: <ColorLens className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Color Consultation",
      description: "Professional color advice to create the perfect atmosphere for your space.",
      features: ["Color Psychology", "Mood Boards", "Paint Selection", "Lighting Impact"],
      price: "4,000"
    }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "Modern Penthouse",
      category: "Residential",
      location: "New York, NY",
      date: "2024",
      description: "Luxury penthouse design featuring contemporary aesthetics and stunning city views with premium materials and sophisticated lighting solutions. This project showcases modern minimalism with high-end finishes.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 245,
      views: 3200
    },
    {
      id: 2,
      title: "Executive Office",
      category: "Commercial",
      location: "Chicago, IL",
      date: "2024",
      description: "Modern office space designed for productivity and employee satisfaction with ergonomic furniture and natural lighting integration. Features collaborative spaces and private work areas.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 156,
      views: 1800
    },
    {
      id: 3,
      title: "Boutique Restaurant",
      category: "Restaurant",
      location: "San Francisco, CA",
      date: "2023",
      description: "Intimate restaurant design with warm atmosphere and natural textures creating memorable dining experience for guests. Combines rustic charm with modern functionality.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 298,
      views: 4100
    }
  ];

  const whyChooseUs = [
    {
      icon: <EmojiEvents className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />,
      title: "Award-Winning Design",
      description: "Recognized excellence in interior design with multiple industry awards and certifications."
    },
    {
      icon: <Analytics className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />,
      title: "Proven Results",
      description: "Track record of successful projects with 98% client satisfaction and on-time delivery."
    },
    {
      icon: <Support className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />,
      title: "End-to-End Service",
      description: "Complete project management from concept to completion with dedicated support."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Video Modal - Properly Centered */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000] flex items-center justify-center p-2 sm:p-4"
            onClick={handleCloseVideo}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseVideo}
                className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-colors duration-200"
              >
                ✕
              </button>
              
              <div className="p-6 sm:p-8">
                <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-center px-4">
                    <PlayCircle className="w-16 h-16 sm:w-20 sm:h-20 text-primary-500 mb-4 mx-auto" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Our Design Journey
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      Experience our design process and see transformations in action
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={handleCloseVideo}
                    className="px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-200"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About Section */}
      <section ref={aboutRef} className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="mb-6 sm:mb-8">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base lg:text-lg tracking-wide uppercase"
                >
                  About Our Studio
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 sm:mt-4 mb-4 sm:mb-6 leading-tight"
                >
                  Creating Beautiful Spaces That 
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent block sm:inline sm:ml-2">
                    Inspire
                  </span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed"
                >
                  With over 15 years of experience in interior design, we transform ordinary spaces into 
                  extraordinary environments. Our team of expert designers combines creativity with functionality 
                  to deliver spaces that truly reflect your vision and lifestyle.
                </motion.p>
              </div>

              <div className="space-y-3 sm:space-y-4 lg:space-y-6 mb-8 sm:mb-10">
                {[
                  "Award-winning design team with proven expertise",
                  "Sustainable and eco-friendly design practices",
                  "End-to-end project management and support",
                  "Cutting-edge 3D visualization technology"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 sm:flex-none"
                >
                  <Link
                    to="/about"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <span>Learn More</span>
                    <ArrowForward className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </motion.div>
                
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWatchVideo}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-semibold rounded-lg transition-all duration-200"
                >
                  <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Watch Video</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Modern Living Room"
                      className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Luxury Bedroom"
                      className="w-full h-40 sm:h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>
                <div className="space-y-3 sm:space-y-4 lg:space-y-6 mt-4 sm:mt-6 lg:mt-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Modern Kitchen"
                      className="w-full h-40 sm:h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Elegant Dining"
                      className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>
              </div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={aboutInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -left-4 sm:-left-6 lg:-left-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-xl"
              >
                <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl lg:text-3xl font-bold text-gray-900 dark:text-white">4.9/5</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Client Rating</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Featured Services */}
      <section ref={servicesRef} className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base lg:text-lg tracking-wide uppercase">Our Services</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 sm:mt-4 mb-4 sm:mb-6 leading-tight">
              Transform Your Space with 
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent block sm:inline sm:ml-2">
                Expert Design
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we offer comprehensive interior design services 
              tailored to your unique style and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="h-full">
                <ServiceCard
                  {...service}
                  delay={index * 0.1}
                />
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={servicesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12 sm:mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/services"
                className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <span>View All Services</span>
                <ArrowForward className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base lg:text-lg tracking-wide uppercase">Featured Projects</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 sm:mt-4 mb-4 sm:mb-6 leading-tight">
              Our Latest <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our recent projects and see how we've transformed spaces for our clients.
            </p>
          </motion.div>

          {/* Project Cards with Working Modal Integration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="h-full">
                <ProjectCard
                  id={project.id}
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  location={project.location}
                  date={project.date}
                  description={project.description}
                  likes={project.likes}
                  views={project.views}
                  delay={index * 0.1}
                />
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 sm:mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <span>View All Projects</span>
                <ArrowForward className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyUsRef} className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base lg:text-lg tracking-wide uppercase">Why Choose Us</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 sm:mt-4 mb-4 sm:mb-6 leading-tight">
              Excellence in Every <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Detail</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're committed to delivering exceptional results that exceed expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                className="h-full"
              >
                <div className="bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group h-full flex flex-col">
                  <div className="mb-4 sm:mb-6 flex justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section ref={ctaRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          <div className="absolute w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-full top-10 sm:top-20 left-10 sm:left-20 animate-pulse"></div>
          <div className="absolute w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-gradient-to-br from-secondary-400/20 to-secondary-600/10 rounded-full top-20 sm:top-40 right-16 sm:right-32 animate-pulse"></div>
          <div className="absolute w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-primary-400/20 to-primary-600/10 rounded-full bottom-16 sm:bottom-32 left-1/4 sm:left-1/3 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ready to Transform Your Space?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-primary-100 mb-8 sm:mb-10 lg:mb-12 leading-relaxed px-4 sm:px-0">
              Let's work together to create the interior of your dreams. 
              Get started with a free consultation today and see your vision come to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white text-primary-600 font-semibold rounded-lg sm:rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 space-x-2 text-base sm:text-lg"
                >
                  <span>Get Free Consultation</span>
                  <ArrowForward className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleViewPortfolio}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold rounded-lg sm:rounded-xl transition-all duration-300 space-x-2 text-base sm:text-lg backdrop-blur-sm"
              >
                <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>View Portfolio</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;