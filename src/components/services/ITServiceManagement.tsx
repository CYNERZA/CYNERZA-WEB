// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion"
// import { HoverEffect } from "../ui/card-hover-effect";

// /**
//  * ITServiceManagement.tsx
//  * - Requires Tailwind CSS in your project
//  * - Paste into your components folder and import where needed
//  */

// interface ITSMSolutionType {
//     id: number;
//     name: string;
// }

// const ITServiceManagement: React.FC = () => {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//     const navigate = useNavigate()
//     const itsmCapabilities = [
//         {
//             title: "ITIL Best Practices",
//             description: "Implementation of ITIL v4 framework for standardized service management processes."
//         },
//         {
//             title: "Service Level Management",
//             description: "Comprehensive SLA monitoring, reporting, and continuous improvement processes."
//         },
//         {
//             title: "Knowledge Management",
//             description: "Centralized knowledge base and self-service portals for enhanced user experience."
//         }
//     ];

//     const advancedITSMFeatures = [
//         {
//             title: "Performance Analytics",
//             description: "Real-time dashboards and KPI tracking for service performance optimization."
//         },
//         {
//             title: "Request Fulfillment",
//             description: "Automated service request processing and approval workflows."
//         },
//         {
//             title: "Vendor Management",
//             description: "Third-party service provider management and contract optimization."
//         },
//         {
//             title: "Continuous Improvement",
//             description: "CSI processes for ongoing service enhancement and optimization."
//         }
//     ];


//     const itsmSolutionTypes: ITSMSolutionType[] = [
//         { id: 1, name: "ITIL Framework Implementation" },
//         { id: 2, name: "Service Desk & Helpdesk Solutions" },
//         { id: 3, name: "Incident & Problem Management" },
//         { id: 4, name: "Change & Configuration Management" },
//         { id: 5, name: "Asset & Service Catalog Management" },
//         { id: 6, name: "ITSM Process Automation" }
//     ];

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;
//         const ctx = canvas.getContext("2d");
//         if (!ctx) return;

//         let w = 0;
//         let h = 0;
//         const dpr = Math.max(1, window.devicePixelRatio || 1);
//         let rafId = 0;

//         // Function to detect if dark mode is active
//         const isDarkMode = () => {
//             return document.documentElement.classList.contains('dark') ||
//                 window.matchMedia('(prefers-color-scheme: dark)').matches;
//         };

//         // animated blobs config - Updated colors for IT Service Management theme
//         type Blob = {
//             cx: number;
//             cy: number;
//             rx: number; // radius x
//             ry: number; // radius y
//             speed: number;
//             angle: number;
//             hue: number;
//             amp: number;
//             phase: number;
//         };

//         const blobs: Blob[] = [
//             // large indigo -> blue blob for enterprise/professional theme
//             { cx: 0, cy: 0, rx: 260, ry: 180, speed: 0.0005, angle: 0, hue: 230, amp: 80, phase: 0 },
//             // medium slate -> gray blob for management/structure theme
//             { cx: 0, cy: 0, rx: 160, ry: 120, speed: 0.0008, angle: Math.PI, hue: 220, amp: 60, phase: 1.3 },
//             // small teal -> cyan highlight for service theme
//             { cx: 0, cy: 0, rx: 110, ry: 80, speed: 0.0012, angle: Math.PI / 2, hue: 180, amp: 40, phase: 2.1 },
//         ];

//         const resize = () => {
//             w = canvas.offsetWidth;
//             h = canvas.offsetHeight;
//             canvas.width = Math.floor(w * dpr);
//             canvas.height = Math.floor(h * dpr);
//             canvas.style.width = `${w}px`;
//             canvas.style.height = `${h}px`;
//             ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

//             // position blobs near right side (like screenshot)
//             const centerX = w * 0.78;
//             const centerY = h * 0.55;
//             blobs.forEach((b, i) => {
//                 b.cx = centerX + (i - 1) * 30;
//                 b.cy = centerY + (i - 1) * 10;
//             });
//         };

//         const mouse = { x: -9999, y: -9999, active: false };

//         const onMove = (e: MouseEvent) => {
//             const rect = canvas.getBoundingClientRect();
//             mouse.x = e.clientX - rect.left;
//             mouse.y = e.clientY - rect.top;
//             mouse.active = true;
//         };

//         const onLeave = () => {
//             mouse.active = false;
//             mouse.x = -9999;
//             mouse.y = -9999;
//         };

