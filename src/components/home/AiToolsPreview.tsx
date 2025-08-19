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
//         icon: <FileType size={20} className="text-white" />,
//         link: "https://tools.cynerza.com/text-tools-ad-copy-generator"
//       },
//       {
//         name: "Script Creator",
//         description: "Write professional video and podcast scripts with ease",
//         gradient: "from-emerald-400 to-teal-600",
//         icon: <FileText size={20} className="text-white" />,
//         link: "https://tools.cynerza.com/text-tools-script-creator"
//       },
//       {
//         name: "Summarizer",
//         description: "Get concise summaries of long documents and articles",
//         gradient: "from-rose-400 to-pink-600",
//         icon: <FileOutput size={20} className="text-white" />,
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
//         icon: <ImageIcon size={20} className="text-white" />,
//         link: "https://tools.cynerza.com/image-tools-ai-image-generator"
//       },
//       {
//         name: "Background Remover",
//         description: "Instantly remove backgrounds from any image with precision",
//         gradient: "from-violet-400 to-purple-600",
//         icon: <ImageIcon size={20} className="text-white" />,
//         link: "https://tools.cynerza.com/image-tools-background-remover"
//       },
//       {
//         name: "Image Enhancer",
//         description: "Enhance and upscale images without losing quality",
//         gradient: "from-emerald-400 to-cyan-600",
//         icon: <Wand2 size={20} className="text-white" />,
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
//         icon: <Volume2 size={20} className="text-white" />,
//         link: "https://tools.cynerza.com/audio-tools-text-to-speech"
//       },
//       {
//         name: "Voice Cloner",
//         description: "Create realistic voice clones from just a few samples",
//         gradient: "from-purple-400 to-pink-600",
//         icon: <Mic size={20} className="text-white" />,
//         link: "https://tools.cynerza.com/audio-tools-voice-cloner"
//       },
//       {
//         name: "Noise Remover",
//         description: "Remove background noise and enhance audio quality",
//         gradient: "from-rose-400 to-pink-600",
//         icon: <Volume2 size={20} className="text-white" />,
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
//         icon: <Code size={20} className="text-white" />,
//         link: "https://tools.cynerza.com/gen-ai-tools-code-generator"
//       },
//       {
//         name: "Chatbot Creator",
//         description: "Build and deploy AI-powered chatbots without coding",
//         gradient: "from-blue-400 to-cyan-600",
//         icon: <MessageSquare size={20} className="text-white" />,
//         link: "https://tools.cynerza.com/gen-ai-tools-chatbot-creator"
//       },
//       {
//         name: "Prompt Designer",
//         description: "Create effective prompts for AI models",
//         gradient: "from-green-400 to-emerald-600",
//         icon: <PenTool size={20} className="text-white" />,
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
//         icon: <Mic size={20} className="text-white" />,
//         link: "https://tools.cynerza.com/podcast-generator"
//       },
//       {
//         name: "Social Media Posts",
//         description: "Generate engaging posts for all social platforms",
//         gradient: "from-violet-400 to-purple-600",
//         icon: <Share2 size={20} className="text-white" />,
//         link: "https://tools.cynerza.com/social-media-posts"
//       },
//       {
//         name: "Brand Book Generator",
//         description: "Create comprehensive brand guidelines automatically",
//         gradient: "from-emerald-400 to-cyan-600",
//         icon: <BookOpen size={20} className="text-white" />,
//         link: "https://tools.cynerza.com/brandbook-generator"
//       },
//       {
//         name: "Multimedia Bot Builder",
//         description: "Build bots that understand and generate multiple media types",
//         gradient: "from-rose-400 to-pink-600",
//         icon: <Bot size={20} className="text-white" />,
//         link: "https://tools.cynerza.com/multimedia-bot-builder"
//       },
//       {
//         name: "API Reference",
//         description: "Access our comprehensive API documentation",
//         gradient: "from-indigo-400 to-cyan-600",
//         icon: <Code2 size={20} className="text-white" />,
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

