// import React, { useEffect, useState } from "react";
// import { AnimatePresence, motion } from 'framer-motion';
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
// import { cn } from "@/lib/utils";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "@/app/store";
// import { fetchBlogPosts } from "@/featured/blog/blogSlice";
// import { X } from "lucide-react";
// import { Menu as MobileMenu } from "lucide-react";

// function Navbar({ className }: { className?: string }) {
//   const [isHoveringLogo, setIsHoveringLogo] = useState(false);
//   const [isTappedLogo, setIsTappedLogo] = useState(false);
//   const [displayText, setDisplayText] = useState('');
//   const [typingComplete, setTypingComplete] = useState(false);
//   const [isRotating, setIsRotating] = useState(false);
//   const [active, setActive] = useState<string | null>(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const textToType = 'CYNERZA';
//   const typingSpeed = 150;
//   const eraseSpeed = 50;
//   const location = useLocation();

//   useEffect(() => {
//     let timeout: NodeJS.Timeout;
//     let currentIndex = 0;
//     let isTyping = true;

//     const typeWriter = () => {
//       if (isTyping) {
//         if (currentIndex <= textToType.length) {
//           setDisplayText(textToType.substring(0, currentIndex));
//           currentIndex++;
//           timeout = setTimeout(typeWriter, typingSpeed);
//         } else {
//           isTyping = false;
//           setTypingComplete(true);
//           timeout = setTimeout(typeWriter, 2000);
//         }
//       } else {
//         if (currentIndex >= 0) {
//           setDisplayText(textToType.substring(0, currentIndex));
//           currentIndex--;
//           timeout = setTimeout(typeWriter, eraseSpeed);
//         } else {
//           isTyping = true;
//           setTypingComplete(false);
//           setIsTappedLogo(false);
//           setIsRotating(false);
//         }
//       }
//     };

//     const shouldAnimate = window.innerWidth >= 768 ? isHoveringLogo : isTappedLogo;

//     if (shouldAnimate) {
//       setIsRotating(true);
//       typeWriter();
//     } else if (displayText) {
//       let currentIndex = displayText.length;
//       const erase = () => {
//         if (currentIndex >= 0) {
//           setDisplayText(textToType.substring(0, currentIndex));
//           currentIndex--;
//           timeout = setTimeout(erase, eraseSpeed);
//         } else {
//           setDisplayText('');
//           setTypingComplete(false);
//           setIsTappedLogo(false);
//           setIsRotating(false);
//         }
//       };
//       erase();
//     }

//     return () => clearTimeout(timeout);
//   }, [isHoveringLogo, isTappedLogo]);

//   const handleLogoClick = () => {
//     if (window.innerWidth < 768) {
//       setIsTappedLogo(!isTappedLogo);
//     }
//   };

//   const dispatch = useDispatch<AppDispatch>();
//   const {
//     blogPosts,
//     loading
//   } = useSelector((state: RootState) => state.blog);

//   useEffect(() => {
//     const fetchData = async () => {
//       dispatch(fetchBlogPosts())
//     };

//     if (!blogPosts.length) fetchData();
//   }, [dispatch]);

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'AI Tools', path: '/ai-tools' },
//     { name: 'Services', path: '/services' },
//     { name: 'Blog', path: '/blogs' },
//     { name: 'Team', path: '/team' },
//     { name: 'About', path: '/about' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   const services = [
//     {
//       title: 'SaaS Product Development',
//       link: "/saas-product-development",
//       description: 'Crafting beautiful, high-performance SaaS applications tailored to your business needs.',
//     },
//     {
//       title: 'Custom LLM API',
//       link: "/custom-llm-api",
//       description: 'Building custom Large Language Model APIs for your specific AI requirements.',
//     },
//     {
//       title: 'Automation Solutions',
//       link: "/automation-solutions",
//       description: 'Leveraging artificial intelligence to automate processes, enhance efficiency, and unlock new possibilities.',
//     },
//     {
//       title: 'AI & ML Solution',
//       link: "/ai-ml-solution",
//       description: 'Advanced AI and Machine Learning solutions to transform your business operations.',
//     },
//     {
//       title: 'Cloud & DevOps Engineering',
//       link: "/cloud-devops-engineering",
//       description: 'Building scalable and resilient infrastructure with modern cloud technologies and DevOps practices.',
//     },
//     {
//       title: 'IT Service Management',
//       link: "/it-service-management",
//       description: 'Comprehensive IT service management to optimize your technology infrastructure.',
//     },
//   ];

//   return (
//     <>
//       {/* Blur overlay for the entire page except navbar and mobile menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             onClick={() => setMobileMenuOpen(false)}
//           />
//         )}
//       </AnimatePresence>

