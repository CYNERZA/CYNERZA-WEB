import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ExploreToolsPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <div className="relative glitch-container glass-card rounded-lg shadow-xl dark:shadow-purple-500/10 p-6 max-w-sm">
            <p 
              className="text-lg font-bold mb-4 glitch-text dark:text-white"
              data-text="Oops! You forgot to explore our tools."
            >
              Oops! You forgot to explore our tools.
            </p>
            <Button 
              className="w-full bg-cynerza-purple hover:bg-cynerza-purple/90 glow-button dark:bg-cynerza-purple-dark dark:hover:bg-cynerza-purple-dark/90"
              onClick={() => setIsVisible(false)}
            >
              Explore Tools
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExploreToolsPopup;
