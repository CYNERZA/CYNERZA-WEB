import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [isTappedLogo, setIsTappedLogo] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const location = useLocation();
  const textToType = 'CYNERZA';
  const typingSpeed = 150;
  const eraseSpeed = 50;
  
  const navItems = [
  { name: 'Home', path: '/' },
  { name: 'AI Tools', path: '/ai-tools' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blogs' },
  { name: 'Team', path: '/team' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    let isTyping = true;

    const typeWriter = () => {
      if (isTyping) {
        if (currentIndex <= textToType.length) {
          setDisplayText(textToType.substring(0, currentIndex));
          currentIndex++;
          timeout = setTimeout(typeWriter, typingSpeed);
        } else {
          isTyping = false;
          setTypingComplete(true);
          timeout = setTimeout(typeWriter, 2000);
        }
      } else {
        if (currentIndex >= 0) {
          setDisplayText(textToType.substring(0, currentIndex));
          currentIndex--;
          timeout = setTimeout(typeWriter, eraseSpeed);
        } else {
          isTyping = true;
          setTypingComplete(false);
          setIsTappedLogo(false); // Reset tap state when animation completes
          timeout = setTimeout(typeWriter, typingSpeed);
        }
      }
    };

    const animateOut = () => {
      let currentIndex = displayText.length;
      const erase = () => {
        if (currentIndex >= 0) {
          setDisplayText(textToType.substring(0, currentIndex));
          currentIndex--;
          timeout = setTimeout(erase, eraseSpeed);
        } else {
          setDisplayText('');
          setTypingComplete(false);
          setIsAnimatingOut(false);
          setIsTappedLogo(false); // Reset tap state when erase completes
        }
      };
      erase();
    };

    // For mobile devices, use isTappedLogo instead of isHoveringLogo
    const shouldAnimate = window.innerWidth >= 768 ? isHoveringLogo : isTappedLogo;

    if (shouldAnimate) {
      setIsAnimatingOut(false);
      typeWriter();
    } else if (displayText) {
      setIsAnimatingOut(true);
      animateOut();
    }

    return () => clearTimeout(timeout);
  }, [isHoveringLogo, isTappedLogo]);

  const handleLogoClick = () => {
    if (window.innerWidth < 768) {
      setIsTappedLogo(!isTappedLogo);
    }
  };

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setIsTappedLogo(false); // Close typewriter when a link is clicked
  };

  return (
    <>
      <header className="pb-20 sm:pb-1 fixed top-4 left-0 w-full z-50 flex justify-center pointer-events-none">
        {/* Logo - Outside container for desktop */}
        <div
          className="hidden md:flex items-center space-x-2 pr-10 pointer-events-auto"
          onMouseEnter={() => setIsHoveringLogo(true)}
          onMouseLeave={() => setIsHoveringLogo(false)}
        >
          <motion.div
            animate={{ rotate: isHoveringLogo ? 360 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative"
          >
            <Link to="/">
              <img
                src="../../../public/android-chrome-512x512.png"
                alt="Logo"
                className="w-12 h-12 rounded-full cursor-pointer"
              />
            </Link>
          </motion.div>

          {(isHoveringLogo || isAnimatingOut) && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isHoveringLogo ? 1 : isAnimatingOut ? 1 : 0, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="dark:text-slate-200 text-slate-900 font-bold text-xl tracking-wider"
            >
              <span className="relative">
                {displayText}
                {!typingComplete && isHoveringLogo && (
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="absolute right-0 top-0 h-full w-0.5 bg-white"
                  />
                )}
              </span>
            </motion.div>
          )}
        </div>
        
        <div
          className={`pointer-events-auto max-w-[1020px] w-[95vw] flex items-center justify-between px-6 py-2 rounded-2xl border border-white/15 shadow-lg backdrop-blur-lg bg-white/10 dark:bg-gray-900/60 transition-all duration-300 ${isScrolled ? 'border-white/20 shadow-xl' : ''}`}
          style={{ height: '54px', fontFamily: 'neue-haas-grotesk-text, sans-serif', fontSize: '16px' }}
        >
          {/* Logo - Inside container for mobile */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.div
              animate={{ rotate: isTappedLogo ? 360 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative"
            >
              <Link 
                to="/"
                onClick={handleLogoClick}
              >
                <img
                  src="./apple-touch-icon-180x180.png"
                  alt="Logo"
                  className="w-12 h-12 rounded-full cursor-pointer"
                />
              </Link>
            </motion.div>

            {(isTappedLogo || isAnimatingOut) && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isTappedLogo ? 1 : isAnimatingOut ? 1 : 0, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="font-bold text-xl tracking-wider dark:text-slate-200 text-slate-900"
              >
                <span className="relative">
                  {displayText}
                  {!typingComplete && isTappedLogo && (
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="absolute right-0 top-0 h-full w-0.5 bg-white"
                    />
                  )}
                </span>
              </motion.div>
            )}
          </div>

          {/* Desktop Navigation */}
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

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-2 ml-4 pr-2">
            <a
              href="https://tools.cynerza.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block px-6 py-2 rounded-xl bg-cynerza-purple text-white font-medium text-base shadow border border-white/30 hover:bg-cynerza-purple/90 transition"
            >
              Get started
            </a>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden p-2 text-gray-100 hover:bg-white/10 rounded-lg ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} className='text-slate-900 dark:text-slate-200' />
               : <Menu size={24} className='text-slate-900 dark:text-slate-200' />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsTappedLogo(false);
              }}
            />

            {/* Mobile Menu Content */}
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
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'text-cynerza-purple dark:text-cynerza-purple bg-cynerza-purple/10 dark:bg-cynerza-purple/20 font-bold'
                          : 'text-gray-700 dark:text-gray-300 hover:text-cynerza-purple dark:hover:text-cynerza-purple hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                      }`}
                      onClick={handleMobileLinkClick}
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
                    onClick={handleMobileLinkClick}
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
    </>
  );
};

export default Navigation;