//       <div className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}>
//         <Menu setActive={setActive}>
//           {/* Logo */}
//           <div className={cn("max-w-2xl z-50", className)}>
//             {/* Logo for desktop */}
//             <div
//               className="hidden md:flex items-center space-x-2"
//               onMouseEnter={() => setIsHoveringLogo(true)}
//               onMouseLeave={() => setIsHoveringLogo(false)}
//             >
//               <motion.div
//                 animate={{ rotate: isRotating ? 360 : 0 }}
//                 transition={{ duration: 0.6, ease: "easeInOut" }}
//               >
//                 <img
//                   src="./CYNERZA_LOGO_2.jpeg"
//                   alt="Logo"
//                   className="w-12 h-12 rounded-full cursor-pointer"
//                 />
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: -10 }}
//                 animate={{ opacity: isHoveringLogo ? 1 : 0, x: isHoveringLogo ? 0 : -10 }}
//                 transition={{ duration: 0.3 }}
//                 className="font-bold text-xl tracking-wider"
//               >
//                 <span className="relative dark:text-slate-200 text-slate-900">
//                   {displayText}
//                   {!typingComplete && isHoveringLogo && (
//                     <motion.span
//                       animate={{ opacity: [0, 1, 0] }}
//                       transition={{ repeat: Infinity, duration: 0.8 }}
//                       className="absolute right-0 top-0 h-full w-0.5 dark:bg-slate-200 bg-slate-900"
//                     />
//                   )}
//                 </span>
//               </motion.div>
//             </div>

//             {/* Logo for mobile */}
//             <div className="md:hidden flex items-center space-x-2">
//               <motion.div
//                 animate={{ rotate: isRotating ? 360 : 0 }}
//                 transition={{ duration: 0.6, ease: "easeInOut" }}
//               >
//                 <img
//                   src="./CYNERZA_LOGO_2.jpeg"
//                   alt="Logo"
//                   className="w-12 h-12 rounded-full cursor-pointer"
//                   onClick={handleLogoClick}
//                 />
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: -10 }}
//                 animate={{ opacity: isTappedLogo ? 1 : 0, x: isTappedLogo ? 0 : -10 }}
//                 transition={{ duration: 0.3 }}
//                 className="font-bold text-xl tracking-wider"
//               >
//                 <span className="relative text-slate-900 dark:text-slate-200 text-sm">
//                   {displayText}
//                   {!typingComplete && isTappedLogo && (
//                     <motion.span
//                       animate={{ opacity: [0, 1, 0] }}
//                       transition={{ repeat: Infinity, duration: 0.8 }}
//                       className="absolute right-0 top-0 h-full w-0.5 dark:bg-slate-200 bg-slate-900"
//                     />
//                   )}
//                 </span>
//               </motion.div>
//             </div>
//           </div>

//           <div className="hidden sm:flex space-x-4 md:space-x-6">
//             <NavLink to="/" className={
//               ({ isActive }) => `${isActive && "border-b-2 border-cynerza-purple"}`
//             }>
//               <MenuItem setActive={setActive} active={active} item="Home" />
//             </NavLink>
//             <NavLink to="/ai-tools" className={
//               ({ isActive }) => `${isActive && "border-b-2 border-cynerza-purple"}`
//             }>
//               <MenuItem setActive={setActive} active={active} item="AI Tools" />
//             </NavLink>
//             <NavLink to={"/services"} className={
//               ({ isActive }) => `${isActive && "border-b-2 border-cynerza-purple"}`
//             }>
//               <MenuItem setActive={setActive} active={active} item="Services">
//                 <div className="text-sm lg:grid grid-cols-2 md:p-2 p-1">
//                   {services.map((service, idx) => (
//                     <ProductItem
//                       key={idx}
//                       href={service.link}
//                       title={service.title}
//                       description={service.description}
//                     />
//                   ))}
//                 </div>
//               </MenuItem>
//             </NavLink>
//             <NavLink to={"/blogs"} className={
//               ({ isActive }) => `${isActive && "border-b-2 border-cynerza-purple"}`
//             }>
//               <MenuItem setActive={setActive} active={active} item="Blog"
//                 className={`hidden ${!loading && "sm:block"}`}>
//                 <div className="text-sm lg:grid grid-cols-2 space-y-2 md:p-2 p-0">
//                   {blogPosts.slice(0, 4).map((blog) => (
//                     <ProductItem
//                       key={blog._id}
//                       title={blog.title}
//                       href={`/blogs/${blog.slug}`}
//                       src={blog.thumbImage}
//                       description={blog.description}
//                     />
//                   ))}
//                 </div>
//               </MenuItem>
//               <MenuItem setActive={setActive} active={active} item="Blog"
//                 className={`block ${loading ? "sm:block" : "sm:hidden"}`} />
//             </NavLink>
//             <MenuItem setActive={setActive} active={active} item="More">
//               <div className="flex flex-col space-y-4 text-sm md:p-4 p-2">
//                 <HoveredLink to="/team">Team</HoveredLink>
//                 <HoveredLink to="/about">About</HoveredLink>
//                 <HoveredLink to="/contact">Contact</HoveredLink>
//               </div>
//             </MenuItem>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="sm:hidden p-2 text-gray-100 hover:bg-white/10 rounded-lg ml-2"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? <X size={24} className='text-slate-900 dark:text-slate-200' />
//               : <MobileMenu size={24} className='text-slate-900 dark:text-slate-200' />}
//           </button>
//         </Menu>

