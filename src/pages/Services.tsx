// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { HoverEffect } from "../components/ui/card-hover-effect";
// // import { useNavigate } from 'react-router-dom';
// // import { useSelector } from 'react-redux';
// // import SEO from '@/components/seo/SEO';
// // import { getSEOData } from '@/components/seo/SEOConfig';
// // import { ServiceSchema } from '@/components/seo/SchemaMarkup';

// // const Services: React.FC = () => {
// //   const navigate = useNavigate()
// //   const services = [
// //     {
// //       title: 'SaaS Product Development',
// //       link: "/services/saas-product-development",
// //       description: 'Build scalable SaaS platforms with multi-tenant architecture, subscription billing, API integrations, and enterprise-grade security. From MVP to enterprise scale.',
// //     },
// //     {
// //       title: 'Custom LLM API Development',
// //       link: "/services/custom-llm-api",
// //       description: 'Build custom LLM-powered applications with OpenAI, Google Gemini, Claude, and open-source models. API integration, fine-tuning, and RAG implementation.',
// //     },
// //     {
// //       title: 'Automation Solutions',
// //       link: "/services/automation-solutions",
// //       description: 'Streamline operations with AI-powered automation: RPA, workflow builders, task automation, CRM integration, and intelligent chatbots.',
// //     },
// //     {
// //       title: 'AI & Machine Learning Solutions',
// //       link: "/services/ai-ml-solution",
// //       description: 'End-to-end AI/ML development: Custom model training, computer vision, NLP, predictive analytics, MLOps, and AI integration services.',
// //     },
// //     {
// //       title: 'Cloud & DevOps Engineering',
// //       link: "/services/cloud-devops-engineering",
// //       description: 'Expert cloud infrastructure and DevOps: CI/CD pipelines, Kubernetes, Docker, Infrastructure as Code, cloud migration, and monitoring solutions.',
// //     },
// //     {
// //       title: 'IT Service Management',
// //       link: "/services/it-service-management",
// //       description: 'Comprehensive ITSM platforms: Helpdesk systems, ticketing, asset management, change management, and IT service automation.',
// //     },
// //   ];

// //   const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

// //   return (
// //     <>
// //     <SEO data={getSEOData('services')} />
// //     <ServiceSchema />
// //     <div className="relative pt-24 md:pt-28 w-full px-4 sm:px-6 lg:px-8">
// //  {/* Purple gradient background overlay */}
// //             {isDarkMode &&
// //                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-800/10 to-indigo-600/20 z-5" />
// //             }    
// //     {/* Content wrapper */}
// //     <div className="relative z-10">
// //         <div className="text-center max-w-4xl mx-auto mb-4">
// //             <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5 }}
// //             >
// //                 <motion.div
// //                     initial={{ opacity: 0, scale: 0.9 }}
// //                     animate={{ opacity: 1, scale: 1 }}
// //                     transition={{ delay: 0.2, duration: 0.5 }}
// //                     className='inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cynerza-blue/5 dark:bg-cynerza-blue/10 border border-cynerza-blue/10 dark:border-cynerza-blue/20
// //                      text-cynerza-blue dark:text-cynerza-cyan-light text-sm font-medium mb-6'
// //                 >
// //                     <span>Our Expertise</span>
// //                     <span className="text-cynerza-blue/70 dark:text-cynerza-cyan-light/70">•</span>
// //                     <span>Services</span>
// //                 </motion.div>
// //                 <motion.h2
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: 0.3, duration: 0.5 }}
// //                     className=" text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text
// //                     text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
// //                     Unified AI Platform <span className='gradient-text'>Services</span>
// //                 </motion.h2>
// //                 <motion.p
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: 0.4, duration: 0.5 }}
// //                     className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
// //                     Complete technology stack combining web/mobile development, automation, custom APIs, and multimodal AI — all accessible through one seamless ecosystem.
// //                 </motion.p>
// //             </motion.div>
// //         </div>

