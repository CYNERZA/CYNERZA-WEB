import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Plane, Truck, MapPin, PackageCheck, ArrowRight, CheckCircle } from 'lucide-react';

const TravelLogisticsPage: React.FC = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      title: "Smart Booking & Reservation Systems",
      description: "Build comprehensive booking platforms for travel and transportation services with real-time availability, dynamic pricing, multi-channel distribution, and seamless payment processing. Our solutions handle high-volume reservations across flights, hotels, car rentals, and tours while providing travelers with intuitive booking experiences and instant confirmations.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80",
      stats: "1M+ Bookings/Month"
    },
    {
      title: "Fleet & Route Optimization",
      description: "Maximize operational efficiency with AI-powered fleet management and route optimization systems. Our solutions provide real-time vehicle tracking, predictive maintenance, fuel optimization, driver management, and intelligent routing that considers traffic, weather, and delivery windows to reduce costs and improve delivery times.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80",
      stats: "30% Cost Savings"
    }
  ];

  const challenges = [
    {
      icon: Plane,
      title: "Travel Operations",
      description: "Managing complex booking workflows and providing seamless customer experiences"
    },
    {
      icon: Truck,
      title: "Fleet Management",
      description: "Optimizing vehicle utilization and reducing operational costs"
    },
    {
      icon: MapPin,
      title: "Route Efficiency",
      description: "Planning optimal routes while adapting to real-time conditions"
    },
    {
      icon: PackageCheck,
      title: "Supply Chain Visibility",
      description: "Tracking shipments and inventory across complex global networks"
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
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80"
            alt="Travel and Logistics"
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
              Travel & Logistics
              <br />
              <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Technology Solutions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Moving people and goods efficiently requires smart technology. We create solutions for booking systems, fleet management, route optimization, and supply chain visibility that keep the world moving.
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
              Travel & Logistics <span className="gradient-text">Challenges We Solve</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              The travel and logistics industry demands speed, accuracy, and adaptability. We provide technology solutions that optimize operations and enhance customer experiences.
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
              Our <span className="gradient-text">Travel & Logistics Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions for airlines, travel agencies, freight companies, and supply chain operators to optimize operations and deliver exceptional service.
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
                    <span>Smart Logistics</span>
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
                        {index === 0 ? '99.9%' : '25%'}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {index === 0 ? 'Uptime' : 'Fuel Savings'}
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
              <span className="gradient-text">What We Do</span> for Travel & Logistics
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Technology solutions for airlines, shipping companies, freight forwarders, and travel service providers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Transportation Management Systems",
                desc: "Comprehensive TMS platforms for freight booking, carrier management, load optimization, shipment tracking, and automated documentation to streamline logistics operations.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Travel Booking Platforms",
                desc: "End-to-end reservation systems for flights, hotels, car rentals, and packages with real-time inventory, dynamic pricing, and multi-channel distribution capabilities.",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Warehouse Management Systems",
                desc: "Smart warehouse solutions with inventory tracking, order fulfillment automation, barcode scanning, and integration with shipping carriers for efficient operations.",
                image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Real-Time Tracking & Visibility",
                desc: "IoT-enabled tracking solutions providing live shipment locations, condition monitoring, predictive ETAs, and automated notifications for complete supply chain transparency.",
                image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "AI-Powered Route Optimization",
                desc: "Machine learning algorithms that optimize delivery routes considering traffic, weather, fuel costs, delivery windows, and vehicle capacity for maximum efficiency.",
                image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Predictive Analytics & Forecasting",
                desc: "Advanced analytics platforms for demand forecasting, capacity planning, maintenance prediction, and operational insights to make data-driven decisions.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
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
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1600&q=80"
                alt="Logistics Technology"
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
                Our Approach to Travel & Logistics Technology
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cynerza-purple/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-cynerza-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Real-Time Intelligence
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      IoT sensors, GPS tracking, and live data streams provide real-time visibility into operations, shipments, and vehicles for instant decision-making.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cynerza-purple/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-cynerza-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      AI & Machine Learning
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Advanced algorithms optimize routes, predict demand, automate workflows, and continuously learn from operational data to improve efficiency.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cynerza-purple/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-cynerza-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Seamless Integration
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Cloud-based platforms that integrate with existing systems, carriers, suppliers, and partners to create unified, end-to-end visibility.
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

export default TravelLogisticsPage;
