import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { ArrowRight } from "lucide-react";
import SEO from '@/components/seo/SEO';
import { getSEOData } from '@/components/seo/SEOConfig';

const WhyCynerzaSection: React.FC = () => {
  const features = [
    {
      title: "Unified AI Ecosystem",
      description: "Experience the power of an all-in-one platform that seamlessly integrates web development, mobile applications, intelligent automation, and cutting-edge AI solutions. Stop switching between fragmented tools and embrace a unified ecosystem designed for modern businesses.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      imageAlt: "Global AI Network Visualization",
    },
    {
      title: "Customizable Workflows",
      description: "From low-code drag-and-drop simplicity to advanced custom scripting capabilities, CYNERZA adapts to your technical expertise. Build sophisticated automation workflows without writing a single line of code, or dive deep into full-stack customization when you need complete control.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      imageAlt: "Workflow Dashboard Analytics",
    },
    {
      title: "Enterprise-Grade APIs",
      description: "Access comprehensive REST and GraphQL APIs backed by production-ready SDKs for Python, Node.js, and Flutter. Our developer-first approach ensures seamless integration with your existing tech stack, complete with extensive documentation and dedicated support.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
      imageAlt: "API Code Development",
    },
    {
      title: "AI-Powered Automation",
      description: "Leverage intelligent robotic process automation (RPA), conversational AI chatbots, and IoT integration to transform your business operations. Our AI engines learn from your workflows, continuously optimizing processes and reducing manual intervention by up to 80%.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      imageAlt: "AI Automation Technology",
    },
    {
      title: "Scalable Infrastructure",
      description: "Built on cloud-native architecture that evolves with your ambitions. Whether you're a startup handling hundreds of requests or an enterprise managing millions, our infrastructure scales elastically to meet demand without compromising performance or reliability.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      imageAlt: "Cloud Server Infrastructure",
    },
    {
      title: "Data-Driven Insights",
      description: "Make informed decisions with real-time analytics dashboards and AI-powered predictive recommendations. Transform raw data into actionable intelligence with advanced visualization tools, custom reports, and automated alerts that keep you ahead of market trends.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      imageAlt: "Data Analytics Dashboard",
    },
  ];

  return (
    <>
    <SEO data={getSEOData('whyCynerza')} />
    <section className="relative pb-8 sm:pb-12 md:pb-16 py-0 overflow-hidden" id="features">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-900" />

      <div className="relative z-10">

        {/* Hero Image Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <Fade direction="up" triggerOnce>
            <div className="relative w-full">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80"
                  alt="CYNERZA AI Technology Platform"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 font-heading"
                  >
                    Why CYNERZA?
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl"
                  >
                    We're not just another tech company. CYNERZA is your strategic partner in digital transformation, combining cutting-edge AI with enterprise-grade solutions to drive real business impact.
                  </motion.p>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-20 md:space-y-24 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center`}
              >

                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                    <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl md:rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 group-hover:scale-105">
                      <img
                        src={feature.image}
                        alt={feature.imageAlt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 font-heading">
                      {feature.title}
                    </h3>
                    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-4 sm:mb-6" />
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
    </>
  );
};

export default WhyCynerzaSection;
