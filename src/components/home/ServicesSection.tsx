// import React from 'react';
// import { Globe, Layers, Smartphone, Server, FileText } from 'lucide-react';
// import { motion } from 'framer-motion';


// const ServicesSection: React.FC = () => {


//   const services = [
//     {
//       title: 'Web Development',
//       description: 'High-performance websites, portals, and dashboards with SEO-ready, responsive, and scalable architecture. Tailored CMS and custom workflows for businesses.',
//       icon: <Globe className="w-8 h-8" />,
//       color: 'from-blue-400 to-indigo-600'
//     },
//     {
//       title: 'Mobile App Development',
//       description: 'Native Android/iOS and Flutter-based cross-platform apps. Real-time sync, offline support, and optimized performance for modern mobile experiences.',
//       icon: <Smartphone className="w-8 h-8" />,
//       color: 'from-green-400 to-emerald-600'
//     },
//     {
//       title: 'Business Automation',
//       description: 'AI-powered workflow builders, RPA, CRM integration, chatbots, and IoT-based automation pipelines. Automate tasks and boost productivity.',
//       icon: <Layers className="w-8 h-8" />,
//       color: 'from-cyan-400 to-pink-600'
//     },
//     {
//       title: 'Custom API Solutions',
//       description: 'REST and GraphQL APIs, token-based authentication, secure and version-controlled microservices. Built for easy integration and scale.',
//       icon: <Server className="w-8 h-8" />,
//       color: 'from-amber-400 to-orange-600'
//     },
//     {
//       title: 'Digital Marketing & Analytics',
//       description: 'AI-driven SEO, automated campaigns, analytics dashboards, and user tracking. Marketing automation with AI-generated content.',
//       icon: <FileText className="w-8 h-8" />,
//       color: 'from-cyan-400 to-blue-600'
//     },
//   ];

//   return (
//     <section className="relative py-8 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
//       { }
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.03)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.05)_0%,transparent_70%)]" />
//         <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-cynerza-blue/5 dark:bg-cynerza-blue/10 blur-3xl" />
//         <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-cynerza-blue/5 dark:bg-cynerza-blue/10 blur-3xl" />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="text-center max-w-4xl mx-auto mb-8">
//           <motion.div
//             className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cynerza-blue/5 dark:bg-cynerza-blue/10 border border-cynerza-blue/10 dark:border-cynerza-blue/20 text-cynerza-blue dark:text-cynerza-cyan-light text-sm font-medium mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <span>Our Expertise</span>
//             <span className="text-cynerza-blue/70 dark:text-cynerza-cyan-light/70">•</span>
//             <span>Services</span>
//           </motion.div>

//           <motion.h2
//             className="text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             Comprehensive Digital Solutions
//           </motion.h2>

//           <motion.p
//             className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Empowering your digital transformation with cutting-edge technologies and innovative solutions tailored to your business needs.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className="group relative"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.1,
//                 ease: [0.16, 1, 0.3, 1]
//               }}
//             >
//               <div className="absolute inset-0.5 bg-gradient-to-r from-cynerza-blue/5 to-cynerza-blue/5 dark:from-cynerza-blue/10 dark:to-cynerza-blue/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               <div className="relative h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 dark:border-gray-800 group-hover:border-cynerza-blue/20 dark:group-hover:border-cynerza-blue/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
//                 <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 bg-gradient-to-br ${service.color} text-white shadow-lg shadow-${service.color.split(' ')[1]}/20`}>
//                   {React.cloneElement(service.icon, { className: 'w-6 h-6' })}
//                 </div>
//                 <h3 className="text-2xl font-bold font-heading mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
//                   {service.description}
//                 </p>
//                 <div className="flex items-center text-cynerza-blue dark:text-cynerza-cyan-light font-medium group-hover:translate-x-1 transition-transform duration-300">
//                   <span className="mr-2">Learn more</span>
//                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           className="mt-5 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//         >
//           <div className="relative inline-flex group">
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-cynerza-blue to-cynerza-blue rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
//             <a
//               href="https://tools.cynerza.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="relative flex items-center px-5 py-5 bg-gradient-to-r from-cynerza-blue to-cynerza-blue text-white text-lg font-semibold rounded-xl transition-all
//                        duration-200 hover:shadow-lg hover:shadow-cynerza-blue/30
//                        bg-cynerza-blue hover:bg-cynerza-blue/90 h-12 "
//             >
//               <span>Explore All Services</span>
//               <svg className="w-5 h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//               </svg>
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;




