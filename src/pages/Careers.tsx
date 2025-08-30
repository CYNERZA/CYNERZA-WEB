// import React, { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   MdWork, MdHealthAndSafety, MdSchool, MdFlight,
//   MdAttachMoney, MdEventAvailable, MdGroups,
//   MdTrendingUp, MdFreeBreakfast, MdSportsTennis
// } from 'react-icons/md';
// import { HoverEffect } from '@/components/ui/card-hover-effect';

// // Define types for TypeScript
// interface JobPosition {
//   id: number;
//   title: string;
//   department: string;
//   location: string;
//   type: string;
// }

// interface Benefit {
//   title: string;
//   description: string;
//   iconDetails: {
//     icon: JSX.Element;
//     color: string;
//   }
// }

// // Sample data
// const jobPositions: JobPosition[] = [
//   // { id: 1, title: "Frontend Developer", department: "Engineering", location: "Remote", type: "Internship" },
//   // { id: 2, title: "UX/UI Designer", department: "Design", location: "San Francisco", type: "Full-time" },
//   // { id: 3, title: "Product Manager", department: "Product", location: "New York", type: "Full-time" },
//   // { id: 4, title: "DevOps Engineer", department: "Engineering", location: "Remote", type: "Contract" },
//   // { id: 5, title: "Marketing Specialist", department: "Marketing", location: "Austin", type: "Full-time" },
// ];

// const benefits: Benefit[] = [
//   {
//     title: "Flexible Work",
//     description: "Work from anywhere with our remote-first policy and flexible hours",
//     iconDetails: {
//       icon: <MdWork className="text-3xl" />,
//       color: "text-blue-600"
//     }
//   },
//   {
//     title: "Health Benefits",
//     description: "Comprehensive medical, dental, and vision insurance for you and your family",
//     iconDetails: {
//       icon: <MdHealthAndSafety className="text-3xl" />,
//       color: "text-green-600"
//     }
//   },
//   {
//     title: "Learning Budget",
//     description: "$2,000 annual stipend for courses, conferences, and professional development",
//     iconDetails: {
//       icon: <MdSchool className="text-3xl" />,
//       color: "text-purple-600"
//     }
//   },
//   {
//     title: "Unlimited PTO",
//     description: "Take time when you need it to recharge and maintain work-life balance",
//     iconDetails: {
//       icon: <MdEventAvailable className="text-3xl" />,
//       color: "text-amber-600"

//     }
//   },
//   {
//     title: "Team Retreats",
//     description: "Regular company meetups in exciting locations around the world",
//     iconDetails: {
//       icon: <MdFlight className="text-3xl" />,
//       color: "text-cyan-600"
//     }
//   },
//   {
//     title: "Competitive Salary",
//     description: "Industry-leading compensation packages with equity options",
//     iconDetails: {
//       icon: <MdAttachMoney className="text-3xl" />,
//       color: "text-emerald-600"
//     }
//   },
//   {
//     title: "Career Growth",
//     description: "Clear promotion pathways and mentorship programs",
//     iconDetails: {
//       icon: <MdTrendingUp className="text-3xl" />,
//       color: "text-indigo-600"
//     }
//   },
//   {
//     title: "Wellness Stipend",
//     description: "$100 monthly credit for gym memberships, meditation apps, and wellness",
//     iconDetails: {
//       icon: <MdSportsTennis className="text-3xl" />,
//       color: "text-pink-600"
//     }
//   },
// ];

// const CareersPage: React.FC = () => {
//   const openPositionRef = useRef(null);
//   const ourCultureRef = useRef(null)

//   const [selectedDepartment, setSelectedDepartment] = useState<string>('All');

//   const departments = ['All', ...new Set(jobPositions.map(job => job.department))];

//   let filteredJobs = selectedDepartment === "All"
//     ? [...jobPositions]
//     : jobPositions.filter((job) => job.department === selectedDepartment)
//   console.log("select dept: ", selectedDepartment)
//   console.log("det: ", departments)
//   console.log("fi: ", filteredJobs)

//   const scrollToOpenPositionSection = () => {
//     if (openPositionRef.current) {
//       openPositionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

//       openPositionRef.current.focus({ preventScroll: true });
//     }
//   };
//   const scrollToOurCultureSection = () => {
//     if (ourCultureRef.current) {
//       ourCultureRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

