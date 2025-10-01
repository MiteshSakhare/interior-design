import React from 'react';
import { motion } from 'framer-motion';
import { 
  Groups, 
  Star, 
  TrendingUp, 
  CheckCircle,
  EmojiEvents,
  Lightbulb,
  People,
  Nature,
  ArrowForward
} from '@mui/icons-material';
import { useScrollReveal } from '../hooks/useScrollReveal';
import StatsCounter from '../components/sections/StatsCounter';

const About = () => {
  const [heroRef, heroInView] = useScrollReveal();
  const [storyRef, storyInView] = useScrollReveal();
  const [valuesRef, valuesInView] = useScrollReveal();
  const [teamRef, teamInView] = useScrollReveal();

  const values = [
    {
      icon: <EmojiEvents className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality standards in design and execution.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge design trends and technologies to create unique and inspiring spaces.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <People className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their vision and bring it to life through collaborative design.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Nature className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Sustainability",
      description: "We're committed to eco-friendly design practices that benefit both our clients and the environment.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Lead Interior Designer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "15+ years of experience in residential and commercial design. Specializes in modern and contemporary aesthetics.",
      expertise: ["Modern Design", "Space Planning", "Project Management"]
    },
    {
      name: "Michael Chen",
      role: "Senior Architect", 
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Award-winning architect with expertise in space planning and sustainable design solutions.",
      expertise: ["Architecture", "Sustainability", "3D Modeling"]
    },
    {
      name: "Emily Rodriguez",
      role: "Color & Lighting Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Expert in color psychology and lighting design. Creates atmospheres that enhance well-being and productivity.",
      expertise: ["Color Theory", "Lighting Design", "Psychology"]
    },
    {
      name: "David Thompson",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Ensures seamless project execution from concept to completion. Expert in timeline and budget management.",
      expertise: ["Project Management", "Quality Control", "Client Relations"]
    }
  ];

  const timeline = [
    {
      year: "2009",
      title: "Company Founded",
      description: "Started with a vision to transform spaces and create beautiful interiors.",
      milestone: "First Office Opened"
    },
    {
      year: "2012",
      title: "First Award",
      description: "Received 'Best Residential Design' award from the Interior Design Association.",
      milestone: "Industry Recognition"
    },
    {
      year: "2015",
      title: "Team Expansion",
      description: "Grew to a team of 20+ professionals covering all aspects of interior design.",
      milestone: "20+ Team Members"
    },
    {
      year: "2018",
      title: "Commercial Focus",
      description: "Expanded into commercial projects, including offices, restaurants, and retail spaces.",
      milestone: "Commercial Division"
    },
    {
      year: "2021",
      title: "Sustainable Design",
      description: "Launched our green design initiative focusing on eco-friendly materials and practices.",
      milestone: "Green Certification"
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Opened our innovation center featuring VR design experiences and smart home integration.",
      milestone: "Technology Center"
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
          <div className="absolute w-32 h-32 lg:w-48 lg:h-48 bg-gradient-to-br from-primary-300/20 to-secondary-300/20 rounded-full top-1/2 left-1/3 animate-pulse"></div>
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
                  About Our Studio
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                  Designing Dreams Into 
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent block mt-2">
                    Reality
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
                  For over 15 years, we've been transforming spaces and creating beautiful, functional interiors 
                  that reflect our clients' unique personalities and lifestyles. Our passionate team of designers 
                  combines creativity with expertise to deliver exceptional results.
                </p>
                
                {/* Responsive Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <span>Our Story</span>
                    <ArrowForward className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-semibold rounded-lg transition-all duration-200"
                  >
                    <Groups className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Meet Our Team</span>
                  </motion.button>
                </div>

                {/* Responsive Quick Stats */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                  {[
                    { number: "15+", label: "Years Experience" },
                    { number: "500+", label: "Projects Done" },
                    { number: "98%", label: "Success Rate" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={heroInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
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
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Our Design Studio"
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
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <EmojiEvents className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white">50+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Awards Won</div>
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
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white">4.9/5</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Client Rating</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Responsive Our Story */}
      <section ref={storyRef} className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base lg:text-lg tracking-wide uppercase">Our Story</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 sm:mt-4 mb-4 sm:mb-6 leading-tight">
                From Vision to Award-Winning Design Studio
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                What started as a small design studio in 2009 has grown into one of the most respected 
                interior design firms in the industry. Our journey has been marked by continuous learning, 
                innovation, and an unwavering commitment to our clients.
              </p>
              
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                {[
                  "500+ successful projects completed",
                  "Multiple industry awards and recognition",
                  "98% client satisfaction rate",
                  "Sustainable design practices pioneer"
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={storyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Responsive Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <img
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Modern Interior"
                    className="w-full h-40 sm:h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group mt-6 sm:mt-8 lg:mt-12"
                >
                  <img
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Luxury Design"
                    className="w-full h-40 sm:h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter - Already Responsive */}
      <StatsCounter />

      {/* Responsive Our Values */}
      <section ref={valuesRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base lg:text-lg tracking-wide uppercase">Our Values</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 sm:mt-4 mb-4 sm:mb-6 leading-tight">
              What Drives Us Every <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Day</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our core values guide every decision we make and every design we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                className="h-full"
              >
                <div className="bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group h-full flex flex-col">
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${value.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Timeline */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base lg:text-lg tracking-wide uppercase">Our Journey</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 sm:mt-4 mb-4 sm:mb-6 leading-tight">
              15 Years of Growth and <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Innovation</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Follow our journey from a small startup to an award-winning design studio.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line - Only visible on large screens */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 via-primary-500 to-secondary-500 hidden lg:block rounded-full" />

            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Content */}
                  <div className="lg:w-5/12 w-full mb-6 lg:mb-0">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400">
                          {item.year}
                        </div>
                        <div className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-semibold rounded-full w-fit">
                          {item.milestone}
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="lg:w-2/12 w-full flex justify-center mb-6 lg:mb-0">
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className="relative w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full shadow-lg border-4 border-white dark:border-gray-800"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full animate-ping opacity-20" />
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="lg:w-5/12 w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Team Section */}
      <section ref={teamRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base lg:text-lg tracking-wide uppercase">Meet Our Team</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 sm:mt-4 mb-4 sm:mb-6 leading-tight">
              The Creative Minds Behind Your <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Dreams</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our diverse team of talented professionals brings expertise, creativity, and passion to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                className="h-full"
              >
                <div className="bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Expertise Tags on Hover */}
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6 flex-grow flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3 text-sm">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
