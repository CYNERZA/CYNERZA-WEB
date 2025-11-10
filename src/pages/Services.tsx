import React from 'react';
import { motion } from 'framer-motion';
import { HoverEffect } from "../components/ui/card-hover-effect";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SEO from '@/components/seo/SEO';
import { getSEOData } from '@/components/seo/SEOConfig';
import { ServiceSchema } from '@/components/seo/SchemaMarkup';

const Services: React.FC = () => {
  const navigate = useNavigate()
  const services = [
    {
      title: 'SaaS Product Development',
      link: "/services/saas-product-development",
      description: 'Build scalable SaaS platforms with multi-tenant architecture, subscription billing, API integrations, and enterprise-grade security. From MVP to enterprise scale.',
    },
    {
      title: 'Custom LLM API Development',
      link: "/services/custom-llm-api",
      description: 'Build custom LLM-powered applications with OpenAI, Google Gemini, Claude, and open-source models. API integration, fine-tuning, and RAG implementation.',
    },
    {
      title: 'Automation Solutions',
      link: "/services/automation-solutions",
      description: 'Streamline operations with AI-powered automation: RPA, workflow builders, task automation, CRM integration, and intelligent chatbots.',
    },
    {
      title: 'AI & Machine Learning Solutions',
      link: "/services/ai-ml-solution",
      description: 'End-to-end AI/ML development: Custom model training, computer vision, NLP, predictive analytics, MLOps, and AI integration services.',
    },
    {
      title: 'Cloud & DevOps Engineering',
      link: "/services/cloud-devops-engineering",
      description: 'Expert cloud infrastructure and DevOps: CI/CD pipelines, Kubernetes, Docker, Infrastructure as Code, cloud migration, and monitoring solutions.',
    },
    {
      title: 'IT Service Management',
      link: "/services/it-service-management",
      description: 'Comprehensive ITSM platforms: Helpdesk systems, ticketing, asset management, change management, and IT service automation.',
    },
  ];

  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

  return (
    <>
    <SEO data={getSEOData('services')} />
    <ServiceSchema />
    <div className="relative pt-24 md:pt-28 w-full px-4 sm:px-6 lg:px-8">
 {/* Purple gradient background overlay */}
            {isDarkMode &&
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-800/10 to-indigo-600/20 z-5" />
            }    
    {/* Content wrapper */}
    <div className="relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className='inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cynerza-blue/5 dark:bg-cynerza-blue/10 border border-cynerza-blue/10 dark:border-cynerza-blue/20
                     text-cynerza-blue dark:text-cynerza-cyan-light text-sm font-medium mb-6'
                >
                    <span>Our Expertise</span>
                    <span className="text-cynerza-blue/70 dark:text-cynerza-cyan-light/70">•</span>
                    <span>Services</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className=" text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text
                    text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                    Unified AI Platform <span className='gradient-text'>Services</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    Complete technology stack combining web/mobile development, automation, custom APIs, and multimodal AI — all accessible through one seamless ecosystem.
                </motion.p>
            </motion.div>
        </div>

        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 1 * 0.05 }}
                layout
                className="p-6 rounded-lg">
                <HoverEffect
                    items={services}
                    className=''
                    isLink
                />
            </motion.div>
        </div>
    </div>

    {/* CTA section with gradient overlay */}
    <section className="relative pt-0 pb-8 ">
        {/* Purple gradient background overlay for CTA section */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-800/10 to-indigo-600/20" /> */}
        
        <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className=" text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text
                    text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                    Ready to <span className='gradient-text'>accelerate</span> your digital transformation?
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                    From web/mobile apps to AI-powered automation and custom APIs — our unified platform delivers everything you need to build smarter, faster, and better.
                </motion.p>
                <button
                    onClick={() => navigate("/contact")}
                    className="px-8 py-3 bg-cynerza-blue hover:bg-cynerza-blue/90 text-white font-medium rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg">
                    Start Building Today
                </button>
            </motion.div>
        </div>
    </section>
</div>
</>
  );
};

