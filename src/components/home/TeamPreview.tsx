import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TeamMemberCard from '@/components/ui/TeamMemberCard';
import { motion } from 'framer-motion';

const TeamPreview: React.FC = () => {
  // No longer need useRef for IntersectionObserver as framer-motion handles it
  // const teamRef = useRef<HTMLDivElement>(null);

  // No longer need useEffect for IntersectionObserver as framer-motion handles it
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add('animate-fade-in');
  //           observer.unobserve(entry.target); // Stop observing once animation is triggered
  //         }
  //       });
  //     },
  //     { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
  //   );

  //   if (teamRef.current) {
  //     observer.observe(teamRef.current);
  //   }

  //   return () => {
  //     if (teamRef.current) {
  //       observer.unobserve(teamRef.current);
  //     }
  //   };
  // }, []);

  const teamMembers = [
  {
    name: 'Aditya Sahoo',
    role: 'Founder',
    imageUrl: '/Teams/Aditya.jpg',
    bio: 'Visionary leader and tech enthusiast, passionate about building transformative AI products.'
  },
  {
    name: 'Ashutosh Rath',
    role: 'Founder',
    imageUrl: '/Teams/Asutosh.jpg',
    bio: 'Creative problem solver with a knack for innovation and a love for elegant code.'
  },
  {
    name: 'Biswajit Rath',
    role: 'Founder',
    imageUrl: '/Teams/Biswajit.jpg',
    bio: 'Expert in scalable systems and passionate about building seamless user experiences.'
  },
  {
    name: 'Haraprasad Hota',
    role: 'Founder',
    imageUrl: '/Teams/Haraprasad.jpg',
    bio: 'AI researcher and full-stack developer, driven to push the boundaries of technology.'
  },
  {
    name: 'Satyaprakash Nayak',
    role: 'Founder',
    imageUrl: '/Teams/Satya.jpg',
    bio: 'Strategic thinker and product architect, dedicated to delivering impactful solutions.'
  },
];


  return (
    <section className="py-8 bg-cynerza-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Meet Our <span className="gradient-text">Expert Team</span></h2>
          <p className="text-lg text-gray-600">
            We're a group of passionate individuals dedicated to revolutionizing the development process with AI.
          </p>
        </div>

        <div 
          // ref={teamRef} // No longer needed
          className="flex flex-row justify-center items-stretch gap-8 overflow-x-auto pb-4"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TeamMemberCard
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
                bio={member.bio}
                // className={`animate-fade-in delay-${index * 100}`} // No longer needed
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/team">
            <Button className="bg-cynerza-purple hover:bg-cynerza-purple/90">
              View Full Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
