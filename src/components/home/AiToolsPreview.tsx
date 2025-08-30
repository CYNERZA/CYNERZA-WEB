// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { ArrowRight, FileText, Image as ImageIcon, Wand2, Code, Code2, BarChart3, MessageSquare, Brain, Database, Mic, Volume2, Music, BookOpen, PenTool, Share2, LayoutGrid, FileCode, Bot, Zap, Type, Mail, Shield, FileType, FileText as FileTextIcon, FileCode2, FileJson, FileOutput, FileInput, FileSearch, FileCheck, FileX, FileClock, FileArchive, FileDigit, FileDigitIcon, FileSignature, FileQuestion, FileWarning, FileUp, FileDown, FileInput as FileInputIcon, FileOutput as FileOutputIcon, FileVolume2, FileVolume, FileAudio, FileVideo, FileVideo2, FileImage, FileImage as FileImageIcon, FileSpreadsheet, FileSpreadsheet as FileSpreadsheetIcon, FileBadge, FileBadge2, FileCog, FileCog2, FileDiff, FileHeart, FileHeart as FileHeartIcon, FileKey, FileKey2, FileLock, FileLock2, FileMinus, FileMinus2, FilePlus, FilePlus2, FileSearch as FileSearchIcon, FileSliders, FileStack, FileSymlink, FileTerminal, FileType2, FileUp as FileUpIcon, FileX as FileXIcon, FileX2, File as FileIcon, FileArchive as FileArchiveIcon, FileAudio as FileAudioIcon, FileBadge as FileBadgeIcon, FileBarChart, FileBarChart2, FileBox, FileCheck2, FileClock as FileClockIcon, FileCode as FileCodeIcon, FileCog as FileCogIcon, FileDiff as FileDiffIcon, FileDigit as FileDigitIcon2, FileDown as FileDownIcon, FileHeart as FileHeartIcon2, FileInput as FileInputIcon2, FileJson as FileJsonIcon, FileKey as FileKeyIcon, FileLock as FileLockIcon, FileMinus as FileMinusIcon, FileOutput as FileOutputIcon2, FilePlus as FilePlusIcon, FileQuestion as FileQuestionIcon, FileSearch as FileSearchIcon2, FileSignature as FileSignatureIcon, FileSliders as FileSlidersIcon, FileSpreadsheet as FileSpreadsheetIcon2, FileStack as FileStackIcon, FileSymlink as FileSymlinkIcon, FileTerminal as FileTerminalIcon, FileType as FileTypeIcon, FileType2 as FileTypeIcon2, FileUp as FileUpIcon2, FileVideo as FileVideoIcon, FileVolume as FileVolumeIcon, FileVolume2 as FileVolume2Icon, FileWarning as FileWarningIcon, FileX as FileXIcon2, FileX2 as FileX2Icon, File as FileIcon2, FileArchive as FileArchiveIcon2, FileAudio as FileAudioIcon2, FileBadge as FileBadgeIcon2, FileBarChart as FileBarChartIcon, FileBarChart2 as FileBarChart2Icon, FileBox as FileBoxIcon, FileCheck as FileCheckIcon, FileCheck2 as FileCheck2Icon, FileClock as FileClockIcon2, FileCode as FileCodeIcon2, FileCode2 as FileCode2Icon, FileCog as FileCogIcon2, FileCog2 as FileCog2Icon, FileDiff as FileDiffIcon2, FileDigit as FileDigitIcon3, FileDown as FileDownIcon2, FileHeart as FileHeartIcon3, FileInput as FileInputIcon3, FileJson as FileJsonIcon2, FileKey as FileKeyIcon2, FileKey2 as FileKey2Icon, FileLock as FileLockIcon2, FileLock2 as FileLock2Icon, FileMinus as FileMinusIcon2, FileMinus2 as FileMinus2Icon, FileOutput as FileOutputIcon3, FilePlus as FilePlusIcon2, FilePlus2 as FilePlus2Icon, FileQuestion as FileQuestionIcon2, FileSearch as FileSearchIcon3, FileSignature as FileSignatureIcon2, FileSliders as FileSlidersIcon2, FileSpreadsheet as FileSpreadsheetIcon3, FileStack as FileStackIcon2, FileSymlink as FileSymlinkIcon2, FileTerminal as FileTerminalIcon2, FileType as FileTypeIcon3, FileType2 as FileType2Icon, FileUp as FileUpIcon3, FileVideo as FileVideoIcon2, FileVideo2 as FileVideo2Icon, FileVolume as FileVolumeIcon2, FileVolume2 as FileVolume2Icon2, FileWarning as FileWarningIcon2, FileX as FileXIcon3, FileX2 as FileX2Icon2 } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';

