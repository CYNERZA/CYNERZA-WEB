import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Radio, Tv, Wifi, Users, ArrowRight, CheckCircle } from 'lucide-react';

const MediaCommunicationsPage: React.FC = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      title: "Streaming Platforms & OTT Services",
      description: "Build scalable streaming solutions that deliver high-quality content to millions of users. From video-on-demand to live streaming, we create platforms with adaptive bitrate streaming, content protection, and personalized recommendations that keep audiences engaged.",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=2000&q=80",
      stats: "10M+ Concurrent Users"
    },
    {
      title: "Content Management Systems",
      description: "Empower content creators with intuitive CMS platforms that streamline production workflows. Our solutions support multi-format content, collaborative editing, rights management, and seamless distribution across all digital channels.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2000&q=80",
      stats: "Real-time Collaboration"
    }
  ];

  const challenges = [
    {
      icon: Radio,
      title: "Content Delivery at Scale",
      description: "Delivering high-quality content to global audiences with minimal latency"
    },
    {
      icon: Tv,
      title: "Multi-Platform Distribution",
      description: "Reaching audiences across web, mobile, smart TVs, and emerging platforms"
    },
    {
      icon: Wifi,
      title: "Network Infrastructure",
      description: "Building robust telecom infrastructure to support growing data demands"
    },
    {
      icon: Users,
      title: "Audience Engagement",
      description: "Creating personalized experiences that drive viewer loyalty and retention"
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
            src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1920&q=80"
            alt="Media and Communications"
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
              Communications, Media
              <br />
              <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                & Information Services
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              We partner with media and telecom companies to build engaging digital experiences. Whether it's streaming platforms, content management systems, or communication tools, we create solutions that connect people and information.
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
              Media & Telecom <span className="gradient-text">Challenges We Solve</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              The communications and media landscape is evolving rapidly. We help you navigate these challenges with innovative digital solutions.
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
              Our <span className="gradient-text">Media & Communications Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              End-to-end digital solutions for media companies and telecom providers to create, distribute, and monetize content while enhancing connectivity.
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
                    <span>Media & Communications</span>
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
                        {index === 0 ? '99.9%' : '4K/8K'}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {index === 0 ? 'Uptime' : 'HD Quality'}
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
              <span className="gradient-text">What We Do</span> for Media & Telecom
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital solutions for content creation, distribution, audience engagement, and network infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Video Streaming Solutions",
                desc: "Build OTT platforms with adaptive streaming, CDN integration, DRM protection, and AI-powered recommendations for personalized viewing experiences.",
                image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Digital Content Management",
                desc: "Implement comprehensive CMS platforms for content creation, workflow automation, metadata management, and multi-channel distribution.",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Telecom Network Solutions",
                desc: "Deploy 5G infrastructure, network optimization tools, and IoT connectivity solutions to support growing bandwidth demands.",
                image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Audience Analytics & Insights",
                desc: "Leverage data analytics to understand viewer behavior, preferences, and engagement patterns for better content and advertising decisions.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Communication Platforms",
                desc: "Create unified communication tools including messaging, video conferencing, and collaboration platforms for seamless connectivity.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Ad Tech & Monetization",
                desc: "Implement programmatic advertising, ad insertion technologies, subscription management, and revenue optimization solutions.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
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
                src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1600&q=80"
                alt="Media Technology"
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
                Our Approach to Media & Telecom Innovation
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cynerza-purple/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-cynerza-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Scalable Infrastructure
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Cloud-native architectures that scale seamlessly to handle millions of concurrent users and petabytes of content.
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
                      Machine learning algorithms that deliver personalized content recommendations and optimize user engagement.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cynerza-purple/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-cynerza-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Multi-Platform Excellence
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Consistent experiences across web, mobile, smart TVs, gaming consoles, and emerging platforms.
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

export default MediaCommunicationsPage;
