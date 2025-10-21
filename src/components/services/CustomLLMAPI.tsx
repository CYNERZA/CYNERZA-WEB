

// import React from 'react';
// import { motion } from 'framer-motion';
// import { HoverEffect } from "../ui/card-hover-effect";
// import { useNavigate } from 'react-router-dom';

// const Services: React.FC = () => {
//     const navigate = useNavigate()
//     const services = [
//         {
//             title: 'Custom Large Language Model APIs',
//             //   link: "/saas-product-development",
//             description: 'Build and deploy custom LLM APIs tailored to your specific domain, with fine-tuned models for enhanced accuracy and relevance.',
//         },
//         {
//             title: 'Content Generation APIs',
//             //   link: "/custom-llm-api",
//             description: 'Automated content creation services for blogs, marketing copy, product descriptions, and creative writing with AI-powered generation.',
//         },
//         {
//             title: 'Multi-Language Support',
//             // link: "/automation-solutions",
//             description: 'Comprehensive language processing capabilities supporting 100+ languages for translation, localization, and cross-cultural communication.',
//         },
//         {
//             title: 'Scalable API Infrastructure',
//             // link: "/ai-ml-solution",
//             description: 'Enterprise-grade API infrastructure with load balancing, auto-scaling, and high availability for mission-critical applications.',
//         },
//         {
//             title: 'Performance Optimization',
//             // link: "/cloud-devops-engineering",
//             description: 'Advanced optimization techniques including model compression, caching strategies, and response time improvements for faster API performance.',
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
//                             <span>AI Innovation</span>
//                             <span className="text-cynerza-purple/70 dark:text-cynerza-purple-light/70">•</span>
//                             <span>LLM Services</span>
//                         </motion.div>
//                         <motion.h2
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.3, duration: 0.5 }}
//                             className=" text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text
//                     text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
//                             Our Custom<span className='gradient-text'> LLM API</span>
//                         </motion.h2>
//                         <motion.p
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.4, duration: 0.5 }}
//                             className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
//                             Unlock the power of artificial intelligence with our advanced Large Language Model APIs, designed to revolutionize content creation, communication, and automation for your business.
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

const CustomLLMAPIService: React.FC = () => {
    const navigate = useNavigate();

    const highlights = [
        {
            title: "Custom Large Language Model APIs",
            description: "Build and deploy custom LLM APIs tailored to your specific domain, with fine-tuned models for enhanced accuracy and relevance. Our enterprise-grade infrastructure ensures scalable and reliable AI solutions.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
            stats: "100+ Models"
        },
        {
            title: "Multi-Language Processing Capabilities",
            description: "Comprehensive language processing supporting 100+ languages for translation, localization, and cross-cultural communication. Advanced NLP algorithms ensure accurate understanding and generation across diverse linguistic contexts.",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
            stats: "100+ Languages"
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
                            src="https://www.youtube.com/embed/cy6EAp4iNN4?autoplay=1&mute=1&loop=1&playlist=cy6EAp4iNN4&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=0"
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="LLM API Development"
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
                            Custom LLM API
                            <br />
                            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                Development
                            </span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                            Unlock the power of artificial intelligence with our advanced Large Language Model APIs, 
                            designed to revolutionize content creation and automation.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-cynerza-purple hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl">
                                Start Your Project
                            </button>
                            <button className="border-2 border-white text-white hover:bg-white hover:text-cynerza-purple px-8 py-3 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm">
                                Try API Demo
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
                            Why Choose Our <span className="gradient-text">LLM API Services</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            We combine cutting-edge AI technology with robust infrastructure to deliver 
                            Large Language Model APIs that transform how businesses create content and automate processes.
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
                                        <span>AI Innovation</span>
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
                                            Try API
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
                                                {index === 0 ? '50M+' : '99.9%'}
                                            </div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                                {index === 0 ? 'API Calls' : 'Accuracy'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack Section - Fixed Image */}
            <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                            <span className="gradient-text">Advanced AI</span> Technology Stack
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            We leverage state-of-the-art machine learning frameworks and neural architectures to deliver powerful LLM solutions.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2825&q=80"
                                alt="AI Technology Stack"
                                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                                loading="lazy"
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
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
                                        Transformer Architecture
                                    </h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                                        Built on the latest transformer models including GPT, BERT, and T5 architectures, 
                                        optimized for various NLP tasks and use cases.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                        Fine-tuning & Customization
                                    </h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                                        Domain-specific fine-tuning on your data to achieve superior performance 
                                        and accuracy for specialized applications.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                        Scalable Infrastructure
                                    </h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-400">
                                        High-performance GPU clusters with auto-scaling capabilities to handle 
                                        millions of API requests with minimal latency.
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

export default CustomLLMAPIService;
