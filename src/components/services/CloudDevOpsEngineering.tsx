

// import React from 'react';
// import { motion } from 'framer-motion';
// import { HoverEffect } from "../ui/card-hover-effect";
// import { useNavigate } from 'react-router-dom';

// const Services: React.FC = () => {
//     const navigate = useNavigate()
//     const services = [
//         {
//             title: 'Cloud Migration Strategies',
//             //   link: "/saas-product-development",
//             description: 'Seamlessly migrate your applications and infrastructure to cloud platforms with minimal downtime and maximum efficiency using proven migration methodologies.',
//         },
//         {
//             title: 'Infrastructure as Code (IaC)',
//             //   link: "/custom-llm-api",
//             description: 'Automate infrastructure provisioning and management using tools like Terraform, CloudFormation, and Ansible for consistent and scalable deployments.',
//         },
//         {
//             title: 'CI/CD Pipeline Setup',
//             // link: "/automation-solutions",
//             description: 'Implement robust continuous integration and deployment pipelines that automate testing, building, and deployment processes for faster software delivery.',
//         },
//         {
//             title: 'Container Orchestration (Docker, Kubernetes)',
//             // link: "/ai-ml-solution",
//             description: 'Deploy and manage containerized applications at scale using Docker and Kubernetes for improved resource utilization and application portability.',
//         },
//         {
//             title: 'Monitoring & Logging Solutions',
//             // link: "/cloud-devops-engineering",
//             description: 'Implement comprehensive monitoring, alerting, and logging systems to ensure optimal performance, quick issue resolution, and system observability.',
//         },
//         {
//             title: 'Security Best Practices',
//             description: 'Integrate security throughout the development lifecycle with automated security scanning, compliance monitoring, and infrastructure hardening.',
//         },
//         {
//             title: 'Cost Optimization',
//             description: 'Optimize cloud spending through resource rightsizing, reserved instances, auto-scaling, and continuous cost monitoring and analysis.',
//         },
//         {
//             title: '24/7 Infrastructure Support',
//             description: 'Provide round-the-clock infrastructure monitoring, maintenance, and support to ensure maximum uptime and rapid incident response.',
//         }
//     ];

//     return (
//         <div className="relative pt-24 md:pt-28 w-full px-4 sm:px-6 lg:px-8">
//             {/* Purple gradient background overlay */}
//             <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20 z-0" />
//             {/* Content wrapper */}
//             <div className="relative z-10">
//                 <div className="text-center max-w-4xl mx-auto mb-4">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <motion.div
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ delay: 0.2, duration: 0.5 }}
//                             className='inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cynerza-purple/5 dark:bg-cynerza-purple/10 border border-cynerza-purple/10 dark:border-cynerza-purple/20
//                      text-cynerza-purple dark:text-cynerza-purple-light text-sm font-medium mb-6'
//                         >
//                             <span>Infrastructure Excellence</span>
//                             <span className="text-cynerza-purple/70 dark:text-cynerza-purple-light/70">•</span>
//                             <span>DevOps</span>
//                         </motion.div>
//                         <motion.h2
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.3, duration: 0.5 }}
//                             className=" text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text
//                     text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
//                             Our <span className='gradient-text'>Cloud & DevOps</span> Engineering
//                         </motion.h2>
//                         <motion.p
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.4, duration: 0.5 }}
//                             className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
//                             Accelerate your digital transformation with modern cloud infrastructure, automated DevOps practices, and scalable solutions that ensure reliability, security, and optimal performance.
//                         </motion.p>
//                     </motion.div>
//                 </div>
//                 <div className="max-w-7xl mx-auto">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 20 }}
//                         transition={{ duration: 0.3, delay: 1 * 0.05 }}
//                         layout
//                         className="p-6 rounded-lg">
//                         <HoverEffect
//                             items={services}
//                             className=''
//                         // isLink
//                         />
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Services;




