import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronDown, Play, Zap, Code, Cpu, Smartphone, Globe, BarChart3, ArrowRight } from 'lucide-react';


const AnimatedIcons = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
      });
    }
  };

  const icons = [
    { icon: <Zap className="w-8 h-8 text-amber-400" />, delay: 0 },
    { icon: <Code className="w-8 h-8 text-cyan-400" />, delay: 0.1 },
    { icon: <Cpu className="w-8 h-8 text-purple-400" />, delay: 0.2 },
    { icon: <Smartphone className="w-8 h-8 text-pink-400" />, delay: 0.3 },
    { icon: <Globe className="w-8 h-8 text-blue-400" />, delay: 0.4 },
    { icon: <BarChart3 className="w-8 h-8 text-green-400" />, delay: 0.5 },
  ];

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full min-h-[400px] lg:min-h-[500px]"
      onMouseMove={handleMouseMove}
    >
      {icons.map((item, index) => {
        const angle = (index / icons.length) * Math.PI * 2;
        const radius = 120;
        const x = Math.cos(angle) * radius + mousePos.x;
        const y = Math.sin(angle) * radius + mousePos.y;
        
        return (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: isInView ? x : 0,
              y: isInView ? y : 0,
              opacity: isInView ? 1 : 0,
              scale: isInView ? 1 : 0.5
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              delay: item.delay,
            }}
          >
            <motion.div 
              className="p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
            </motion.div>
          </motion.div>
        );
      })}
      
      {}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.3, type: 'spring' }}
      >
        <motion.div 
          className="absolute inset-0 rounded-full bg-white/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </div>
  );
};

const Hero: React.FC = () => {
  const controls = useAnimation();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    const sequence = async () => {
      await controls.start('visible');
    };
    sequence();
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const gradientText = {
    background: 'linear-gradient(90deg, #7C3AED 0%, #EC4899 50%, #F59E0B 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '200% auto',
    animation: 'gradient 8s ease-in-out infinite',
  };

  const glassEffect = {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
  } as React.CSSProperties;

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {}
      <div className="absolute inset-0 overflow-hidden">
        {}
        <div className="absolute inset-0 bg-gradient-to-br from-cynerza-purple/5 via-white to-cynerza-blue/5 dark:from-cynerza-purple/10 dark:via-gray-900 dark:to-cynerza-blue/10" />
        
        {}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj4KICA8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiNmZmZmZmYiLz4KICA8cGF0aCBkPSJNMCAwSDYwVjYwSDBWMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QxZDVkYiIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')]" />
        </div>
        
        {}
        <div className="absolute -top-64 -right-64 w-[600px] h-[600px] rounded-full bg-cynerza-purple/10 blur-3xl dark:bg-cynerza-purple/20" />
        <div className="absolute -bottom-64 -left-64 w-[600px] h-[600px] rounded-full bg-cynerza-blue/10 blur-3xl dark:bg-cynerza-blue/20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {}
          <motion.div 
            className="space-y-8 text-center lg:text-left"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.div 
              className="inline-flex items-center space-x-3 px-4 py-2.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 text-cynerza-purple dark:text-cynerza-purple-light text-sm font-medium shadow-sm"
              variants={fadeInUp}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cynerza-purple/70 dark:bg-cynerza-purple-light/70 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cynerza-purple dark:bg-cynerza-purple-light"></span>
              </span>
              <span className="text-gray-700 dark:text-gray-300 font-medium">Unified AI, Simplified Tech</span>
              <span className="ml-1.5 animate-pulse">✨</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
              variants={fadeInUp}
            >
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cynerza-purple to-cynerza-blue dark:from-cynerza-purple-light dark:to-cynerza-blue-light">
                Unified AI.
              </span>
              <span className="block text-gray-900 dark:text-white mt-2 sm:mt-3">
                Simplified Tech.
              </span>
              <span className="block text-gray-600 dark:text-gray-300 mt-2 sm:mt-3 font-medium">
                Limitless Possibilities.
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              variants={fadeInUp}
            >
              Transform your digital presence with our all-in-one platform for web, mobile, AI, and automation solutions. Build faster, scale smarter, and innovate with confidence.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
              variants={fadeInUp}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/ai-tools" className="flex items-center">
                    <span>Explore AI Tools</span>
                    <Zap className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group">
                  <Link to="/contact" className="flex items-center">
                    <span>Contact Sales</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 dark:text-gray-400"
              variants={fadeInUp}
            >
              <div className="flex items-center">
                <div className="flex -space-x-3 mr-3">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 bg-gradient-to-r from-cynerza-purple to-cynerza-blue"
                      style={{ 
                        zIndex: 3 - i,
                        backgroundImage: `linear-gradient(135deg, var(--cynerza-purple), var(--cynerza-blue))`,
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                      }}
                    />
                  ))}
                </div>
                <div>
                  <div className="font-medium text-gray-700 dark:text-gray-300">Trusted by 10,000+ developers</div>
                  <div className="flex items-center text-xs text-cynerza-purple dark:text-cynerza-purple-light">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      4.9/5 (2,000+ reviews)
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatedIcons />
          </motion.div>
        </div>
      </div>
      
      {}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
          <button 
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
            onClick={() => {
              const nextSection = document.getElementById('features');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Scroll to next section"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex items-center justify-center"
            >
              <ChevronDown className="h-6 w-6 text-white group-hover:text-cynerza-purple-light transition-colors" />
            </motion.div>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