//       ourCultureRef.current.focus({ preventScroll: true });
//     }
//   };



//   return (
//     <div className="">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 
//       dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-10 transition-colors duration-500
//        overflow-hidden">
//         <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
//           <motion.div
//             className="md:w-1/2 mb-10 md:mb-0"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-200 mb-6">
//               Build the future <span className="gradient-text">with us</span>
//             </h1>
//             <p className="text-lg md:text-xl text-gray-700 dark:text-slate-400 mb-8 max-w-lg">
//               Join our team of innovators and help shape the next generation of digital experiences
//             </p>
//             <motion.button
//               onClick={scrollToOpenPositionSection}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 flex items-center gap-2"
//             >
//               View Open Positions
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
//               </svg>
//             </motion.button>
//           </motion.div>
//           <motion.div
//             className="md:w-1/2"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
//               alt="Our team working together"
//               className="rounded-xl shadow-2xl"
//             />
//           </motion.div>
//         </div>

//         {/* Decorative elements */}
//         <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//         <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//         <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-10 ">
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.div
//             className="text-center max-w-3xl mx-auto mb-16"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-200 dark:text-slate  mb-4">Why join our team?</h2>
//             <p className="text-lg text-gray-600 dark:text-slate-400">
//               We invest in our people with industry-leading benefits and a culture that fosters growth, innovation, and well-being.
//             </p>
//           </motion.div>

//           {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> */}
//           {/* {benefits.map((benefit, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-white p-6 
//                 dark:bg-gray-800 dark:border-gray-700 rounded-xl shadow-sm border
//                  border-gray-100 hover:shadow-md
//                   transition-shadow duration-300 flex flex-col items-center text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className={`p-3 rounded-full ${benefit.color} mb-4`}>
//                   {benefit.icon}
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-200 mb-2">{benefit.title}</h3>
//                 <p className="text-gray-600 dark:text-slate-400 text-sm">{benefit.description}</p>
//               </motion.div>
//             ))} */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3, delay: 1 * 0.05 }}
//             layout
//             className="glass-card p-6 rounded-lg">
//             <HoverEffect
//               items={benefits}
//               className=''
//             />
//           </motion.div>
//           {/* </div> */}
//         </div>
//       </section>

//       {/* Culture Section */}
//       <section
//         ref={ourCultureRef}
//         className="py-10 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <motion.div
//               className="md:w-1/2"
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//             >
//               <div className="relative">
//                 <img
//                   src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
//                   alt="Our workplace culture"
//                   className="rounded-xl shadow-xl"
//                 />
//                 <div className="absolute -bottom-5 -right-5
//                 dark:text-slate-200 text-slate-900 bg-white dark:bg-black p-4 rounded-xl shadow-lg">
//                   <div className="flex items-center">
//                     <div className="bg-green-100 p-2 rounded-full mr-3">
//                       <MdGroups className="text-2xl text-green-600" />
//                     </div>
//                     <div>
//                       <p className="font-semibold ">Collaborative Environment</p>
//                       <p className="text-sm text-gray-500">Teamwork makes the dream work</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//             <motion.div
//               className="md:w-1/2"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-200 mb-6">Our culture</h2>
//               <p className="text-lg text-slate-900 dark:text-slate-200 mb-4">
//                 We believe in fostering an environment where creativity and innovation thrive. Our team values collaboration, transparency, and continuous learning.
//               </p>
//               <p className="text-lg text-slate-900 dark:text-slate-200 mb-8">
//                 We're not just building products—we're building a community of passionate individuals who support each other's growth both personally and professionally.
//               </p>