export default Services;







// import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ServicesAnimation = () => {
//   const [activeService, setActiveService] = useState(0);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const navigate = useNavigate()

//   const services = [
//     {
//       title: 'SaaS Product Development',
//       link: "/saas-product-development",
//       description: 'Crafting beautiful, high-performance websites and mobile applications tailored to your brand.',
//     },
//     {
//       title: 'Custom LLM API',
//       link: "/custom-llm-api",
//       description: 'Designing intuitive and engaging user experiences that captivate your audience and drive results.',
//     },
//     {
//       title: 'Automation Solutions',
//       link: "/automation-solutions",
//       description: 'Leveraging artificial intelligence to automate processes, enhance efficiency, and unlock new possibilities.',
//     },
//     {
//       title: 'AI & ML Solution',
//       link: "/ai-ml-solutions",
//       description: 'Boosting your online presence with data-driven marketing strategies and expert SEO services.',
//     },
//     {
//       title: 'Cloud & DevOps Engineering',
//       link: "/cloud-devops-engineering",
//       description: 'Building scalable and resilient infrastructure with modern cloud technologies and DevOps practices.',
//     },
//     {
//       title: 'IT Service Management',
//       link: "/it-service-management",
//       description: 'Developing a strong brand identity that resonates with your audience and sets you apart from the competition.',
//     },
//   ];

//   // Animation effect
//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // Responsive canvas sizing
//     const setCanvasSize = () => {
//       const rect = canvas.getBoundingClientRect();
//       canvas.width = rect.width * (window.devicePixelRatio || 1);
//       canvas.height = rect.height * (window.devicePixelRatio || 1);
//       canvas.style.width = rect.width + 'px';
//       canvas.style.height = rect.height + 'px';
//       ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
//     };

//     setCanvasSize();
//     window.addEventListener('resize', setCanvasSize);

//     // Particle system
//     class Particle {
//       x: number;
//       y: number;
//       size: number;
//       speedX: number;
//       speedY: number;
//       color: string;

//       constructor() {
//         this.x = Math.random() * canvas.offsetWidth;
//         this.y = Math.random() * canvas.offsetHeight;
//         this.size = Math.random() * 3 + 1;
//         this.speedX = Math.random() * 3 - 1.5;
//         this.speedY = Math.random() * 3 - 1.5;
//         this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x < 0 || this.x > canvas.offsetWidth) this.speedX *= -1;
//         if (this.y < 0 || this.y > canvas.offsetHeight) this.speedY *= -1;
//       }

//       draw() {
//         ctx!.fillStyle = this.color;
//         ctx!.beginPath();
//         ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx!.fill();
//       }
//     }

//     const particleCount = window.innerWidth < 768 ? 30 : 50;
//     const particles: Particle[] = [];
//     for (let i = 0; i < particleCount; i++) {
//       particles.push(new Particle());
//     }

