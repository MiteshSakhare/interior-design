import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brush,
  Architecture, 
  ColorLens, 
  Lightbulb,
  Business,
  Kitchen,
  Weekend,
  ViewInAr,
  ArrowForward,
  PlayCircle,
  CheckCircle,
  Store
} from '@mui/icons-material';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Services = () => {
  const [heroRef, heroInView] = useScrollReveal();
  const [servicesRef, servicesInView] = useScrollReveal();
  const [processRef, processInView] = useScrollReveal();

  // Portfolio handler
  const handleViewPortfolio = () => {
    window.location.href = '/projects';
  };

  // Responsive ServiceCard Component
  const ServiceCard = ({ 
    icon, 
    title, 
    description, 
    features, 
    price, 
    popular = false,
    delay = 0 
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.6, 
          delay,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.2 }
        }}
        className="group relative h-full"
        style={{ 
          paddingTop: popular ? '1.5rem' : '0.5rem',
          marginBottom: '1rem'
        }}
      >
        {/* Responsive Popular Badge */}
        {popular && (
          <motion.div 
            initial={{ scale: 0, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: delay + 0.3, type: "spring", stiffness: 200 }}
            className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-lg opacity-60 scale-110" />
              <div className="relative bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-2xl border-2 border-white dark:border-gray-800 group-hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-1">
                  <span className="animate-pulse">⭐</span>
                  <span className="font-extrabold tracking-wide hidden sm:inline">MOST POPULAR</span>
                  <span className="font-extrabold tracking-wide sm:hidden">POPULAR</span>
                  <span className="animate-pulse">⭐</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Responsive Card Container */}
        <div className={`h-full p-4 sm:p-6 lg:p-8 relative bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-visible ${
          popular 
            ? 'border-2 border-primary-300 dark:border-primary-700 shadow-2xl bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-primary-900/20 dark:to-secondary-900/20' 
            : 'border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-600'
        }`}>
          
          {/* Background Pattern - Hidden on small screens */}
          <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 opacity-5 dark:opacity-10 pointer-events-none hidden sm:block">
            <div className="w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full transform translate-x-8 sm:translate-x-10 lg:translate-x-12 -translate-y-8 sm:-translate-y-10 lg:-translate-y-12 group-hover:scale-125 transition-transform duration-500" />
          </div>

          {/* Main Content Container */}
          <div className="relative h-full flex flex-col z-10">
            
            {/* Responsive Icon */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 text-white shadow-lg transition-all duration-300 flex-shrink-0 ${
                popular 
                  ? 'bg-gradient-to-br from-primary-500 to-secondary-500 shadow-2xl' 
                  : 'bg-gradient-to-br from-gray-600 to-gray-700 group-hover:from-primary-500 group-hover:to-secondary-500'
              }`}
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8">
                {icon}
              </div>
            </motion.div>

            {/* Content Section */}
            <div className="flex-grow flex flex-col">
              
              {/* Responsive Title */}
              <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-tight transition-colors duration-200 ${
                popular 
                  ? 'text-primary-800 dark:text-primary-300 group-hover:text-primary-700 dark:group-hover:text-primary-200' 
                  : 'text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400'
              }`}>
                {title}
              </h3>
              
              {/* Responsive Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {description}
              </p>

              {/* Responsive Features List */}
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: delay + (index * 0.1) + 0.2 }}
                    className="flex items-start space-x-2 sm:space-x-3 text-xs sm:text-sm"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Responsive Price */}
              {price && (
                <div className="mb-4 sm:mb-6 flex-shrink-0">
                  <div className="flex items-baseline space-x-1">
                    <span className={`text-2xl sm:text-3xl font-bold transition-colors duration-300 ${
                      popular 
                        ? 'text-primary-700 dark:text-primary-400 group-hover:text-primary-600 dark:group-hover:text-primary-300' 
                        : 'text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400'
                    }`}>
                      ${price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                      /project
                    </span>
                  </div>
                </div>
              )}

              {/* Responsive CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 flex-shrink-0 text-sm sm:text-base ${
                  popular
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-2xl hover:shadow-3xl border-2 border-primary-300'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 border border-gray-200 dark:border-gray-700 hover:border-primary-300'
                }`}
              >
                <span>Get Started</span>
                <ArrowForward className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const allServices = [
    {
      icon: <Brush className="w-full h-full" />,
      title: "Residential Design",
      description: "Complete home interior design solutions tailored to your lifestyle and preferences.",
      features: [
        "Space planning and layout optimization",
        "Color scheme development and selection", 
        "Furniture selection and placement",
        "3D visualization and renderings",
        "Project management and coordination"
      ],
      price: "2,500",
      popular: true
    },
    {
      icon: <Business className="w-full h-full" />,
      title: "Commercial Design",
      description: "Professional commercial spaces that enhance productivity and brand image.",
      features: [
        "Brand-aligned design concepts",
        "Ergonomic workspace planning",
        "Lighting and acoustics optimization",
        "Material and finish selection",
        "Code compliance assurance"
      ],
      price: "5,000"
    },
    {
      icon: <Architecture className="w-full h-full" />,
      title: "Space Planning",
      description: "Optimize your space utilization with expert planning and layout design.",
      features: [
        "Traffic flow analysis and optimization",
        "Functional zone planning",
        "Storage solutions and optimization",
        "Accessibility considerations",
        "Future flexibility planning"
      ],
      price: "1,500"
    },
    {
      icon: <ViewInAr className="w-full h-full" />,
      title: "3D Visualization",
      description: "Bring your design ideas to life with photorealistic 3D renderings.",
      features: [
        "Photorealistic interior renderings",
        "Virtual reality experiences",
        "Multiple design option presentations",
        "Material and lighting simulation",
        "Interactive design walkthroughs"
      ],
      price: "800"
    },
    {
      icon: <ColorLens className="w-full h-full" />,
      title: "Color Consultation",
      description: "Expert color advice to create the perfect atmosphere for your space.",
      features: [
        "Color psychology application",
        "Custom mood board creation",
        "Paint and finish recommendations",
        "Lighting impact analysis",
        "Seasonal color variations"
      ],
      price: "400"
    },
    {
      icon: <Lightbulb className="w-full h-full" />,
      title: "Lighting Design",
      description: "Comprehensive lighting solutions for ambiance, functionality, and efficiency.",
      features: [
        "Natural light optimization",
        "Artificial lighting planning",
        "Smart lighting system integration",
        "Energy efficiency solutions",
        "Mood and task lighting balance"
      ],
      price: "1,200"
    },
    {
      icon: <Kitchen className="w-full h-full" />,
      title: "Kitchen Design",
      description: "Custom kitchen designs that combine functionality with stunning aesthetics.",
      features: [
        "Ergonomic layout planning",
        "Cabinet and storage solutions",
        "Appliance integration",
        "Countertop material selection",
        "Ventilation and lighting"
      ],
      price: "3,000"
    },
    {
      icon: <Weekend className="w-full h-full" />,
      title: "Bathroom Design",
      description: "Luxurious and functional bathroom designs for relaxation and comfort.",
      features: [
        "Spa-like atmosphere creation",
        "Fixture and fitting selection",
        "Storage and organization",
        "Water efficiency solutions",
        "Accessibility features"
      ],
      price: "2,200"
    },
    {
      icon: <Store className="w-full h-full" />,
      title: "Retail Design",
      description: "Engaging retail environments that enhance customer experience and sales.",
      features: [
        "Customer flow optimization",
        "Product display solutions",
        "Brand experience design",
        "Lighting and visual merchandising",
        "Point-of-sale area design"
      ],
      price: "4,500"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We start with a comprehensive consultation to understand your vision, needs, and budget. This includes site visit and requirements analysis.",
      duration: "1-2 days"
    },
    {
      step: "02",
      title: "Design Development",
      description: "Our team creates initial design concepts, mood boards, and space planning layouts based on your requirements and style preferences.",
      duration: "1-2 weeks"
    },
    {
      step: "03",
      title: "3D Visualization",
      description: "We create photorealistic 3D renderings and virtual walkthroughs so you can visualize the final result before implementation.",
      duration: "3-5 days"
    },
    {
      step: "04",
      title: "Final Approval",
      description: "Review and refine the design based on your feedback. Once approved, we prepare detailed drawings and specifications.",
      duration: "2-3 days"
    },
    {
      step: "05",
      title: "Implementation",
      description: "Our project management team coordinates with contractors and vendors to bring your design to life with quality and precision.",
      duration: "2-8 weeks"
    },
    {
      step: "06",
      title: "Final Walkthrough",
      description: "We conduct a final walkthrough to ensure every detail meets our high standards and your complete satisfaction.",
      duration: "1 day"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Responsive Hero Section */}
      <section ref={heroRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/10 relative overflow-hidden">
        {/* Background Decorations - Hidden on small screens */}
        <div className="absolute inset-0 overflow-hidden hidden lg:block">
          <div className="absolute w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-200/30 to-secondary-200/20 rounded-full top-10 right-10 animate-pulse"></div>
          <div className="absolute w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-secondary-200/30 to-primary-200/20 rounded-full bottom-10 left-10 animate-pulse"></div>
          <div className="absolute w-32 h-32 lg:w-48 lg:h-48 bg-gradient-to-br from-primary-300/20 to-secondary-300/20 rounded-full top-1/2 left-1/4 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.0 }}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-block text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base lg:text-lg tracking-wide uppercase mb-4 px-3 sm:px-4 py-1 sm:py-2 bg-primary-50 dark:bg-primary-900/30 rounded-full">
                  Our Services
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                  Comprehensive Interior Design 
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent block mt-2">
                    Solutions
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
                  From residential homes to commercial spaces, we offer a complete range of interior design services 
                  tailored to your unique needs and vision. Transform your space with our expert team.
                </p>

                {/* Responsive Feature List */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {[
                    "Complete design consultation and planning",
                    "3D visualization and virtual reality tours", 
                    "Project management from start to finish",
                    "Sustainable and eco-friendly options"
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={heroInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Responsive Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 sm:flex-none"
                  >
                    <Link
                      to="/contact"
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <span>Get Free Consultation</span>
                      <ArrowForward className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleViewPortfolio}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-semibold rounded-lg transition-all duration-200"
                  >
                    <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>View Portfolio</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Responsive Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.3 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Our Services"
                    className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </motion.div>

                {/* Responsive Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <ViewInAr className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white">3D</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Visualization</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <Brush className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white">9+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Services</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Responsive Services Grid */}
      <section ref={servicesRef} className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Choose the Perfect Service for Your <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Project</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're renovating a single room or designing an entire building, 
              we have the expertise to bring your vision to life.
            </p>
          </motion.div>

          {/* Responsive Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {allServices.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Design Process */}
      <section ref={processRef} className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base lg:text-lg tracking-wide uppercase">Our Process</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 sm:mt-4 mb-4 sm:mb-6 leading-tight">
              How We Bring Your Vision to <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Life</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our proven 6-step process ensures exceptional results from concept to completion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                whileHover={{ y: -5 }}
                className="relative bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>

                <div className="mt-4 sm:mt-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4">
                    {step.description}
                  </p>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm">
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">Duration:</span>
                    <span className="text-gray-500 dark:text-gray-400">{step.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ready to Start Your Design Journey?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-primary-100 mb-6 sm:mb-8 leading-relaxed">
              Let's discuss your project and create a space that perfectly reflects your vision and lifestyle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Free Consultation
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold rounded-lg sm:rounded-xl transition-all duration-300"
              >
                View Our Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