// const AiToolsPreview: React.FC = () => {
// const aiTools = [
//   {
//     category: "Text Tools",
//     tools: [
//       {
//         name: "Ad Copy Generator",
//         description: "Create high-converting ad copy for all your marketing campaigns",
//         gradient: "from-purple-400 to-pink-600",
//         icon: <FileType  />,
//         link: "https://tools.cynerza.com/text-tools-ad-copy-generator"
//       },
//       {
//         name: "Script Creator",
//         description: "Write professional video and podcast scripts with ease",
//         gradient: "from-emerald-400 to-teal-600",
//         icon: <FileText  />,
//         link: "https://tools.cynerza.com/text-tools-script-creator"
//       },
//       {
//         name: "Summarizer",
//         description: "Get concise summaries of long documents and articles",
//         gradient: "from-rose-400 to-pink-600",
//         icon: <FileOutput  />,
//         link: "https://tools.cynerza.com/text-tools-summarizer"
//       }
//     ]
//   },
//   {
//     category: "Image Tools",
//     tools: [
//       {
//         name: "AI Image Generator",
//         description: "Create stunning, high-quality images from text descriptions",
//         gradient: "from-amber-400 to-orange-600",
//         icon: <ImageIcon  />,
//         link: "https://tools.cynerza.com/image-tools-ai-image-generator"
//       },
//       {
//         name: "Background Remover",
//         description: "Instantly remove backgrounds from any image with precision",
//         gradient: "from-violet-400 to-purple-600",
//         icon: <ImageIcon  />,
//         link: "https://tools.cynerza.com/image-tools-background-remover"
//       },
//       {
//         name: "Image Enhancer",
//         description: "Enhance and upscale images without losing quality",
//         gradient: "from-emerald-400 to-cyan-600",
//         icon: <Wand2  />,
//         link: "https://tools.cynerza.com/image-tools-image-enhancer"
//       }
//     ]
//   },
//   {
//     category: "Audio Tools",
//     tools: [
//       {
//         name: "Text to Speech",
//         description: "Convert text to natural-sounding speech in multiple languages",
//         gradient: "from-blue-400 to-indigo-600",
//         icon: <Volume2  />,
//         link: "https://tools.cynerza.com/audio-tools-text-to-speech"
//       },
//       {
//         name: "Voice Cloner",
//         description: "Create realistic voice clones from just a few samples",
//         gradient: "from-purple-400 to-pink-600",
//         icon: <Mic  />,
//         link: "https://tools.cynerza.com/audio-tools-voice-cloner"
//       },
//       {
//         name: "Noise Remover",
//         description: "Remove background noise and enhance audio quality",
//         gradient: "from-rose-400 to-pink-600",
//         icon: <Volume2  />,
//         link: "https://tools.cynerza.com/audio-tools-noise-remover"
//       }
//     ]
//   },
//   {
//     category: "Gen AI Tools",
//     tools: [
//       {
//         name: "AI Code Generator",
//         description: "Generate code in multiple programming languages with AI",
//         gradient: "from-indigo-400 to-cyan-600",
//         icon: <Code  />,
//         link: "https://tools.cynerza.com/gen-ai-tools-code-generator"
//       },
//       {
//         name: "Chatbot Creator",
//         description: "Build and deploy AI-powered chatbots without coding",
//         gradient: "from-blue-400 to-cyan-600",
//         icon: <MessageSquare  />,
//         link: "https://tools.cynerza.com/gen-ai-tools-chatbot-creator"
//       },
//       {
//         name: "Prompt Designer",
//         description: "Create effective prompts for AI models",
//         gradient: "from-green-400 to-emerald-600",
//         icon: <PenTool  />,
//         link: "https://tools.cynerza.com/gen-ai-tools-prompt-designer"
//       }
//     ]
//   },
//   {
//     category: "Additional Tools",
//     tools: [
//       {
//         name: "Podcast Generator",
//         description: "Create professional podcasts from text content",
//         gradient: "from-amber-400 to-orange-600",
//         icon: <Mic  />,
//         link: "https://tools.cynerza.com/podcast-generator"
//       },
//       {
//         name: "Social Media Posts",
//         description: "Generate engaging posts for all social platforms",
//         gradient: "from-violet-400 to-purple-600",
//         icon: <Share2  />,
//         link: "https://tools.cynerza.com/social-media-posts"
//       },
//       {
//         name: "Brand Book Generator",
//         description: "Create comprehensive brand guidelines automatically",
//         gradient: "from-emerald-400 to-cyan-600",
//         icon: <BookOpen  />,
//         link: "https://tools.cynerza.com/brandbook-generator"
//       },
//       {
//         name: "Multimedia Bot Builder",
//         description: "Build bots that understand and generate multiple media types",
//         gradient: "from-rose-400 to-pink-600",
//         icon: <Bot  />,
//         link: "https://tools.cynerza.com/multimedia-bot-builder"
//       },
//       {
//         name: "API Reference",
//         description: "Access our comprehensive API documentation",
//         gradient: "from-indigo-400 to-cyan-600",
//         icon: <Code2  />,
//         link: "https://tools.cynerza.com/api-reference"
//       }
//     ]
//   }
// ];

//   return (
//     <section className="relative py-8 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
//       {}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.03)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.05)_0%,transparent_70%)]" />
//         <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-cynerza-blue/5 dark:bg-cynerza-blue/10 blur-32xl" />
//         <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-cynerza-purple/5 dark:bg-cynerza-purple/10 blur-32xl" />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 2xl:px-8 relative">
//         <div className="text-center max-w-42xl mx-auto mb-6">
//           <motion.div 
//             className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cynerza-purple/5 dark:bg-cynerza-purple/10 border border-cynerza-purple/10 dark:border-cynerza-purple/20 text-cynerza-purple dark:text-cynerza-purple-light text-sm font-medium mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <span>AI-Powered Tools</span>
//             <span className="text-cynerza-purple/70 dark:text-cynerza-purple-light/70">•</span>
//             <span>Productivity Suite</span>
//           </motion.div>

// <motion.h2 
//   className="text-42xl sm:text-52xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
//   initial={{ opacity: 0, y: 20 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.5, delay: 0.1 }}
// >
//   Supercharge Your Workflow
// </motion.h2>

// <motion.p 
//   className="text-2xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-32xl mx-auto leading-relaxed"
//   initial={{ opacity: 0, y: 20 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.5, delay: 0.2 }}
// >
//   Transform your productivity with our comprehensive suite of AI-powered tools designed for developers, creators, and businesses.
// </motion.p>
//         </div>

