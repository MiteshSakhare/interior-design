import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Email, 
  Phone, 
  LocationOn, 
  AccessTime,
  Send,
  Person,
  Subject,
  Message,
  ArrowForward,
  CheckCircle
} from '@mui/icons-material';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const [heroRef, heroInView] = useScrollReveal();
  const [formRef, formInView] = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Contact form submitted:', data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <LocationOn className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Visit Our Studio",
      details: ["FC Road, Pune Central", "Pune, Maharashtra 411005"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Call Us",
      details: ["+91 20 2567 8900", "+91 98765 43210"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Email className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email Us",
      details: ["info@interiordesign.com", "projects@interiordesign.com"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <AccessTime className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  // Responsive Input Field Component
  const InputField = ({ 
    label, 
    name, 
    type = 'text', 
    icon, 
    validation, 
    placeholder,
    multiline = false 
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={formInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-start pt-3 pointer-events-none">
          <span className="text-gray-400">
            {icon}
          </span>
        </div>
        {multiline ? (
          <textarea
            {...register(name, validation)}
            rows={4}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 resize-none"
          />
        ) : (
          <input
            {...register(name, validation)}
            type={type}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
          />
        )}
      </div>
      {errors[name] && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-red-600 dark:text-red-400"
        >
          {errors[name].message}
        </motion.p>
      )}
    </motion.div>
  );

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
                  Get In Touch
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                  Let's Create Something 
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent block mt-2">
                    Beautiful Together
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
                  Ready to transform your space? We'd love to hear about your project and discuss how 
                  we can bring your vision to life. Get in touch with our team today.
                </p>

                {/* Responsive Contact Highlights */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {[
                    "Free initial consultation and site visit",
                    "24/7 project support and communication",
                    "Flexible scheduling to fit your timeline",
                    "Professional design team at your service"
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
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <span>Send Message</span>
                    <ArrowForward className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-semibold rounded-lg transition-all duration-200"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Call Now</span>
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
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Contact Us"
                    className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </motion.div>

                {/* Responsive Floating Contact Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <LocationOn className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white">Pune</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">FC Road</div>
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
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white">24/7</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Support</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Responsive Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            
            {/* Responsive Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
                Contact Information
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed">
                We're here to help you every step of the way. Reach out to us through any of the following methods.
              </p>

              {/* Responsive Contact Info Cards */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 mb-8 sm:mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${info.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                        {info.icon}
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-1 break-words">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Responsive Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-60 sm:h-80 bg-gray-200 dark:bg-gray-800 rounded-lg sm:rounded-2xl overflow-hidden shadow-lg group"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0267933150515!2d73.8333!3d18.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sFC%20Road%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1695123456789!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Office Location - FC Road, Pune"
                  className="filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            </motion.div>

            {/* Responsive Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              id="contact-form"
              className="bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg h-fit order-1 lg:order-2"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
                Send Us a Message
              </h2>

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg sm:rounded-xl flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 dark:text-green-200 font-semibold text-sm sm:text-base">Message Sent Successfully!</p>
                    <p className="text-green-600 dark:text-green-400 text-xs sm:text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              {/* Responsive Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <InputField
                    label="First Name"
                    name="firstName"
                    icon={<Person className="w-4 h-4 sm:w-5 sm:h-5" />}
                    placeholder="Enter your first name"
                    validation={{
                      required: 'First name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters'
                      }
                    }}
                  />
                  
                  <InputField
                    label="Last Name"
                    name="lastName"
                    icon={<Person className="w-4 h-4 sm:w-5 sm:h-5" />}
                    placeholder="Enter your last name"
                    validation={{
                      required: 'Last name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters'
                      }
                    }}
                  />
                </div>

                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  icon={<Email className="w-4 h-4 sm:w-5 sm:h-5" />}
                  placeholder="Enter your email address"
                  validation={{
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  }}
                />

                <InputField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  icon={<Phone className="w-4 h-4 sm:w-5 sm:h-5" />}
                  placeholder="Enter your phone number"
                  validation={{
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[\+]?[1-9][\d]{0,15}$/,
                      message: 'Invalid phone number'
                    }
                  }}
                />

                <InputField
                  label="Subject"
                  name="subject"
                  icon={<Subject className="w-4 h-4 sm:w-5 sm:h-5" />}
                  placeholder="What's this about?"
                  validation={{
                    required: 'Subject is required',
                    minLength: {
                      value: 5,
                      message: 'Subject must be at least 5 characters'
                    }
                  }}
                />

                <InputField
                  label="Message"
                  name="message"
                  icon={<Message className="w-4 h-4 sm:w-5 sm:h-5" />}
                  placeholder="Tell us about your project..."
                  multiline
                  validation={{
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters'
                    }
                  }}
                />

                {/* Responsive Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Responsive FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Frequently Asked <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Find answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                question: "How long does a typical interior design project take?",
                answer: "Project timelines vary depending on scope and complexity. A single room typically takes 2-4 weeks, while full home renovations can take 2-6 months."
              },
              {
                question: "Do you provide 3D visualizations?",
                answer: "Yes! We create detailed 3D renderings and virtual walkthroughs so you can visualize your space before any work begins."
              },
              {
                question: "What's included in the initial consultation?",
                answer: "Our initial consultation includes a site visit, discussion of your needs and budget, style assessment, and preliminary recommendations."
              },
              {
                question: "Do you work with existing furniture and decor?",
                answer: "Absolutely! We can incorporate your existing pieces into the new design and suggest ways to refresh or repurpose items you love."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 leading-tight">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
