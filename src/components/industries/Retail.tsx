import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Package, Users, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const RetailPage: React.FC = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      title: "Omnichannel E-commerce Platforms",
      description: "Create seamless shopping experiences that connect online and offline channels. Our e-commerce solutions feature responsive storefronts, mobile apps, unified shopping carts, and real-time inventory synchronization that let customers shop however they prefer while maintaining consistent brand experiences across all touchpoints.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=2000&q=80",
      stats: "300% Sales Growth"
    },
    {
      title: "Smart Inventory Management",
      description: "Optimize stock levels and reduce costs with intelligent inventory systems powered by AI and real-time data. Our solutions provide demand forecasting, automated replenishment, multi-location tracking, and warehouse optimization that ensure products are always available when and where customers need them.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2000&q=80",
      stats: "40% Cost Reduction"
    }
  ];

  const challenges = [
    {
      icon: ShoppingBag,
      title: "Customer Experience",
      description: "Creating personalized, engaging shopping experiences across all channels"
    },
    {
      icon: Package,
      title: "Inventory Optimization",
      description: "Balancing stock levels to meet demand without tying up capital"
    },
    {
      icon: Users,
      title: "Customer Loyalty",
      description: "Building lasting relationships and repeat purchases in competitive markets"
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Decisions",
      description: "Leveraging analytics to understand customer behavior and market trends"
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
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80"
            alt="Retail Technology"
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
              Retail Technology
              <br />
              <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Solutions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Retail is about creating experiences. We help retailers bridge online and offline worlds with e-commerce platforms, inventory management, and customer engagement tools that drive sales and loyalty.
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
              Retail <span className="gradient-text">Challenges We Solve</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Modern retail demands innovative technology to meet changing customer expectations and stay competitive. We provide solutions designed for today's retail landscape.
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
              Our <span className="gradient-text">Retail Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              End-to-end retail technology solutions that connect online and offline experiences, optimize operations, and build lasting customer relationships.
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
                    <span>Retail Innovation</span>
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
                        {index === 0 ? '24/7' : '98%'}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {index === 0 ? 'Availability' : 'Accuracy'}
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
              <span className="gradient-text">What We Do</span> for Retail
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive retail technology solutions for brick-and-mortar stores, e-commerce businesses, and omnichannel retailers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platforms",
                desc: "Build feature-rich online stores with product catalogs, shopping carts, payment gateways, and order management for seamless digital commerce experiences.",
                image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Point of Sale Systems",
                desc: "Modern POS solutions with inventory sync, customer data capture, payment processing, and real-time reporting for efficient in-store operations.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Customer Loyalty Programs",
                desc: "Engage customers with rewards programs, personalized offers, gamification, and multi-tier memberships that encourage repeat purchases and brand advocacy.",
                image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Inventory & Supply Chain",
                desc: "Real-time inventory tracking, automated replenishment, supplier management, and warehouse optimization to reduce costs and prevent stockouts.",
                image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Customer Analytics & Insights",
                desc: "Advanced analytics platforms that track customer behavior, purchase patterns, and preferences to drive personalized marketing and merchandising strategies.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Mobile Shopping Apps",
                desc: "Native iOS and Android apps with personalized experiences, push notifications, mobile payments, and augmented reality features for immersive shopping.",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
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
                src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=1600&q=80"
                alt="Retail Technology"
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
                Our Approach to Retail Technology
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cynerza-purple/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-cynerza-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Omnichannel Excellence
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Unified commerce platforms that connect online stores, mobile apps, physical locations, and social commerce for consistent customer experiences.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cynerza-purple/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-cynerza-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      AI-Powered Personalization
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Machine learning algorithms that deliver personalized product recommendations, dynamic pricing, and targeted marketing campaigns.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cynerza-purple/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-cynerza-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Scalable Infrastructure
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Cloud-based solutions that handle peak traffic, scale with your business growth, and integrate seamlessly with existing systems.
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

export default RetailPage;