// <div className="max-w-72xl mx-auto">
//   {aiTools.map((category, index) => (
//     <motion.div 
//       key={category.category}
//       className="my-6 last:mb-0"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-100px" }}
//       transition={{ 
//         duration: 0.6, 
//         delay: index * 0.1,
//         ease: [0.16, 1, 0.3, 1]
//       }}
//     >
//       <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
//         <div>
//           <h3 className="text-22xl md:text-32xl font-bold font-heading text-gray-900 dark:text-white mb-2">
//             {category.category}
//           </h3>
//           <div className="w-16 h-1 bg-gradient-to-r from-cynerza-purple to-cynerza-blue rounded-full"></div>
//         </div>
//         <span className="mt-3 md:mt-0 inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-cynerza-purple/10 text-cynerza-purple dark:bg-cynerza-purple/20 dark:text-cynerza-purple-light">
//           {category.tools.length} {category.tools.length > 1 ? 'Tools' : 'Tool'}
//         </span>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
//         {category.tools.map((tool, toolIndex) => (
//           <motion.div
//             key={`${category.category}-${toolIndex}`}
//             className="group relative h-full"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: toolIndex * 0.1 }}
//           >
//             <div className="absolute inset-0.5 bg-gradient-to-r from-cynerza-purple/5 to-cynerza-blue/5 dark:from-cynerza-purple/10 dark:to-cynerza-blue/10 rounded-22xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             <div className="relative h-full bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-22xl p-6 border border-gray-100 dark:border-gray-700 group-hover:border-cynerza-purple/20 dark:group-hover:border-cynerza-purple/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
//               <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6 bg-gradient-to-br ${tool.gradient} text-white shadow-2xl`}>
//                 {React.cloneElement(tool.icon, { className: 'w-6 h-6' })}
//               </div>
//               <h4 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-3">{tool.name}</h4>
//               <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
//                 {tool.description}
//               </p>
//               <a 
//                 href={tool.link} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center text-cynerza-purple dark:text-cynerza-purple-light font-medium text-sm group"
//               >
//                 <span className="mr-2">Try Now</span>
//                 <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   ))}
// </div>

//         <motion.div 
//           className="mt-6 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//         >
//           <div className="relative inline-flex group">
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-cynerza-purple to-cynerza-blue rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
//             <Link 
//               to="/ai-tools"
//               className="relative flex items-center px-5 py-5 bg-gradient-to-r from-cynerza-purple to-cynerza-blue text-white text-2xl font-semibold rounded-2xl transition-all
//                duration-200 hover:shadow-2xl hover:shadow-cynerza-purple/30
//                bg-cynerza-purple hover:bg-cynerza-purple/90 h-12 "
//             >
//               <span>Explore All AI Tools</span>
//               <svg className="w-5 h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//               </svg>
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AiToolsPreview;



// import {
//   FileText,
//   Image as ImageIcon,
//   Wand2,
//   Code,
//   Code2,
//   MessageSquare,
//   Mic,
//   Volume2,
//   Music,
//   BookOpen,
//   PenTool,
//   Share2,
//   Bot,
//   FileType,
//   FileOutput
// }
//   from 'lucide-react'
// import { AnimatePresence, motion } from "framer-motion"
// import React, { cloneElement, useState } from 'react';

// const AiToolsPreview: React.FC = () => {


  // const aiTools = [
  //   {
  //     name: "Ad Copy Generator",
  //     gradient: "from-purple-400 to-pink-600",
  //     icon: <FileType />,
  //     link: "https://tools.cynerza.com/text-tools-ad-copy-generator"
  //   },
  //   {
  //     name: "Script Creator",
  //     gradient: "from-emerald-400 to-teal-600",
  //     icon: <FileText />,
  //     link: "https://tools.cynerza.com/text-tools-script-creator"
  //   },
  //   {
  //     name: "Summarizer",
  //     gradient: "from-rose-400 to-pink-600",
  //     icon: <FileOutput />,
  //     link: "https://tools.cynerza.com/text-tools-summarizer"
  //   },
  //   {
  //     name: "AI Image Generator",
  //     gradient: "from-amber-400 to-orange-600",
  //     icon: <ImageIcon />,
  //     link: "https://tools.cynerza.com/image-tools-ai-image-generator"
  //   },
  //   {
  //     name: "Background Remover",
  //     gradient: "from-violet-400 to-purple-600",
  //     icon: <ImageIcon />,
  //     link: "https://tools.cynerza.com/image-tools-background-remover"
  //   },
  //   {
  //     name: "Image Enhancer",
  //     gradient: "from-emerald-400 to-cyan-600",
  //     icon: <Wand2 />,
  //     link: "https://tools.cynerza.com/image-tools-image-enhancer"
  //   },
  //   {
  //     name: "Text to Speech",
  //     gradient: "from-blue-400 to-indigo-600",
  //     icon: <Volume2 />,
  //     link: "https://tools.cynerza.com/audio-tools-text-to-speech"
  //   },
  //   {
  //     name: "Voice Cloner",
  //     gradient: "from-purple-400 to-pink-600",
  //     icon: <Mic />,
  //     link: "https://tools.cynerza.com/audio-tools-voice-cloner"
  //   },
  //   {
  //     name: "Noise Remover",
  //     gradient: "from-rose-400 to-pink-600",
  //     icon: <Volume2 />,
  //     link: "https://tools.cynerza.com/audio-tools-noise-remover"
  //   },
  //   {
  //     name: "AI Code Generator",
  //     gradient: "from-indigo-400 to-cyan-600",
  //     icon: <Code />,
  //     link: "https://tools.cynerza.com/gen-ai-tools-code-generator"
  //   },
  //   {
  //     name: "Chatbot Creator",
  //     gradient: "from-blue-400 to-cyan-600",
  //     icon: <MessageSquare />,
  //     link: "https://tools.cynerza.com/gen-ai-tools-chatbot-creator"
  //   },
  //   {
  //     name: "Prompt Designer",
  //     gradient: "from-green-400 to-emerald-600",
  //     icon: <PenTool />,
  //     link: "https://tools.cynerza.com/gen-ai-tools-prompt-designer"
  //   },
  //   {
  //     name: "Podcast Generator",
  //     gradient: "from-amber-400 to-orange-600",
  //     icon: <Mic />,
  //     link: "https://tools.cynerza.com/podcast-generator"
  //   },
  //   {
  //     name: "Social Media Posts",
  //     gradient: "from-violet-400 to-purple-600",
  //     icon: <Share2 />,
  //     link: "https://tools.cynerza.com/social-media-posts"
  //   },
  //   {
  //     name: "Brand Book Generator",
  //     gradient: "from-emerald-400 to-cyan-600",
  //     icon: <BookOpen />,
  //     link: "https://tools.cynerza.com/brandbook-generator"
  //   },
  //   {
  //     name: "Multimedia Bot Builder",
  //     gradient: "from-rose-400 to-pink-600",
  //     icon: <Bot />,
  //     link: "https://tools.cynerza.com/multimedia-bot-builder"
  //   },
  //   {
  //     name: "API Reference",
  //     gradient: "from-indigo-400 to-cyan-600",
  //     icon: <Code2 />,
  //     link: "https://tools.cynerza.com/api-reference"
  //   },
  //   {
  //     name: "API Reference",
  //     gradient: "from-indigo-400 to-cyan-600",
  //     icon: <Code2 />,
  //     link: "https://tools.cynerza.com/api-reference"
  //   },
  //   {
  //     name: "API Reference",
  //     gradient: "from-indigo-400 to-cyan-600",
  //     icon: <Code2 />,
  //     link: "https://tools.cynerza.com/api-reference"
  //   },
  //   {
  //     name: "API Reference",
  //     gradient: "from-indigo-400 to-cyan-600",
  //     icon: <Code2 />,
  //     link: "https://tools.cynerza.com/api-reference"
  //   }
  // ];

