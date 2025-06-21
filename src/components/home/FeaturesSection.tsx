import React, { useEffect, useRef } from 'react';
import FeatureCard from '@/components/ui/FeatureCard';
import { Code, Zap, Globe, Users, Sparkles, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';
import { Fade } from "react-awesome-reveal";

const FeaturesSection: React.FC = () => {
  // No longer need useRef for IntersectionObserver as framer-motion handles it
  // const featuresRef = useRef<HTMLDivElement>(null);
  
  // No longer need useEffect for IntersectionObserver as framer-motion handles it
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const elements = entry.target.querySelectorAll('.feature-item');
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

  //   if (featuresRef.current) {
  //     observer.observe(featuresRef.current);
  //   }

  //   return () => {
  //     if (featuresRef.current) {
  //       observer.unobserve(featuresRef.current);
  //     }
  //   };
  // }, []);

  const features = [
    {
      title: 'Smart Code Generation',
      description: 'Generate high-quality code snippets and entire components with AI assistance.',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Blazing Fast Performance',
      description: 'Optimize your applications for speed with intelligent performance suggestions.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Global Deployment',
      description: 'Deploy your applications to any cloud provider with one-click solutions.',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time collaboration and version control.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and suggestions to improve your codebase.',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: 'Intuitive Dashboard',
      description: 'Monitor and manage all your projects from a beautiful, informative dashboard.',
      icon: <LayoutDashboard className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-cynerza-gray-light" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Fade direction="up" triggerOnce>
            <h2 className="section-heading">
              <span className="gradient-text">Powerful Features</span> For Modern Developers
            </h2>
          </Fade>
          <Fade direction="up" triggerOnce delay={200}>
            <p className="text-lg text-gray-600">
              Unlock the full potential of your development workflow with our cutting-edge tools and features.
            </p>
          </Fade>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          // ref={featuresRef} // No longer needed
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // className="feature-item opacity-0" // No longer needed
              // style={{ transitionDelay: `${index * 0.1}s` }} // No longer needed
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
