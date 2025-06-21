import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import TypingText from '@/components/ui/TypingText';
import ParticleBackground from '@/components/ui/ParticleBackground';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { CSSTransition } from 'react-transition-group';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: {
        staggerChildren: 0.1 // Stagger the animation of children
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const codeBlockVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  useEffect(() => {
    gsap.to(".hero-content", {
      y: -100, // Move content up by 100px
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".particle-background", {
      y: 50, // Move particle background down by 50px (reverse parallax)
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (async () => {
              // @ts-ignore
              const animeModule = await import('animejs');
              const anime = animeModule;
              // @ts-ignore
anime.timeline({
                easing: 'easeOutQuad',
                duration: 800,
                delay: anime.stagger(100) // Stagger the animation of children by 100ms
              })
              .add({
                targets: '.companies-text',
                opacity: [0, 1],
                translateY: [20, 0],
              })
              .add({
                targets: '.company-item',
                opacity: [0, 0.6],
                translateY: [10, 0],
              }, '-=500'); // Start this animation 500ms before the previous one ends
            })();
            observer.unobserve(entry.target);

            setTimeout(() => {
              setShowScrollIndicator(true);
            }, 1000);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    const target = document.querySelector('.companies-section');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden hero-section">
      <ParticleBackground className="particle-background" />
      
      <div className="container mx-auto px-4 relative z-10 hero-content">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-block px-6 py-2 bg-cynerza-purple/10 text-cynerza-purple rounded-full font-medium text-sm mb-6"
            variants={itemVariants}
          >
            Introducing CYNERZA - The Future of AI Development
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6"
            variants={itemVariants}
          >
            Revolutionize Your Workflow with{' '}
            <span className="gradient-text">Intelligent AI</span>
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-2xl text-gray-700 mb-8"
            variants={itemVariants}
          >
            Build, deploy, and scale your applications with{' '}
            <TypingText 
              texts={['intelligent AI assistance.', 'powerful ML models.', 'blazing fast performance.']}
              className="font-semibold text-cynerza-purple"
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={itemVariants}
          >
            <Button 
              className="bg-cynerza-purple hover:bg-cynerza-purple-dark text-white px-8 py-6 rounded-full text-lg transition-transform hover:scale-105"
              asChild
            >
              <Link to="/try-now">Try Now</Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-cynerza-purple text-cynerza-purple hover:bg-cynerza-purple/5 px-8 py-6 rounded-full text-lg"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-12 relative"
            variants={codeBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cynerza-purple/20 to-cynerza-purple-light/20 blur-lg -z-10"></div>
            <div className="glass-effect rounded-2xl overflow-hidden shadow-xl border border-white/30">
              <div className="bg-cynerza-gray-light p-2 flex items-center">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="bg-cynerza-black text-white/90 font-mono p-4 text-sm overflow-hidden">
                <div className="flex items-center">
                  <span className="text-cynerza-purple-light">$</span>
                  <span className="ml-2">
                    cynerza init <span className="text-cynerza-purple">my-awesome-project</span>
                  </span>
                </div>
                <div className="mt-2 text-green-400">
                  ✓ Project initialized successfully!
                </div>
                <div className="mt-2">
                  <span className="text-cynerza-purple-light">$</span>
                  <span className="ml-2">
                    cynerza generate <span className="text-cynerza-purple">api</span>
                  </span>
                </div>
                <div className="mt-2 text-white/80 animate-pulse">
                  Generating API endpoints with intelligent routing...
                </div>
              </div>
            </div>
          </motion.div>
          
          <div 
            className="mt-12 text-sm text-gray-500 companies-text opacity-0"
          >
            Trusted by developers at world-class companies
          </div>
          <div 
            className="flex flex-wrap justify-center items-center gap-8 mt-4 opacity-60 companies-section"
          >
            {['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'].map((company) => (
              <div key={company} className="text-xl font-bold text-gray-400 company-item opacity-0">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <CSSTransition
        in={showScrollIndicator}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cynerza-purple animate-bounce z-20">
          <ChevronDown size={32} />
        </div>
      </CSSTransition>
    </section>
  );
};

export default Hero;