//         <div className="max-w-72xl mx-auto">
//           {aiTools.map((category, index) => (
//             <motion.div 
//               key={category.category}
//               className="my-6 last:mb-0"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ 
//                 duration: 0.6, 
//                 delay: index * 0.1,
//                 ease: [0.16, 1, 0.3, 1]
//               }}
//             >
//               <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
//                 <div>
//                   <h3 className="text-22xl md:text-32xl font-bold font-heading text-gray-900 dark:text-white mb-2">
//                     {category.category}
//                   </h3>
//                   <div className="w-16 h-1 bg-gradient-to-r from-cynerza-purple to-cynerza-blue rounded-full"></div>
//                 </div>
//                 <span className="mt-3 md:mt-0 inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-cynerza-purple/10 text-cynerza-purple dark:bg-cynerza-purple/20 dark:text-cynerza-purple-light">
//                   {category.tools.length} {category.tools.length > 1 ? 'Tools' : 'Tool'}
//                 </span>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
//                 {category.tools.map((tool, toolIndex) => (
//                   <motion.div
//                     key={`${category.category}-${toolIndex}`}
//                     className="group relative h-full"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.4, delay: toolIndex * 0.1 }}
//                   >
//                     <div className="absolute inset-0.5 bg-gradient-to-r from-cynerza-purple/5 to-cynerza-blue/5 dark:from-cynerza-purple/10 dark:to-cynerza-blue/10 rounded-22xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     <div className="relative h-full bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-22xl p-6 border border-gray-100 dark:border-gray-700 group-hover:border-cynerza-purple/20 dark:group-hover:border-cynerza-purple/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
//                       <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6 bg-gradient-to-br ${tool.gradient} text-white shadow-2xl`}>
//                         {React.cloneElement(tool.icon, { className: 'w-6 h-6' })}
//                       </div>
//                       <h4 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-3">{tool.name}</h4>
//                       <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
//                         {tool.description}
//                       </p>
//                       <a 
//                         href={tool.link} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center text-cynerza-purple dark:text-cynerza-purple-light font-medium text-sm group"
//                       >
//                         <span className="mr-2">Try Now</span>
//                         <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                         </svg>
//                       </a>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

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





import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Bot,
  Code,
  Code2,
  FileOutput,
  FileText,
  FileType,
  ImageIcon,
  MessageSquare,
  Mic,
  PenTool,
  Share2,
  Volume2,
  Wand2
} from "lucide-react";

