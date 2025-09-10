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
      imageUrl: '/Teams/Adtiya Sir.jpeg',
      bio: 'Visionary leader and tech enthusiast, passionate about building transformative AI products.',
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
    {
      name: "Soumya Ranjan Parida",
      role: "Full Stack Developer",
      imageUrl: "/Teams/saroj.jpeg",
      bio: "Senior Full Stack Developer",
      linkedInUrl: "https://www.linkedin.com/in/soumya-ranjan-parida-44b71b286/"
    },
   
    {
      name: "Hardip Solanki",
      role: "Full Stack Developer",
      imageUrl: "/Teams/Hardip Solanki.png",
      bio: "Junior Full Stack Developer",
      linkedInUrl: "https://www.linkedin.com/in/hardip-solanki-294168351"
    },
  ]

  return (
    <div className="w-full">
      <section className="py-0">
        <section className="py-1">
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
                className="text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text
          text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                Meet the <span className="gradient-text">Team</span> Behind CYNERZA
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                We're a passionate group of engineers, researchers, and designers dedicated to revolutionizing development with AI.
              </motion.p>
            </motion.div>

            <div className="mb-16">
              {/* Founders */}
              {/* <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text
          text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 text-center">Founders
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
              lg:flex justify-center items-center gap-4">
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

              </div> */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
              gap-8 items-stretch pb-4">
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
                    className="w-full flex justify-center items-center no-underline"
                  >
                    <TeamMemberCard
                      name={member.name}
                      role={member.role}
                      imageUrl={member.imageUrl}
                      bio={member.bio}
                    />
                  </motion.a>
                ))}

              </div> */}
              {/*Members */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text
          text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300  mt-10 text-center">
                Members</motion.h2>
              <div className={`${members.length > 3 ?
                "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center items-stretch pb-4"
                : "flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-[3.5rem]"}`}>
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
