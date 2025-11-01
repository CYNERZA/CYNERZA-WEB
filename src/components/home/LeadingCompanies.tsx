import React from 'react';
import { SlidingLogoMarquee, SlidingLogoMarqueeItem } from "../lightswind/sliding-logo-marquee";
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const LeadingCompanies: React.FC = () => {
    const logos: SlidingLogoMarqueeItem[] = [
        {
            id: "1",
            content: <img
                src="/logo-square-256.png"
                alt="Partner Brand 1"
                className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain'
            />
        },
        {
            id: "2",
            content: <img
                src="/logo-square-256.png"
                alt="Partner Brand 2"
                className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain'
            />
        },
        {
            id: "3",
            content: <img
                src="/logo-square-256.png"
                alt="Partner Brand 3"
                className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain'
            />
        },
        {
            id: "4",
            content: <img
                src="/logo-square-256.png"
                alt="Partner Brand 4"
                className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain'
            />
        },
    ];
    const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);
    return (
        <section className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden">
            {/* Purple gradient background overlay */}
            {isDarkMode &&
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20 z-5" />
            }
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-clip-text 
                    text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                        Trusted by <span className="gradient-text">Leading Companies</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                        Empowering innovation and digital transformation for industry leaders
                    </p>
                </motion.div>

                {/* Logo Marquee - Centered */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center mb-8 sm:mb-12"
                >
                    <div className="w-full max-w-6xl">
                        <SlidingLogoMarquee
                            items={logos}
                            speed={20}
                            height="120px"
                            gap='4rem'
                            autoPlay={true}
                            enableBlur={true}
                            blurIntensity={2}
                            pauseOnHover={true}
                            showGridBackground={false}
                            className='w-full'
                            showControls={false}
                        />
                    </div>
                </motion.div>

                {/* Stats or Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
                >
                    {[
                        { label: "Companies", value: "50+" },
                        { label: "Projects", value: "200+" },
                        { label: "Countries", value: "15+" },
                        { label: "Satisfaction", value: "98%" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                                {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LeadingCompanies;