const ResponsiveToo2xlrid = () => {
  const aiTools = [
    {
      category: "Text Tools",
      tools: [
        {
          name: "Ad Copy Generator",
          description: "Create high-converting ad copy for all your marketing campaigns",
          gradient: "from-purple-400 to-pink-600",
          icon: <FileType />,
          link: "https://tools.cynerza.com/text-tools-ad-copy-generator"
        },
        {
          name: "Script Creator",
          description: "Write professional video and podcast scripts with ease",
          gradient: "from-emerald-400 to-teal-600",
          icon: <FileText />,
          link: "https://tools.cynerza.com/text-tools-script-creator"
        },
        {
          name: "Summarizer",
          description: "Get concise summaries of long documents and articles",
          gradient: "from-rose-400 to-pink-600",
          icon: <FileOutput />,
          link: "https://tools.cynerza.com/text-tools-summarizer"
        }
      ]
    },
    {
      category: "Image Tools",
      tools: [
        {
          name: "AI Image Generator",
          description: "Create stunning, high-quality images from text descriptions",
          gradient: "from-amber-400 to-orange-600",
          icon: <ImageIcon />,
          link: "https://tools.cynerza.com/image-tools-ai-image-generator"
        },
        {
          name: "Background Remover",
          description: "Instantly remove backgrounds from any image with precision",
          gradient: "from-violet-400 to-purple-600",
          icon: <ImageIcon />,
          link: "https://tools.cynerza.com/image-tools-background-remover"
        },
        {
          name: "Image Enhancer",
          description: "Enhance and upscale images without losing quality",
          gradient: "from-emerald-400 to-cyan-600",
          icon: <Wand2 />,
          link: "https://tools.cynerza.com/image-tools-image-enhancer"
        }
      ]
    },
    {
      category: "Audio Tools",
      tools: [
        {
          name: "Text to Speech",
          description: "Convert text to natural-sounding speech in multiple languages",
          gradient: "from-blue-400 to-indigo-600",
          icon: <Volume2 />,
          link: "https://tools.cynerza.com/audio-tools-text-to-speech"
        },
        {
          name: "Voice Cloner",
          description: "Create realistic voice clones from just a few samples",
          gradient: "from-purple-400 to-pink-600",
          icon: <Mic />,
          link: "https://tools.cynerza.com/audio-tools-voice-cloner"
        },
        {
          name: "Noise Remover",
          description: "Remove background noise and enhance audio quality",
          gradient: "from-rose-400 to-pink-600",
          icon: <Volume2 />,
          link: "https://tools.cynerza.com/audio-tools-noise-remover"
        }
      ]
    },
    {
      category: "Gen AI Tools",
      tools: [
        {
          name: "AI Code Generator",
          description: "Generate code in multiple programming languages with AI",
          gradient: "from-indigo-400 to-cyan-600",
          icon: <Code />,
          link: "https://tools.cynerza.com/gen-ai-tools-code-generator"
        },
        {
          name: "Chatbot Creator",
          description: "Build and deploy AI-powered chatbots without coding",
          gradient: "from-blue-400 to-cyan-600",
          icon: <MessageSquare />,
          link: "https://tools.cynerza.com/gen-ai-tools-chatbot-creator"
        },
        {
          name: "Prompt Designer",
          description: "Create effective prompts for AI models",
          gradient: "from-green-400 to-emerald-600",
          icon: <PenTool />,
          link: "https://tools.cynerza.com/gen-ai-tools-prompt-designer"
        }
      ]
    },
    {
      category: "Additional Tools",
      tools: [
        {
          name: "Podcast Generator",
          description: "Create professional podcasts from text content",
          gradient: "from-amber-400 to-orange-600",
          icon: <Mic />,
          link: "https://tools.cynerza.com/podcast-generator"
        },
        {
          name: "Social Media Posts",
          description: "Generate engaging posts for all social platforms",
          gradient: "from-violet-400 to-purple-600",
          icon: <Share2 />,
          link: "https://tools.cynerza.com/social-media-posts"
        },
        {
          name: "Brand Book Generator",
          description: "Create comprehensive brand guidelines automatically",
          gradient: "from-emerald-400 to-cyan-600",
          icon: <BookOpen />,
          link: "https://tools.cynerza.com/brandbook-generator"
        },
        {
          name: "Multimedia Bot Builder",
          description: "Build bots that understand and generate multiple media types",
          gradient: "from-rose-400 to-pink-600",
          icon: <Bot />,
          link: "https://tools.cynerza.com/multimedia-bot-builder"
        },
        {
          name: "API Reference",
          description: "Access our comprehensive API documentation",
          gradient: "from-indigo-400 to-cyan-600",
          icon: <Code2 />,
          link: "https://tools.cynerza.com/api-reference"
        },
        // fill last slot if needed
        {
          name: "Content Repurposer",
          description: "Turn one article into many formats (social, newsletter, etc.)",
          gradient: "from-pink-400 to-amber-400",
          icon: <FileOutput />,
          link: "https://tools.cynerza.com/content-repurposer"
        }
      ]
    }
  ];

  // flatten tools array
  const flatTools = aiTools.flatMap((c) => c.tools);
  const getTool = (i) => flatTools[i];

  // refs & state
  const sectionRef = useRef(null);
  const toolsRef = useRef(null);
  const [toolsHeight, setToolsHeight] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0); // 0..1
  const [sectionInView, setSectionInView] = useState(false);

  // measure tools height for translation calc
  useEffect(() => {
    const measure = () => {
      if (toolsRef.current) setToolsHeight(toolsRef.current.offsetHeight || 0);
    };
    measure();
    let ro;
    try {
      ro = new ResizeObserver(measure);
      if (toolsRef.current) ro.observe(toolsRef.current);
    } catch (e) {
      // ignore if ResizeObserver not available
    }
    window.addEventListener("resize", measure);
    return () => {
      if (ro && ro.disconnect) ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // observe section visibility for entrance animations
  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setSectionInView(entry.isIntersecting && entry.intersectionRatio > 0.08);
        });
      },
      { threshold: [0, 0.08, 0.25, 0.6] }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // scroll listener -> compute progress 0..1
  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      if (!sectionRef.current || !toolsRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Start sliding when section top reaches slightly above viewport top (rect.top <= 0)
      // denom = toolsHeight + gap to reach full slide
      const gap = 18;
      const denom = Math.max(1, toolsHeight + gap);
      const raw = Math.max(0, -rect.top) / denom;
      const prog = Math.min(1, raw);
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setScrollProgress(prog));
    };

    // initial
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [toolsHeight]);

  /** ToolCard: same behavior (icon only by default; overlay on hover) */
  const ToolCard = ({ tool, wrapperClass, index = 0 }) => {
    if (!tool) {
      return (
        <div
          className={`${wrapperClass} rounded-lg flex items-center justify-center p-4
            bg-white/80 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700`}
        />
      );
    }

    const [isHover, setIsHover] = useState(false);
    const [entranceGlow, setEntranceGlow] = useState(true);

    useEffect(() => {
      const t = setTimeout(() => setEntranceGlow(false), 1200 + index * 30);
      return () => clearTimeout(t);
    }, [index]);

    const normalIcon = React.cloneElement(tool.icon, {
      size: 26,
      className: "text-gray-600 dark:text-gray-300"
    });
    const hoverIcon = React.cloneElement(tool.icon, {
      size: 26,
      className: "text-white"
    });

    return (
      <motion.a
        href={tool.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${wrapperClass} relative inline-block rounded-lg overflow-hidden`}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        onFocus={() => setIsHover(true)}
        onBlur={() => setIsHover(false)}
        // initial={{ opacity: 0, y: 22, scale: 0.98 }}
        // animate={{
        //   opacity: sectionInView ? 1 : 0,
        //   y: sectionInView ? -8 : 22,
        //   scale: isHover ? 1.02 : 1
        // }}
        transition={{ delay: Math.min(0.02 * index, 0.9), duration: 0.45, type: "spring", stiffness: 220, damping: 24 }}
      >
        <div
          className={`w-full h-full flex items-center justify-center p-4 rounded-lg transition-colors duration-200
            bg-white/80 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700`}
          style={
            entranceGlow
              ? {
                  boxShadow: "0 10px 30px rgba(99,102,241,0.08), 0 4px 12px rgba(59,130,246,0.05)"
                }
              : {}
          }
        >
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-md transition-opacity duration-200 ${
              isHover ? "opacity-0" : "opacity-100"
            }`}
            aria-hidden={isHover}
          >
            {normalIcon}
          </div>

          <motion.div
            className={`absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white rounded-lg`}
            initial={{ opacity: 0 }}
            animate={isHover ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ duration: 0.22 }}
            style={
              isHover
                ? {
                    boxShadow: "0 18px 60px rgba(99,102,241,0.16), 0 8px 26px rgba(59,130,246,0.08)"
                  }
                : {}
            }
          >
            <div
              className={`absolute inset-0 -z-10 rounded-lg bg-gradient-to-r ${tool.gradient}`}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 -z-20 rounded-lg filter blur-sm opacity-30"
              style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.03), rgba(0,0,0,0))" }}
            />

            <div className="flex flex-col items-center gap-2 px-2">
              <div className={`p-2 rounded-full bg-white/10 ${entranceGlow ? "entrance-glow" : ""}`}>
                {hoverIcon}
              </div>

              <motion.div
                className="text-sm font-semibold leading-tight select-none"
                animate={isHover || entranceGlow ? { scale: 1.02 } : { scale: 1 }}
                transition={{ duration: 0.28 }}
              >
                <span className={isHover || entranceGlow ? "cynerza-glow" : ""}>{tool.name}</span>
              </motion.div>

              <div className="text-xs max-w-[10rem] leading-tight opacity-90 select-none">
                {tool.description}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.a>
    );
  };

  // compute header transforms based on scrollProgress
  const gap = 18;
  const translateY = scrollProgress * (toolsHeight + gap); // how far header moves down
  const maxBlur = 8; // px
  const blur = Math.min(maxBlur, scrollProgress * maxBlur * 1.2); // increase blur early
  const opacity = Math.max(0, 1 - scrollProgress * 1.2); // fade out as progress increases

  return (
    <section ref={sectionRef} className="relative py-8 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* scoped styles */}
      <style>{`
        .cynerza-glow {
          color: inherit;
          text-shadow: 0 8px 24px rgba(99,102,241,0.14);
          transition: text-shadow .2s ease, transform .2s ease;
          animation: cynerzaGlow 1.6s ease-in-out infinite alternate;
        }
        @keyframes cynerzaGlow {
          from { text-shadow: 0 4px 12px rgba(99,102,241,0.06); transform: translateY(0); }
          to { text-shadow: 0 14px 36px rgba(99,102,241,0.28); transform: translateY(-1px); }
        }
        .entrance-glow {
          box-shadow: 0 10px 30px rgba(99,102,241,0.12), 0 6px 18px rgba(59,130,246,0.06);
          animation: entrancePulse 1.2s ease-out forwards;
        }
        @keyframes entrancePulse {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          40% { transform: translateY(-3px) scale(1.03); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        a > div { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
      `}</style>

      {/* Header at top — translates down, blurs, fades as user scrolls the section up */}
      <div style={{ position: "relative", zIndex: 10, pointerEvents: "none" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
            style={{
              transform: `translateY(${translateY}px)`,
              filter: `blur(${blur}px)`,
              opacity,
              transition: "transform 0.08s linear, filter 0.15s linear, opacity 0.15s linear",
              willChange: "transform, filter, opacity, text-shadow"
            }}
          >
            <span className={scrollProgress > 0.02 ? "cynerza-glow" : ""}>Supercharge Your Workflow</span>
          </h2>

          <p
            className="text-center text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{
              transform: `translateY(${translateY}px)`,
              filter: `blur(${blur * 0.6}px)`,
              opacity: Math.max(0, opacity - 0.05),
              transition: "transform 0.08s linear, filter 0.15s linear, opacity 0.15s linear",
              willChange: "transform, filter, opacity"
            }}
          >
            Transform your productivity with our comprehensive suite of AI-powered tools.
          </p>
        </div>
      </div>

      {/* Tools area (z higher so header slides under) */}
      <div ref={toolsRef} className="flex justify-between w-full px-0 mt-6 relative z-20">
        {/* Left column */}
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <ToolCard tool={getTool(0)} wrapperClass="sm:hidden md:block md:w-[13.3vw] lg:w-[13.4vw] h-72 2xl:w-[13.7vw]" index={0} />
            <ToolCard tool={getTool(1)} wrapperClass="sm:hidden md:block md:w-[13.3vw] lg:w-[13.4vw] h-52 2xl:w-[13.7vw]" index={1} />
            <ToolCard tool={getTool(2)} wrapperClass="sm:hidden md:block md:w-[13.3vw] lg:w-[13.4vw] h-72 2xl:w-[13.7vw]" index={2} />
          </div>

          <div className="flex flex-col relative top-20 gap-2">
            <ToolCard tool={getTool(3)} wrapperClass="sm:hidden md:block md:w-[13.3vw] lg:w-[13.4vw] h-72 2xl:w-[13.7vw]" index={3} />
            <ToolCard tool={getTool(4)} wrapperClass="sm:hidden md:block md:w-[13.3vw] lg:w-[13.4vw] h-52 2xl:w-[13.7vw]" index={4} />
            <ToolCard tool={getTool(5)} wrapperClass="sm:hidden md:block md:w-[13.3vw] lg:w-[13.4vw] h-72 2xl:w-[13.7vw]" index={5} />
          </div>

          <div className="flex flex-col gap-2 relative top-52">
            <ToolCard tool={getTool(6)} wrapperClass="sm:hidden md:block md:w-[13.3vw] lg:w-[13.4vw] h-52 2xl:w-[13.7vw]" index={6} />
            <ToolCard tool={getTool(7)} wrapperClass="sm:hidden md:block md:w-[13.3vw] lg:w-[13.4vw] h-72 2xl:w-[13.7vw]" index={7} />
          </div>
        </div>

        {/* Center column */}
        <div className="flex flex-col gap-2 relative top-60">
          <ToolCard tool={getTool(8)} wrapperClass="sm:hidden md:block md:w-[13.3vw] lg:w-[13.4vw] h-52 2xl:w-[13.7vw]" index={8} />
          <ToolCard tool={getTool(9)} wrapperClass="sm:hidden md:block md:w-[13.3vw] lg:w-[13.4vw] h-72 2xl:w-[13.7vw]" index={9} />
        </div>

        {/* Right column */}
        <div className="flex gap-2">
          <div className="flex flex-col gap-2 relative top-52">
            <ToolCard tool={getTool(10)} wrapperClass="sm:hidden md:block md:w-[13.3vw] lg:w-[13.4vw] h-52 2xl:w-[13.7vw]" index={10} />
            <ToolCard tool={getTool(11)} wrapperClass="sm:hidden md:block md:w-[13.3vw] lg:w-[13.4vw] h-72 2xl:w-[13.7vw]" index={11} />
          </div>

          <div className="flex flex-col relative top-20 gap-2">
            <ToolCard tool={getTool(12)} wrapperClass="sm:hidden md:block md:w-[13.3vw] lg:w-[13.4vw] h-72 2xl:w-[13.7vw]" index={12} />
            <ToolCard tool={getTool(13)} wrapperClass="sm:hidden md:block md:w-[13.3vw] lg:w-[13.4vw] h-52 2xl:w-[13.7vw]" index={13} />
            <ToolCard tool={getTool(14)} wrapperClass="sm:hidden md:block md:w-[13.3vw] lg:w-[13.4vw] h-72 2xl:w-[13.7vw]" index={14} />
          </div>

          <div className="flex flex-col gap-2">
            <ToolCard tool={getTool(15)} wrapperClass="sm:hidden md:block md:w-[13.3vw] lg:w-[13.4vw] 2xl:w-[13.7vw] h-72" index={15} />
            <ToolCard tool={getTool(16)} wrapperClass="sm:hidden md:block md:w-[13.3vw] lg:w-[13.4vw] 2xl:w-[13.7vw] h-52" index={16} />
            <ToolCard tool={getTool(17)} wrapperClass="sm:hidden md:block md:w-[13.3vw] lg:w-[13.4vw] 2xl:w-[13.7vw] h-72" index={17} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveToo2xlrid;
