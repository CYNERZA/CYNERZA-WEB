import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ParticleBackground from '@/components/ui/ParticleBackground';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import { ScrollTimeline } from '@/components/lightswind/scroll-timeline';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - CYNERZA';
  }, []);

  const stats = [
    { value: 25000, display: '25', label: 'Developers' },
    { value: 1000000, display: '50+', label: 'Projects Created' },
    { value: 300, display: '75+', label: 'Enterprise Clients' },
    { value: 150, display: '2+', label: 'Countries' }
  ];

  const timeline = [
    {
      year: '2022',
      title: 'The Beginning',
      description: 'CYNERZA was founded with a mission to revolutionize software development using artificial intelligence.'
    },
    {
      year: '2023',
      title: 'First Product Launch',
      description: 'Released our first AI-powered code assistant, helping developers write better code faster.'
    },
    {
      year: '2024',
      title: 'Series A Funding',
      description: 'Secured $15M in Series A funding to expand our product offerings and reach more developers.'
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Opened offices in Europe and Asia to better serve our growing international user base.'
    }
  ];

  return (
    <div className="w-full relative">
      <ParticleBackground className="opacity-30" />
      <div className="relative z-10">
        { }
        <section className="py-2">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-clip-text 
                  text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                About <span className="gradient-text">CYNERZA</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                We're on a mission to revolutionize software development by making advanced AI tools accessible to all developers.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-10 glass-effect">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <Fade direction="up" triggerOnce delay={100}>
                  <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-clip-text 
                  text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">Our Story</h2>

                </Fade>
                <Fade direction="up" triggerOnce delay={100}>

                  <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
                    Founded in 2025, Cynerza was built on a simple belief:
                    developers should spend less time on repetitive work and more time creating meaningful impact.
                    With a team of AI researchers and experienced developers,
                    we set out to design tools that bring intelligence and efficiency into software development.
                  </p>
                  <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
                    Our journey started with a core focus on AI-powered products for individuals (B2C),
                    and over time, we expanded to deliver enterprise-grade solutions including SaaS product development,
                    AI/ML integration, custom LLM APIs, IT service management, and Cloud & DevOps engineering.

                  </p>
                  <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    Today, Cynerza is trusted by over 70 companies and hundreds of individual developers worldwide, all using our
                    platform and solutions to build smarter, faster, and more reliable software.                  </p>
                </Fade>
              </div>
              <Fade direction="up" triggerOnce delay={20} className='lg:w-1/2 relative'>

                {/* <div className=""> */}
                <div className="rounded-2xl overflow-hidden shadow-xl purple-glow">
                  <img
                    src="./cynerza.jpeg"
                    alt="CYNERZA team working"
                    className="w-full h-auto"
                  />
                </div>
                {/* </div> */}
              </Fade>
            </div>
          </div>
        </section>

        { }
        <section className="py-4">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="text-4xl font-bold text-cynerza-purple dark:text-cynerza-purple-light mb-2">
                    {stat.display}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        { /* Our Journey */}
       

        <ScrollTimeline
          events={timeline}
          title="Our Journey"
          subtitle=""
          progressIndicator={true}
          cardAlignment="alternating"
          revealAnimation="fade"
          className=''
        />

        { }
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-8">
          <div className="container mx-auto px-4 max-w-4xl ">
            <div className="glass-effect rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-clip-text 
                  text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                Join Us on Our <span className="gradient-text">Mission</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                Whether you're a developer looking to use our tools or interested in joining our team, we'd love to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://tools.cynerza.com" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-cynerza-purple hover:bg-cynerza-purple/90 text-white">
                    Get Started Free
                  </Button>
                </a>
                <Link to="/careers">
                  <button className="px-2 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-xl border border-gray-200
                   dark:border-gray-700 transition-all duration-200 transform hover:-translate-y-0.5">
                    View Career Opportunities
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
