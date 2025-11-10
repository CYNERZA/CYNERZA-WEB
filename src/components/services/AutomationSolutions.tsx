import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SEO from '@/components/seo/SEO';
import { getSEOData } from '@/components/seo/SEOConfig';
import { ServiceSchema } from '@/components/seo/SchemaMarkup';

const AutomationSolutionsService: React.FC = () => {
    const navigate = useNavigate();

    const highlights = [
        {
            title: "Process Automation & Workflows",
            description: "Streamline your business operations with intelligent workflow automation, reducing manual tasks and increasing operational efficiency. Our solutions eliminate bottlenecks and accelerate business processes across all departments.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            stats: "80% Efficiency"
        },
        {
            title: "Robotic Process Automation (RPA)",
            description: "Deploy software robots to automate repetitive tasks, data entry, and rule-based processes across multiple applications and systems. Transform your workforce productivity with intelligent automation.",
            image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80",
            stats: "24/7 Operations"
        }
    ];

    const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);
    return (
        <>
        <SEO data={getSEOData('automationSolutions')} />
        <ServiceSchema />
        <div className="relative w-full overflow-x-hidden">
 {/* Purple gradient background overlay */}
            {isDarkMode &&
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-800/10 to-indigo-600/20 z-5" />
            }            
            {/* Hero Video Section - Responsive Height */}
            <section className="relative z-10 h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] max-h-[700px] flex items-center justify-center overflow-hidden w-full">
                {/* Background Video Container */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
                    >
                        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                        <iframe 
                            src="https://www.youtube.com/embed/uCUgdYviUi4?autoplay=1&mute=1&loop=1&playlist=uCUgdYviUi4&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=0"
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            title="Business Process Automation Overview"
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
                
                {/* Hero Content Overlay - Responsive Text */}
                <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 sm:mb-6 text-white leading-tight">
                            Automation Solutions
                            <br />
                            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                & Services
                            </span>
                        </h1>
                        
                        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-2">
                            Transform your business operations with intelligent automation solutions that eliminate 
                            manual tasks, reduce errors, and accelerate growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Section - Responsive Padding */}
            <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12 sm:mb-16 md:mb-20"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 px-2">
                            Why Choose Our <span className="gradient-text">Automation Solutions</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
                            We combine cutting-edge automation technology with industry expertise to deliver 
                            intelligent solutions that transform your business operations and drive efficiency.
                        </p>
                    </motion.div>

                    {/* Highlight Cards - Responsive Grid */}
                    <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center ${
                                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                                }`}
                            >
                                {/* Text Content */}
                                <div className={`order-1 ${index % 2 === 1 ? 'lg:col-start-2 lg:order-2' : 'lg:order-1'}`}>
                                    <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full bg-cynerza-blue/10 border border-cynerza-blue/20 text-cynerza-blue text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                                        <span>Smart Solutions</span>
                                        <span className="text-cynerza-blue/70">•</span>
                                        <span>{highlight.stats}</span>
                                    </div>
                                    
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-4 sm:mb-6 text-gray-900 dark:text-white">
                                        {highlight.title}
                                    </h3>
                                    
                                    <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                                        {highlight.description}
                                    </p>
                                    
                                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                                        <button className="bg-cynerza-blue hover:bg-cynerza-blue/90 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all w-full sm:w-auto">
                                            Learn More
                                        </button>
                                        <button className="border border-cynerza-blue text-cynerza-blue hover:bg-cynerza-blue/5 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all w-full sm:w-auto">
                                            View Demo
                                        </button>
                                    </div>
                                </div>
                                
                                {/* Image Content */}
                                <div className={`relative order-2 ${index % 2 === 1 ? 'lg:col-start-1 lg:order-1' : 'lg:order-2'}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl"
                                    >
                                        <img 
                                            src={highlight.image} 
                                            alt={highlight.title}
                                            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    </motion.div>
                                    
                                    {/* Floating Stats Card - Hidden on very small screens */}
                                    <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                                        <div className="text-center">
                                            <div className="text-xl sm:text-2xl font-bold text-cynerza-blue mb-1">
                                                {index === 0 ? '200+' : '99.9%'}
                                            </div>
                                            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                                {index === 0 ? 'Processes' : 'Accuracy'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack Section - Responsive */}
            <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-10 sm:mb-12 md:mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 px-2">
                            <span className="gradient-text">Advanced Automation</span> Technology Stack
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
                            We leverage industry-leading automation platforms and AI technologies to deliver robust, scalable automation solutions.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2825&q=80"
                                alt="Automation Technology Stack"
                                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl"
                                loading="lazy"
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
                                }}
                            />
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="space-y-6 sm:space-y-8">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                                        Intelligent Process Mining
                                    </h3>
                                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                                        Advanced process discovery and analysis tools that identify automation opportunities 
                                        and optimize workflows for maximum efficiency.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                                        RPA & AI Integration
                                    </h3>
                                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                                        Combine Robotic Process Automation with artificial intelligence and machine learning 
                                        for cognitive automation capabilities.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                                        Cloud-Native Architecture
                                    </h3>
                                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                                        Scalable cloud infrastructure with enterprise-grade security, monitoring, 
                                        and management capabilities for mission-critical automation.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default AutomationSolutionsService;
