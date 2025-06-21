import React, { useRef, useEffect } from 'react';
import { Code, Globe, Layers, Smartphone, Server, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { XyzTransitionGroup } from '@animxyz/react';

// IMPORTANT: Don't forget to add the AnimXYZ core CSS import in your main CSS file (e.g., index.css or global.css):
// @import '~@animxyz/core';

const ServicesSection: React.FC = () => {
  // Remove useRef and useEffect as framer-motion will handle intersection observing
  // const servicesRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const elements = entry.target.querySelectorAll('.service-item');
  //           elements.forEach((el, index) => {
  //             setTimeout(() => {
  //               (el as HTMLElement).classList.add('animate-fade-in-up');
  //               (el as HTMLElement).style.opacity = '1';
  //             }, index * 150);
  //           });
  //         }
  //       });
  //     },
  //     { threshold: 0.1 }
  //   );

  //   if (servicesRef.current) {
  //     observer.observe(servicesRef.current);
  //   }

  //   return () => {
  //     if (servicesRef.current) {
  //       observer.unobserve(servicesRef.current);
  //     }
  //   };
  // }, []);

  const services = [
    {
      title: 'Website Development',
      description: 'Create stunning, responsive websites that captivate your audience and drive engagement.',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-blue-400 to-indigo-600'
    },
    {
      title: 'Software Creation',
      description: 'Custom software solutions tailored to your unique business needs and challenges.',
      icon: <Code className="w-8 h-8" />,
      color: 'from-purple-400 to-pink-600'
    },
    {
      title: 'Mobile App Development',
      description: 'Build powerful, user-friendly mobile applications for iOS and Android platforms.',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-green-400 to-emerald-600'
    },
    {
      title: 'Web Application Design',
      description: 'Develop scalable, high-performance web applications with cutting-edge technologies.',
      icon: <Layers className="w-8 h-8" />,
      color: 'from-amber-400 to-orange-600'
    },
    {
      title: 'Server-Side Solutions',
      description: 'Robust backend infrastructure and API development for seamless digital experiences.',
      icon: <Server className="w-8 h-8" />,
      color: 'from-teal-400 to-cyan-600'
    },
    {
      title: 'Project Consulting',
      description: 'Expert guidance and comprehensive support throughout your project lifecycle.',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-rose-400 to-red-600'
    }
  ];

  return (
    <section className="py-20 bg-cynerza-gray-light dark:bg-cynerza-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">
            Our <span className="gradient-text">Web Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive digital solutions designed to transform your business and drive success.
          </p>
        </div>

        <XyzTransitionGroup
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          xyz="fade small-100% up stagger"
        >
          {services.map((service, index) => (
            <div key={index} className="xyz-in"> 
              <div className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800/50 dark:hover:bg-gray-800/70">
                <div className={`mb-4 w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-r ${service.color} text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 font-heading dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </XyzTransitionGroup>
      </div>
    </section>
  );
};

export default ServicesSection;