import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CloudDevOpsService: React.FC = () => {
    const navigate = useNavigate();

    const highlights = [
        {
            title: "Cloud Migration Strategies",
            description: "Seamlessly migrate your applications and infrastructure to cloud platforms with minimal downtime and maximum efficiency using proven migration methodologies. Our expert team ensures secure, scalable, and cost-effective cloud transitions.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            stats: "Zero Downtime"
        },
        {
            title: "CI/CD Pipeline Setup",
            description: "Implement robust continuous integration and deployment pipelines that automate testing, building, and deployment processes for faster software delivery. Accelerate development cycles with automated workflows and quality gates.",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2825&q=80",
            stats: "10x Faster"
        }
    ];

    return (
        <div className="relative w-full">
            {/* Background Overlay - Same as original */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20 z-0" />
            
            {/* Hero Video Section - Full Width */}
            <section className="relative z-10 h-[60vh] min-h-[500px] max-h-[700px] flex items-center justify-center overflow-hidden w-full">
                {/* Background Video - Full Width */}
                <div className="absolute inset-0 w-full h-full">
                    <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        style={{
                            width: '100vw',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    >
                        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                        {/* Fallback iframe for browsers that don't support video */}
                        <iframe 
                            src="https://www.youtube.com/embed/RwIhQg7Gxz0?autoplay=1&mute=1&loop=1&playlist=RwIhQg7Gxz0&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=0"
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            title="DevOps Full Course 2025"
                            style={{
                                width: '100vw',
                                height: '100%',
                                border: 'none',
                                margin: 0,
                                padding: 0
                            }}
                        />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50" />
                </div>
                
                {/* Hero Content Overlay */}
                <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-white">
                            Cloud & DevOps
                            <br />
                            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                Engineering
                            </span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                            Accelerate your digital transformation with modern cloud infrastructure, automated DevOps practices, 
                            and scalable solutions that ensure reliability and security.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-cynerza-purple hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl">
                                Start Migration
                            </button>
                            <button className="border-2 border-white text-white hover:bg-white hover:text-cynerza-purple px-8 py-3 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm">
                                View Infrastructure
                            </button>
                        </div>
                    </motion.div>
                </div>
                
               
            </section>

            {/* Main Content Section */}
            <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                            Why Choose Our <span className="gradient-text">Cloud & DevOps Engineering</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            We combine cutting-edge cloud technologies with proven DevOps practices to deliver 
                            scalable, secure, and efficient infrastructure solutions that accelerate your business growth.
                        </p>
                    </motion.div>

                    {/* Highlight Cards */}
                    <div className="space-y-32">
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={`grid lg:grid-cols-2 gap-16 items-center ${
                                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                                }`}
                            >
                                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cynerza-purple/10 border border-cynerza-purple/20 text-cynerza-purple text-sm font-medium mb-6">
                                        <span>Infrastructure Excellence</span>
                                        <span className="text-cynerza-purple/70">•</span>
                                        <span>{highlight.stats}</span>
                                    </div>
                                    
                                    <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-gray-900 dark:text-white">
                                        {highlight.title}
                                    </h3>
                                    
                                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                        {highlight.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-4">
                                        <button className="bg-cynerza-purple hover:bg-cynerza-purple/90 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                                            Learn More
                                        </button>
                                        <button className="border border-cynerza-purple text-cynerza-purple hover:bg-cynerza-purple/5 px-8 py-3 rounded-lg font-semibold transition-all">
                                            View Demo
                                        </button>
                                    </div>
                                </div>
                                
                                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative rounded-2xl overflow-hidden shadow-2xl"
                                    >
                                        <img 
                                            src={highlight.image} 
                                            alt={highlight.title}
                                            className="w-full h-[400px] object-cover"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    </motion.div>
                                    
                                    {/* Floating Stats Card */}
                                    <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-cynerza-purple mb-1">
                                                {index === 0 ? '99.9%' : '24/7'}
                                            </div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                                {index === 0 ? 'Uptime' : 'Support'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack Section */}
            <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                            <span className="gradient-text">Enterprise-Grade</span> Cloud & DevOps Stack
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            We leverage industry-leading cloud platforms and DevOps tools to deliver robust, scalable, and secure infrastructure solutions.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
                                alt="Cloud & DevOps Technology Stack"
                                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                                loading="lazy"
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2825&q=80";
                                }}
                            />
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                        Container Orchestration
                                    </h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                                        Deploy and manage containerized applications at scale using Docker and Kubernetes 
                                        for improved resource utilization, portability, and automated scaling.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                        Infrastructure as Code
                                    </h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                                        Automate infrastructure provisioning and management using tools like Terraform, 
                                        CloudFormation, and Ansible for consistent and reproducible deployments.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                        Monitoring & Observability
                                    </h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-400">
                                        Implement comprehensive monitoring, alerting, and logging systems to ensure optimal performance, 
                                        quick issue resolution, and complete system observability.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CloudDevOpsService;
