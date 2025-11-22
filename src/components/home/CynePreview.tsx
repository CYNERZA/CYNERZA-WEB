import React from 'react';
import { IoTerminal, IoArrowForward } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const CyneCLISection: React.FC = () => {
    const handleNavigateToTools = () => {
        window.open('https://cyne.cynerza.com/', '_blank');
    };

    const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

    // Simple animation variants
    const fadeUp: any = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const fadeIn: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
            {/* Purple gradient background overlay */}
            {isDarkMode &&
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-800/10 to-indigo-600/20 z-5" />
            }
            {/* Content wrapper */}
            <div className="relative z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        {/* Left Side - Content */}
                        <div className="flex-1 text-left w-full lg:w-auto">

                            {/* Icon + Badge */}
                            <motion.div
                                className="flex items-center gap-3 mb-4 sm:mb-6"
                                variants={fadeIn}
                            >
                                <div className="inline-flex items-center justify-center bg-cynerza-blue w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cynerza-blue to-cynerza-blue rounded-xl flex-shrink-0">
                                    <IoTerminal className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <span className="text-xs sm:text-sm font-medium text-cynerza-blue bg-cynerza-blue/10 px-2 py-1 sm:px-3 sm:py-1 rounded-full whitespace-nowrap">
                                    Developer Tools
                                </span>
                            </motion.div>

                            {/* Main Heading */}
                            <motion.h2
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white leading-tight"
                                variants={fadeUp}
                            >
                                Professional CLI Tools
                                <br />
                                <span className="text-cynerza-blue">for Developers</span>
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed max-w-full lg:max-w-lg"
                                variants={fadeUp}
                            >
                                Streamline your development workflow with our powerful command-line interface.
                                Built by developers, for developers.
                            </motion.p>

                            {/* Features List */}
                            <motion.div
                                className="space-y-2 sm:space-y-3 mb-6 sm:mb-8"
                                variants={fadeUp}
                            >
                                {[
                                    "⚡ Lightning-fast project scaffolding",
                                    "🛠️ Advanced code generation tools",
                                    "🚀 Seamless deployment automation"
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="text-sm sm:text-base leading-relaxed">{feature}</span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Terminal Preview - Mobile Only */}
                            <motion.div
                                className="bg-gray-900 block lg:hidden dark:bg-black border border-gray-700 rounded-lg p-3 sm:p-4 w-full max-w-full overflow-x-auto"
                                variants={fadeUp}
                            >
                                <div className="font-mono text-xs sm:text-sm space-y-1 min-w-max">
                                    <div className="text-gray-400">$ cyne create-app my-project</div>
                                    <div className="text-green-400">✓ Project initialized</div>
                                    <div className="text-blue-400">🚀 Ready to code!</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side - CTA */}
                        <motion.div
                            className="flex-shrink-0 w-full lg:w-auto flex flex-col items-center lg:items-end"
                            variants={fadeUp}
                        >
                            {/* Terminal Preview - Desktop Only */}
                            <motion.div
                                className="bg-gray-900 hidden lg:block dark:bg-black border border-gray-700 rounded-lg p-4 mb-4 w-full max-w-xs"
                                variants={fadeUp}
                            >
                                <div className="font-mono text-sm space-y-1">
                                    <div className="text-gray-400">$ cyne create-app my-project</div>
                                    <div className="text-green-400">✓ Project initialized</div>
                                    <div className="text-blue-400">🚀 Ready to code!</div>
                                </div>
                            </motion.div>

                            {/* CTA Button */}
                            <motion.button
                                onClick={handleNavigateToTools}
                                className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-cynerza-blue bg-gradient-to-r from-cynerza-blue to-cynerza-blue text-white
                         text-base sm:text-lg font-semibold rounded-xl transition-all duration-300
                         hover:shadow-lg hover:shadow-cynerza-blue/30 inline-flex items-center justify-center space-x-2 sm:space-x-3 
                         focus:outline-none focus:ring-4 focus:ring-cynerza-blue/20 w-full sm:w-auto min-w-max"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="whitespace-nowrap">Explore CLI Tools</span>
                                <IoArrowForward className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </motion.button>

                            {/* Stats Below Button */}
                            <motion.div
                                className="mt-4 sm:mt-6 text-center lg:text-right space-y-2 w-full"
                                variants={fadeIn}
                            >
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    Trusted by 1000+ developers
                                </div>
                                <div className="flex justify-center lg:justify-end space-x-3 sm:space-x-4 text-xs text-gray-400 flex-wrap">
                                    <span className="whitespace-nowrap">✓ Free</span>
                                    <span className="whitespace-nowrap">✓ Open Source</span>
                                    <span className="whitespace-nowrap">✓ TypeScript</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>

    );
};

export default CyneCLISection;
