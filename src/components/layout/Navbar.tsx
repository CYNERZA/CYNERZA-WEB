import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Typewriter component for smooth text animation
const TypewriterText = ({ text, className, speed = 100, style }: { text: string; className?: string; speed?: number; style?: React.CSSProperties }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Smooth cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentIndex < text.length) {
      // Add slight randomness for more natural typing feel
      const randomDelay = speed + Math.random() * 50 - 25;
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, randomDelay);
      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      // Restart animation after a delay
      setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
        setIsComplete(false);
      }, 4000); // Restart after 4 seconds
    }
  }, [currentIndex, text, speed, isComplete]);

  // Reset animation when text changes
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsComplete(false);
  }, [text]);

  return (
    <span className={className} style={style}>
      {displayText}
      {!isComplete && (
        <span
          className={`transition-opacity duration-75 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: 'inherit' }}
        >
          |
        </span>
      )}
    </span>
  );
};

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'AI Tools', path: '/ai-tools' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const AnimatedLogo = ({ isScrolled }: { isScrolled: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to="/"
      className="hidden md:flex items-center pr-4 pointer-events-auto relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden  backdrop-blur-sm">
          <img
            src="../../../logo.png"
            alt="Cynerza Logo"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="relative overflow-hidden ml-2 transition-all duration-500 ease-in-out"
          style={{ width: (!isScrolled) ? '120px' : '0px' }}
        >
          <TypewriterText
            text="CYNERZA"
            className="text-xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent whitespace-nowrap transition-all duration-100"
            speed={120}
            style={{
              fontFamily: 'neue-haas-grotesk-text, sans-serif',
              opacity: (!isScrolled) ? 1 : 0,
              transform: (!isScrolled) ? 'translateX(0)' : 'translateX(-20px)'
            }}
          />
        </div>
      </div>
    </Link>
  );
};

const MobileLogo = () => (
  <Link to="/" className="md:hidden flex items-center space-x-2">
    <div className="relative">
      <div className="relative w-12 h-12 rounded-full overflow-hidden ">
        <img
          src="../../../logo.png"
          alt="Cynerza Logo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <TypewriterText
      text="CYNERZA"
      className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent"
      speed={100}
      style={{ fontFamily: 'neue-haas-grotesk-text, sans-serif' }}
    />
  </Link>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 left-0 w-full z-50 flex justify-center pointer-events-none">
        <AnimatedLogo isScrolled={isScrolled} />

        <div
          className={`pointer-events-auto max-w-[1020px] w-[95vw] flex items-center justify-between px-6 py-2 rounded-2xl border border-white/15 shadow-lg backdrop-blur-lg bg-white/10 dark:bg-gray-900/60 transition-all duration-300 ${isScrolled ? 'border-white/20 shadow-xl' : ''
            }`}
          style={{ height: '54px', fontFamily: 'neue-haas-grotesk-text, sans-serif', fontSize: '16px' }}
        >
          <MobileLogo />


          <nav className="hidden md:flex items-center space-x-2 ml-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-md font-bold transition text-gray-800 dark:text-gray-100 hover:text-white hover:bg-cynerza-purple/80 hover:shadow-md dark:hover:bg-cynerza-purple/80 dark:hover:text-white`}
                style={{ fontSize: '16px', fontFamily: 'neue-haas-grotesk-text, sans-serif', fontWeight: 700 }}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-1 left-1/4 w-1/2 h-0.5 bg-cynerza-purple rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </Link>
            ))}
          </nav>


          <div className="flex items-center space-x-2 ml-4 pr-2">
            <a
              href="https://tools.cynerza.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block px-6 py-2 rounded-xl bg-cynerza-purple text-white font-medium text-base shadow border border-white/30 hover:bg-cynerza-purple/90 transition"
            >
              Get started
            </a>


            <motion.button
              className="md:hidden p-2 text-gray-100 hover:bg-white/10 rounded-lg ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </header>


      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >

            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />


            <motion.div
              className="absolute top-20 left-[2.5vw] right-[2.5vw] bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg rounded-2xl border border-white/15 shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === item.path
                          ? 'text-cynerza-purple dark:text-cynerza-purple bg-cynerza-purple/10 dark:bg-cynerza-purple/20 font-bold'
                          : 'text-gray-700 dark:text-gray-300 hover:text-cynerza-purple dark:hover:text-cynerza-purple hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        {location.pathname === item.path && (
                          <div className="w-1.5 h-4 bg-cynerza-purple rounded-full mr-3"></div>
                        )}
                        <span>{item.name}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <a
                    href="https://tools.cynerza.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-cynerza-purple hover:bg-cynerza-purple/90 h-12 text-base font-medium rounded-xl">
                      Get Started
                      <svg className="w-4 h-4 ml-2 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
