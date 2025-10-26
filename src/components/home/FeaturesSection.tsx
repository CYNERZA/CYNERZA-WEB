

// import React, { useEffect, useRef } from 'react';
// import FeatureCard from '@/components/ui/FeatureCard';
// import { Code, Zap, Globe, Users, Sparkles, LayoutDashboard, Server, BarChart3 } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { Fade } from "react-awesome-reveal";
// import { ArrowRight } from 'lucide-react';

// const FeaturesSection: React.FC = () => {

//     const features = [
//     {
//       title: 'Unified AI Ecosystem',
//       description: 'One platform for web, mobile, automation, and AI — no more juggling between disconnected services.',
//       icon: <Globe className="w-6 h-6" />,
//       gradient: 'from-blue-500 to-cyan-500'
//     },
//     {
//       title: 'Customizable Workflows',
//       description: 'Low-code to full-code flexibility with drag-and-drop automation and custom scripting.',
//       icon: <LayoutDashboard className="w-6 h-6" />,
//       gradient: 'from-purple-500 to-pink-500'
//     },
//     {
//       title: 'Enterprise-Grade APIs',
//       description: 'Comprehensive REST & GraphQL APIs with SDKs for Python, Node.js, and Flutter.',
//       icon: <Code className="w-6 h-6" />,
//       gradient: 'from-amber-500 to-orange-500'
//     },
//     {
//       title: 'AI-Powered Automation',
//       description: 'Intelligent process automation with RPA, chatbots, and IoT integration capabilities.',
//       icon: <Zap className="w-6 h-6" />,
//       gradient: 'from-emerald-500 to-teal-500'
//     },
//     {
//       title: 'Scalable Infrastructure',
//       description: 'Cloud-native architecture that grows with your business, from startup to enterprise.',
//       icon: <Server className="w-6 h-6" />,
//       gradient: 'from-violet-500 to-indigo-500'
//     },
//     {
//       title: 'Data-Driven Insights',
//       description: 'Real-time analytics and AI-powered recommendations for smarter decisions.',
//       icon: <BarChart3 className="w-6 h-6" />,
//       gradient: 'from-rose-500 to-pink-500'
//     },
//   ];

//   return (
//     <section className="relative py-8 " id="features">

//       {/* Purple gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20" />

//       {/* Content wrapper with relative positioning */}
//       <div className="relative z-10">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <Fade direction="up" triggerOnce>
//               <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-clip-text 
//                     text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
//                 Why CYNERZA?
//               </h2>
//             </Fade>
//             <Fade direction="up" triggerOnce delay={200}>
//               <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
//                 We're not just another tech company. CYNERZA is your strategic partner in digital transformation, combining cutting-edge AI with enterprise-grade solutions to drive real business impact.
//               </p>
//             </Fade>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}

//               >
//                 <FeatureCard
//                   title={feature.title}
//                   description={feature.description}
//                   icon={feature.icon}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;


// it peroprly