//   const getAiTool = (idx: number) => aiTools[idx]


//   function ToolCard({ tool, className = "", animateCards = true, burstIdx = 0 }: any) {
//     const [isHovered, setIsHovered] = React.useState(false);

//     return (
//       <a
//         href={tool.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className={`${className} rounded-sm w-full h-full relative inline-block overflow-hidden group `}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Full card container */}
//         <motion.div
//           className="w-full h-full flex items-center justify-center p-4 relative border border-gray-200 dark:border-gray-700"
//           initial={{ backgroundColor: "#e4ecf4" }}
//           animate={{
//             backgroundColor: isHovered ? "#3bd4cb" : "#e4ecf4"
//           }}
//           transition={{ duration: 0.4, ease: "easeInOut" }}
//         >
//           {/* Icon with animated color */}
//           <motion.div
//             animate={{
//               color: isHovered ? "#ffffff" : "#94a3b8"
//             }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="flex items-center justify-center"
//           >
//             {React.cloneElement(tool.icon, {
//               size: 35,
//               className: `transition-colors duration-400`,
//               style: { color: isHovered ? "#ffffff" : "#94a3b8" }
//             })}
//           </motion.div>

//           {/* Tool name animation from bottom */}
//           <motion.div
//             className="absolute bottom-4 text-center text-sm font-semibold leading-tight select-none 
//           text-white"
//             initial={{ y: 40, opacity: 0 }}
//             animate={{
//               y: isHovered ? 0 : 40,
//               opacity: isHovered ? 1 : 0
//             }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//           >
//             {tool.name}
//           </motion.div>
//         </motion.div>
//       </a>
//     );
//   }

//   return (
//     <section className='relative sm:pb-[7rem] xl:pb-[25rem]'>
//       {/* Text */}
//       <div className='text-center flex flex-col flex-wrap items-center justify-center '>
//         <div className='absolute top-20 sm:top-[10rem]  xl:top-[19rem] 2xl:top-[20rem]'>
//           <motion.h2
//             className="text-xl sm:text-4xl font-bold font-heading mb-6 text-slate-900 dark:text-slate-200"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             Supercharge Your Workflow
//           </motion.h2>

//           <motion.p
//             className="xl:text-2xl sm:text-xl text-md text-gray-600 dark:text-gray-400 leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Transform your productivity with our comprehensive suite of AI-powered tools.
//           </motion.p>
//         </div>
//       </div>

//       {/* Tools */}
// <div className='lg:flex justify-between hidden '>
//   {/* Left columns */}
//   {/* Rows */}
//   <div className='flex space-x-2 relative'>
//     {/* Column 1 */}
//     <div className='flex flex-col  space-y-2'>
//       {/* {[0, 1, 2, 3].map((idx) => ( */}
//         <div className='rounded-sm lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//           {<ToolCard tool={getAiTool(0)} burstIdx={0} />}
//         </div>
//         <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-28 sm:h-52 lg:h-40 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//           {<ToolCard tool={getAiTool(1)} burstIdx={1} />}
//         </div>
//         <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//           {<ToolCard tool={getAiTool(2)} burstIdx={2} />}
//         </div>
//       {/* ))} */}
//     </div>
//     {/*  Column 2 */}
//     <div className='flex flex-col relative top-52 lg:top-40 space-y-2'>
//       {/* {[4, 5, 6].map((idx) => ( */}
//         <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//           {<ToolCard tool={getAiTool(4)} burstIdx={4} />}
//         </div>
//         <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-28 sm:h-52 lg:h-40 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//           {<ToolCard tool={getAiTool(5)} burstIdx={5} />}
//         </div>
//         <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//           {<ToolCard tool={getAiTool(6)} burstIdx={6} />}
//         </div>
//       {/* ))} */}
//     </div>
//     {/*  Column 3 */}
//     <div className='flex flex-col relative top-[31rem] lg:top-[22rem] space-y-2'>
//       {/* {[7, 8].map((idx) => ( */}
//         <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-28 sm:h-52 lg:h-40 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//           {<ToolCard tool={getAiTool(7)} burstIdx={7} />}
//         </div>
//         <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//           {<ToolCard tool={getAiTool(8)} burstIdx={8} />}
//         </div>
//       {/* ))} */}
//     </div>
//   </div>

