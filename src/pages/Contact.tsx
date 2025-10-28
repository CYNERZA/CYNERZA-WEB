// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { useToast } from '@/components/ui/use-toast';
// import { Mail, Phone, MapPin } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useDispatch, useSelector } from 'react-redux';
// import { sendMessageToAdmin } from '@/featured/auth/authSlice';
// import { AppDispatch, RootState } from '@/app/store';

// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.5, delay }
// });

// const Contact: React.FC = () => {
//   useEffect(() => {
//     document.title = 'Contact Us - CYNERZA';
//   }, []);

//   const { toast } = useToast();
//   const dispatch = useDispatch<AppDispatch>()
//   const isSubmitting = useSelector((state: RootState) => state.auth.loading)
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     message: ''
//   });
//   const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(sendMessageToAdmin(formData))
//       .then((res: any) => {
//         console.log({ res })
//         if (!res.error) {
//           toast({
//             title: "Message Sent",
//             description: res.payload.message,
//           })
//           setFormData({
//             name: '',
//             email: '',
//             company: '',
//             message: ''
//           });

//         } else {
//           toast({
//             title: "Error",
//             description: res.payload,
//             variant: "destructive",
//           });
//         }
//       })

//   };

// const contactInfo = [
//   {
//     icon: <Mail className="w-5 h-5" />,
//     title: 'Email Us',
//     details: 'hello@cynerza.com',
//     link: 'mailto:hello@cynerza.com'
//   },
//   {
//     icon: <Phone className="w-5 h-5" />,
//     title: 'Call Us',
//     details: '+91 7609019765',
//     link: 'tel:+917609019765'
//   },
//   {
//     icon: <MapPin className="w-5 h-5" />,
//     title: 'Visit Us',
//     details: 'PLOT NO. 1184/1573, TOP FLOOR, JAGANNATH NAGAR, ROAD NO.14, GGP COLONY, BHUBANESWAR -751025 ',
//     link: 'https://www.google.com/maps/place/Bhubaneswar,+Odisha/@20.3010259,85.7380514,12z/data=!3m1!4b1!4m6!3m5!1s0x3a1909d2d5170aa5:0xfc580e2b68b33fa8!8m2!3d20.2959847!4d85.8246101!16zL20vMDNjenFz?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D'
//   }
// ];

//   const faqs = [
//     {
//       q: 'How do I get started with CYNERZA?',
//       a: "Sign up for a free account on our website, and you'll get immediate access to our basic tools and features. No credit card required."
//     },
//     {
//       q: 'Do you offer enterprise solutions?',
//       a: 'Yes, we provide custom enterprise solutions with additional features, support, and security options. Contact our sales team for details.'
//     },
//     {
//       q: 'Is CYNERZA available worldwide?',
//       a: 'Yes, CYNERZA is available globally. Our servers are distributed around the world to ensure fast access for all users.'
//     },
//     {
//       q: 'What programming languages do you support?',
//       a: 'We currently support JavaScript, TypeScript, Python, Java, Go, Ruby, and C#, with more languages being added regularly.'
//     }
//   ];

//   return (
//     // <div className="w-full">
//     //   <section className="py-2">
//     //     <section className="py-0">
//     //       <div className="container mx-auto px-4">
//     //         <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto text-center">
//     //           <motion.h2 {...fadeUp(0.2)} className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-clip-text 
//     //               text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
//     //             Get in <span className="gradient-text">Touch</span>
//     //           </motion.h2>
//     //           <motion.p {...fadeUp(0.3)} className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
//     //             Have questions or want to learn more? Reach out to our team and we&apos;ll get back to you shortly.
//     //           </motion.p>
//     //         </motion.div>

//     //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
//     //           {contactInfo.map((item, index) => (
//     //             <motion.a
//     //               key={index}
//     //               {...fadeUp(index * 0.1)}
//     //               href={item.link}
//     //               className="gradient-text glass-effect rounded-xl p-6 text-center transition-transform hover:scale-105"
//     //               target={item.title === 'Visit Us' ? '_blank' : undefined}
//     //               rel={item.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
//     //             >
//     //               <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-cynerza-purple/10 text-cynerza-purple">
//     //                 {item.icon}
//     //               </div>
//     //               <h3 className="text-lg font-bold mb-2">{item.title}</h3>
//     //               <p className="text-gray-800 dark:text-gray-400">{item.details}</p>
//     //             </motion.a>
//     //           ))}
//     //         </div>

//     //         <motion.div {...fadeUp(0.4)} className="max-w-3xl mx-auto">
//     //           <div className="glass-effect rounded-2xl overflow-hidden">
//     //             <div className="p-8">
//     //               <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-clip-text 
//     //               text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white
//     //                dark:to-gray-300 text-center">Send Us a Message</h2>

