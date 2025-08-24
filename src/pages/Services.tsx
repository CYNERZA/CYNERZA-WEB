import React from 'react';
import { motion } from 'framer-motion';
import { HoverEffect } from "../components/ui/card-hover-effect";

const Services: React.FC = () => {
   const services = [
    {
      title: 'SaaS Product Development',
      description: 'Crafting beautiful, high-performance websites and mobile applications tailored to your brand.',
    },
    {
      title: 'Custom LLM API',
      description: 'Designing intuitive and engaging user experiences that captivate your audience and drive results.',
    },
    {
      title: 'Automation Solutions',
      description: 'Leveraging artificial intelligence to automate processes, enhance efficiency, and unlock new possibilities.',
    },
    {
      title: 'AI & ML Solution',
      description: 'Boosting your online presence with data-driven marketing strategies and expert SEO services.',
    },
    {
      title: 'Cloud & DevOps Engineering',
      description: 'Building scalable and resilient infrastructure with modern cloud technologies and DevOps practices.',
    },
    {
      title: 'IT Service Management',
      description: 'Developing a strong brand identity that resonates with your audience and sets you apart from the competition.',
    },
  ];

  return (
    <div className="py-2">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cynerza-purple/5 dark:bg-cynerza-purple/10 border border-cynerza-purple/10 dark:border-cynerza-purple/20
             text-cynerza-purple dark:text-cynerza-purple-light text-sm font-medium mb-6'
          >
            <span>Our Expertise</span>
            <span className="text-cynerza-purple/70 dark:text-cynerza-purple-light/70">•</span>
            <span>Services</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className=" text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text
          text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
            Comprehensive <span className='gradient-text'>Digital Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Empowering your digital transformation with cutting-edge technologies and innovative solutions tailored to your business needs.
          </motion.p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 1 * 0.05 }}
          layout
          className="glass-card p-6 rounded-lg">
          <HoverEffect
            items={services}
            className=''
          />
        </motion.div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default Services;


