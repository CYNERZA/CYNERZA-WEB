import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cynerza-gray-light border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold font-heading bg-clip-text text-transparent bg-purple-gradient">
                CYNERZA
              </span>
            </Link>
            <p className="mt-4 text-gray-600">
              The future of AI development made accessible and powerful for all developers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              {['AI Tools', 'Integrations', 'API', 'Solutions'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s/g, '-')}`} 
                    className="text-gray-600 hover:text-cynerza-purple transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About', 'Team', 'Blog', 'Careers'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s/g, '-')}`}
                    className="text-gray-600 hover:text-cynerza-purple transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-600 hover:text-cynerza-purple transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:info@cynerza.ai" 
                  className="text-gray-600 hover:text-cynerza-purple transition-colors"
                >
                  info@cynerza.ai
                </a>
              </li>
              <li>
                <a 
                  href="tel:+11234567890" 
                  className="text-gray-600 hover:text-cynerza-purple transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} CYNERZA. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-cynerza-purple transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-cynerza-purple transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-cynerza-purple transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
