import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ContactCta: React.FC = () => {
  return (
    <section className="relative overflow-hidden p-0 mb-4">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cynerza-purple-light/30 to-cynerza-purple/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(155,135,245,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(155,135,245,0.15),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl relative">
        <div className="glass-effect rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-800 dark:text-gray-200">
            Ready to <span className="gradient-text">Transform</span> Your Development?
          </h2>
          
          <p className="text-lg text-gray-800 dark:text-gray-400 s mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already using CYNERZA to build better software faster. Get started free or contact us for a personalized demo.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://tools.cynerza.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-cynerza-purple hover:bg-cynerza-purple/90 text-white px-8 py-6 rounded-full text-lg">
                Get Started Free
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" className="border-cynerza-purple text-cynerza-purple hover:bg-cynerza-purple/5 px-8 py-6 rounded-full text-lg">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