import React from 'react';
import { Globe, Layers, Smartphone, Server, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { HoverEffect } from '../ui/card-hover-effect';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ServicesSection: React.FC = () => {

  const navigate = useNavigate()


  //   {
  //     title: 'Web Development',
  //     description: 'High-performance websites, portals, and dashboards with SEO-ready, responsive, and scalable architecture. Tailored CMS and custom workflows for businesses.',
  //     icon: <Globe className="w-8 h-8" />,
  //     color: 'from-blue-400 to-indigo-600'
  //   },
  //   {
  //     title: 'Mobile App Development',
  //     description: 'Native Android/iOS and Flutter-based cross-platform apps. Real-time sync, offline support, and optimized performance for modern mobile experiences.',
  //     icon: <Smartphone className="w-8 h-8" />,
  //     color: 'from-green-400 to-emerald-600'
  //   },
  //   {
  //     title: 'Business Automation',
  //     description: 'AI-powered workflow builders, RPA, CRM integration, chatbots, and IoT-based automation pipelines. Automate tasks and boost productivity.',
  //     icon: <Layers className="w-8 h-8" />,
  //     color: 'from-cyan-400 to-pink-600'
  //   },
  //   {
  //     title: 'Custom API Solutions',
  //     description: 'REST and GraphQL APIs, token-based authentication, secure and version-controlled microservices. Built for easy integration and scale.',
  //     icon: <Server className="w-8 h-8" />,
  //     color: 'from-amber-400 to-orange-600'
  //   },
  //   {
  //     title: 'Digital Marketing & Analytics',
  //     description: 'AI-driven SEO, automated campaigns, analytics dashboards, and user tracking. Marketing automation with AI-generated content.',
  //     icon: <FileText className="w-8 h-8" />,
  //     color: 'from-cyan-400 to-blue-600'
  //   },
  // ];


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

  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

  return (
    <section className="relative py-8 ">
      { }
 {/* Purple gradient background overlay */}
            {isDarkMode &&
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-800/10 to-indigo-600/20 z-5" />
            }
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.03)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.05)_0%,transparent_70%)]" />
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-cynerza-blue/5 dark:bg-cynerza-blue/10 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-cynerza-blue/5 dark:bg-cynerza-blue/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cynerza-blue/5 dark:bg-cynerza-blue/10 border border-cynerza-blue/10 dark:border-cynerza-blue/20 text-cynerza-blue dark:text-cynerza-cyan-light text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span>Our Expertise</span>
            <span className="text-cynerza-blue/70 dark:text-cynerza-cyan-light/70">•</span>
            <span>Services</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive Digital Solutions
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empowering your digital transformation with cutting-edge technologies and innovative solutions tailored to your business needs.
          </motion.p>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onClick={() => navigate(service.link)}
              className="relative cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-72 sm:h-80 md:h-96"
            >
              {/* Full-cover image */}
              <img
                src={service.imageUrl}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
                draggable={false}
              />

              {/* Overlay with dark transparent layer for text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

              {/* Text over image */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-6 text-center">
                <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2 drop-shadow-lg">{service.title}</h3>
                <p className="text-white text-sm sm:text-base max-w-md drop-shadow-lg">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative inline-flex group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cynerza-blue to-cynerza-blue rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <Link
              to="./services"
              className="relative flex items-center px-5 py-5 bg-gradient-to-r from-cynerza-blue to-cynerza-blue text-white text-lg font-semibold rounded-xl transition-all
                       duration-200 hover:shadow-lg hover:shadow-cynerza-blue/30
                       bg-cynerza-blue hover:bg-cynerza-blue/90 h-12 "
            >
              <span>Explore All Services</span>
              <svg className="w-5 h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
