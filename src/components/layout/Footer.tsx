import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
      return document.documentElement.classList.contains("dark");
    });

    console.log(isDarkMode)

    // theme mode handler
    const toggleTheme = () => {
    const newTheme = !isDarkMode;
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    setIsDarkMode(newTheme);
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 ">
          {}
          <div className="lg:col-span-2 flex flex-col items-center">
            <Link to="/" className="inline-flex items-center">
              <span className="text-2xl font-bold font-heading text-cynerza-purple dark:text-cynerza-purple-light">
                CYNERZA
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed text-center sm:text-left">
              Empowering innovation through cutting-edge AI solutions. We make advanced technology accessible for developers and businesses worldwide.
            </p>
            <div className="flex space-x-4 mt-6">
              {['Twitter', 'GitHub', 'LinkedIn', 'Discord'].map((social) => (
                <a 
                  key={social}
                  href={`https://${social.toLowerCase()}.com/cynerza`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-6 w-6 flex items-center justify-center">
                    {social === 'Twitter' && <span className="text-xl">𝕏</span>}
                    {social === 'GitHub' && <span className="text-xl">⎘</span>}
                    {social === 'LinkedIn' && <span className="text-xl">in</span>}
                    {social === 'Discord' && <span className="text-xl">#</span>}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {}
          <div className='flex flex-col items-center md:block'>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Products</h3>
            <ul className="space-y-3 text-center md:text-left">
              {['AI Tools', 'API', 'Integrations', 'Enterprise', 'Pricing'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s/g, '-')}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col items-center md:block'>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Company</h3>
            <ul className="space-y-3 text-center md:text-left">
              {['About Us', 'Careers', 'Press', 'Partners'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s/g, '-')}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col items-center md:block'>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Resources</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <Link 
                  to="/documentation" 
                  className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link 
                  to="/tutorials" 
                  className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link 
                  to="/support" 
                  className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                >
                  Support Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CYNERZA Technologies Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-500 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light text-sm transition-colors">
              Cookie Policy
            </Link>
            <Link to="/security" className="text-gray-500 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light text-sm transition-colors">
              Security
            </Link>
            <button 
             onClick={toggleTheme}
              className="text-gray-500 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light text-sm transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? '☀️ Light' : '🌙 Dark'} Mode
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
