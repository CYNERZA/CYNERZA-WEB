import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useSelector } from 'react-redux';

const ContactCta: React.FC = () => {

  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);
  
  return (
    <section className="relative overflow-hidden py-4">
 {/* Purple gradient background overlay */}
            {isDarkMode &&
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20 z-5" />
            }
      <div className="absolute inset-0 -z-10">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-cynerza-purple-light/30 to-cynerza-purple/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(155,135,245,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(155,135,245,0.15),transparent_50%)]"></div> */}
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className=" rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-clip-text 
                    text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
            Ready to <span className="gradient-text">Transform</span> Your Development?
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Join thousands of developers who are already using CYNERZA to build better software faster. Get started free or contact us for a personalized demo.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://tools.cynerza.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-cynerza-purple hover:bg-cynerza-purple/90 text-white px-8 py-6 rounded-full text-lg">
                Get Started Free
              </Button>
            </a>
            <Link to="/contact">
              <button className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-full border
                     border-gray-200 dark:border-gray-700 transition-all duration-200 transform hover:-translate-y-0.5">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>

  );
};

export default ContactCta;
