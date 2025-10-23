import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, BarChart3, Shield, Clock, ArrowRight, CheckCircle } from 'lucide-react';

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

  return (
    <div className="relative w-full">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20 z-0 pointer-events-none" />

      {/* Hero Section - Full Screen Image */}
      <section className="relative z-10 h-[60vh] min-h-[500px] max-h-[700px] flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80"
            alt="Capital Markets Trading"
            className="absolute top-0 left-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50" />
        </div>

        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-white">
              Capital Markets
              <br />
              <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Solutions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Our expertise in capital markets helps firms stay competitive in a fast-moving environment. We deliver solutions for trading platforms, risk management systems, and regulatory compliance that keep pace with market demands.
            </p>

          
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
              Capital Markets <span className="gradient-text">Challenges We Address</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              The capital markets industry demands speed, accuracy, and reliability. We provide cutting-edge solutions to help you navigate these complex challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="w-14 h-14 bg-cynerza-purple/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-cynerza-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {challenge.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
              Our <span className="gradient-text">Capital Markets Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed for capital markets firms to enhance trading performance, manage risk, and ensure regulatory compliance.
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
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cynerza-purple/10 border border-cynerza-purple/20 text-cynerza-purple text-sm font-medium mb-6">
                    <span>Capital Markets</span>
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
                    <button
                      onClick={() => navigate("/contact")}
                      className="bg-cynerza-purple hover:bg-cynerza-purple/90 text-white px-8 py-3 rounded-lg font-semibold transition-all"
                    >
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

                  <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cynerza-purple mb-1">
                        {index === 0 ? '<1ms' : '100+'}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
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

      {/* What We Do Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
              <span className="gradient-text">What We Do</span> for Capital Markets
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Specialized services tailored to the unique needs of capital markets firms and trading organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Approach Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
                alt="Capital Markets Technology"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-gray-900 dark:text-white">
                Our Approach to Capital Markets Technology
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cynerza-purple/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-cynerza-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Performance Optimization
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We architect high-performance systems with microsecond latency, leveraging cutting-edge technologies and best practices.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cynerza-purple/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-cynerza-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Regulatory Expertise
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Deep understanding of global regulations ensures your systems meet compliance requirements across all jurisdictions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cynerza-purple/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-cynerza-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      24/7 Reliability
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
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
  );
};

export default CapitalMarketsPage;