//   {/* Center column */}
//   <div className='flex flex-col'>
//     {/*  Column 1 */}
//     <div className='flex flex-col relative top-[36rem] lg:top-[27rem] space-y-2'>
//       {/* {[9, 10].map((idx) => ( */}
//         <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-28 sm:h-52 lg:h-40 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//           <ToolCard tool={getAiTool(9)} burstIdx={9} />
//         </div>
//         <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//           <ToolCard tool={getAiTool(10)} burstIdx={10} />
//         </div>
//       {/* ))} */}
//     </div>
//   </div>

//   {/* Right column */}
//   {/* Rows */}
//   <div className='flex space-x-2'>
//     {/*  Column 3 */}
//     <div className='flex flex-col relative top-[31rem] lg:top-[22rem] space-y-2'>
//       {/* {[11, 12].map((idx) => ( */}

//         <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-28 sm:h-52 lg:h-40 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//           {<ToolCard tool={getAiTool(11)} burstIdx={11} />}
//         </div>
//         <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//           {<ToolCard tool={getAiTool(12)} burstIdx={12} />}
//         </div>
//       {/* ))} */}
//     </div>
//     {/*  Column 2 */}
//     <div className='flex flex-col relative top-52 lg:top-40 space-y-2'>
//       {/* {[13, 14, 15].map((idx) => ( */}
//         <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//           {<ToolCard tool={getAiTool(13)} burstIdx={13} />}
//         </div>
//         <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-28 sm:h-52 lg:h-40 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//           {<ToolCard tool={getAiTool(14)} burstIdx={14} />}
//         </div>
//         <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//           {<ToolCard tool={getAiTool(15)} burstIdx={15} />}
//         </div>
//       {/* ))} */}
//     </div>

//     {/* Column 1 */}
//     <div className='flex flex-col  space-y-2'>
//       {/* {[16, 17, 18, 19].map((idx) => ( */}
//         <div className='lg:w-[13.6vw] 2lg:w-[13.6vw] xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//           {<ToolCard tool={getAiTool(16)} burstIdx={16} />}
//         </div>
//         <div className='lg:w-[13.6vw] 2lg:w-[13.6vw] xl:w-[13.7vw] h-28 sm:h-52 lg:h-40 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//           {<ToolCard tool={getAiTool(17)} burstIdx={17} />}
//         </div>
//         {/* <div className='lg:w-[13.6vw] 2lg:w-[13.6vw] xl:w-[13.7vw] h-52 sm:h-72 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//           {<ToolCard tool={getAiTool(18)} burstIdx={18} />}
//         </div> */}
//         <div className='lg:w-[13.6vw] 2lg:w-[13.6vw] xl:w-[13.7vw] h-28 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//           {<ToolCard tool={getAiTool(19)} burstIdx={19} />}
//         </div>
//       {/* ))} */}
//     </div>
//   </div>
// </div>

// {/* Tools for small devices */}
// <div className='flex justify-between lg:hidden mt-40 sm:mt-56'>
//   <div className='flex flex-col space-y-2 relative top-20'>
//     {/* {[0, 1, 2, 3,4,5].map((idx) => ( */}
//       <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72 
//                 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
//         {<ToolCard tool={getAiTool(0)} burstIdx={0} />}

//       </div>
//       <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-52 
//                 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//         {<ToolCard tool={getAiTool(1)} burstIdx={1} />}

//       </div>
//       <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72 
//                 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
//         {<ToolCard tool={getAiTool(2)} burstIdx={2} />}

//       </div>
//       <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-52 
//                 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
//         {<ToolCard tool={getAiTool(3)} burstIdx={3} />}

//       </div>
//       <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72 
//                 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
//         {<ToolCard tool={getAiTool(4)} burstIdx={4} />}

//       </div>
//       <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-52 
//                 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
//         {<ToolCard tool={getAiTool(5)} burstIdx={5} />}

//       </div>
//     {/* ))} */}
//     {/* <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-52 sm:h-72 bg-slate-500 rounded-sm'></div>
//     <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-52 sm:h-72 bg-slate-500 rounded-sm'></div> */}
//   </div>
//   <div className='flex flex-col space-y-2 '>
//     {/* {[6,7,8,9,10,11,12].map((idx) => ( */}
//       <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72
//                    rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
//         {<ToolCard tool={getAiTool(6)} burstIdx={6} />}
//       </div>
//       <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-52 
//                    rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
//         {<ToolCard tool={getAiTool(7)} burstIdx={7} />}
//       </div>
//       <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72
//                    rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
//         {<ToolCard tool={getAiTool(8)} burstIdx={8} />}
//       </div>
//       <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-52 
//                    rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
//         {<ToolCard tool={getAiTool(9)} burstIdx={9} />}
//       </div>
//       <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72
//                    rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] r'>
//         {<ToolCard tool={getAiTool(10)} burstIdx={10} />}
//       </div>
//       <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-52 
//                    rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
//         {<ToolCard tool={getAiTool(11)} burstIdx={11} />}
//       </div>
//       <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72
//                    rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
//         {<ToolCard tool={getAiTool(12)} burstIdx={12} />}
//       </div>
//     {/*  ))} */}
//     {/* <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-52 sm:h-72 bg-slate-500 rounded-sm'></div>
//     <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-52 sm:h-72 bg-slate-500 rounded-sm'></div>
//     <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-52 sm:h-72 bg-slate-500 rounded-sm'></div> */}
//   </div>
//   <div className='flex flex-col space-y-2 relative top-20 mb-7 sm:mb-10'>
//     {/* {[14,15,16,17,18,19].map((idx) => ( */}
//       <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72 
//                  rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>

//         {<ToolCard tool={getAiTool(14)} burstIdx={14} />}
//       </div>
//       <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-52  
//                  rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>

//         {<ToolCard tool={getAiTool(15)} burstIdx={15} />}
//       </div>
//       <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72 
//                  rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>

//         {<ToolCard tool={getAiTool(16)} burstIdx={16} />}
//       </div>
//       <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-52  
//                  rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>