import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      number: '1',
      title: 'UNIFIED AI ECOSYSTEM',
      description: 'One platform for web, mobile, automation, and AI — no more juggling between disconnected services. Experience seamless integration across all digital touchpoints.',
      dotColor: 'bg-purple-500 dark:bg-purple-400',
      position: 'left-top',
      cylinderLayer: 1
    },
    {
      number: '2',
      title: 'CUSTOMIZABLE WORKFLOWS',
      description: 'Low-code to full-code flexibility with drag-and-drop automation and custom scripting. Build exactly what your business needs without limitations.',
      dotColor: 'bg-blue-500 dark:bg-blue-400',
      position: 'right-top',
      cylinderLayer: 2
    },
    {
      number: '3',
      title: 'ENTERPRISE-GRADE APIs',
      description: 'Comprehensive REST & GraphQL APIs with SDKs for Python, Node.js, and Flutter. Developer-first approach ensures seamless integration with existing tech stacks.',
      dotColor: 'bg-indigo-500 dark:bg-indigo-400',
      position: 'left-middle-top',
      cylinderLayer: 3
    },
    {
      number: '4',
      title: 'AI-POWERED AUTOMATION',
      description: 'Intelligent process automation with RPA, chatbots, and IoT integration capabilities. Reduce manual work by up to 80% with smart automation.',
      dotColor: 'bg-violet-500 dark:bg-violet-400',
      position: 'right-middle-top',
      cylinderLayer: 4
    },
    {
      number: '5',
      title: 'SCALABLE INFRASTRUCTURE',
      description: 'Cloud-native architecture that grows with your business, from startup to enterprise. Handle millions of requests without compromising performance.',
      dotColor: 'bg-fuchsia-500 dark:bg-fuchsia-400',
      position: 'left-bottom',
      cylinderLayer: 5
    },
    {
      number: '6',
      title: 'DATA-DRIVEN INSIGHTS',
      description: 'Real-time analytics and AI-powered recommendations for smarter decisions. Transform raw data into actionable intelligence with advanced visualization.',
      dotColor: 'bg-pink-500 dark:bg-pink-400',
      position: 'right-bottom',
      cylinderLayer: 6
    }
  ];

  return (
    <section className="relative py-4 sm:py-6 md:py-8 overflow-hidden" id="features">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20" />

      {/* Content wrapper */}
      <div className="relative z-10">
        <div className="container mx-auto px-2 sm:px-4">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10">
            <Fade direction="up" triggerOnce>
              <motion.div
                className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cynerza-purple/5 dark:bg-cynerza-purple/10 border border-cynerza-purple/10 dark:border-cynerza-purple/20 text-cynerza-purple dark:text-cynerza-purple-light text-xs sm:text-sm font-medium mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span>WHY CHOOSE US</span>
              </motion.div>
            </Fade>

            <Fade direction="up" triggerOnce delay={100}>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                The CYNERZA Advantage
              </motion.h2>
            </Fade>

            <Fade direction="up" triggerOnce delay={200}>
              <motion.p
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We're not just another tech company. CYNERZA is your strategic partner in digital transformation, combining cutting-edge AI with enterprise-grade solutions to drive real business impact across six powerful pillars.
              </motion.p>
            </Fade>
          </div>

          {/* Main Diagram Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Diagram Title */}
            <div className="text-left mb-6 sm:mb-4">
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                FIG 1.A - CYNERZA PLATFORM ARCHITECTURE
              </p>
            </div>

            {/* Main Content Grid with Connections */}
            <DiagramWithConnections features={features} />

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-center mt-6 sm:mt-8 md:mt-10 flex justify-center items-center"
            >
              <Link
                to="/why-cynerza"
                className="relative flex items-center px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-cynerza-purple to-cynerza-blue text-white text-sm sm:text-base md:text-lg font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cynerza-purple/30 hover:bg-cynerza-purple/90"
              >
                <span>Learn more about our platform</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Diagram with Dynamic Connections Component
interface DiagramWithConnectionsProps {
  features: Array<{
    number: string;
    title: string;
    description: string;
    dotColor: string;
    position: string;
    cylinderLayer: number;
  }>;
}

const DiagramWithConnections: React.FC<DiagramWithConnectionsProps> = ({ features }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCardsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightCardsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cylinderRef = useRef<HTMLDivElement>(null);
  const [connections, setConnections] = useState<Array<{ path: string; gradient: string; delay: number }>>([]);

  useEffect(() => {
    const calculateConnections = () => {
      if (!containerRef.current || !cylinderRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const cylinderRect = cylinderRef.current.getBoundingClientRect();
      const newConnections: Array<{ path: string; gradient: string; delay: number }> = [];

      // Calculate left side connections - Same as right side logic (swapped start/end)
      leftCardsRefs.current.forEach((cardRef, index) => {
        if (cardRef) {
          const cardRect = cardRef.getBoundingClientRect();
          
          // Start from card's right edge (same as right side start point logic)
          const startX = cardRect.right - containerRect.left;
          const startY = cardRect.top + cardRect.height / 2 - containerRect.top;
          
          // End at cylinder's left edge with proper layer alignment
          const endX = cylinderRect.left - containerRect.left;
          const cylinderHeight = cylinderRect.height;
          const layerHeight = cylinderHeight / 6;
          const endY = cylinderRect.top + (layerHeight * index) + (layerHeight / 2) - containerRect.top;

          // Use same curved path function as right side
          const path = createCurvedPath(startX, startY, endX, endY, 'right');
          newConnections.push({
            path,
            gradient: `lineGradient${(index % 3) + 1}`,
            delay: 0.5 + index * 0.2
          });
        }
      });

      // Calculate right side connections - Keep existing logic
      rightCardsRefs.current.forEach((cardRef, index) => {
        if (cardRef) {
          const cardRect = cardRef.getBoundingClientRect();
          
          // Start from cylinder's right edge
          const startX = cylinderRect.right - containerRect.left;
          const cylinderHeight = cylinderRect.height;
          const layerHeight = cylinderHeight / 6;
          const startY = cylinderRect.top + (layerHeight * index) + (layerHeight / 2) - containerRect.top;
          
          // End at card's left edge
          const endX = cardRect.left - containerRect.left;
          const endY = cardRect.top + cardRect.height / 2 - containerRect.top;

          const path = createCurvedPath(startX, startY, endX, endY, 'right');
          newConnections.push({
            path,
            gradient: `lineGradient${(index % 3) + 1}`,
            delay: 0.7 + index * 0.2
          });
        }
      });

      setConnections(newConnections);
    };

    calculateConnections();
    const timeoutId = setTimeout(calculateConnections, 100);
    window.addEventListener('resize', calculateConnections);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', calculateConnections);
    };
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-12 gap-1 sm:gap-2 md:gap-4 lg:gap-6 items-start relative">
      {/* SVG Connection Lines Layer */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ overflow: 'visible' }}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {connections.map((connection, index) => (
          <AnimatedPath
            key={index}
            path={connection.path}
            gradientId={connection.gradient}
            delay={connection.delay}
          />
        ))}
      </svg>

      {/* Left Side - Features 1, 3, 5 */}
      <div className="col-span-3 flex flex-col justify-between min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[650px] relative z-10">
        {[0, 2, 4].map((index, i) => (
          <div key={index} ref={el => leftCardsRefs.current[i] = el} className="mb-1 sm:mb-2 last:mb-0">
            <FeatureCard
              feature={features[index]}
              delay={0.4 + i * 0.15}
              direction="left"
            />
          </div>
        ))}
      </div>

      {/* Center - Cylinder Diagram */}
      <div className="col-span-6 flex items-center justify-center py-2 sm:py-4 md:py-6 lg:py-8 relative z-10 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[650px]">
        <motion.div
          ref={cylinderRef}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative w-full max-w-[140px] sm:max-w-[200px] md:max-w-xs lg:max-w-sm"
        >
          {/* Vertical Labels */}
          <div className="absolute left-0 top-[15%] -translate-y-1/2 -translate-x-3 sm:-translate-x-6 md:-translate-x-8 lg:-translate-x-12">
            <div
              className="text-[5px] sm:text-[7px] md:text-[9px] lg:text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                transform: 'rotate(180deg)'
              }}
            >
              FOUNDATION LAYER
            </div>
          </div>

          <div className="absolute right-0 top-[35%] -translate-x-0.5 sm:translate-x-0.5 md:translate-x-1 translate-y-2 sm:translate-y-3 md:translate-y-4">
            <div
              className="text-[5px] sm:text-[7px] md:text-[9px] lg:text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed'
              }}
            >
              AUTOMATION CORE
            </div>
          </div>

          <div className="absolute right-0 bottom-[15%] -translate-x-0.5 sm:translate-x-0.5 md:translate-x-1 -translate-y-2 sm:-translate-y-3 md:-translate-y-4">
            <div
              className="text-[5px] sm:text-[7px] md:text-[9px] lg:text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed'
              }}
            >
              INTELLIGENCE ENGINE
            </div>
          </div>

          {/* Enhanced Cylinder SVG */}
          <svg viewBox="0 0 300 650" className="w-full h-auto drop-shadow-2xl">
            <defs>
              <linearGradient id="layerGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="layerGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {[
              { y: 50, label: 'ECOSYSTEM', gradient: 'layerGradient1' },
              { y: 145, label: 'WORKFLOWS', gradient: 'layerGradient2' },
              { y: 240, label: 'APIs', gradient: 'layerGradient1' },
              { y: 335, label: 'AUTOMATION', gradient: 'layerGradient2' },
              { y: 430, label: 'INFRASTRUCTURE', gradient: 'layerGradient1' },
              { y: 525, label: 'INSIGHTS', gradient: 'layerGradient2' }
            ].map((layer, index) => (
              <CylinderLayer
                key={index}
                y={layer.y}
                label={layer.label}
                gradient={layer.gradient}
                delay={0.5 + index * 0.1}
              />
            ))}

            <motion.line
              x1="55" y1="50" x2="55" y2="620"
              stroke="#6b7280"
              strokeWidth="2"
              opacity="0.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
            <motion.line
              x1="245" y1="50" x2="245" y2="620"
              stroke="#6b7280"
              strokeWidth="2"
              opacity="0.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
          </svg>
        </motion.div>
      </div>

      {/* Right Side - Features 2, 4, 6 */}
      <div className="col-span-3 flex flex-col justify-between min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[650px] relative z-10">
        {[1, 3, 5].map((index, i) => (
          <div key={index} ref={el => rightCardsRefs.current[i] = el} className="mb-1 sm:mb-2 last:mb-0">
            <FeatureCard
              feature={features[index]}
              delay={0.5 + i * 0.15}
              direction="right"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to create curved SVG path - Same logic for both sides
const createCurvedPath = (x1: number, y1: number, x2: number, y2: number, direction: 'left' | 'right'): string => {
  const mpx = (x2 + x1) * 0.5;
  const mpy = (y2 + y1) * 0.5;
  const theta = Math.atan2(y2 - y1, x2 - x1) - Math.PI / 2;
  const offset = direction === 'left' ? -40 : 40;
  const c1x = mpx + offset * Math.cos(theta);
  const c1y = mpy + offset * Math.sin(theta);
  return `M${x1} ${y1} Q${c1x} ${c1y} ${x2} ${y2}`;
};

// Animated Path Component
interface AnimatedPathProps {
  path: string;
  gradientId: string;
  delay: number;
}

const AnimatedPath: React.FC<AnimatedPathProps> = ({ path, gradientId, delay }) => {
  const pathRef = useRef(null);
  const isInView = useInView(pathRef, { once: true, margin: "-50px" });

  return (
    <g ref={pathRef}>
      <motion.path
        d={path}
        stroke={`url(#${gradientId})`}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 0.8 } : {}}
        transition={{ duration: 1, delay, ease: "easeInOut" }}
        vectorEffect="non-scaling-stroke"
      />
      
      <motion.path
        d={path}
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
        fill="none"
        strokeDasharray="8,8"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0, strokeDashoffset: 0 }}
        animate={isInView ? { 
          pathLength: 1, 
          opacity: [0, 0.6, 0.6],
          strokeDashoffset: [0, -16]
        } : {}}
        transition={{ 
          pathLength: { duration: 1, delay, ease: "easeInOut" },
          opacity: { duration: 1, delay },
          strokeDashoffset: { duration: 2, delay: delay + 1, repeat: Infinity, ease: "linear" }
        }}
        vectorEffect="non-scaling-stroke"
      />

      <motion.circle
        r="4"
        fill={`url(#${gradientId})`}
        filter="url(#glow)"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: [0, 1, 1, 0] } : {}}
        transition={{
          duration: 2,
          delay: delay + 1,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut"
        }}
      >
        <animateMotion
          dur="2s"
          repeatCount="indefinite"
          begin={`${delay + 1}s`}
        >
          <mpath href={`#path-${gradientId}-${delay}`} />
        </animateMotion>
      </motion.circle>

      <path id={`path-${gradientId}-${delay}`} d={path} fill="none" opacity="0" />
    </g>
  );
};

