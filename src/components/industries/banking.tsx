import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Building2, Shield, Lock, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';


const BankingServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      title: "Legacy System Modernization",
      description: "Transform outdated core banking systems into modern, agile platforms. We help banks migrate from monolithic architectures to microservices and cloud-native solutions, reducing technical debt while maintaining operational continuity.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80",
      stats: "60% Cost Reduction"
    },
    {
      title: "Seamless Customer Experience",
      description: "Create unified digital banking experiences across all channels. From mobile apps to web platforms, we design and implement omnichannel solutions that meet modern customer expectations while ensuring security and compliance.",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=2000&q=80",
      stats: "98% Customer Satisfaction"
    }
  ];

  const challenges = [
    {
      icon: Building2,
      title: "Complex Legacy Infrastructure",
      description: "Outdated systems creating bottlenecks and limiting innovation"
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Navigating strict regulatory frameworks while implementing digital solutions"
    },
    {
      icon: Lock,
      title: "Data Security & Privacy",
      description: "Protecting sensitive financial data in an evolving threat landscape"
    },
    {
      icon: Sparkles,
      title: "Customer Expectations",
      description: "Meeting demands for instant, personalized digital banking experiences"
    }
  ];

  return (
    <div className="relative w-full">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20 z-0" />

      {/* Hero Section - Full Screen Image */}
      <section className="relative z-10 h-[60vh] min-h-[500px] max-h-[700px] flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1920&q=80" alt="Banking Digital Transformation"
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
              Digital Transformation
              <br />
              <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                for Banking
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              We help banks and financial institutions navigate the complex world of digital transformation. From modernizing legacy systems to creating seamless customer experiences, we understand the unique challenges of the banking sector.
            </p>


          </motion.div>
        </div>
      </section>

      {/* Banking Challenges Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
              Banking Sector <span className="gradient-text">Challenges We Solve</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              The banking industry faces unprecedented challenges in today's digital-first world. We provide tailored solutions to help you overcome these obstacles and thrive.
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
              Our <span className="gradient-text">Banking Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital transformation services designed specifically for banks and financial institutions to modernize operations and enhance customer engagement.
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
                    <span>Digital Transformation</span>
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
                        {index === 0 ? '150+' : '3M+'}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {index === 0 ? 'Banks Transformed' : 'Users Served'}
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
              <span className="gradient-text">What We Do</span> for Banks
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive services tailored to the unique needs of banking and financial institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Core Banking Transformation",
                desc: "Migrate from legacy systems to modern, scalable cloud-based platforms with minimal disruption to operations.",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Digital Channel Development",
                desc: "Build intuitive mobile and web banking platforms that provide seamless user experiences across all devices.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Payment System Integration",
                desc: "Implement real-time payment systems, cross-border transactions, and blockchain-based solutions for secure transfers.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "AI & Data Analytics",
                desc: "Leverage AI for fraud detection, risk assessment, customer insights, and personalized banking recommendations.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Regulatory Compliance",
                desc: "Ensure adherence to banking regulations, KYC/AML requirements, and data protection standards across all operations.",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Cybersecurity Solutions",
                desc: "Implement multi-layered security frameworks to protect customer data and prevent financial fraud.",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
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
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80"
                alt="Banking Technology"
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
                Our Approach to Banking Modernization
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cynerza-purple/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-cynerza-purple">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Assessment & Strategy
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We analyze your current infrastructure, identify pain points, and develop a comprehensive modernization roadmap.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cynerza-purple/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-cynerza-purple">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Phased Implementation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Gradual migration approach minimizes risk and ensures business continuity throughout the transformation process.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cynerza-purple/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-cynerza-purple">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Continuous Support
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Ongoing monitoring, optimization, and support to ensure your systems remain secure, compliant, and efficient.
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

export default BankingServicesPage;
