import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TeamMemberCard from '@/components/ui/TeamMemberCard';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const TeamPreview: React.FC = () => {
  const teamMembers = [
    {
      name: 'Aditya Sahoo',
      role: 'CEO & Co-Founder',
      imageUrl: '/Teams/Aditya.jpg',
      bio: 'Visionary leader with 10+ years in AI and enterprise software. Spearheads CYNERZA\'s strategic direction and innovation pipeline.',
      expertise: ['AI Strategy', 'Product Vision', 'Leadership']
    },
    {
      name: 'Ashutosh Rath',
      role: 'CTO & Co-Founder',
      imageUrl: '/Teams/Asutosh.jpg',
      bio: 'Tech architect with deep expertise in scalable cloud infrastructure and distributed systems.',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design']
    },
    {
      name: 'Biswajit Rath',
      role: 'Head of Engineering',
      imageUrl: '/Teams/Biswajit.jpg',
      bio: 'Full-stack expert passionate about building intuitive interfaces and robust backend systems.',
      expertise: ['Web Development', 'APIs', 'Performance']
    },
    {
      name: 'Haraprasad Hota',
      role: 'AI Research Lead',
      imageUrl: '/Teams/Haraprasad.jpg',
      bio: 'Machine learning specialist focused on NLP and computer vision applications.',
      expertise: ['Machine Learning', 'NLP', 'Computer Vision']
    },
    {
      name: 'Satyaprakash Nayak',
      role: 'Product Director',
      imageUrl: '/Teams/Satya.jpg',
      bio: 'Product strategist with a track record of successful digital transformations.',
      expertise: ['Product Management', 'UX/UI', 'Market Strategy']
    },
  ];

  const teamStats = [
    { value: '50+', label: 'Combined Years of Experience' },
    { value: '100+', label: 'Projects Delivered' },
    { value: '15+', label: 'Technologies Mastered' },
    { value: '24/7', label: 'Support' },
  ];

  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      {/* Purple gradient background overlay */}
      {isDarkMode &&
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-800/10 to-indigo-600/20 z-5" />
      }
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The <span className="text-cynerza-blue">Minds</span> Behind CYNERZA
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our diverse team of experts combines deep technical knowledge with business acumen to deliver exceptional results.
          </motion.p>
        </div>

        { }
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {teamStats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-3xl font-bold text-cynerza-blue mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, i) => (
                        <span key={i} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-cynerza-blue font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{member.bio}</p>
                  <div className="flex space-x-3 pt-3 border-t border-gray-100">
                    <a href="#" className="text-gray-400 hover:text-cynerza-blue transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cynerza-blue transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cynerza-blue transition-colors ml-auto">
                      <span className="sr-only">Email</span>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our growing team of innovators and help shape the future of AI-powered development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/careers">
              <Button className="bg-cynerza-blue hover:bg-cynerza-blue/90 px-8">
                View Open Positions
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-cynerza-blue text-cynerza-blue hover:bg-cynerza-blue/10">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;