//         {<ToolCard tool={getAiTool(17)} burstIdx={17} />}
//       </div>
//       <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72 
//                  rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>

//         {<ToolCard tool={getAiTool(18)} burstIdx={18} />}
//       </div>
//       <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-52 
//                  rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>

//         {<ToolCard tool={getAiTool(19)} burstIdx={19} />}
//       </div>
//     {/* ))} */}
//     {/* <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-52 sm:h-72 bg-slate-500 rounded-sm'></div>
//     <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-52 sm:h-72 bg-slate-500 rounded-sm'></div> */}
//   </div>

//       </div>


//     </section>
//   )
// }

// export default AiToolsPreview


// __Ok-__

import {   FileText,   Image as ImageIcon,   Wand2,   Code,   Code2,   MessageSquare,   Mic,   Volume2,   Music,   BookOpen,   PenTool,   Share2,   Bot,   FileType,   FileOutput }   from 'lucide-react'
import { AnimatePresence, motion } from "framer-motion"
import React, { cloneElement, useEffect, useRef, useState } from 'react';

const AiToolsPreview: React.FC = () => {
    const aiTools = [
    {
      name: "Ad Copy Generator",
      gradient: "from-purple-400 to-pink-600",
      icon: <FileType />,
      link: "https://tools.cynerza.com/text-tools-ad-copy-generator"
    },
    {
      name: "Script Creator",
      gradient: "from-emerald-400 to-teal-600",
      icon: <FileText />,
      link: "https://tools.cynerza.com/text-tools-script-creator"
    },
    {
      name: "Summarizer",
      gradient: "from-rose-400 to-pink-600",
      icon: <FileOutput />,
      link: "https://tools.cynerza.com/text-tools-summarizer"
    },
    {
      name: "AI Image Generator",
      gradient: "from-amber-400 to-orange-600",
      icon: <ImageIcon />,
      link: "https://tools.cynerza.com/image-tools-ai-image-generator"
    },
    {
      name: "Background Remover",
      gradient: "from-violet-400 to-purple-600",
      icon: <ImageIcon />,
      link: "https://tools.cynerza.com/image-tools-background-remover"
    },
    {
      name: "Image Enhancer",
      gradient: "from-emerald-400 to-cyan-600",
      icon: <Wand2 />,
      link: "https://tools.cynerza.com/image-tools-image-enhancer"
    },
    {
      name: "Text to Speech",
      gradient: "from-blue-400 to-indigo-600",
      icon: <Volume2 />,
      link: "https://tools.cynerza.com/audio-tools-text-to-speech"
    },
    {
      name: "Voice Cloner",
      gradient: "from-purple-400 to-pink-600",
      icon: <Mic />,
      link: "https://tools.cynerza.com/audio-tools-voice-cloner"
    },
    {
      name: "Noise Remover",
      gradient: "from-rose-400 to-pink-600",
      icon: <Volume2 />,
      link: "https://tools.cynerza.com/audio-tools-noise-remover"
    },
    {
      name: "AI Code Generator",
      gradient: "from-indigo-400 to-cyan-600",
      icon: <Code />,
      link: "https://tools.cynerza.com/gen-ai-tools-code-generator"
    },
    {
      name: "Chatbot Creator",
      gradient: "from-blue-400 to-cyan-600",
      icon: <MessageSquare />,
      link: "https://tools.cynerza.com/gen-ai-tools-chatbot-creator"
    },
    {
      name: "Prompt Designer",
      gradient: "from-green-400 to-emerald-600",
      icon: <PenTool />,
      link: "https://tools.cynerza.com/gen-ai-tools-prompt-designer"
    },
    {
      name: "Podcast Generator",
      gradient: "from-amber-400 to-orange-600",
      icon: <Mic />,
      link: "https://tools.cynerza.com/podcast-generator"
    },
    {
      name: "Social Media Posts",
      gradient: "from-violet-400 to-purple-600",
      icon: <Share2 />,
      link: "https://tools.cynerza.com/social-media-posts"
    },
    {
      name: "Brand Book Generator",
      gradient: "from-emerald-400 to-cyan-600",
      icon: <BookOpen />,
      link: "https://tools.cynerza.com/brandbook-generator"
    },
    {
      name: "Multimedia Bot Builder",
      gradient: "from-rose-400 to-pink-600",
      icon: <Bot />,
      link: "https://tools.cynerza.com/multimedia-bot-builder"
    },
    {
      name: "API Reference",
      gradient: "from-indigo-400 to-cyan-600",
      icon: <Code2 />,
      link: "https://tools.cynerza.com/api-reference"
    },
    {
      name: "API Reference",
      gradient: "from-indigo-400 to-cyan-600",
      icon: <Code2 />,
      link: "https://tools.cynerza.com/api-reference"
    },
    {
      name: "API Reference",
      gradient: "from-indigo-400 to-cyan-600",
      icon: <Code2 />,
      link: "https://tools.cynerza.com/api-reference"
    },
    {
      name: "API Reference",
      gradient: "from-indigo-400 to-cyan-600",
      icon: <Code2 />,
      link: "https://tools.cynerza.com/api-reference"
    }
  ];

    const getAiTool = (idx: number) => aiTools[idx]

    // refs and state for scroll behaviour
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const stickyTextRef = useRef<HTMLDivElement | null>(null);
    const toolRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    // smoothing refs
    const currentYRef = useRef(0);
    const targetYRef = useRef(0);
    const currentBlurRef = useRef(0);
    const targetBlurRef = useRef(0);

    // parameters you can tweak
    const SPEED = 0.55;         // how fast tools target moves
    const SMOOTHNESS = 0.12;    // lerp factor (0 - 1). smaller = smoother
    const MAX_BLUR = 6;        // max blur px applied to text
    const BLUR_RADIUS = 240;   // px radius where blur effect begins

  

    useEffect(() => {
        let raf = 0;

        function loop() {
            if (!wrapperRef.current || !stickyTextRef.current) {
                raf = requestAnimationFrame(loop);
                return;
            }

            const wrapRect = wrapperRef.current.getBoundingClientRect();
            const textRect = stickyTextRef.current.getBoundingClientRect();

            // compute target translateY (same as before)
            const startAt = window.innerHeight * 0.3;
            const scrolled = Math.max(0, startAt - wrapRect.top);
            const targetY = -scrolled * SPEED;
            targetYRef.current = targetY;

            // compute target blur for sticky text using intersection with tools
            const textTop = textRect.top;
            const textBottom = textRect.bottom;
            const textHeight = textRect.height || 1;

            let maxToolBlur = 0;
            for (let i = 0; i < aiTools.length; i++) {
                const el = toolRefs.current[i];
                if (!el) continue;
                const r = el.getBoundingClientRect();

                // check intersection between tool rect and text rect
                const interTop = Math.max(r.top, textTop);
                const interBottom = Math.min(r.bottom, textBottom);
                const intersectionHeight = Math.max(0, interBottom - interTop);

                if (intersectionHeight > 0) {
                    // ratio of how much tool overlaps text
                    const ratio = intersectionHeight / textHeight; // 0..1
                    const toolBlur = Math.min(MAX_BLUR, ratio * MAX_BLUR * 1.2);
                    if (toolBlur > maxToolBlur) maxToolBlur = toolBlur;
                } else {
                    // if not intersecting but close, we can still apply soft blur based on distance
                    const elCenter = r.top + r.height / 2;
                    const textCenter = textTop + textHeight / 2;
                    const dist = Math.abs(elCenter - textCenter);
                    if (dist < BLUR_RADIUS) {
                        const t = 1 - dist / BLUR_RADIUS;
                        const toolBlur = t * (MAX_BLUR * 0.5);
                        if (toolBlur > maxToolBlur) maxToolBlur = toolBlur;
                    }
                }
            }

            targetBlurRef.current = Math.round(maxToolBlur * 100) / 100;

            // lerp current values towards targets for smoothness
            currentYRef.current += (targetYRef.current - currentYRef.current) * SMOOTHNESS;
            currentBlurRef.current += (targetBlurRef.current - currentBlurRef.current) * SMOOTHNESS;

            // apply styles directly to DOM for perf
            if (wrapperRef.current) {
                wrapperRef.current.style.transform = `translate3d(0, ${currentYRef.current}px, 0)`;
                wrapperRef.current.style.willChange = 'transform';
            }

            if (stickyTextRef.current) {
                const blurVal = currentBlurRef.current;
                stickyTextRef.current.style.filter = blurVal ? `blur(${blurVal}px)` : 'none';
                stickyTextRef.current.style.willChange = 'filter';
            }

            raf = requestAnimationFrame(loop);
        }

        raf = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(raf);
    }, []);

   function ToolCard({ tool, className = "", animateCards = true, burstIdx = 0 }: any) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <a
        href={tool.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} rounded-sm w-full h-full relative inline-block overflow-hidden group `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Full card container */}
        <motion.div
          className="w-full h-full flex items-center justify-center p-4 relative border border-gray-200 dark:border-gray-700"
          initial={{ backgroundColor: "#e4ecf4" }}
          animate={{
            backgroundColor: isHovered ? "#3bd4cb" : "#e4ecf4"
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Icon with animated color */}
          <motion.div
            animate={{
              color: isHovered ? "#ffffff" : "#94a3b8"
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            {React.cloneElement(tool.icon, {
              size: 35,
              className: `transition-colors duration-400`,
              style: { color: isHovered ? "#ffffff" : "#94a3b8" }
            })}
          </motion.div>

          {/* Tool name animation from bottom */}
          <motion.div
            className="absolute bottom-4 text-center text-sm font-semibold leading-tight select-none 
          text-white"
            initial={{ y: 40, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 40,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {tool.name}
          </motion.div>
        </motion.div>
      </a>
    );
  }

    return (
        <section className='relative sm:pb-[7rem] xl:pb-[25rem]'>
            {/* Text */}
            <div className='text-center flex flex-col flex-wrap items-center justify-center '>
                <div className='absolute top-20 sm:top-[10rem]  xl:top-[19rem] 2xl:top-[20rem]'>
                    {/* original layout unchanged */}
                </div>
            </div>

            {/* Sticky center text that stays in place while tools scroll under/over it */}
            <div className="relative">
                <div
                    ref={stickyTextRef}
                    className={`sticky top-28 flex flex-col items-center justify-center pointer-events-none`}
                    style={{ transition: 'filter 120ms linear' }}
                >
                    <motion.h2
                        className="text-xl sm:text-4xl font-bold font-heading mb-6 text-slate-900 dark:text-slate-200"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Supercharge Your Workflow
                    </motion.h2>

                    <motion.p
                        className="xl:text-2xl sm:text-xl text-md text-gray-600 dark:text-gray-400 leading-relaxed text-center max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Transform your productivity with our comprehensive suite of AI-powered tools.
                    </motion.p>
                </div>

                {/* Wrapper for all tools (desktop + mobile). We set a higher z-index so tools appear above the text when they overlap */}
                <div ref={wrapperRef} style={{ transform: `translate3d(0, 0, 0)`, transition: 'transform 120ms linear', zIndex: 40 }}>

                    {/* Tools (layout unchanged) */}
                    <div className='lg:flex justify-between hidden '>
                        {/* Left columns */}
                        {/* Rows */}
                        <div className='flex space-x-2 relative'>
                            {/* Column 1 */}
                            <div className='flex flex-col  space-y-2'>
                                <div className='rounded-sm lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                    {<ToolCard tool={getAiTool(0)} idx={0} />}
                                </div>
                                <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-28 sm:h-52 lg:h-40 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                    {<ToolCard tool={getAiTool(1)} idx={1} />}
                                </div>
                                <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                    {<ToolCard tool={getAiTool(2)} idx={2} />}
                                </div>
                            </div>
                            {/*  Column 2 */}
                            <div className='flex flex-col relative top-52 lg:top-40 space-y-2'>
                                <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                    {<ToolCard tool={getAiTool(4)} idx={4} />}
                                </div>
                                <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-28 sm:h-52 lg:h-40 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                    {<ToolCard tool={getAiTool(5)} idx={5} />}
                                </div>
                                <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                    {<ToolCard tool={getAiTool(6)} idx={6} />}
                                </div>
                            </div>
                            {/*  Column 3 */}
                            <div className='flex flex-col relative top-[31rem] lg:top-[22rem] space-y-2'>
                                <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-28 sm:h-52 lg:h-40 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                    {<ToolCard tool={getAiTool(7)} idx={7} />}
                                </div>
                                <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                    {<ToolCard tool={getAiTool(8)} idx={8} />}
                                </div>
                            </div>
                        </div>

                        {/* Center column */}
                        <div className='flex flex-col'>
                            {/*  Column 1 */}
                            <div className='flex flex-col relative top-[36rem] lg:top-[27rem] space-y-2'>
                                <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-28 sm:h-52 lg:h-40 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                    <ToolCard tool={getAiTool(9)} idx={9} />
                                </div>
                                <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                    <ToolCard tool={getAiTool(10)} idx={10} />
                                </div>
                            </div>
                        </div>

                        {/* Right column */}
                        {/* Rows */}
                        <div className='flex space-x-2'>
                            {/*  Column 3 */}
                            <div className='flex flex-col relative top-[31rem] lg:top-[22rem] space-y-2'>
                                <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-28 sm:h-52 lg:h-40 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                    {<ToolCard tool={getAiTool(11)} idx={11} />}
                                </div>
                                <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                    {<ToolCard tool={getAiTool(12)} idx={12} />}
                                </div>
                            </div>
                            {/*  Column 2 */}
                            <div className='flex flex-col relative top-52 lg:top-40 space-y-2'>
                                <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                    {<ToolCard tool={getAiTool(13)} idx={13} />}
                                </div>
                                <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-28 sm:h-52 lg:h-40 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                    {<ToolCard tool={getAiTool(14)} idx={14} />}
                                </div>
                                <div className='lg:w-[13.6vw] xl:w-[13.7vw] 2xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                    {<ToolCard tool={getAiTool(15)} idx={15} />}
                                </div>
                            </div>

                            {/* Column 1 */}
                            <div className='flex flex-col  space-y-2'>
                                <div className='lg:w-[13.6vw] 2lg:w-[13.6vw] xl:w-[13.7vw] h-52 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                    {<ToolCard tool={getAiTool(16)} idx={16} />}
                                </div>
                                <div className='lg:w-[13.6vw] 2lg:w-[13.6vw] xl:w-[13.7vw] h-28 sm:h-52 lg:h-40 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                    {<ToolCard tool={getAiTool(17)} idx={17} />}
                                </div>
                                <div className='lg:w-[13.6vw] 2lg:w-[13.6vw] xl:w-[13.7vw] h-28 sm:h-72 lg:h-56 rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                    {<ToolCard tool={getAiTool(19)} idx={19} />}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tools for small devices */}
                    <div className='flex justify-between lg:hidden mt-40 sm:mt-56'>
                        <div className='flex flex-col space-y-2 relative top-20'>
                            <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72                        rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
                                {<ToolCard tool={getAiTool(0)} idx={0} />}
                            </div>
                            <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-52                        rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                {<ToolCard tool={getAiTool(1)} idx={1} />}
                            </div>
                            <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72                        rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb]'>
                                {<ToolCard tool={getAiTool(2)} idx={2} />}
                            </div>
                            <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-52                        rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
                                {<ToolCard tool={getAiTool(3)} idx={3} />}
                            </div>
                            <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72                        rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
                                {<ToolCard tool={getAiTool(4)} idx={4} />}
                            </div>
                            <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-52                        rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
                                {<ToolCard tool={getAiTool(5)} idx={5} />}
                            </div>
                        </div>
                        <div className='flex flex-col space-y-2 '>
                            <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72                          rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
                                {<ToolCard tool={getAiTool(6)} idx={6} />}
                            </div>
                            <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-52                           rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
                                {<ToolCard tool={getAiTool(7)} idx={7} />}
                            </div>
                            <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72                          rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
                                {<ToolCard tool={getAiTool(8)} idx={8} />}
                            </div>
                            <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-52                           rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
                                {<ToolCard tool={getAiTool(9)} idx={9} />}
                            </div>
                            <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72                          rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] r'>
                                {<ToolCard tool={getAiTool(10)} idx={10} />}
                            </div>
                            <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-52                           rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
                                {<ToolCard tool={getAiTool(11)} idx={11} />}
                            </div>
                            <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72                          rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
                                {<ToolCard tool={getAiTool(12)} idx={12} />}
                            </div>
                        </div>
                        <div className='flex flex-col space-y-2 relative top-20 mb-7 sm:mb-10'>
                            <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72                         rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
                                {<ToolCard tool={getAiTool(14)} idx={14} />}
                            </div>
                            <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-52                          rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
                                {<ToolCard tool={getAiTool(15)} idx={15} />}
                            </div>
                            <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72                         rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
                                {<ToolCard tool={getAiTool(16)} idx={16} />}
                            </div>
                            <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-52                          rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
                                {<ToolCard tool={getAiTool(17)} idx={17} />}
                            </div>
                            <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-72                         rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
                                {<ToolCard tool={getAiTool(18)} idx={18} />}
                            </div>
                            <div className='w-[32vw] sm:w-[32.8vw] md:w-[32.9vw] h-36 sm:h-52                         rounded-sm bg-[#e4ecf4] hover:bg-[#3bd4cb] '>
                                {<ToolCard tool={getAiTool(19)} idx={19} />}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AiToolsPreview;




// __ Test__