//     //               <form onSubmit={handleSubmit}>
//     //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//     //                   <div>
//     //                     <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-400 mb-1">
//     //                       Your Name
//     //                     </label>
//     //                     <input
//     //                       type="text"
//     //                       id="name"
//     //                       name="name"
//     //                       value={formData.name}
//     //                       onChange={handleChange}
//     //                       required
//     //                       className="focus:outline-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cynerza-purple focus:border-cynerza-purple"
//     //                     />
//     //                   </div>
//     //                   <div>
//     //                     <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-400 mb-1">
//     //                       Email Address
//     //                     </label>
//     //                     <input
//     //                       type="email"
//     //                       id="email"
//     //                       name="email"
//     //                       value={formData.email}
//     //                       onChange={handleChange}
//     //                       required
//     //                       className="focus:outline-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cynerza-purple focus:border-cynerza-purple"
//     //                     />
//     //                   </div>
//     //                 </div>

//     //                 <div className="mb-6">
//     //                   <label htmlFor="company" className="block text-sm font-medium text-gray-800 dark:text-gray-400 mb-1">
//     //                     Company (Optional)
//     //                   </label>
//     //                   <input
//     //                     type="text"
//     //                     id="company"
//     //                     name="company"
//     //                     value={formData.company}
//     //                     onChange={handleChange}
//     //                     className="focus:outline-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cynerza-purple focus:border-cynerza-purple"
//     //                   />
//     //                 </div>

//     //                 <div className="mb-6">
//     //                   <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-gray-400 mb-1">
//     //                     Your Message
//     //                   </label>
//     //                   <textarea
//     //                     id="message"
//     //                     name="message"
//     //                     rows={5}
//     //                     value={formData.message}
//     //                     onChange={handleChange}
//     //                     required
//     //                     className="focus:outline-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cynerza-purple focus:border-cynerza-purple"
//     //                   ></textarea>
//     //                 </div>

//     //                 <Button
//     //                   type="submit"
//     //                   className="w-full bg-cynerza-purple hover:bg-cynerza-purple/90"
//     //                   disabled={isSubmitting}
//     //                 >
//     //                   {isSubmitting ? 'Sending...' : 'Send Message'}
//     //                 </Button>
//     //               </form>
//     //             </div>
//     //           </div>
//     //         </motion.div>
//     //       </div>
//     //     </section>

//     //     <section className="py-8 glass-effect-light mt-6">
//     //       <div className="container mx-auto px-4 text-center">
//     //         <motion.h2 {...fadeUp(0)} className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-clip-text 
//     //               text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
//     //           Frequently Asked Questions
//     //         </motion.h2>
//     //         <motion.p {...fadeUp(0.1)} className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
//     //           Can't find what you're looking for? Contact us for more information.
//     //         </motion.p>

//     //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//     //           {faqs.map((faq, index) => (
//     //             <motion.div
//     //               key={index}
//     //               {...fadeUp(index * 0.1)}
//     //               className="glass-effect rounded-xl p-6 text-left"
//     //             >
//     //               <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">{faq.q}</h3>
//     //               <p className="text-gray-800 dark:text-gray-400">{faq.a}</p>
//     //             </motion.div>
//     //           ))}
//     //         </div>
//     //       </div>
//     //     </section>
//     //   </section>
//     // </div>

//     <div className="w-full relative pt-24 md:pt-28 px-4 sm:px-6 lg:px-8">
//       {/* Purple gradient background overlay */}
//       {isDarkMode &&
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20 z-5" />
//       }
//       {/* Content wrapper */}
//       <div className="relative z-10">
//         <section className="py-2">
//           <section className="py-0">
//             <div className="container mx-auto px-4">
//               <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto text-center">
//                 <motion.h2 {...fadeUp(0.2)} className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-clip-text 
//                             text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
//                   Get in <span className="gradient-text">Touch</span>
//                 </motion.h2>
//                 <motion.p {...fadeUp(0.3)} className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
//                   Have questions or want to learn more? Reach out to our team and we&apos;ll get back to you shortly.
//                 </motion.p>
//               </motion.div>

//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
//                 {contactInfo.map((item, index) => (
//                   <motion.a
//                     key={index}
//                     {...fadeUp(index * 0.1)}
//                     href={item.link}
//                     className="gradient-text p-6 glass-effect
//                                  text-center transition-transform 
//                                 hover:scale-105"
//                     target={item.title === 'Visit Us' ? '_blank' : undefined}
//                     rel={item.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
//                   >
//                     <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-cynerza-purple/10 text-cynerza-purple">
//                       {item.icon}
//                     </div>
//                     <h3 className="text-lg font-bold mb-2">{item.title}</h3>
//                     <p className="text-gray-800 dark:text-gray-400">{item.details}</p>
//                   </motion.a>
//                 ))}
//               </div>

