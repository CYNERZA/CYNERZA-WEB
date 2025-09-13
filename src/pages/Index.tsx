import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import FeaturesSection from '@/components/home/FeaturesSection';
import AiToolsPreview from '@/components/home/AiToolsPreview';
import ContactCta from '@/components/home/ContactCta';
import ServicesSection from '@/components/home/ServicesSection';
import { motion } from "framer-motion";
import UnicornStudioEmbed from '@/components/home/Hero';
import UnicornScene from '@/components/home/Hero';
import CyneCLIShowcase from '@/components/home/CynePreview';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = 'CYNERZA - The Future of AI Development';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      
      <Hero/>
      <CyneCLIShowcase/>
      <FeaturesSection />
      <ServicesSection />
      <AiToolsPreview />
      <ContactCta />
    </motion.div>
  );
};

export default Index;
