import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ParticleBackground from '@/components/ui/ParticleBackground';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - CYNERZA';
  }, []);

  const stats = [
    { value: 25000, display: '25K+', label: 'Developers' },
    { value: 1000000, display: '1M+', label: 'Projects Created' },
    { value: 300, display: '300+', label: 'Enterprise Clients' },
    { value: 150, display: '150+', label: 'Countries' }
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
        {}
        <section className="py-2">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 gradient-text">
                About <span className="gradient-text">CYNERZA</span>
              </h1>
              <p className="text-xl text-gray-600">
                We're on a mission to revolutionize software development by making advanced AI tools accessible to all developers.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-10 bg-cynerza-gray-light">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-4">
                  CYNERZA was born from a simple observation: developers spend too much time on repetitive tasks and not enough time creating value.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Founded in 2022 by a team of AI researchers and experienced developers, we set out to build tools that would fundamentally change how software is created.
                </p>
                <p className="text-lg text-gray-700">
                  Today, we're proud to serve thousands of developers worldwide, from solo entrepreneurs to Fortune 500 companies, all using our platform to build better software faster.
                </p>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="rounded-2xl overflow-hidden shadow-xl purple-glow">
                  <img 
                    src="/placeholder.svg" 
                    alt="CYNERZA team working" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {}
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
        
        {}
        <section className="py-16 bg-cynerza-gray-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">Our Journey</h2>
            
            <div className="relative">
              {}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cynerza-purple/20"></div>
              
              {timeline.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex items-center justify-between mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                    <div className="glass-effect rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-cynerza-purple text-white font-bold">
                    {item.year.substring(2)}
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="glass-effect rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Join Us on Our <span className="gradient-text">Mission</span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Whether you're a developer looking to use our tools or interested in joining our team, we'd love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://tools.cynerza.com" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-cynerza-purple hover:bg-cynerza-purple/90 text-white">
                    Get Started Free
                  </Button>
                </a>
                <Link to="/careers">
                  <Button variant="outline" className="border-cynerza-purple text-cynerza-purple hover:bg-cynerza-purple/5">
                    View Career Opportunities
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