// Feature Card Component
interface FeatureCardProps {
  feature: {
    number: string;
    title: string;
    description: string;
    dotColor: string;
  };
  delay: number;
  direction: 'left' | 'right';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, delay, direction }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      // initial={{ opacity: 0, x: direction === 'left' ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-white dark:bg-gray-800 p-1.5 sm:p-2.5 md:p-4 lg:p-5 rounded-md sm:rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 h-full flex flex-col max-w-[200px] lg:max-w-[240px]"
    >
      <div className="absolute inset-0 rounded-md sm:rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
      
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-start gap-1 sm:gap-1.5 md:gap-2 mb-0.5 sm:mb-1 md:mb-2">
          <motion.div
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 ${feature.dotColor} rounded-full shadow-lg flex-shrink-0 mt-0.5`}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: [0, 1.2, 1] } : {}}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
          />
          <h3 className="text-[6.5px] sm:text-[8px] md:text-[9px] lg:text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wide leading-tight flex-1">
            {feature.number}. {feature.title}
          </h3>
        </div>
        <p className="text-[5.5px] sm:text-[7px] md:text-[8px] lg:text-xs text-gray-600 dark:text-gray-400 leading-tight sm:leading-snug md:leading-relaxed">
          {feature.description}
        </p>
      </div>

      <div className="absolute top-0 right-0 w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 rounded-bl-2xl sm:rounded-bl-3xl rounded-tr-md sm:rounded-tr-lg md:rounded-tr-xl transition-all duration-300" />
    </motion.div>
  );
};

// Cylinder Layer Component
interface CylinderLayerProps {
  y: number;
  label: string;
  gradient: string;
  delay: number;
}

const CylinderLayer: React.FC<CylinderLayerProps> = ({ y, label, gradient, delay }) => {
  return (
    <motion.g
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <rect
        x="55"
        y={y}
        width="190"
        height="95"
        fill={`url(#${gradient})`}
        stroke="#8b5cf6"
        strokeWidth="1.5"
        opacity="0.7"
      />
      <motion.ellipse
        cx="150"
        cy={y + 95}
        rx="95"
        ry="28"
        fill={`url(#${gradient})`}
        stroke="#8b5cf6"
        strokeWidth="1.5"
        opacity="0.7"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.1 }}
      />
      <motion.text
        x="150"
        y={y + 55}
        textAnchor="middle"
        fill="#8b5cf6"
        fontSize="11"
        fontWeight="600"
        opacity="0.9"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.9 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: delay + 0.2 }}
      >
        {label}
      </motion.text>
    </motion.g>
  );
};

export default FeaturesSection;