//         // soft gaussian blur drawing helper by layering radial gradients
//         const drawBlob = (x: number, y: number, rx: number, ry: number, hue: number, alpha = 1, scale = 1) => {
//             const grad = ctx.createRadialGradient(x, y, 0, x, y, Math.max(rx, ry) * 1.2 * scale);
//             // layered color stops for rich glow
//             grad.addColorStop(0, `hsla(${hue} 100% 65% / ${0.95 * alpha})`);
//             grad.addColorStop(0.25, `hsla(${(hue + 30) % 360} 95% 55% / ${0.55 * alpha})`);
//             grad.addColorStop(0.55, `hsla(${(hue + 120) % 360} 80% 35% / ${0.18 * alpha})`);
//             grad.addColorStop(1, `hsla(${(hue + 160) % 360} 70% 25% / ${0.02 * alpha})`);

//             ctx.beginPath();
//             ctx.fillStyle = grad as any;
//             // draw ellipse by scaling context
//             ctx.save();
//             ctx.translate(x, y);
//             ctx.scale(1, ry / rx); // approximate ellipse
//             ctx.arc(0, 0, rx * scale, 0, Math.PI * 2);
//             ctx.restore();
//             ctx.fill();
//         };

//         const render = (t: number) => {
//             // Dynamic background based on theme (keeping same background)
//             const baseGrad = ctx.createLinearGradient(0, 0, w, h);

//             if (isDarkMode()) {
//                 // Dark theme - gray-950 equivalent
//                 baseGrad.addColorStop(0, "#030712");
//                 baseGrad.addColorStop(1, "#0f1419");
//             } else {
//                 // Light theme - white background
//                 baseGrad.addColorStop(0, "#ffffff");
//                 baseGrad.addColorStop(1, "#f8fafc");
//             }

//             ctx.fillStyle = baseGrad;
//             ctx.fillRect(0, 0, w, h);

//             // Adjust vignette based on theme
//             if (isDarkMode()) {
//                 // subtle vignette darkening toward left to emphasize right glow
//                 ctx.fillStyle = "rgba(0,0,0,0.22)";
//                 ctx.fillRect(0, 0, w * 0.5, h);
//             } else {
//                 // Light vignette for light theme
//                 ctx.fillStyle = "rgba(0,0,0,0.05)";
//                 ctx.fillRect(0, 0, w * 0.5, h);
//             }

//             // update and draw blobs
//             blobs.forEach((b, i) => {
//                 // floating motion (orbit + wobble)
//                 b.angle += b.speed * (1 + Math.sin(t * 0.0002 + b.phase) * 0.6);
//                 const wobbleX = Math.cos(t * (0.0008 + i * 0.0001) + b.phase) * b.amp;
//                 const wobbleY = Math.sin(t * (0.0009 + i * 0.00015) + b.phase) * (b.amp * 0.55);

//                 // mouse attraction (subtle)
//                 let mx = 0;
//                 let my = 0;
//                 if (mouse.active) {
//                     const dx = mouse.x - b.cx;
//                     const dy = mouse.y - b.cy;
//                     const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
//                     const pull = Math.max(0, 1 - dist / Math.max(w, h));
//                     mx = dx * 0.04 * pull;
//                     my = dy * 0.04 * pull;
//                 }

//                 const px = b.cx + Math.cos(b.angle) * 10 + wobbleX + mx;
//                 const py = b.cy + Math.sin(b.angle * 0.9) * 8 + wobbleY + my;

//                 // draw multiple layered passes for depth
//                 drawBlob(px, py, b.rx * 1.05, b.ry * 1.05, b.hue, 0.9, 1.6); // outer haze
//                 drawBlob(px, py, b.rx * 0.85, b.ry * 0.85, b.hue, 1.0, 1.05); // mid
//                 drawBlob(px, py, b.rx * 0.45, b.ry * 0.45, (b.hue + 10) % 360, 1.0, 0.45); // core highlight
//             });

//             // Adjust rim brightness based on theme
//             ctx.globalCompositeOperation = "lighter";
//             const rimOpacity = isDarkMode() ? 0.02 + 0.005 * Math.sin(t * 0.003) : 0.01 + 0.003 * Math.sin(t * 0.003);
//             ctx.fillStyle = `rgba(255,255,255,${rimOpacity})`;
//             ctx.fillRect(w * 0.68, h * 0.2, w * 0.35, h * 0.7);
//             ctx.globalCompositeOperation = "source-over";

//             rafId = requestAnimationFrame(render);
//         };

