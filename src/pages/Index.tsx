import React from 'react';
import Hero from '@/components/home/Hero';
import FeaturesSection from '@/components/home/FeaturesSection';
import AiToolsPreview from '@/components/home/AiToolsPreview';
import ContactCta from '@/components/home/ContactCta';
import ServicesSection from '@/components/home/ServicesSection';
import { motion } from "framer-motion";
import UnicornStudioEmbed from '@/components/home/Hero';
import UnicornScene from '@/components/home/Hero';
import CyneCLIShowcase from '@/components/home/CynePreview';
import LeadingCompanies from '@/components/home/LeadingCompanies';
import SEO from '@/components/seo/SEO';
import { getSEOData } from '@/components/seo/SEOConfig';
import { OrganizationSchema, WebsiteSchema, SoftwarePlatformSchema } from '@/components/seo/SchemaMarkup';

const Index: React.FC = () => {

  return (
    <>
      <SEO data={getSEOData('home')} />
      <OrganizationSchema />
      <WebsiteSchema />
      <SoftwarePlatformSchema />
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
      <LeadingCompanies />
      <ContactCta />
      </motion.div>
    </>
  );
};

export default Index;