//     // Connect particles with lines
//     const connectParticles = () => {
//       const maxDistance = window.innerWidth < 768 ? 80 : 100;
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < maxDistance) {
//             ctx!.beginPath();
//             ctx!.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
//             ctx!.lineWidth = 1;
//             ctx!.moveTo(particles[i].x, particles[i].y);
//             ctx!.lineTo(particles[j].x, particles[j].y);
//             ctx!.stroke();
//           }
//         }
//       }
//     };

//     // Animation loop
//     let animationId: number;
//     const animate = () => {
//       ctx!.fillStyle = 'rgba(15, 23, 42, 0.05)';
//       ctx!.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

//       for (let i = 0; i < particles.length; i++) {
//         particles[i].update();
//         particles[i].draw();
//       }

//       connectParticles();
//       animationId = requestAnimationFrame(animate);
//     };

//     animate();

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', setCanvasSize);
//       cancelAnimationFrame(animationId);
//     };
//   }, []);

//   // Auto-rotate services
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveService((prev) => (prev + 1) % services.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [services.length]);

//   return (
//     <section className='py-2 overflow-hidden'>
//       <div className=" text-white px-4 sm:px-6 lg:px-8 flex items-center">
//         <div className="max-w-7xl mx-auto w-full">
//           <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
            
//             {/* Left side - Services text */}
//             <div className="w-full lg:w-1/2 text-center lg:text-left">
//               <div className="relative min-h-[100px] sm:min-h-[120px] md:min-h-[150px] lg:min-h-[180px] mb-4 sm:mb-6 lg:mb-8">
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
//                   {services.map((service, index) => (
//                     <span
//                       key={index}
//                       className={`absolute inset-0 flex items-center justify-center lg:justify-start transition-all duration-1000 ease-in-out ${
//                         index === activeService
//                           ? 'opacity-100 transform translate-y-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'
//                           : 'opacity-0 transform -translate-y-4'
//                       }`}
//                     >
//                       <span className="px-2 break-words text-center lg:text-left">
//                         {service.title}
//                       </span>
//                     </span>
//                   ))}
//                 </h2>
//               </div>

//               <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mt-6 sm:mt-8 lg:mt-12">
//                 {services.map((service, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveService(index)}
//                     className={`px-2 sm:px-3 md:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
//                       index === activeService
//                         ? 'bg-cyan-600 text-white'
//                         : 'dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 bg-slate-200 text-slate-700 hover:bg-slate-300'
//                     }`}
//                     style={{ minWidth: '60px', maxWidth: '140px' }}
//                   >
//                     <span className="truncate">
//                       {service.title.split(' ')[0]}
//                     </span>
//                   </button>
//                 ))}
//               </div>

//               <div className="max-w-full mx-auto lg:mx-0 mt-8 sm:mt-12 lg:mt-16">
//                 <div className="transition-all duration-700 ease-in-out">
//                   {activeService === 0 && (
//                     <p className="text-base sm:text-lg lg:text-xl dark:text-slate-300 text-slate-500 leading-relaxed">
//                       Modern web applications built with React, Next.js, and cutting-edge technologies for optimal performance and user experience.
//                     </p>
//                   )}
//                   {activeService === 1 && (
//                     <p className="text-base sm:text-lg lg:text-xl dark:text-slate-300 text-slate-500 leading-relaxed">
//                       Cross-platform mobile applications developed with React Native and Flutter, delivering native experiences on iOS and Android.
//                     </p>
//                   )}
//                   {activeService === 2 && (
//                     <p className="text-base sm:text-lg lg:text-xl dark:text-slate-300 text-slate-500 leading-relaxed">
//                       User-centered design approach creating intuitive interfaces that enhance user experience and drive engagement.
//                     </p>
//                   )}
//                   {activeService === 3 && (
//                     <p className="text-base sm:text-lg lg:text-xl dark:text-slate-300 text-slate-500 leading-relaxed">
//                       Scalable cloud infrastructure and deployment strategies using AWS, Azure, and Google Cloud Platform.
//                     </p>
//                   )}
//                   {activeService === 4 && (
//                     <p className="text-base sm:text-lg lg:text-xl dark:text-slate-300 text-slate-500 leading-relaxed">
//                       Transform your data into actionable insights with advanced analytics and visualization tools.
//                     </p>
//                   )}
//                   {activeService === 5 && (
//                     <p className="text-base sm:text-lg lg:text-xl dark:text-slate-300 text-slate-500 leading-relaxed">
//                       Intelligent solutions powered by machine learning and artificial intelligence to automate and optimize processes.
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Right side - Animation */}
//             <div className="w-full lg:w-1/2">
//               <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] relative max-w-lg mx-auto lg:max-w-none">
//                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-xl sm:rounded-2xl overflow-hidden">
//                   <canvas
//                     ref={canvasRef}
//                     className="w-full h-full"
//                   />
//                 </div>