//         {/* Mobile Menu Overlay */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               className="fixed inset-x-0 top-24 z-40 md:hidden"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.2 }}
//             >
//               {/* Mobile Menu Content */}
//               <motion.div
//                 className="mx-4 bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg rounded-2xl border border-white/15 shadow-xl overflow-hidden"
//                 initial={{ scale: 0.95 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0.95 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <div className="p-4">
//                   {navItems.map((item, index) => (
//                     <motion.div
//                       key={item.path}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.05 }}
//                     >
//                       <Link
//                         to={item.path}
//                         onClick={() => setMobileMenuOpen(false)}
//                         className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === item.path
//                           ? 'text-cynerza-purple dark:text-cynerza-purple bg-cynerza-purple/10 dark:bg-cynerza-purple/20 font-bold'
//                           : 'text-gray-700 dark:text-gray-300 hover:text-cynerza-purple dark:hover:text-cynerza-purple hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
//                           }`}
//                       >
//                         <div className="flex items-center">
//                           {location.pathname === item.path && (
//                             <div className="w-1.5 h-4 bg-cynerza-purple rounded-full mr-3"></div>
//                           )}
//                           <span>{item.name}</span>
//                         </div>
//                       </Link>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </>
//   );
// }

// export default Navbar;

// pk for desktop

// import React, { useEffect, useState } from "react";
// import { AnimatePresence, motion } from 'framer-motion';
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
// import { cn } from "@/lib/utils";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "@/app/store";
// import { fetchBlogPosts } from "@/featured/blog/blogSlice";
// import { X, ChevronDown } from "lucide-react";
// import { Menu as MobileMenu } from "lucide-react";

// function Navbar({ className }: { className?: string }) {
//   const [isHoveringLogo, setIsHoveringLogo] = useState(false);
//   const [isTappedLogo, setIsTappedLogo] = useState(false);
//   const [displayText, setDisplayText] = useState('');
//   const [typingComplete, setTypingComplete] = useState(false);
//   const [isRotating, setIsRotating] = useState(false);
//   const [active, setActive] = useState<string | null>(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [whatWeDoOpen, setWhatWeDoOpen] = useState(false); // New state for click dropdown

//   const textToType = 'CYNERZA';
//   const typingSpeed = 150;
//   const eraseSpeed = 50;
//   const location = useLocation();

//   useEffect(() => {
//     let timeout: NodeJS.Timeout;
//     let currentIndex = 0;
//     let isTyping = true;

//     const typeWriter = () => {
//       if (isTyping) {
//         if (currentIndex <= textToType.length) {
//           setDisplayText(textToType.substring(0, currentIndex));
//           currentIndex++;
//           timeout = setTimeout(typeWriter, typingSpeed);
//         } else {
//           isTyping = false;
//           setTypingComplete(true);
//           timeout = setTimeout(typeWriter, 2000);
//         }
//       } else {
//         if (currentIndex >= 0) {
//           setDisplayText(textToType.substring(0, currentIndex));
//           currentIndex--;
//           timeout = setTimeout(typeWriter, eraseSpeed);
//         } else {
//           isTyping = true;
//           setTypingComplete(false);
//           setIsTappedLogo(false);
//           setIsRotating(false);
//         }
//       }
//     };

//     const shouldAnimate = window.innerWidth >= 768 ? isHoveringLogo : isTappedLogo;

//     if (shouldAnimate) {
//       setIsRotating(true);
//       typeWriter();
//     } else if (displayText) {
//       let currentIndex = displayText.length;
//       const erase = () => {
//         if (currentIndex >= 0) {
//           setDisplayText(textToType.substring(0, currentIndex));
//           currentIndex--;
//           timeout = setTimeout(erase, eraseSpeed);
//         } else {
//           setDisplayText('');
//           setTypingComplete(false);
//           setIsTappedLogo(false);
//           setIsRotating(false);
//         }
//       };
//       erase();
//     }

