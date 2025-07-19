import React, { useEffect, useRef } from 'react';
import FeatureCard from '@/components/ui/FeatureCard';
import { Code, Zap, Globe, Users, Sparkles, LayoutDashboard, Server, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Fade } from "react-awesome-reveal";
import { ArrowRight } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  

  
  
  
  
  
  

  const features = [
    {
      title: 'Unified AI Ecosystem',
      description: 'One platform for web, mobile, automation, and AI — no more juggling between disconnected services.',
      icon: <Globe className="w-6 h-6" />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Customizable Workflows',
      description: 'Low-code to full-code flexibility with drag-and-drop automation and custom scripting.',
      icon: <LayoutDashboard className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Enterprise-Grade APIs',
      description: 'Comprehensive REST & GraphQL APIs with SDKs for Python, Node.js, and Flutter.',
      icon: <Code className="w-6 h-6" />,
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      title: 'AI-Powered Automation',
      description: 'Intelligent process automation with RPA, chatbots, and IoT integration capabilities.',
      icon: <Zap className="w-6 h-6" />,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Cloud-native architecture that grows with your business, from startup to enterprise.',
      icon: <Server className="w-6 h-6" />,
      gradient: 'from-violet-500 to-indigo-500'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Real-time analytics and AI-powered recommendations for smarter decisions.',
      icon: <BarChart3 className="w-6 h-6" />,
      gradient: 'from-rose-500 to-pink-500'
    },
  ];

  return (
    <section className="py-20 bg-cynerza-gray-light" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Fade direction="up" triggerOnce>
            <h2 className="section-heading text-center mb-12">
              Why CYNERZA?
            </h2>
          </Fade>
          <Fade direction="up" triggerOnce delay={200}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16 text-center">
              We're not just another tech company. CYNERZA is your strategic partner in digital transformation, combining cutting-edge AI with enterprise-grade solutions to drive real business impact.
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