//         const start = () => {
//             resize();
//             window.addEventListener("resize", resize);
//             canvas.addEventListener("mousemove", onMove);
//             canvas.addEventListener("mouseleave", onLeave);
//             rafId = requestAnimationFrame(render);
//         };

//         start();

//         return () => {
//             cancelAnimationFrame(rafId);
//             window.removeEventListener("resize", resize);
//             canvas.removeEventListener("mousemove", onMove);
//             canvas.removeEventListener("mouseleave", onLeave);
//         };
//     }, []);

//     return (
//         <section className="w-full py-2 flex flex-col items-center bg-white dark:bg-gray-950 transition-colors duration-300 overflow-x-hidden">
//             {/* Hero Section */}
//             <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
//                     {/* Left: Text */}
//                     <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
//                         <div className="max-w-full">
//                             <div className="mb-6 sm:mb-8">
//                                 <h1
//                                     className="py-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight font-extralight break-words"
//                                     style={{
//                                         background:
//                                             "linear-gradient(90deg, rgba(79,70,229,1) 0%, rgba(71,85,105,1) 45%, rgba(20,184,166,1) 100%)",
//                                         WebkitBackgroundClip: "text",
//                                         backgroundClip: "text",
//                                         color: "transparent",
//                                     }}
//                                 >
//                                     IT Service Management
//                                 </h1>
//                             </div>
//                             <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 transition-colors duration-300 leading-relaxed">
//                                 Comprehensive IT Service Management Solutions for Enterprise Excellence.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Right: Animated blob / canvas */}
//                     <div className="w-full lg:w-1/2 order-1 lg:order-2">
//                         <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] relative max-w-lg mx-auto lg:max-w-none">
//                             <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
//                                 <canvas ref={canvasRef} className="w-full h-full block" />
//                             </div>
//                             {/* optional soft overlay to match screenshot glow edge */}
//                             <div className="absolute inset-0 pointer-events-none">
//                                 <div className="absolute -right-10 sm:-right-16 lg:-right-20 bottom-[-20px] sm:bottom-[-30px] lg:bottom-[-40px] w-[250px] sm:w-[300px] lg:w-[350px] xl:w-[420px] h-[250px] sm:h-[300px] lg:h-[350px] xl:h-[420px] rounded-full opacity-10 blur-2xl sm:blur-3xl" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Description Section */}
//             <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
//                 <div className="text-center lg:text-left">
//                     <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-slate-900 dark:text-slate-200 mb-6 sm:mb-8 font-light">
//                         Strategic IT Service Excellence
//                     </h2>
//                     <div className="space-y-4 sm:space-y-6">
//                         <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-none">
//                             We specialize in comprehensive IT Service Management solutions that transform your organization's
//                             IT operations through standardized processes, enhanced service delivery, and optimized user
//                             experiences. Our expert team implements ITIL-based frameworks, automated service desk solutions,
//                             and robust ITSM processes that align IT services with business objectives, ensuring maximum
//                             efficiency, reduced downtime, and exceptional service quality across your enterprise.
//                         </p>

//                         <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-none">
//                             From incident and problem management to change control and service catalog implementation, we deliver
//                             enterprise-grade ITSM solutions that streamline workflows, improve communication, and enhance overall
//                             IT governance. Our approach includes comprehensive service desk automation, asset management,
//                             knowledge management systems, and continuous service improvement processes that drive operational
//                             excellence and customer satisfaction.
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Services Section */}
//             <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
//                 <div className="text-center lg:text-left mb-8 sm:mb-12 lg:mb-16">
//                     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-slate-900 dark:text-slate-200 mb-6 sm:mb-8 font-light">
//                         Our IT Service Management Solutions
//                     </h1>
//                 </div>

//                 {/* Services Grid - Fixed responsive grid with equal button sizes */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 place-items-center">
//                     {itsmSolutionTypes.map((service) => (
//                         <div key={service.id} className="w-full max-w-sm">
//                             <div className="rounded-full p-[2px] bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 hover:scale-105">
//                                 <button
//                                     onClick={() =>
//                                         navigate("#")
//                                     }
//                                     className="group rounded-full w-full h-24 px-4 py-3 text-xs sm:text-sm md:text-base font-bold tracking-wide uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:bg-black dark:text-white bg-white text-black flex items-center justify-center text-center leading-tight break-words hyphens-auto"
//                                     style={{
//                                         minHeight: '6rem',
//                                         wordBreak: 'break-word',
//                                         hyphens: 'auto'
//                                     }}
//                                 >
//                                     <span className="block max-w-full">
//                                         {service.name}
//                                     </span>
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Additional ITSM Features Section */}
//                 <div className="mt-16 sm:mt-20 lg:mt-24">
//                     <div className="text-center lg:text-left mb-8 sm:mb-12">
//                         <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-slate-900 dark:text-slate-200 mb-6 sm:mb-8 font-light">
//                             Core ITSM Capabilities
//                         </h3>
//                     </div>