//     return () => clearTimeout(timeout);
//   }, [isHoveringLogo, isTappedLogo]);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (whatWeDoOpen) {
//         setWhatWeDoOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [whatWeDoOpen]);

//   const handleLogoClick = () => {
//     if (window.innerWidth < 768) {
//       setIsTappedLogo(!isTappedLogo);
//     }
//   };

//   const dispatch = useDispatch<AppDispatch>();
//   const {
//     blogPosts,
//     loading
//   } = useSelector((state: RootState) => state.blog);

//   useEffect(() => {
//     const fetchData = async () => {
//       dispatch(fetchBlogPosts())
//     };

//     if (!blogPosts.length) fetchData();
//   }, [dispatch]);

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'AI Tools', path: '/ai-tools' },
//     { name: 'What We Do', path: '/what-we-do' },
//     { name: 'Blog', path: '/blogs' },
//     { name: 'Team', path: '/team' },
//     { name: 'About', path: '/about' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   return (
//     <>
//       {/* Blur overlay for the entire page except navbar and mobile menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             onClick={() => setMobileMenuOpen(false)}
//           />
//         )}
//       </AnimatePresence>

//       <div className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}>
//         <Menu setActive={setActive}>
//           {/* Logo */}
//           <div className={cn("max-w-2xl z-50", className)}>
//             {/* Logo for desktop */}
//             <div
//               className="hidden md:flex items-center space-x-2"
//               onMouseEnter={() => setIsHoveringLogo(true)}
//               onMouseLeave={() => setIsHoveringLogo(false)}
//             >
//               <motion.div
//                 animate={{ rotate: isRotating ? 360 : 0 }}
//                 transition={{ duration: 0.6, ease: "easeInOut" }}
//               >
//                 <img
//                   src="./CYNERZA_LOGO_2.jpeg"
//                   alt="Logo"
//                   className="w-12 h-12 rounded-full cursor-pointer"
//                 />
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: -10 }}
//                 animate={{ opacity: isHoveringLogo ? 1 : 0, x: isHoveringLogo ? 0 : -10 }}
//                 transition={{ duration: 0.3 }}
//                 className="font-bold text-xl tracking-wider"
//               >
//                 <span className="relative dark:text-slate-200 text-slate-900">
//                   {displayText}
//                   {!typingComplete && isHoveringLogo && (
//                     <motion.span
//                       animate={{ opacity: [0, 1, 0] }}
//                       transition={{ repeat: Infinity, duration: 0.8 }}
//                       className="absolute right-0 top-0 h-full w-0.5 dark:bg-slate-200 bg-slate-900"
//                     />
//                   )}
//                 </span>
//               </motion.div>
//             </div>

//             {/* Logo for mobile */}
//             <div className="md:hidden flex items-center space-x-2">
//               <motion.div
//                 animate={{ rotate: isRotating ? 360 : 0 }}
//                 transition={{ duration: 0.6, ease: "easeInOut" }}
//               >
//                 <img
//                   src="./CYNERZA_LOGO_2.jpeg"
//                   alt="Logo"
//                   className="w-12 h-12 rounded-full cursor-pointer"
//                   onClick={handleLogoClick}
//                 />
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: -10 }}
//                 animate={{ opacity: isTappedLogo ? 1 : 0, x: isTappedLogo ? 0 : -10 }}
//                 transition={{ duration: 0.3 }}
//                 className="font-bold text-xl tracking-wider"
//               >
//                 <span className="relative text-slate-900 dark:text-slate-200 text-sm">
//                   {displayText}
//                   {!typingComplete && isTappedLogo && (
//                     <motion.span
//                       animate={{ opacity: [0, 1, 0] }}
//                       transition={{ repeat: Infinity, duration: 0.8 }}
//                       className="absolute right-0 top-0 h-full w-0.5 dark:bg-slate-200 bg-slate-900"
//                     />
//                   )}
//                 </span>
//               </motion.div>
//             </div>
//           </div>

//           <div className="hidden sm:flex space-x-4 md:space-x-6">
//             <NavLink to="/" className={
//               ({ isActive }) => `${isActive && "border-b-2 border-cynerza-purple"}`
//             }>
//               <MenuItem setActive={setActive} active={active} item="Home" />
//             </NavLink>
//             <NavLink to="/ai-tools" className={
//               ({ isActive }) => `${isActive && "border-b-2 border-cynerza-purple"}`
//             }>
//               <MenuItem setActive={setActive} active={active} item="AI Tools" />
//             </NavLink>