// //         <div className="max-w-7xl mx-auto">
// //             <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: 20 }}
// //                 transition={{ duration: 0.3, delay: 1 * 0.05 }}
// //                 layout
// //                 className="p-6 rounded-lg">
// //                 <HoverEffect
// //                     items={services}
// //                     className=''
// //                     isLink
// //                 />
// //             </motion.div>
// //         </div>
// //     </div>

// //     {/* CTA section with gradient overlay */}
// //     <section className="relative pt-0 pb-8 ">
// //         {/* Purple gradient background overlay for CTA section */}
// //         {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-800/10 to-indigo-600/20" /> */}
        
// //         <div className="container mx-auto px-4 text-center relative z-10">
// //             <motion.div
// //                 className="max-w-3xl mx-auto"
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.5 }}
// //             >
// //                 <motion.h1
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: 0.3, duration: 0.5 }}
// //                     className=" text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text
// //                     text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
// //                     Ready to <span className='gradient-text'>accelerate</span> your digital transformation?
// //                 </motion.h1>
// //                 <motion.p
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: 0.4, duration: 0.5 }}
// //                     className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
// //                     From web/mobile apps to AI-powered automation and custom APIs — our unified platform delivers everything you need to build smarter, faster, and better.
// //                 </motion.p>
// //                 <button
// //                     onClick={() => navigate("/contact")}
// //                     className="px-8 py-3 bg-cynerza-blue hover:bg-cynerza-blue/90 text-white font-medium rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg">
// //                     Start Building Today
// //                 </button>
// //             </motion.div>
// //         </div>
// //     </section>
// // </div>
// // </>
// //   );
// // };

// // export default Services;




// import React from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import SEO from '@/components/seo/SEO';
// import { getSEOData } from '@/components/seo/SEOConfig';
// import { ServiceSchema } from '@/components/seo/SchemaMarkup';

// // Service data with public image URLs for reliable display
// const services = [
//   {
//     title: 'SaaS Product Development',
//     link: "/services/saas-product-development",
//     description: 'Build scalable SaaS platforms with multi-tenant architecture, subscription billing, API integrations, and enterprise-grade security. From MVP to enterprise scale.',
//     imageUrl: "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399293.jpg?semt=ais_hybrid&w=740&q=80",
//   },
//   {
//     title: 'Custom LLM API Development',
//     link: "/services/custom-llm-api",
//     description: 'Build custom LLM-powered applications with OpenAI, Google Gemini, Claude, and open-source models. API integration, fine-tuning, and RAG implementation.',
//     imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: 'Automation Solutions',
//     link: "/services/automation-solutions",
//     description: 'Streamline operations with AI-powered automation: RPA, workflow builders, task automation, CRM integration, and intelligent chatbots.',
//     imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: 'AI & Machine Learning Solutions',
//     link: "/services/ai-ml-solution",
//     description: 'End-to-end AI/ML development: Custom model training, computer vision, NLP, predictive analytics, MLOps, and AI integration services.',
//     imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: 'Cloud & DevOps Engineering',
//     link: "/services/cloud-devops-engineering",
//     description: 'Expert cloud infrastructure and DevOps: CI/CD pipelines, Kubernetes, Docker, Infrastructure as Code, cloud migration, and monitoring solutions.',
//     imageUrl: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: 'IT Service Management',
//     link: "/services/it-service-management",
//     description: 'Comprehensive ITSM platforms: Helpdesk systems, ticketing, asset management, change management, and IT service automation.',
//     imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
//   },
// ];

// const Services: React.FC = () => {
//   const navigate = useNavigate();
//   const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

//   return (
//     <>
//       <SEO data={getSEOData('services')} />
//       <ServiceSchema />
//       <div className="relative pt-24 md:pt-28 w-full px-4 bg-gradient-to-br from-blue-600/20 via-blue-800/10 to-indigo-600/20  sm:px-6 lg:px-8 ">
//         {/* Purple gradient background overlay */}
//         {isDarkMode && (
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-800/10 to-indigo-600/20 z-5" />
//         )}

