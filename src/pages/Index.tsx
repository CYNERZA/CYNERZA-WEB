import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturesSection from '@/components/home/FeaturesSection';
import AiToolsPreview from '@/components/home/AiToolsPreview';
import BlogPreview from '@/components/home/BlogPreview';
import ContactCta from '@/components/home/ContactCta';
import ServicesSection from '@/components/home/ServicesSection';
import { motion } from "framer-motion";

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
      className="flex flex-col min-h-screen"
    >
      <Navbar />
      
      <main className="flex-grow pt-8">
        <Hero />
        <FeaturesSection />
        <ServicesSection />
        <AiToolsPreview />
        <BlogPreview />
        <ContactCta />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