//             {/* What We Do - Click Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setWhatWeDoOpen(!whatWeDoOpen)}
//                 className="relative z-10 font-semibold transition-colors duration-300
//                   text-sm sm:text-base px-1 py-2 rounded-md text-slate-900 dark:text-slate-200 
//                   hover:text-white hover:bg-cynerza-purple/80 hover:shadow-md dark:hover:bg-cynerza-purple/80 dark:hover:text-white
//                   flex items-center gap-1"
//               >
//                 What We Do
//                 <motion.div
//                   animate={{ rotate: whatWeDoOpen ? 180 : 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <ChevronDown size={16} />
//                 </motion.div>
//               </button>

//               {/* Simple Dropdown with just two options */}
//               <AnimatePresence>
//                 {whatWeDoOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95, y: -10 }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.95, y: -10 }}
//                     transition={{ duration: 0.2, ease: "easeOut" }}
//                     className="absolute top-12 left-30 transform -translate-x-1/2 mt-2  p-4
//                       bg-gray-950/90 dark:bg-black/90 backdrop-blur-md rounded-xl overflow-hidden 
//                       border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
//                   >
//                     <div className=" flex items-center justify-center flex-col">
//                       <Link
//                         to="/industries"
//                         onClick={() => setWhatWeDoOpen(false)}
//                         className="block px-4 py-3 text-white hover:bg-cynerza-purple/80 
//                           transition-colors duration-200 font-medium hover:rounded-md"
//                       >
//                         Industries
//                       </Link>
//                       <Link
//                         to="/services"
//                         onClick={() => setWhatWeDoOpen(false)}
//                         className="block px-4 py-3 text-white hover:bg-cynerza-purple/80 
//                           transition-colors duration-200 font-medium hover:rounded-md"
//                       >
//                         Services
//                       </Link>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <NavLink to={"/blogs"} className={
//               ({ isActive }) => `${isActive && "border-b-2 border-cynerza-purple"}`
//             }>
//               <MenuItem setActive={setActive} active={active} item="Blog"
//                 className={`hidden ${!loading && "sm:block"}`}>
//                 <div className="text-sm lg:grid grid-cols-2 space-y-2 md:p-2 p-0">
//                   {blogPosts.slice(0, 4).map((blog) => (
//                     <ProductItem
//                       key={blog._id}
//                       title={blog.title}
//                       href={`/blogs/${blog.slug}`}
//                       src={blog.thumbImage}
//                       description={blog.description}
//                     />
//                   ))}
//                 </div>
//               </MenuItem>
//               <MenuItem setActive={setActive} active={active} item="Blog"
//                 className={`block ${loading ? "sm:block" : "sm:hidden"}`} />
//             </NavLink>
//             <MenuItem setActive={setActive} active={active} item="More">
//               <div className="flex flex-col space-y-4 text-sm md:p-4 p-2">
//                 <HoveredLink to="/team">Team</HoveredLink>
//                 <HoveredLink to="/about">About</HoveredLink>
//                 <HoveredLink to="/contact">Contact</HoveredLink>
//               </div>
//             </MenuItem>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="sm:hidden p-2 text-gray-100 hover:bg-white/10 rounded-lg ml-2"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? <X size={24} className='text-slate-900 dark:text-slate-200' />
//               : <MobileMenu size={24} className='text-slate-900 dark:text-slate-200' />}
//           </button>
//         </Menu>

//         {/* Mobile Menu Overlay */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               className="fixed inset-x-0 top-24 z-40 md:hidden"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.2 }}
//             >
//               {/* Mobile Menu Content */}
//               <motion.div
//                 className="mx-4 bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg rounded-2xl border border-white/15 shadow-xl overflow-hidden"
//                 initial={{ scale: 0.95 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0.95 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <div className="p-4">
//                   {navItems.map((item, index) => (
//                     <motion.div
//                       key={item.path}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.05 }}
//                     >
//                       <Link
//                         to={item.path}
//                         onClick={() => setMobileMenuOpen(false)}
//                         className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === item.path
//                           ? 'text-cynerza-purple dark:text-cynerza-purple bg-cynerza-purple/10 dark:bg-cynerza-purple/20 font-bold'
//                           : 'text-gray-700 dark:text-gray-300 hover:text-cynerza-purple dark:hover:text-cynerza-purple hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
//                           }`}
//                       >
//                         <div className="flex items-center">
//                           {location.pathname === item.path && (
//                             <div className="w-1.5 h-4 bg-cynerza-purple rounded-full mr-3"></div>
//                           )}
//                           <span>{item.name}</span>
//                         </div>
//                       </Link>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </>
//   );
// }

// export default Navbar;


// test


import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, useLocation } from "react-router-dom";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { fetchBlogPosts } from "@/featured/blog/blogSlice";
import { X, ChevronDown } from "lucide-react";
import { Menu as MobileMenu } from "lucide-react";