//         {/* Page Header */}
//         <div className="relative z-10 text-center max-w-4xl mx-auto mb-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cynerza-blue/5 dark:bg-cynerza-blue/10 border border-cynerza-blue/10 dark:border-cynerza-blue/20 text-cynerza-blue dark:text-cynerza-cyan-light text-sm font-medium mb-6"
//             >
//               <span>Our Expertise</span>
//               <span className="text-cynerza-blue/70 dark:text-cynerza-cyan-light/70">•</span>
//               <span>Services</span>
//             </motion.div>
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//               className="text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
//             >
//               Unified AI Platform <span className="gradient-text">Services</span>
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.5 }}
//               className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
//             >
//               Complete technology stack combining web/mobile development, automation, custom APIs, and multimodal AI — all accessible through one seamless ecosystem.
//             </motion.p>
//           </motion.div>
//         </div>

//         {/* Services Grid */}
//         <div className="relative z-10  mx-auto w-full    gap-8 ">
//           {services.map((service, idx) => (
//             <motion.div
            
//             key={idx}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1, duration: 0.5 }}
//               onClick={() => navigate(service.link)}
            
//               className="relative cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-150 sm:h-80 md:h-96 mt-4 w-full "
//             >
//             {/* Full-cover image */}
//               <motion.img
//                 src={service.imageUrl}
//                 alt={service.title}
//                 className=" w-1/2 h-full object-cover object-center  mb-4"
//                 loading="lazy"
//                 draggable={false}
//                  initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.8}}
//                 />
                

//               {/* Overlay with dark transparent layer for text readability */}
//               <div className="absolute inset-0  bg-opacity-50 z-10" />

//               {/* Text over image */}
//               <motion.div
//                initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//               className="absolute inset-0 mt-24 z-20 flex flex-col justify-start gap-2 items-end p-6 text-right">
//   <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2 drop-shadow-lg">
//     {service.title}
//   </h3>
//   <p className="text-white text-sm sm:text-base max-w-md drop-shadow-lg">
//     {service.description}
//   </p>
//   </motion.div>

//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <section className="relative pt-12 pb-20 ">
//           <div className="container mx-auto px-4 text-center relative z-10">
//             <motion.div
//               className="max-w-3xl mx-auto"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//                 className="text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
//               >
//                 Ready to <span className="gradient-text">accelerate</span> your digital transformation?
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.5 }}
//                 className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
//               >
//                 From web/mobile apps to AI-powered automation and custom APIs — our unified platform delivers everything you need to build smarter, faster, and better.
//               </motion.p>

//               <button
//                 onClick={() => navigate("/contact")}
//                 className="px-8 py-3 bg-cynerza-blue hover:bg-cynerza-blue/90 text-white font-medium rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
//               >
//                 Start Building Today
//               </button>
//             </motion.div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Services;

import { Link } from "react-router-dom";


import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SEO from '@/components/seo/SEO';
import { getSEOData } from '@/components/seo/SEOConfig';
import { ServiceSchema } from '@/components/seo/SchemaMarkup';


