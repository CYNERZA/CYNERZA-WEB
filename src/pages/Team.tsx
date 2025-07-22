import React, { useEffect } from 'react';
import TeamMemberCard from '@/components/ui/TeamMemberCard';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Team - CYNERZA';
  }, []);

  type teamDetails = {
    name: string
    role: string
    imageUrl: string
    bio: string
    linkedInUrl: string
  }
  const founders: Array<teamDetails> = [
    {
      name: 'Aditya Sahoo',
      role: 'Founder',
      imageUrl: '/Teams/Aditya.jpg',
      bio: 'Visionary leader and tech enthusiast, passionate about building transformative AI products.',
      linkedInUrl: ""
    },
    {
      name: 'Ashutosh Rath',
      role: 'Founder',
      imageUrl: '/Teams/Asutosh.jpg',
      bio: 'Creative problem solver with a knack for innovation and a love for elegant code.',
      linkedInUrl: ""
    },
    {
      name: 'Biswajit Rath',
      role: 'Founder',
      imageUrl: '/Teams/Biswajit.jpg',
      bio: 'Expert in scalable systems and passionate about building seamless user experiences.',
      linkedInUrl: ""
    },
    {
      name: 'Haraprasad Hota',
      role: 'Founder',
      imageUrl: '/Teams/Haraprasad.jpg',
      bio: 'AI researcher and full-stack developer, driven to push the boundaries of technology.',
      linkedInUrl: ""
    },
    {
      name: 'Satyaprakash Nayak',
      role: 'Founder',
      imageUrl: '/Teams/Satya.jpg',
      bio: 'Strategic thinker and product architect, dedicated to delivering impactful solutions.',
      linkedInUrl: ""
    },
  ];

  const members: Array<teamDetails> = [
    {
      name: "Aditi Mehera",
      role: "Android Developer",
      imageUrl: "/Teams/Aditi Mehera.jpeg",
      bio: "Android Developer",
      linkedInUrl: "https://www.linkedin.com/in/aditi-mehra-5921a4288"
    },
  ]

  return (
    <div className="w-full">
      <section className="py-0">
        <section className="py-1">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-5 gradient-text">
                Meet the <span className="gradient-text">Team</span> Behind CYNERZA
              </h2>
              <p className="text-xl text-gray-800 dark:text-gray-400">
                We're a passionate group of engineers, researchers, and designers dedicated to revolutionizing development with AI.
              </p>
            </div>

            <div className="mb-16">
              {/* Founders */}
              <h2 className="text-2xl font-bold mb-4 border-b pb-4 text-center gradient-text">Founders</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center items-stretch pb-4">
                {founders.map((member, index) => (
                  <motion.a
                    key={index}
                    href={member.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-full flex justify-center no-underline"
                  >
                    <TeamMemberCard
                      name={member.name}
                      role={member.role}
                      imageUrl={member.imageUrl}
                      bio={member.bio}
                    />
                  </motion.a>
                ))}

              </div>
              {/*Members */}
              <h2 className="text-2xl font-bold mb-4 border-b pb-4 text-center mt-7 gradient-text">Members</h2>
              <div className={`${members.length > 3 ?
                 "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center items-stretch pb-4" 
                 : "flex flex-col sm:flex-row items-center justify-center gap-6"}`}>
                {members.map((member, index) => (
                  <motion.a
                    key={index}
                    href={member.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex justify-center no-underline"
                  >
                    <TeamMemberCard
                      name={member.name}
                      role={member.role}
                      imageUrl={member.imageUrl}
                      bio={member.bio}
                    />
                  </motion.a>
                ))}

              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Team;
