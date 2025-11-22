import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, BarChart3, Shield, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { useSelector } from 'react-redux';
import SEO from '@/components/seo/SEO';
import { getSEOData } from '@/components/seo/SEOConfig';

const CapitalMarketsPage: React.FC = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      title: "Advanced Trading Platforms",
      description: "Build high-performance trading systems with low-latency execution, real-time market data integration, and advanced order management. Our solutions support multiple asset classes and provide traders with the tools they need to make split-second decisions.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2000&q=80",
      stats: "99.99% Uptime"
    },
    {
      title: "Risk Management Systems",
      description: "Implement comprehensive risk analytics and monitoring solutions that provide real-time exposure tracking, scenario analysis, and compliance reporting. Protect your firm with intelligent risk controls and automated alerts.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80",
      stats: "Real-time Analytics"
    }
  ];

  const challenges = [
    {
      icon: TrendingUp,
      title: "Market Volatility",
      description: "Managing rapid market changes and ensuring system stability during high-volume periods"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Processing massive volumes of market data for informed trading decisions"
    },
    {
      icon: Shield,
      title: "Regulatory Requirements",
      description: "Meeting complex compliance standards across multiple jurisdictions"
    },
    {
      icon: Clock,
      title: "Low Latency Demands",
      description: "Delivering ultra-fast execution speeds critical for competitive advantage"
    }
  ];

  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

  return (
    <>
    <SEO data={getSEOData('capitalMarkets')} />
    <div className="relative w-full overflow-x-hidden">
 {/* Purple gradient background overlay */}
            {isDarkMode &&
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-800/10 to-indigo-600/20 z-5" />
            }
      {/* Hero Section - Responsive Height */}
      <section className="relative z-10 h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] max-h-[700px] flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80"
            alt="Capital Markets Trading"
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50" />
        </div>

        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 sm:mb-6 text-white leading-tight">
              Capital Markets
              <br />
              <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Solutions
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-2">
              Our expertise in capital markets helps firms stay competitive in a fast-moving environment. We deliver solutions for trading platforms, risk management systems, and regulatory compliance that keep pace with market demands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section - Responsive Grid */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 px-2">
              Capital Markets <span className="gradient-text">Challenges We Address</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
              The capital markets industry demands speed, accuracy, and reliability. We provide cutting-edge solutions to help you navigate these complex challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cynerza-blue/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-cynerza-blue" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {challenge.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Section - Responsive */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 px-2">
              Our <span className="gradient-text">Capital Markets Solutions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
              Comprehensive technology solutions designed for capital markets firms to enhance trading performance, manage risk, and ensure regulatory compliance.
            </p>
          </motion.div>

          {/* Highlight Cards - Responsive */}
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
                <div className={`order-1 ${index % 2 === 1 ? 'lg:col-start-2 lg:order-2' : 'lg:order-1'}`}>
                  <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full bg-cynerza-blue/10 border border-cynerza-blue/20 text-cynerza-blue text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                    <span>Capital Markets</span>
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
                    <button
                      onClick={() => navigate("/contact")}
                      className="bg-cynerza-blue hover:bg-cynerza-blue/90 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all w-full sm:w-auto"
                    >
                      Learn More
                    </button>
                    <button className="border border-cynerza-blue text-cynerza-blue hover:bg-cynerza-blue/5 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all w-full sm:w-auto">
                      View Demo
                    </button>
                  </div>
                </div>

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

                  <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-cynerza-blue mb-1">
                        {index === 0 ? '<1ms' : '100+'}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        {index === 0 ? 'Latency' : 'Asset Classes'}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section - Responsive Grid */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 px-2">
              <span className="gradient-text">What We Do</span> for Capital Markets
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
              Specialized services tailored to the unique needs of capital markets firms and trading organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Electronic Trading Systems",
                desc: "Develop ultra-low latency trading platforms with advanced order routing, algorithmic trading capabilities, and real-time market connectivity.",
                image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Risk Analytics & Reporting",
                desc: "Implement comprehensive risk management frameworks with real-time exposure monitoring, VaR calculations, and stress testing capabilities.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Market Data Integration",
                desc: "Connect to multiple data providers, normalize feeds, and deliver real-time market information with advanced data quality controls.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Compliance & Surveillance",
                desc: "Automated compliance monitoring, trade surveillance, and regulatory reporting systems to meet MiFID II, Dodd-Frank, and other requirements.",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Post-Trade Processing",
                desc: "Streamline clearing, settlement, and reconciliation processes with automated workflows and exception handling.",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Portfolio Management",
                desc: "Build sophisticated portfolio analytics, performance attribution, and rebalancing tools for institutional asset managers.",
                image: "https://images.unsplash.com/photo-1554224311-beee4ece8c90?auto=format&fit=crop&w=800&q=80"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Approach Section - Responsive */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
                alt="Capital Markets Technology"
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-4 sm:mb-6 text-gray-900 dark:text-white">
                Our Approach to Capital Markets Technology
              </h2>
              <div className="space-y-5 sm:space-y-6">
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-cynerza-blue/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cynerza-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      Performance Optimization
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      We architect high-performance systems with microsecond latency, leveraging cutting-edge technologies and best practices.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-cynerza-blue/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cynerza-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      Regulatory Expertise
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      Deep understanding of global regulations ensures your systems meet compliance requirements across all jurisdictions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-cynerza-blue/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cynerza-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      24/7 Reliability
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      Mission-critical systems with redundancy, failover capabilities, and continuous monitoring to ensure uninterrupted operations.
                    </p>
                  </div>
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

export default CapitalMarketsPage;