// Service data with public image URLs for reliable display
const services = [
  {
    title: 'SaaS Product Development',
    link: "/services/saas-product-development",
    description: 'Build scalable SaaS platforms with multi-tenant architecture, subscription billing, API integrations, and enterprise-grade security. From MVP to enterprise scale.',
    imageUrl: "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399293.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: 'Custom LLM API Development',
    link: "/services/custom-llm-api",
    description: 'Build custom LLM-powered applications with OpenAI, Google Gemini, Claude, and open-source models. API integration, fine-tuning, and RAG implementation.',
    imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: 'Automation Solutions',
    link: "/services/automation-solutions",
    description: 'Streamline operations with AI-powered automation: RPA, workflow builders, task automation, CRM integration, and intelligent chatbots.',
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: 'AI & Machine Learning Solutions',
    link: "/services/ai-ml-solution",
    description: 'End-to-end AI/ML development: Custom model training, computer vision, NLP, predictive analytics, MLOps, and AI integration services.',
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: 'Cloud & DevOps Engineering',
    link: "/services/cloud-devops-engineering",
    description: 'Expert cloud infrastructure and DevOps: CI/CD pipelines, Kubernetes, Docker, Infrastructure as Code, cloud migration, and monitoring solutions.',
    imageUrl: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: 'IT Service Management',
    link: "/services/it-service-management",
    description: 'Comprehensive ITSM platforms: Helpdesk systems, ticketing, asset management, change management, and IT service automation.',
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
];

const Services: React.FC = () => {
  const navigate = useNavigate();
  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

  return (
    <>
      <SEO data={getSEOData('services')} />
      <ServiceSchema />
      <div className="relative pt-24 md:pt-28 w-full  bg-gradient-to-br from-blue-600/20 via-blue-800/10 to-indigo-600/20   ">
        {/* Purple gradient background overlay */}
        {isDarkMode && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-800/10 to-indigo-600/20 z-5" />
        )}

        {/* Page Header */}
        <div className="relative z-10 text-center max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cynerza-blue/5 dark:bg-cynerza-blue/10 border border-cynerza-blue/10 dark:border-cynerza-blue/20 text-cynerza-blue dark:text-cynerza-cyan-light text-sm font-medium mb-6">

              <span>Our Expertise</span>
              <span className="text-cynerza-blue/70 dark:text-cynerza-cyan-light/70">•</span>
              <span>Services</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
            >
              Unified AI Platform <span className="gradient-text">Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Complete technology stack combining web/mobile development, automation, custom APIs, and multimodal AI — all accessible through one seamless ecosystem.
            </motion.p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="relative z-10 space-y-6 mx-auto w-full gap-8 ">
          {services.map((service, idx) => (
           <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative flex flex-col md:flex-row items-center justify-between gap-6 
                overflow-hidden shadow-md hover:shadow-xl rounded-xl 
                 backdrop-blur-lg
                ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}
              `}
            >
              {/* Full-cover image */}
              <motion.img
                src={service.imageUrl}
                alt={service.title}
                className=" w-1/2 h-full object-cover object-center rounded-tr-[80px] rounded-br-[8w0px] ml-4  mb-4"
                loading="lazy"
                draggable={false}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}

              />


              {/* Overlay with dark transparent layer for text readability */}
              <div className="absolute inset-0  bg-opacity-50 z-10 pointer-events-none" />

              {/* Text over image */}
              <motion.div
               
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                
                className={`w-full md:w-1/2 p-6 flex flex-col gap-4 
          ${idx % 2 !== 0 ? "text-left items-start" : "text-left items-start"}
        `}
>
                <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2 drop-shadow-lg">
                  {service.title}
                </h3>
                <p className="text-white text-sm sm:text-base max-w-md drop-shadow-lg">
                  {service.description}
                </p>
                 
                                 
                                <button
                                 type="button"
                             onClick={() => navigate(service.link)} 
                                        style={{ cursor: "pointer" }}
                                   className="mt-4 cursor-pointer bg-slate-600 hover:bg-blue-600 text-white font-medium py-2 px-5 rounded-lg 
                                               transition-all duration-300 shadow-[0_0_12px_rgba(59,130,246,0.35)] hover:shadow-[0_0_20px_rgba(59,130,246,0.55)] backdrop-blur-sm"
                                                         >
                                                             Learn More
                                                                </button>

                               

                      

              </motion.div>

            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="relative pt-12 pb-20 ">
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
                className="text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
              >
                Ready to <span className="gradient-text">accelerate</span> your digital transformation?
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                From web/mobile apps to AI-powered automation and custom APIs — our unified platform delivers everything you need to build smarter, faster, and better.
              </motion.p>

              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-3 bg-cynerza-blue hover:bg-cynerza-blue/90 text-white font-medium rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
              >
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