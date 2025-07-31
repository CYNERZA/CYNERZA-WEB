import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
    { name: 'AI Tools', path: '/ai-tools' },
  { name: 'Services', path: '/services' },
   { name: 'Blog', path: '/blogs' },
  { name: 'Team', path: '/team' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-950/95 py-2 shadow-sm backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50' 
          : 'bg-white/90 dark:bg-gray-950/90 py-3 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center group">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* <Zap className={`h-6 w-6 ${
              isScrolled 
                ? 'text-cynerza-purple dark:text-cynerza-purple-light' 
                : 'text-cynerza-purple dark:text-cynerza-purple-light'
            }`} /> */}
            <img src="../../../logo.png" alt="" className="w-11 h-11  rounded-full" />
            <span 
              className={`text-2xl font-bold font-heading tracking-tight ${
                isScrolled 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-gray-900 dark:text-white'
              }`}
            >
              CYNERZA
            </span>
          </motion.div>
        </Link>

        {}
        <nav className="hidden md:flex items-center h-full space-x-2">
          {navItems.map((item) => (
            <div key={item.path} className="h-full flex items-center">
              <Link
                to={item.path}
                className={`px-4 py-2 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 mx-0.5 ${
                  location.pathname === item.path
                  ? 'text-cynerza-purple dark:text-cynerza-purple-light bg-cynerza-purple/10 dark:bg-cynerza-purple/20 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light hover:bg-gray-100 dark:hover:bg-gray-800/50'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.span 
                    layoutId="activeNavItem"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-cynerza-purple"
                    style={{ borderRadius: '0 0 4px 4px' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </div>
          ))}
          <div className="h-full flex items-center ml-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cynerza-purple to-cynerza-blue rounded-lg opacity-75 group-hover:opacity-100 blur transition duration-200"></div>
              <a 
                href="https://tools.cynerza.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative flex items-center px-5 py-2 bg-cynerza-purple text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Get Started
                <svg className="w-4 h-4 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </nav>

        {}
        <motion.button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled 
              ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' 
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-cynerza-purple" />
          ) : (
            <Menu size={24} />
          )}
        </motion.button>
      </div>

      {}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-800/50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center ${
                  location.pathname === item.path
                  ? 'text-cynerza-purple dark:text-cynerza-purple-light bg-cynerza-purple/10 dark:bg-cynerza-purple/20 font-medium'
                  : 'text-gray-700 dark:text-gray-300 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light hover:bg-gray-100 dark:hover:bg-gray-800/50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {location.pathname === item.path && (
                  <div className="w-1.5 h-4 bg-cynerza-purple rounded-full mr-3"></div>
                )}
                <span className={location.pathname === item.path ? 'ml-1' : 'ml-4'}>{item.name}</span>
              </Link>
            ))}
            <div className="pt-2">
              <a 
                href="https://tools.cynerza.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full bg-cynerza-purple hover:bg-cynerza-purple/90 h-12 text-base font-medium">
                  Get Started
                  <svg className="w-4 h-4 ml-2 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