//               <div className="grid grid-cols-2 gap-4">
//                 <div className="flex items-center">
//                   <div className="bg-blue-100 p-2 rounded-full mr-3">
//                     <MdTrendingUp className="text-xl text-blue-600" />
//                   </div>
//                   <span className="text-gray-700 dark:text-slate-400">Growth Opportunities</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="bg-purple-100 p-2 rounded-full mr-3">
//                     <MdFreeBreakfast className="text-xl text-purple-600" />
//                   </div>
//                   <span className="text-gray-700 dark:text-slate-400">Work-Life Balance</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="bg-amber-100 p-2 rounded-full mr-3">
//                     <MdWork className="text-xl text-amber-600" />
//                   </div>
//                   <span className="text-gray-700 dark:text-slate-400">Flexible Hours</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="bg-green-100 p-2 rounded-full mr-3">
//                     <MdHealthAndSafety className="text-xl text-green-600" />
//                   </div>
//                   <span className="text-gray-700 dark:text-slate-400">Health & Wellness</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Open Positions Section */}
//       <section className="py-10"
//         ref={openPositionRef}
//       >
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.div
//             className="text-center max-w-3xl mx-auto mb-12"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-200 mb-4">Open positions</h2>
//             <p className="text-lg text-gray-600 dark:text-slate-400">
//               Join our team and work on challenging projects with cutting-edge technologies.
//             </p>
//           </motion.div>
//           {jobPositions.length > 0 &&
//             <motion.div
//               className="flex flex-wrap justify-center gap-3 mb-4"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               {departments.map(dept => (
//                 <button
//                   key={dept}
//                   className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${selectedDepartment === dept
//                     ? 'bg-indigo-600 text-white shadow-md'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   onClick={() => setSelectedDepartment(dept)}
//                 >
//                   {dept}
//                 </button>
//               ))}
//             </motion.div>}
//           {!jobPositions.length ? (<motion.div
//             className="text-center "
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900
//                   p-8 rounded-xl max-w-md mx-auto">
//               <div className="bg-gray-200 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                 <MdWork className="text-3xl text-gray-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-200 mb-2">No positions available</h3>
//               <p className="text-gray-600 dark:text-slate-400 mb-4">We don't have any open positions right now.</p>
//               {/* <button
//                     onClick={() => setSelectedDepartment('All')}
//                     className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center justify-center gap-2 mx-auto"
//                   >
//                     View all positions
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </button> */}
//             </div>
//           </motion.div>) : (<div className="max-w-4xl mx-auto">
//             <motion.div
//               className="space-y-4"
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//               variants={{
//                 animate: {
//                   transition: {
//                     staggerChildren: 0.1
//                   }
//                 }
//               }}
//             >
//               {filteredJobs.map((job, index) => (
//                 <motion.div
//                   key={job.id}
//                   className="bg-white
//                     dark:bg-gray-800 dark:border-gray-700
//                     dark:hover:border-indigo-400 p-6 rounded-xl border
//                      border-gray-200 hover:border-indigo-200 
//                      hover:shadow-md transition-all duration-300
//                       flex flex-col md:flex-row justify-between 
//                       items-start md:items-center gap-4"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -3 }}
//                 >
//                   <div className="flex-1">
//                     <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-200 mb-2">{job.title}</h3>
//                     <div className="flex flex-wrap gap-2">
//                       <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full">
//                         {job.department}
//                       </span>
//                       <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full">
//                         {job.location}
//                       </span>
//                       <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1.5 rounded-full">
//                         {job.type}
//                       </span>
//                     </div>
//                   </div>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium py-2.5 px-5 rounded-full transition-colors duration-300 flex items-center gap-2 whitespace-nowrap"
//                   >
//                     Apply Now
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </motion.button>
//                 </motion.div>
//               ))}
//             </motion.div>

//           </div>)}

//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 
//       dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <motion.div
//               className="md:w-1/2"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-slate-200">Ready to join our team?</h2>
//               <p className="text-lg md:text-xl mb-8 opacity-90 text-gray-600 dark:text-slate-400">
//                 We're always looking for talented individuals to help us build the future. Apply today and start your journey with us.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <motion.button
//                   onClick={scrollToOpenPositionSection}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center gap-2"
//                 >
//                   See All Positions
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </motion.button>
//                 <motion.button
//                   onClick={scrollToOurCultureSection}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-white dark:bg-indigo-50  text-slate-700 dark:text-slate-900 font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center gap-2"
//                 >
//                   Learn About Our Culture
//                 </motion.button>
//                 {/* <motion.button 
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-white hover:bg-white/10 text-slate-900 dark:text-slate-200 font-semibold py-3 px-8 rounded-full border border-white transition-colors duration-300"
//                 >
//                   Learn About Our Culture
//                 </motion.button> */}
//               </div>
//             </motion.div>
//             <motion.div
//               className="md:w-1/2"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
//                 alt="Join our team"
//                 className="rounded-xl shadow-xl"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CareersPage;


import React, { useEffect, useRef, useState } from 'react';


