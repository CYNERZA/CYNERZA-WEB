import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SEO from '@/components/seo/SEO';
import { getSEOData } from '@/components/seo/SEOConfig';
import { ServiceSchema } from '@/components/seo/SchemaMarkup';

const ITServiceManagementService: React.FC = () => {
    const navigate = useNavigate();

    const highlights = [
        {
            title: "IT Infrastructure Management",
            description: "Comprehensive management of your IT infrastructure including network administration, hardware maintenance, and system optimization for maximum efficiency. Our expert team ensures 24/7 reliability and performance across all your technology assets.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
            stats: "24/7 Monitoring"
        },
        {
            title: "System Monitoring & Maintenance",
            description: "Proactive monitoring and maintenance of your systems to prevent downtime, identify issues early, and ensure optimal performance across all platforms. Automated alerts and rapid response capabilities minimize business disruption.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            stats: "99.9% Uptime"
        }
    ];

    const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);
    return (
        <>
        <SEO data={getSEOData('itServiceManagement')} />
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
                        <source src="/it_managemant.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
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
                            IT Service Management
                            <br />
                            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                Solutions
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-2">
                            Ensure seamless IT operations with comprehensive service management solutions that maintain
                            system reliability, enhance security, and optimize performance.
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
                            Why Choose Our <span className="gradient-text">IT Service Management</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
                            We combine proven ITSM frameworks with cutting-edge technology to deliver
                            comprehensive IT service management solutions that ensure business continuity and operational excellence.
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
                                        <span>IT Excellence</span>
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
                                                {index === 0 ? '500+' : '15min'}
                                            </div>
                                            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                                {index === 0 ? 'Systems' : 'Response'}
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
                            <span className="gradient-text">Enterprise-Grade</span> ITSM Technology Stack
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
                            We leverage industry-leading ITSM platforms and monitoring tools to deliver comprehensive IT service management solutions.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                                alt="ITSM Technology Stack"
                                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl"
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
                            <div className="space-y-6 sm:space-y-8">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                                        ITIL-Based Service Management
                                    </h3>
                                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                                        Comprehensive ITIL framework implementation with incident management, problem resolution,
                                        change management, and service catalog automation for streamlined operations.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                                        Advanced Monitoring & Alerting
                                    </h3>
                                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                                        Real-time infrastructure monitoring with intelligent alerting, performance analytics,
                                        and automated remediation to prevent issues before they impact business operations.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                                        Service Desk Automation
                                    </h3>
                                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                                        Multi-channel service desk with AI-powered ticket routing, knowledge base integration,
                                        and automated workflows to enhance user experience and reduce resolution times.
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

export default ITServiceManagementService;
