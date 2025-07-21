import React from 'react';
import { Globe, Layers, Smartphone, Server, FileText } from 'lucide-react';
import { motion } from 'framer-motion';


const ServicesSection: React.FC = () => {


  const services = [
    {
      title: 'Web Development',
      description: 'High-performance websites, portals, and dashboards with SEO-ready, responsive, and scalable architecture. Tailored CMS and custom workflows for businesses.',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-blue-400 to-indigo-600'
    },
    {
      title: 'Mobile App Development',
      description: 'Native Android/iOS and Flutter-based cross-platform apps. Real-time sync, offline support, and optimized performance for modern mobile experiences.',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-green-400 to-emerald-600'
    },
    {
      title: 'Business Automation',
      description: 'AI-powered workflow builders, RPA, CRM integration, chatbots, and IoT-based automation pipelines. Automate tasks and boost productivity.',
      icon: <Layers className="w-8 h-8" />,
      color: 'from-purple-400 to-pink-600'
    },
    {
      title: 'Custom API Solutions',
      description: 'REST and GraphQL APIs, token-based authentication, secure and version-controlled microservices. Built for easy integration and scale.',
      icon: <Server className="w-8 h-8" />,
      color: 'from-amber-400 to-orange-600'
    },
    {
      title: 'Digital Marketing & Analytics',
      description: 'AI-driven SEO, automated campaigns, analytics dashboards, and user tracking. Marketing automation with AI-generated content.',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-cyan-400 to-blue-600'
    },
  ];

  return (
    <section className="relative py-8 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      { }
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.03)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.05)_0%,transparent_70%)]" />
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-cynerza-purple/5 dark:bg-cynerza-purple/10 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-cynerza-blue/5 dark:bg-cynerza-blue/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cynerza-purple/5 dark:bg-cynerza-purple/10 border border-cynerza-purple/10 dark:border-cynerza-purple/20 text-cynerza-purple dark:text-cynerza-purple-light text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span>Our Expertise</span>
            <span className="text-cynerza-purple/70 dark:text-cynerza-purple-light/70">•</span>
            <span>Services</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive Digital Solutions
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empowering your digital transformation with cutting-edge technologies and innovative solutions tailored to your business needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <div className="absolute inset-0.5 bg-gradient-to-r from-cynerza-purple/5 to-cynerza-blue/5 dark:from-cynerza-purple/10 dark:to-cynerza-blue/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 dark:border-gray-800 group-hover:border-cynerza-purple/20 dark:group-hover:border-cynerza-purple/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 bg-gradient-to-br ${service.color} text-white shadow-lg shadow-${service.color.split(' ')[1]}/20`}>
                  {React.cloneElement(service.icon, { className: 'w-6 h-6' })}
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-cynerza-purple dark:text-cynerza-purple-light font-medium group-hover:translate-x-1 transition-transform duration-300">
                  <span className="mr-2">Learn more</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative inline-flex group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cynerza-purple to-cynerza-blue rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <a
              href="https://tools.cynerza.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center px-8 py-8 bg-gradient-to-r from-cynerza-purple to-cynerza-blue text-white text-lg font-semibold rounded-xl transition-all
                       duration-200 hover:shadow-lg hover:shadow-cynerza-purple/30
                       bg-cynerza-purple hover:bg-cynerza-purple/90 h-12 "
            >
              <span>Explore All Services</span>
              <svg className="w-5 h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default ServicesSection;
