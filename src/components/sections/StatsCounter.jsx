import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Home, 
  Groups, 
  Star, 
  TrendingUp,
  EmojiEvents,
  Business
} from '@mui/icons-material';

const StatsCounter = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    {
      id: 1,
      number: 500,
      suffix: '+',
      label: 'Projects Completed',
      icon: <Home className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      delay: 0
    },
    {
      id: 2,
      number: 1200,
      suffix: '+',
      label: 'Happy Clients',
      icon: <Groups className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      delay: 0.2
    },
    {
      id: 3,
      number: 98,
      suffix: '%',
      label: 'Success Rate',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      delay: 0.4
    },
    {
      id: 4,
      number: 15,
      suffix: '+',
      label: 'Years Experience',
      icon: <EmojiEvents className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      delay: 0.6
    },
    {
      id: 5,
      number: 4.9,
      suffix: '/5',
      label: 'Average Rating',
      icon: <Star className="w-8 h-8" />,
      color: 'from-yellow-500 to-yellow-600',
      delay: 0.8
    },
    {
      id: 6,
      number: 50,
      suffix: '+',
      label: 'Team Members',
      icon: <Business className="w-8 h-8" />,
      color: 'from-red-500 to-red-600',
      delay: 1.0
    }
  ];

  const AnimatedCounter = ({ number, suffix, duration = 2000, inView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!inView) return;

      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(number * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(number);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [inView, number, duration]);

    return (
      <span className="text-3xl lg:text-4xl font-bold">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-dark-100 dark:via-dark-50 dark:to-dark-100">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="h2 text-gray-900 dark:text-white mb-4">
            Our Success in <span className="text-gradient">Numbers</span>
          </h2>
          <p className="body text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Over the years, we've built a reputation for excellence in interior design. 
            Here's what our journey looks like in numbers.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: stat.delay,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="card-equal-height text-center p-8 group">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5 dark:opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${stat.color} rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`} />
                </div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 text-white shadow-modern group-hover:scale-110 group-hover:shadow-modern-lg transition-all duration-300`}>
                  {stat.icon}
                </div>
                
                {/* Number */}
                <div className="text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  <AnimatedCounter 
                    number={stat.number} 
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </div>
                
                {/* Label */}
                <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