import { motion } from 'framer-motion';
import {
  MdWork, MdHealthAndSafety, MdSchool, MdFlight,
  MdAttachMoney, MdEventAvailable, MdGroups,
  MdTrendingUp, MdFreeBreakfast, MdSportsTennis,
  MdLocationOn, MdAccessTime, MdBusiness,
  MdLink
} from 'react-icons/md';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/app/store';
import { getAllJobPosts } from '@/featured/jobPost/jobPostSlice';
import { fetchAllDepartments } from '@/featured/department/departmentSlice';
import { Linkedin } from 'lucide-react';

// Define types for TypeScript
interface JobPosition {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

interface Benefit {
  title: string;
  description: string;
  iconDetails: {
    icon: JSX.Element;
    color: string;
  }
}

// Sample data with detailed job descriptions
// const jobPositions: JobPosition[] = [
//   {
//     id: 1,
//     title: "Frontend Developer",
//     department: "Engineering",
//     location: "Remote",
//     type: "Internship",
//     description: "Join our frontend team to build beautiful, responsive user interfaces for our AI tools platform. You'll work with modern technologies like React, TypeScript, and Tailwind CSS.",
//     requirements: [
//       "Experience with React and TypeScript",
//       "Knowledge of modern CSS frameworks (Tailwind CSS preferred)",
//       "Understanding of responsive design principles",
//       "Familiarity with version control (Git)"
//     ],
//     responsibilities: [
//       "Develop and maintain user-facing features",
//       "Collaborate with UX designers to implement designs",
//       "Write clean, maintainable code with tests",
//       "Participate in code reviews"
//     ],
//   },
//   {
//     id: 2,
//     title: "UX/UI Designer",
//     department: "Design",
//     location: "San Francisco",
//     type: "Full-time",
//     description: "Create intuitive and visually appealing user experiences for our AI tools. You'll be responsible for the entire design process from research to implementation.",
//     requirements: [
//       "3+ years of UX/UI design experience",
//       "Proficiency in Figma, Sketch, or Adobe XD",
//       "Strong portfolio showcasing design process",
//       "Experience with user research methods"
//     ],
//     responsibilities: [
//       "Create wireframes, prototypes, and high-fidelity designs",
//       "Conduct user research and usability testing",
//       "Collaborate with developers to implement designs",
//       "Maintain and evolve our design system"
//     ],
//   },
//   {
//     id: 3,
//     title: "AI/ML Engineer",
//     department: "Engineering",
//     location: "Remote",
//     type: "Full-time",
//     description: "Develop and implement machine learning models to power our AI tools. You'll work with large datasets and cutting-edge algorithms.",
//     requirements: [
//       "Strong background in machine learning and statistics",
//       "Experience with Python and ML frameworks (PyTorch, TensorFlow)",
//       "Knowledge of NLP or computer vision",
//       "Experience with cloud platforms (AWS, GCP, or Azure)"
//     ],
//     responsibilities: [
//       "Design, train, and deploy machine learning models",
//       "Preprocess and analyze large datasets",
//       "Optimize model performance and scalability",
//       "Collaborate with product team to define requirements"
//     ],
//   },
//   {
//     id: 4,
//     title: "DevOps Engineer",
//     department: "Engineering",
//     location: "New York",
//     type: "Contract",
//     description: "Manage our cloud infrastructure and deployment pipelines to ensure high availability and performance of our AI tools platform.",
//     requirements: [
//       "Experience with AWS, Docker, and Kubernetes",
//       "Knowledge of CI/CD pipelines",
//       "Infrastructure as Code (Terraform or CloudFormation)",
//       "Monitoring and logging tools experience"
//     ],
//     responsibilities: [
//       "Maintain and scale our cloud infrastructure",
//       "Implement and improve CI/CD pipelines",
//       "Ensure system security and compliance",
//       "Monitor system performance and troubleshoot issues"
//     ],
//   },
//   {
//     id: 5,
//     title: "Marketing Specialist",
//     department: "Marketing",
//     location: "Austin",
//     type: "Full-time",
//     description: "Develop and execute marketing strategies to promote our AI tools and grow our user base. You'll work across various channels including content, social media, and partnerships.",
//     requirements: [
//       "3+ years of B2B marketing experience",
//       "Experience with digital marketing channels",
//       "Strong writing and communication skills",
//       "Analytical mindset with ability to measure ROI"
//     ],
//     responsibilities: [
//       "Develop and execute marketing campaigns",
//       "Create engaging content for various channels",
//       "Analyze campaign performance and optimize strategies",
//       "Collaborate with product team on go-to-market plans"
//     ],
//   }
// ];

const benefits: Benefit[] = [
  {
    title: "Flexible Work",
    description: "Work from anywhere with our remote-first policy and flexible hours",
    iconDetails: {
      icon: <MdWork className="text-3xl" />,
      color: "text-blue-600"
    }
  },
  {
    title: "Health Benefits",
    description: "Comprehensive medical, dental, and vision insurance for you and your family",
    iconDetails: {
      icon: <MdHealthAndSafety className="text-3xl" />,
      color: "text-green-600"
    }
  },
  {
    title: "Learning Budget",
    description: "$2,000 annual stipend for courses, conferences, and professional development",
    iconDetails: {
      icon: <MdSchool className="text-3xl" />,
      color: "text-purple-600"
    }
  },
  {
    title: "Unlimited PTO",
    description: "Take time when you need it to recharge and maintain work-life balance",
    iconDetails: {
      icon: <MdEventAvailable className="text-3xl" />,
      color: "text-amber-600"
    }
  },
  {
    title: "Team Retreats",
    description: "Regular company meetups in exciting locations around the world",
    iconDetails: {
      icon: <MdFlight className="text-3xl" />,
      color: "text-cyan-600"
    }
  },
  {
    title: "Competitive Salary",
    description: "Industry-leading compensation packages with equity options",
    iconDetails: {
      icon: <MdAttachMoney className="text-3xl" />,
      color: "text-emerald-600"
    }
  },
  {
    title: "Career Growth",
    description: "Clear promotion pathways and mentorship programs",
    iconDetails: {
      icon: <MdTrendingUp className="text-3xl" />,
      color: "text-indigo-600"
    }
  },
  {
    title: "Wellness Stipend",
    description: "$100 monthly credit for gym memberships, meditation apps, and wellness",
    iconDetails: {
      icon: <MdSportsTennis className="text-3xl" />,
      color: "text-pink-600"
    }
  },
];

const CareersPage: React.FC = () => {
  const openPositionRef = useRef<HTMLDivElement>(null);
  const ourCultureRef = useRef<HTMLDivElement>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const jobPositions = useSelector((state: any) => state.jobPost.jobPosts)
  // const departments = useSelector((state: any) => state.department.departments)


  // const departments = ['All', ...new Set(jobPositions.map(job => job.department))];

  const filteredJobs = selectedDepartment === "All"
    ? [...jobPositions]
    : jobPositions.filter((job: JobPosition) => job.department === selectedDepartment);

  const departments = jobPositions.map(jobPosition => jobPosition.department)

  const scrollToOpenPositionSection = () => {
    if (openPositionRef.current) {
      openPositionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToOurCultureSection = () => {
    if (ourCultureRef.current) {
      ourCultureRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleJobExpansion = (jobId: string) => {
    if (expandedJobId === jobId) {
      setExpandedJobId(null);
    } else {
      setExpandedJobId(jobId);
    }
  };

  useEffect(() => {
    dispatch(getAllJobPosts())
    dispatch(fetchAllDepartments())
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 
      dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-10 transition-colors duration-500
       overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-200 mb-6">
              Build the future <span className="gradient-text">with us</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-slate-400 mb-8 max-w-lg">
              Join our team of innovators and help shape the next generation of AI tools and experiences.
            </p>
            <motion.button
              onClick={scrollToOpenPositionSection}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 flex items-center gap-2"
            >
              View Open Positions
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
              alt="Our team working together"
              className="rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-200 mb-4">Why join our team?</h2>
            <p className="text-lg text-gray-600 dark:text-slate-400">
              We invest in our people with industry-leading benefits and a culture that fosters growth, innovation, and well-being.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 1 * 0.05 }}
            layout
            className="glass-card p-6 rounded-lg"
          >
            <HoverEffect
              items={benefits}
              className=''
            />
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section
        ref={ourCultureRef}
        className="py-10 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
                  alt="Our workplace culture"
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute -bottom-5 -right-5
                dark:text-slate-200 text-slate-900 bg-white dark:bg-black p-4 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <MdGroups className="text-2xl text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Collaborative Environment</p>
                      <p className="text-sm text-gray-500">Teamwork makes the dream work</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-200 mb-6">Our culture</h2>
              <p className="text-lg text-slate-900 dark:text-slate-200 mb-4">
                We believe in fostering an environment where creativity and innovation thrive. Our team values collaboration, transparency, and continuous learning.
              </p>
              <p className="text-lg text-slate-900 dark:text-slate-200 mb-8">
                We're not just building products—we're building a community of passionate individuals who support each other's growth both personally and professionally.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <MdTrendingUp className="text-xl text-blue-600" />
                  </div>
                  <span className="text-gray-700 dark:text-slate-400">Growth Opportunities</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <MdFreeBreakfast className="text-xl text-purple-600" />
                  </div>
                  <span className="text-gray-700 dark:text-slate-400">Work-Life Balance</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <MdWork className="text-xl text-amber-600" />
                  </div>
                  <span className="text-gray-700 dark:text-slate-400">Flexible Hours</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <MdHealthAndSafety className="text-xl text-green-600" />
                  </div>
                  <span className="text-gray-700 dark:text-slate-400">Health & Wellness</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-10" ref={openPositionRef}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-200 mb-4">Open positions</h2>
            <p className="text-lg text-gray-600 dark:text-slate-400">
              Join our team and work on challenging projects with cutting-edge technologies.
            </p>
          </motion.div>
          {jobPositions.length > 0 &&
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {["All", ...departments].map(dept => (
                <button
                  key={dept}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${selectedDepartment === dept
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  onClick={() => setSelectedDepartment(dept)}
                >
                  {dept}
                </button>
              ))}
            </motion.div>
          }

          {!jobPositions.length ? (
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900
                  p-8 rounded-xl max-w-md mx-auto">
                <div className="bg-gray-200 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MdWork className="text-3xl text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-200 mb-2">No positions available</h3>
                <p className="text-gray-600 dark:text-slate-400 mb-4">We don't have any open positions right now.</p>
              </div>
            </motion.div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="space-y-6"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {filteredJobs.map((job) => (
                  <motion.div
                    key={job._id}
                    className="bg-white dark:bg-gray-800 dark:border-gray-700 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                  >
                    <div
                      className="p-6 cursor-pointer"
                      onClick={() => toggleJobExpansion(job._id)}
                    >
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-200 mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full flex items-center">
                              <MdBusiness className="mr-1" /> {job.department}
                            </span>
                            <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full flex items-center">
                              <MdLocationOn className="mr-1" /> {job.location}
                            </span>
                            <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1.5 rounded-full flex items-center">
                              <MdAccessTime className="mr-1" /> {job.type}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-4 '>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium py-2.5 px-5 rounded-full transition-colors duration-300 flex items-center gap-2 whitespace-nowrap"
                          >
                            Apply Now
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </motion.button>
                          {job.linkedJobPost && (
                            <a href={job.linkedJobPost} target="_blank" rel="noopener noreferrer" className=" bg-white/5    hover:opacity-95 transition-all duration-200">
                              <span className="w-9 h-9 rounded-md bg-gradient-to-tr from-pink-500 via-indigo-500 to-blue-500 flex items-center justify-center text-white shadow-md">
                                <Linkedin className="text-lg" />
                              </span>
                            </a>
                          )}
                        </div>


                      </div>
                    </div>

                    {/* Expandable job details */}
                    {expandedJobId === job._id && (
                      <motion.div
                        className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-slate-200 mb-3">Requirements</h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-green-500 mr-2">•</span>
                                  <span className="text-gray-600 dark:text-gray-300">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-slate-200 mb-3">Responsibilities</h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((resp, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-blue-500 mr-2">•</span>
                                  <span className="text-gray-600 dark:text-gray-300">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-6 flex justify-center">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-6 rounded-full transition-colors duration-300"
                          >
                            Apply for this Position
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 
      dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-slate-200">Ready to join our team?</h2>
              <p className="text-lg md:text-xl mb-8 opacity-90 text-gray-600 dark:text-slate-400">
                We're always looking for talented individuals to help us build the future. Apply today and start your journey with us.
              </p>
              <div className="flex flex-col lg:flex-row gap-4">
                <motion.button
                  onClick={scrollToOpenPositionSection}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  See All Positions
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
                <motion.button
                  onClick={scrollToOurCultureSection}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-gray-100 text-slate-700 font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Learn About Our Culture
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
                alt="Join our team"
                className="rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