//               <motion.div {...fadeUp(0.4)} className="max-w-3xl mx-auto">
//                 <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm 
//                       rounded-2xl overflow-hidden">
//                   <div className="p-8">
//                     <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-clip-text 
//                                 text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white
//                                  dark:to-gray-300 text-center">Send Us a Message</h2>

//                     <form onSubmit={handleSubmit}>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                         <div>
//                           <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-400 mb-1">
//                             Your Name
//                           </label>
//                           <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                             className="focus:outline-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cynerza-purple focus:border-cynerza-purple"
//                           />
//                         </div>
//                         <div>
//                           <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-400 mb-1">
//                             Email Address
//                           </label>
//                           <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                             className="focus:outline-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cynerza-purple focus:border-cynerza-purple"
//                           />
//                         </div>
//                       </div>

//                       <div className="mb-6">
//                         <label htmlFor="company" className="block text-sm font-medium text-gray-800 dark:text-gray-400 mb-1">
//                           Company (Optional)
//                         </label>
//                         <input
//                           type="text"
//                           id="company"
//                           name="company"
//                           value={formData.company}
//                           onChange={handleChange}
//                           className="focus:outline-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cynerza-purple focus:border-cynerza-purple"
//                         />
//                       </div>

//                       <div className="mb-6">
//                         <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-gray-400 mb-1">
//                           Your Message
//                         </label>
//                         <textarea
//                           id="message"
//                           name="message"
//                           rows={5}
//                           value={formData.message}
//                           onChange={handleChange}
//                           required
//                           className="focus:outline-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cynerza-purple focus:border-cynerza-purple"
//                         ></textarea>
//                       </div>

//                       <Button
//                         type="submit"
//                         className="w-full bg-cynerza-purple hover:bg-cynerza-purple/90"
//                         disabled={isSubmitting}
//                       >
//                         {isSubmitting ? 'Sending...' : 'Send Message'}
//                       </Button>
//                     </form>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           <section className="relative py-8 glass-effect-light mt-6">
//             {/* Purple gradient background overlay for FAQ section */}
//             {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20" /> */}

//             <div className="container mx-auto px-4 text-center relative z-10">
//               <motion.h2 {...fadeUp(0)} className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-clip-text 
//                         text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
//                 Frequently Asked Questions
//               </motion.h2>
//               <motion.p {...fadeUp(0.1)} className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
//                 Can't find what you're looking for? Contact us for more information.
//               </motion.p>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//                 {faqs.map((faq, index) => (
//                   <motion.div
//                     key={index}
//                     {...fadeUp(index * 0.1)}
//                     className="
//                                 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
//                                 rounded-xl p-6 text-left"
//                   >
//                     <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">{faq.q}</h3>
//                     <p className="text-gray-800 dark:text-gray-400">{faq.a}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </section>
//       </div>
//     </div>

//   );
// };

// export default Contact;



import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllIndustries } from "@/featured/industry/industrySlice";
import { AppDispatch, RootState } from "@/app/store";
import { fetchAllRegions } from "@/featured/region/regionSlice";
import { sendMessageToAdmin } from "@/featured/auth/authSlice";
import { useToast } from '@/components/ui/use-toast';



// console.log(industries)
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    region: "",
    industry: "",
    message: "",
    // consent: false,
  });
  const industries = useSelector((state: RootState) => state.industry.industries);
  const regions = useSelector((state: RootState) => state.region.regions);
  const isSubmitting = useSelector((state: RootState) => state.auth.loading)
  const dispatch = useDispatch<AppDispatch>();
  const { toast } = useToast()
  useEffect(() => {
    if (!industries.length) dispatch(fetchAllIndustries());
    if (!regions.length) dispatch(fetchAllRegions());
  }, [dispatch]);

  console.log("regios: ", regions)
  // make options based on above data
  const regionOptions = regions.map((reg: any) => reg.country);
  const industryOptions = industries.map((ind: any) => ind.name);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target;
    const { name, value, type } = target;
    const checked = target instanceof HTMLInputElement ? target.checked : false;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(sendMessageToAdmin(formData))
      .then((res: any) => {
        console.log({ res });
        if (!res.error) {
          toast({
            title: "Message Sent",
            description: res.payload.message,
          });
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            organization: "",
            region: "",
            industry: "",
            message: "",
          });
        } else {
          toast({
            title: "Error",
            description: res.payload || "Something went wrong",
            variant: "destructive",
          });
        }
      })
      .catch((error) => {
        // Handle any dispatch errors
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      });
  };


  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email Us',
      details: 'hello@cynerza.com',
      link: 'mailto:hello@cynerza.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Call Us',
      details: '+91 7609019765',
      link: 'tel:+917609019765'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Visit Us',
      details: 'PLOT NO. 1184/1573, TOP FLOOR, JAGANNATH NAGAR, ROAD NO.14, GGP COLONY, BHUBANESWAR -751025',
      link: 'https://www.google.com/maps/place/Bhubaneswar,+Odisha/@20.3010259,85.7380514,12z/data=!3m1!4b1!4m6!3m5!1s0x3a1909d2d5170aa5:0xfc580e2b68b33fa8!8m2!3d20.2959847!4d85.8246101!16zL20vMDNjenFz?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Background image - Person on phone/customer service */}
        {/* <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      ></div> */}

      {/* Background image - Mobile Responsive */}
{/* Background image - Mobile Responsive Fixed */}
<div
  className="absolute inset-0 w-full h-full z-0"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "65% center", // Mobile-friendly position
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll", // Critical for mobile
  }}
  aria-hidden="true"