//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 20 }}
//                         transition={{ duration: 0.3, delay: 1 * 0.05 }}
//                         layout
//                         className="rounded-lg">
//                         <HoverEffect
//                             items={itsmCapabilities}
//                             className=''
//                         />
//                     </motion.div>
//                 </div>

//                 {/* Additional ITSM Services Grid */}
//                 <div className="mt-16 sm:mt-20 lg:mt-24">
//                     <div className="text-center lg:text-left mb-8 sm:mb-12">
//                         <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-slate-900 dark:text-slate-200 mb-6 sm:mb-8 font-light">
//                             Advanced ITSM Features
//                         </h3>
//                     </div>

//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 20 }}
//                         transition={{ duration: 0.3, delay: 1 * 0.05 }}
//                         layout
//                         className="rounded-lg">
//                         <HoverEffect
//                             items={advancedITSMFeatures}
//                             className=''
//                         />
//                     </motion.div>
//                 </div>


//             </div>
//         </section>
//     );
// };

// export default ITServiceManagement;



import React from 'react';
import { motion } from 'framer-motion';
import { HoverEffect } from "../ui/card-hover-effect";
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
    const navigate = useNavigate()
    const services = [
        {
            title: 'IT Infrastructure Management',
            //   link: "/saas-product-development",
            description: 'Comprehensive management of your IT infrastructure including network administration, hardware maintenance, and system optimization for maximum efficiency.',
        },
        {
            title: 'System Monitoring & Maintenance',
            //   link: "/custom-llm-api",
            description: 'Proactive monitoring and maintenance of your systems to prevent downtime, identify issues early, and ensure optimal performance across all platforms.',
        },
        {
            title: 'Technical Support Services',
            // link: "/automation-solutions",
            description: 'Multi-tiered technical support including helpdesk services, remote assistance, and on-site support to resolve IT issues quickly and efficiently.',
        },
        {
            title: 'Server Management & Optimization',
            // link: "/ai-ml-solution",
            description: 'Complete server lifecycle management including configuration, performance tuning, patch management, and capacity planning for optimal resource utilization.',
        },
        {
            title: 'Database Administration',
            // link: "/cloud-devops-engineering",
            description: 'Expert database management services including optimization, backup strategies, security implementation, and performance monitoring for data integrity.',
        },
        {
            title: 'Security Implementation',
            description: 'Comprehensive cybersecurity solutions including firewall configuration, threat detection, vulnerability assessments, and security policy implementation.',
        },
        {
            title: 'Backup & Disaster Recovery',
            description: 'Robust backup solutions and disaster recovery planning to ensure business continuity and data protection against unexpected events and system failures.',
        },
        {
            title: 'Performance Monitoring',
            description: 'Real-time performance monitoring and analytics to track system health, identify bottlenecks, and optimize infrastructure for peak efficiency.',
        }
    ];

    return (
        <div className="relative pt-24 md:pt-28 w-full px-4 sm:px-6 lg:px-8">
            {/* Purple gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20 z-0" />
            {/* Content wrapper */}
            <div className="relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className='inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cynerza-purple/5 dark:bg-cynerza-purple/10 border border-cynerza-purple/10 dark:border-cynerza-purple/20
                     text-cynerza-purple dark:text-cynerza-purple-light text-sm font-medium mb-6'
                        >
                            <span>IT Excellence</span>
                            <span className="text-cynerza-purple/70 dark:text-cynerza-purple-light/70">•</span>
                            <span>Management</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className=" text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text
                    text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                            Our <span className='gradient-text'>IT Service</span> Management
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Ensure seamless IT operations with comprehensive service management solutions that maintain system reliability, enhance security, and optimize performance across your entire technology infrastructure.
                        </motion.p>
                    </motion.div>
                </div>
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, delay: 1 * 0.05 }}
                        layout
                        className="p-6 rounded-lg">
                        <HoverEffect
                            items={services}
                            className=''
                        // isLink
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Services;