function Navbar({ className }: { className?: string }) {
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [isTappedLogo, setIsTappedLogo] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false); // Desktop dropdown state
  const [moreOpen, setMoreOpen] = useState(false); // Desktop dropdown state
  const [mobileWhatWeDoOpen, setMobileWhatWeDoOpen] = useState(false); // Mobile dropdown state

  const textToType = 'CYNERZA';
  const typingSpeed = 150;
  const eraseSpeed = 50;
  const location = useLocation();

  // if page is contact us then change all navbar items text color to white in only large screens
  const isContactUsPage = location.pathname === '/contact';

  // Check if Industries or Services are active (for dropdown items only)
  const isIndustriesActive = location.pathname === '/industries' || location.pathname.startsWith('/industries/');
  const isServicesActive = location.pathname === '/services' || location.pathname.startsWith('/services/');

  const isTeamActive = location.pathname === '/team' || location.pathname.startsWith('/team/');
  const isAboutActive = location.pathname === '/about' || location.pathname.startsWith('/about/');
  const isContactActive = location.pathname === '/contact' || location.pathname.startsWith('/contact/');

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    let isTyping = true;

    const typeWriter = () => {
      if (isTyping) {
        if (currentIndex <= textToType.length) {
          setDisplayText(textToType.substring(0, currentIndex));
          currentIndex++;
          timeout = setTimeout(typeWriter, typingSpeed);
        } else {
          isTyping = false;
          setTypingComplete(true);
          timeout = setTimeout(typeWriter, 2000);
        }
      } else {
        if (currentIndex >= 0) {
          setDisplayText(textToType.substring(0, currentIndex));
          currentIndex--;
          timeout = setTimeout(typeWriter, eraseSpeed);
        } else {
          isTyping = true;
          setTypingComplete(false);
          setIsTappedLogo(false);
          setIsRotating(false);
        }
      }
    };

    const shouldAnimate = window.innerWidth >= 768 ? isHoveringLogo : isTappedLogo;

    if (shouldAnimate) {
      setIsRotating(true);
      typeWriter();
    } else if (displayText) {
      let currentIndex = displayText.length;
      const erase = () => {
        if (currentIndex >= 0) {
          setDisplayText(textToType.substring(0, currentIndex));
          currentIndex--;
          timeout = setTimeout(erase, eraseSpeed);
        } else {
          setDisplayText('');
          setTypingComplete(false);
          setIsTappedLogo(false);
          setIsRotating(false);
        }
      };
      erase();
    }

    return () => clearTimeout(timeout);
  }, [isHoveringLogo, isTappedLogo]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (whatWeDoOpen) {
        setWhatWeDoOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [whatWeDoOpen]);

  const handleLogoClick = () => {
    if (window.innerWidth < 768) {
      setIsTappedLogo(!isTappedLogo);
    }
  };

  const dispatch = useDispatch<AppDispatch>();
  const {
    blogPosts,
    loading
  } = useSelector((state: RootState) => state.blog);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchBlogPosts())
    };

    if (!blogPosts.length) fetchData();
  }, [dispatch]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'AI Tools', path: '/ai-tools' },
    { name: 'What We Do', path: '/what-we-do', hasDropdown: true },
    { name: 'Blog', path: '/blogs' },
    { name: 'Team', path: '/team' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Blur overlay for the entire page except navbar and mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className={cn("fixed top-5 inset-x-0 max-w-[44rem] mx-auto z-50 ", className)}>
        <Menu setActive={setActive}>
          {/* Logo */}
          <div className={cn("max-w-2xl z-50", className)}>
            {/* Logo for desktop */}
            <div
              className="hidden md:flex items-center space-x-2"
              onMouseEnter={() => setIsHoveringLogo(true)}
              onMouseLeave={() => setIsHoveringLogo(false)}
            >
              <motion.div
                animate={{ rotate: isRotating ? 360 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img
                  src="/logo-square-96.png"
                  alt="CYNERZA Logo"
                  className="w-12 h-12 object-contain cursor-pointer"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isHoveringLogo ? 1 : 0, x: isHoveringLogo ? 0 : -10 }}
                transition={{ duration: 0.3 }}
                className="font-bold text-xl tracking-wider"
              >
                <span className={`relative brand-gradient-text`}>
                  {displayText}
                  {!typingComplete && isHoveringLogo && (
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="absolute right-0 top-0 h-full w-0.5 bg-cyan-400"
                    />
                  )}
                </span>
              </motion.div>
            </div>

            {/* Logo for mobile */}
            <div className="md:hidden flex items-center space-x-2">
              <motion.div
                animate={{ rotate: isRotating ? 360 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img
                  src="/logo-square-96.png"
                  alt="CYNERZA Logo"
                  className="w-12 h-12 object-contain cursor-pointer"
                  onClick={handleLogoClick}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isTappedLogo ? 1 : 0, x: isTappedLogo ? 0 : -10 }}
                transition={{ duration: 0.3 }}
                className="font-bold text-xl tracking-wider"
              >
                <span className={`relative brand-gradient-text text-sm`}>
                  {displayText}
                  {!typingComplete && isTappedLogo && (
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="absolute right-0 top-0 h-full w-0.5 bg-cyan-400"
                    />
                  )}
                </span>
              </motion.div>
            </div>
          </div>

          <div className="hidden sm:flex space-x-4 md:space-x-6">
            <NavLink to="/" className={
              ({ isActive }) => `${isActive && "border-b-2 border-cynerza-purple"}`
            }>
              <MenuItem setActive={setActive} active={active} item="Home" />
            </NavLink>
            <NavLink to="/ai-tools" className={
              ({ isActive }) => `${isActive && "border-b-2 border-cynerza-purple"}`
            }>
              <MenuItem setActive={setActive} active={active} item="AI Tools" />
            </NavLink>

            {/* What We Do - Click Dropdown (NO underline on main button) */}
            <div className="relative">
              <button
                onClick={() => setWhatWeDoOpen(!whatWeDoOpen)}
                className={`relative z-10 font-semibold transition-colors duration-300
                  text-sm sm:text-base px-1 py-2 rounded-md text-slate-900 dark:text-slate-200 
                  hover:text-white hover:bg-cynerza-purple/80 hover:shadow-md dark:hover:bg-cynerza-purple/80 dark:hover:text-white
                  flex items-center gap-1 ${isContactUsPage ? 'text-white' : ''}`}
              >
                What We Do
                <motion.div
                  animate={{ rotate: whatWeDoOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              {/* Dropdown with active states for individual options */}
              <AnimatePresence>
                {whatWeDoOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-12 left-10 transform -translate-x-1/2 mt-2  p-2
                      bg-gray-950/90 dark:bg-black/90 backdrop-blur-md rounded-xl overflow-hidden 
                      border border-black/[0.2] dark:border-white/[0.2] shadow-xl z-50"
                  >
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <Link
                        to="/industries"
                        onClick={() => setWhatWeDoOpen(false)}
                        className={`block px-4 py-1 font-medium transition-colors duration-200 ${isIndustriesActive
                          ? 'border-b-2 border-cynerza-purple text-white'
                          : 'text-white hover:bg-cynerza-purple/80 hover:rounded-md'
                          }`}
                      >
                        Industries
                      </Link>
                      <Link
                        to="/services"
                        onClick={() => setWhatWeDoOpen(false)}
                        className={`block px-4 py-1 font-medium transition-colors duration-200 ${isServicesActive
                          ? 'border-b-2 border-cynerza-purple text-white'
                          : 'text-white hover:bg-cynerza-purple/80 hover:rounded-md'
                          }`}
                      >
                        Services
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to={"/blogs"} className={
              ({ isActive }) => `${isActive && "border-b-2 border-cynerza-purple"}`
            }>
              <MenuItem setActive={setActive} active={active} item="Blog"
                className={`hidden ${!loading && "sm:block"}`}>
                <div className="text-sm lg:grid grid-cols-2 space-y-2 md:p-2 p-0">
                  {blogPosts.slice(0, 4).map((blog) => (
                    <ProductItem
                      key={blog._id}
                      title={blog.title}
                      href={`/blogs/${blog.slug}`}
                      src={blog.thumbImage}
                      description={blog.description}
                    />
                  ))}
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Blog"
                className={`block ${loading ? "sm:block" : "sm:hidden"}`} />
            </NavLink>
            {/* <MenuItem setActive={setActive} active={active} item="More">
              <div className="flex flex-col space-y-4 text-sm md:p-4 p-2">
                <HoveredLink to="/team">Team</HoveredLink>
                <HoveredLink to="/about">About</HoveredLink>
                <HoveredLink to="/contact">Contact</HoveredLink>
              </div>
            </MenuItem> */}

            {/* What We Do - Click Dropdown (NO underline on main button) */}
            <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className={`relative z-10 font-semibold transition-colors duration-300
                  text-sm sm:text-base px-1 py-2 rounded-md text-slate-900 dark:text-slate-200 
                  hover:text-white hover:bg-cynerza-purple/80 hover:shadow-md dark:hover:bg-cynerza-purple/80 dark:hover:text-white
                  flex items-center gap-1 ${isContactUsPage ? 'text-white' : ''}`}
              >
                More
                <motion.div
                  animate={{ rotate: moreOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              {/* Dropdown with active states for individual options */}
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-12 left-10 transform -translate-x-1/2 mt-2  p-2
                      bg-gray-950/90 dark:bg-black/90 backdrop-blur-md rounded-xl overflow-hidden 
                      border border-black/[0.2] dark:border-white/[0.2] shadow-xl z-50"
                  >
                    <div className="flex flex-col items-center justify-center space-y-1">
                      <Link
                        to="/team"
                        onClick={() => setMoreOpen(false)}
                        className={`block px-4 py-1 font-medium transition-colors duration-200 ${isTeamActive
                          ? 'border-b-2 border-cynerza-purple text-white'
                          : 'text-white hover:bg-cynerza-purple/80 hover:rounded-md'
                          }`}
                      >
                        Team
                      </Link>
                      <Link
                        to="/about"
                        onClick={() => setMoreOpen(false)}
                        className={`block px-4 py-1 font-medium transition-colors duration-200 ${isAboutActive
                          ? 'border-b-2 border-cynerza-purple text-white'
                          : 'text-white hover:bg-cynerza-purple/80 hover:rounded-md'
                          }`}
                      >
                        About
                      </Link>
                      <Link
                        to="/contact"
                        onClick={() => setMoreOpen(false)}
                        className={`block px-4 py-1 font-medium transition-colors duration-200 ${isContactActive
                          ? 'border-b-2 border-cynerza-purple text-white'
                          : 'text-white hover:bg-cynerza-purple/80 hover:rounded-md'
                          }`}
                      >
                        Contact
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden p-2 text-gray-100 hover:bg-white/10 rounded-lg ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} className={`${isContactActive ? "text-white" : "text-slate-900 dark:text-slate-200"}`} />
              : <MobileMenu size={24} className={`${isContactActive ? "text-white" : "text-slate-900 dark:text-slate-200"}`}   />}
          </button>
        </Menu>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-x-0 top-24 z-40 md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {/* Mobile Menu Content */}
              <motion.div
                className="mx-4 bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg rounded-2xl border border-white/15 shadow-xl overflow-hidden"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="overflow-hidden"
                    >
                      {/* What We Do with Mobile Dropdown (NO active state on parent) */}
                      {item.hasDropdown ? (
                        <div className="w-full">
                          <button
                            onClick={() => setMobileWhatWeDoOpen(!mobileWhatWeDoOpen)}
                            className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors
                              text-gray-700 dark:text-gray-300 hover:text-cynerza-purple dark:hover:text-cynerza-purple hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                          >
                            <div className="flex items-center">
                              <span>{item.name}</span>
                            </div>
                            <motion.div
                              animate={{ rotate: mobileWhatWeDoOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown size={18} />
                            </motion.div>
                          </button>

                          {/* Mobile Dropdown Options with individual active states */}
                          <AnimatePresence>
                            {mobileWhatWeDoOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden mt-2"
                              >
                                <div className="pl-8 pr-4 pb-2 space-y-2">
                                  <Link
                                    to="/industries"
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobileWhatWeDoOpen(false);
                                    }}
                                    className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors ${isIndustriesActive
                                      ? 'text-cynerza-purple dark:text-cynerza-purple bg-cynerza-purple/10 dark:bg-cynerza-purple/20 font-bold'
                                      : 'text-gray-700 dark:text-gray-300 hover:text-cynerza-purple dark:hover:text-cynerza-purple hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                                      }`}
                                  >
                                    Industries
                                  </Link>
                                  <Link
                                    to="/services"
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobileWhatWeDoOpen(false);
                                    }}
                                    className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors mt-1 ${isServicesActive
                                      ? 'text-cynerza-purple dark:text-cynerza-purple bg-cynerza-purple/10 dark:bg-cynerza-purple/20 font-bold'
                                      : 'text-gray-700 dark:text-gray-300 hover:text-cynerza-purple dark:hover:text-cynerza-purple hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                                      }`}
                                  >
                                    Services
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        /* Regular Nav Items */
                        <Link
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === item.path
                            ? 'text-cynerza-purple dark:text-cynerza-purple bg-cynerza-purple/10 dark:bg-cynerza-purple/20 font-bold'
                            : 'text-gray-700 dark:text-gray-300 hover:text-cynerza-purple dark:hover:text-cynerza-purple hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                            }`}
                        >
                          <div className="flex items-center">
                            {location.pathname === item.path && (
                              <div className="w-1.5 h-4 bg-cynerza-purple rounded-full mr-3"></div>
                            )}
                            <span>{item.name}</span>
                          </div>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Navbar;