//                 {/* Floating 3D sphere */}
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                   <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64">
//                     <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-pink-600 rounded-full animate-pulse"></div>
//                     <div className="absolute inset-2 sm:inset-3 md:inset-4 bg-gradient-to-br from-indigo-700 to-pink-700 rounded-full shadow-lg"></div>
//                     <div className="absolute inset-4 sm:inset-6 md:inset-8 bg-gradient-to-br from-indigo-800 to-pink-800 rounded-full"></div>
//                     <div className="absolute inset-0 bg-indigo-500 rounded-full opacity-20 blur-xl animate-ping"></div>
//                   </div>
//                 </div>

//                 {/* Floating elements - responsive sizes */}
//                 <div className="absolute top-4 sm:top-6 md:top-10 left-4 sm:left-6 md:left-10 w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 bg-indigo-500 rounded-full animate-bounce"></div>
//                 <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-6 md:right-10 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                 <div className="absolute top-4 sm:top-6 md:top-10 right-4 sm:right-6 md:right-10 w-5 sm:w-8 md:w-10 h-5 sm:h-8 md:h-10 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
//                 <div className="absolute bottom-8 sm:bottom-12 md:bottom-20 left-8 sm:left-12 md:left-20 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <style>{`
//           @keyframes float {
//             0% { transform: translateY(0) rotate(0deg); }
//             50% { transform: translateY(-20px) rotate(10deg); }
//             100% { transform: translateY(0) rotate(0deg); }
//           }
//           .animate-float {
//             animation: float 5s ease-in-out infinite;
//           }
          
//           @media (max-width: 640px) {
//             .animate-bounce {
//               animation-duration: 2s;
//             }
//           }
//         `}</style>
//       </div>

//       <div className='flex flex-col gap-6 sm:gap-8 max-w-7xl mx-auto py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-8'>
//         <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-slate-900 dark:text-slate-200 font-light leading-tight'>
//           Champion change through enterprise endurance.
//         </h1>
//         <div className="space-y-4 sm:space-y-6">
//           <p className='text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 dark:text-slate-300 leading-relaxed'>
//             The transformation journey means many things to many different
//             enterprises. No matter your goals – whether it's growing and optimizing
//             your business or disrupting the market – you need enterprise endurance on the path ahead.
//             Partnering with you every step of the way or at any point in your journey, we help you
//             anticipate disruption,
//             thrive amid waves of change, reach breakthrough opportunities and drive revenue growth.
//           </p>
//           <p className='text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium'>
//             We're a global team of advisors, consultants, engineers, scientists and creatives.
//             Our thinking lives in code, in products and in market. We don't just create blueprints,
//             operating models and business
//             plans – we bend the mold until we discover the best solutions for your most complex challenges.
//           </p>
//         </div>
//       </div>

//       <div className='max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8'>
//         <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-slate-900 dark:text-slate-200 mb-8 sm:mb-12 font-light text-center lg:text-left'>
//           Our Core Services
//         </h1>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 place-items-center">
//           {services.map((s, i) => (
//             <div key={i} className="w-full max-w-sm">
//               <div className="rounded-full p-[2px] transition-all duration-300 bg-gradient-to-r from-cyan-400 to-purple-400 hover:scale-105">
//                 <button
//                   onClick={() =>
//                     navigate(`/${s.title
//                       .toLowerCase()
//                       .trim()
//                       .replace(/[^a-z0-9]+/g, '-')
//                       .replace(/^-+|-+$/g, '')
//                       }`)
//                   }
//                   className="group rounded-full w-full h-20 sm:h-24  px-3 sm:px-4 py-3 text-xs sm:text-sm md:text-base font-bold tracking-wide uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:bg-black dark:text-white bg-white text-black flex items-center justify-center text-center leading-tight"
//                   style={{
//                     minHeight: '5rem',
//                     wordBreak: 'break-word',
//                     hyphens: 'auto'
//                   }}
//                 >
//                   <span className="block w-full leading-tight px-1">
//                     {s.title}
//                   </span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesAnimation;