>
  </div>
 

{/* Responsive overlay - Pure CSS solution */}
<div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/70 to-black/65 md:bg-gradient-to-r md:from-black/95 md:via-black/85 md:to-transparent"></div>



      {/* Dark overlay gradient from left to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent z-10"></div>

      {/* Content container */}
      <div className="relative flex w-full min-h-screen z-20">
        {/* Form Section */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 px-6 lg:px-16 py-12">
          <div className="max-w-xl mx-auto">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 flex gap-3 items-center">
              <svg
                width={32}
                height={32}
                fill="none"
                stroke="currentColor"
                className="text-purple-500"
              >
                <rect width="24" height="24" x="4" y="4" rx="5" strokeWidth={2.5} />
                <path d="M9 13h14M9 18h10" strokeWidth={2} strokeLinecap="round" />
              </svg>
              Contact Us
            </h2>
            <p className="text-gray-400 mb-10 text-base md:text-lg leading-relaxed">
              {/* upadte text */}
              Interested in our services? Fill out the form below and our team will get back to you shortly.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    First name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm text-white border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all placeholder-gray-500"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Last name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm text-white border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all placeholder-gray-500"
                    placeholder="Enter last name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm text-white border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all placeholder-gray-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm text-white border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all placeholder-gray-500"
                    placeholder="Company name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Region
                </label>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  className="w-full px-4 py-3  rounded-lg bg-white/5 backdrop-blur-sm text-white border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
                >
                  <option value="" disabled selected hidden>Select an option</option>
                  {regionOptions.map((reg) => (
                    <option key={reg} value={reg} className="bg-gray-900 ">
                      {reg}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Industry
                </label>
                <select

                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm text-white border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
                >
                  <option value="" disabled selected hidden>Select an option</option>
                  {industryOptions.map((ind) => (
                    <option key={ind} value={ind} className="bg-gray-900">
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  How can we help you?*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm text-white border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all placeholder-gray-500 resize-none"
                  placeholder="Describe your project or inquiry..."
                ></textarea>
              </div>
              <div className="space-y-3 text-sm">
                <label className="flex items-start gap-3 text-gray-300 cursor-pointer hover:text-white transition">
                  <input
                    type="checkbox"
                    name="consent"
                    // checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-0.5 w-4 h-4 accent-purple-600 focus:ring-purple-500"
                  />
                  <span>
                    I consent to processing of my personal data entered above
                    for contact.*
                  </span>
                </label>
                {/* <label className="flex items-start gap-3 text-gray-300 cursor-pointer hover:text-white transition">
                  <input
                    type="checkbox"
                    name="updatesConsent"
                    checked={formData.updatesConsent}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 accent-purple-600 focus:ring-purple-500"
                  />
                  <span>
                    I would like to receive details about products, services and
                    events.
                  </span>
                </label> */}
              </div>
              <div className="flex items-center justify-center">
                <Button
                  type="submit"
                  className="relative flex items-center px-5 py-5 bg-gradient-to-r from-cynerza-purple to-cynerza-blue text-white text-lg font-semibold rounded-xl transition-all
                                   duration-200 hover:shadow-lg hover:shadow-cynerza-purple/30
                                   bg-cynerza-purple hover:bg-cynerza-purple/90 h-12 "
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Right section - intentionally empty for background visibility */}
        <div className="hidden lg:block w-1/2"></div>
      </div>

      {/* Contact Information Section - Inside background image area */}
      <div className="relative z-20  px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg">
              We're here to help. Reach out to us through any of these channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target={item.title === 'Visit Us' ? '_blank' : undefined}
                rel={item.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-purple-600/20 text-purple-400 group-hover:bg-purple-600/30 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {item.details}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
