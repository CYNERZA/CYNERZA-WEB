import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, Shield, Activity, Stethoscope, ArrowRight, CheckCircle } from 'lucide-react';

const HealthcarePage: React.FC = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      title: "Electronic Health Records (EHR) Systems",
      description: "Build comprehensive EHR platforms that provide seamless access to patient information across care settings. Our solutions ensure data interoperability, streamline clinical workflows, and support better care coordination while maintaining HIPAA compliance and robust security measures.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80",
      stats: "99.99% Uptime"
    },
    {
      title: "Telehealth & Remote Patient Monitoring",
      description: "Enable virtual care delivery with secure telehealth platforms and IoT-powered remote monitoring solutions. Connect patients and providers through video consultations, real-time health data tracking, and AI-powered diagnostics that improve access to care and patient outcomes.",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=2000&q=80",
      stats: "24/7 Care Access"
    }
  ];

  const challenges = [
    {
      icon: Heart,
      title: "Patient Care Quality",
      description: "Improving clinical outcomes and patient satisfaction through better technology"
    },
    {
      icon: Shield,
      title: "Data Security & Compliance",
      description: "Protecting sensitive health information while meeting HIPAA and regulatory requirements"
    },
    {
      icon: Activity,
      title: "Operational Efficiency",
      description: "Streamlining workflows and reducing administrative burden on healthcare staff"
    },
    {
      icon: Stethoscope,
      title: "Care Coordination",
      description: "Connecting providers, payers, and patients for seamless healthcare delivery"
    }
  ];

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20 z-0 pointer-events-none" />

      {/* Hero Section - Responsive Height */}
      <section className="relative z-10 h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] max-h-[700px] flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80"
            alt="Healthcare Technology"
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
              Healthcare Technology
              <br />
              <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Solutions
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-2">
              Healthcare technology can save lives. We work with providers, payers, and health tech companies to create secure, compliant solutions that improve patient care and streamline medical operations.
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
              Healthcare <span className="gradient-text">Challenges We Solve</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
              The healthcare industry faces unique challenges in delivering quality care while managing costs and compliance. We provide innovative technology solutions that address these critical needs.
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
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cynerza-purple/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-cynerza-purple" />
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
              Our <span className="gradient-text">Healthcare Solutions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
              Comprehensive healthcare IT solutions designed for providers, payers, and health tech companies to enhance patient outcomes and operational excellence.
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
                  <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full bg-cynerza-purple/10 border border-cynerza-purple/20 text-cynerza-purple text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                    <span>HealthTech Solutions</span>
                    <span className="text-cynerza-purple/70">•</span>
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
                      className="bg-cynerza-purple hover:bg-cynerza-purple/90 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all w-full sm:w-auto"
                    >
                      Learn More
                    </button>
                    <button className="border border-cynerza-purple text-cynerza-purple hover:bg-cynerza-purple/5 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all w-full sm:w-auto">
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
                      <div className="text-xl sm:text-2xl font-bold text-cynerza-purple mb-1">
                        {index === 0 ? 'HIPAA' : '5M+'}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        {index === 0 ? 'Compliant' : 'Patients'}
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
              <span className="gradient-text">What We Do</span> for Healthcare
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
              End-to-end healthcare IT solutions for hospitals, clinics, insurance companies, and health tech innovators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Electronic Health Records",
                desc: "Comprehensive EHR systems with clinical documentation, e-prescribing, lab integration, and patient portal for seamless information exchange across care teams.",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Payer Management Systems",
                desc: "Claims processing, member management, provider networks, and payment automation solutions that reduce administrative costs and improve operational efficiency.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Telehealth Platforms",
                desc: "Secure video consultations, appointment scheduling, digital prescriptions, and remote monitoring tools for virtual care delivery at scale.",
                image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Healthcare Analytics",
                desc: "Population health management, predictive analytics, risk stratification, and clinical decision support powered by AI and machine learning.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Revenue Cycle Management",
                desc: "Automated billing, coding assistance, claims management, denial prevention, and payment collection to optimize financial performance.",
                image: "https://images.unsplash.com/photo-1554224311-beee4ece8c90?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Medical Device Integration",
                desc: "IoT-enabled wearables, remote patient monitoring devices, and connected health solutions for continuous care and real-time health tracking.",
                image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=80"
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
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80"
                alt="Healthcare Technology"
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
                Our Approach to Healthcare Technology
              </h2>
              <div className="space-y-5 sm:space-y-6">
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-cynerza-purple/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cynerza-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      Security & Compliance First
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      HIPAA-compliant architecture with end-to-end encryption, access controls, and audit trails to protect sensitive patient information.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-cynerza-purple/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cynerza-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      Interoperability Standards
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      HL7, FHIR, and DICOM integration for seamless data exchange across healthcare systems, devices, and applications.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-cynerza-purple/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cynerza-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      Patient-Centered Design
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      Intuitive interfaces and workflows designed to enhance patient experience and empower healthcare providers with efficient tools.
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

export default HealthcarePage;
