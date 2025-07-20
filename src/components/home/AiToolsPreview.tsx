import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Image as ImageIcon, Wand2, Code, Code2, BarChart3, MessageSquare, Brain, Database, Mic, Volume2, Music, BookOpen, PenTool, Share2, LayoutGrid, FileCode, Bot, Zap, Type, Mail, Shield, FileType, FileText as FileTextIcon, FileCode2, FileJson, FileOutput, FileInput, FileSearch, FileCheck, FileX, FileClock, FileArchive, FileDigit, FileDigitIcon, FileSignature, FileQuestion, FileWarning, FileUp, FileDown, FileInput as FileInputIcon, FileOutput as FileOutputIcon, FileVolume2, FileVolume, FileAudio, FileVideo, FileVideo2, FileImage, FileImage as FileImageIcon, FileSpreadsheet, FileSpreadsheet as FileSpreadsheetIcon, FileBadge, FileBadge2, FileCog, FileCog2, FileDiff, FileHeart, FileHeart as FileHeartIcon, FileKey, FileKey2, FileLock, FileLock2, FileMinus, FileMinus2, FilePlus, FilePlus2, FileSearch as FileSearchIcon, FileSliders, FileStack, FileSymlink, FileTerminal, FileType2, FileUp as FileUpIcon, FileX as FileXIcon, FileX2, File as FileIcon, FileArchive as FileArchiveIcon, FileAudio as FileAudioIcon, FileBadge as FileBadgeIcon, FileBarChart, FileBarChart2, FileBox, FileCheck2, FileClock as FileClockIcon, FileCode as FileCodeIcon, FileCog as FileCogIcon, FileDiff as FileDiffIcon, FileDigit as FileDigitIcon2, FileDown as FileDownIcon, FileHeart as FileHeartIcon2, FileInput as FileInputIcon2, FileJson as FileJsonIcon, FileKey as FileKeyIcon, FileLock as FileLockIcon, FileMinus as FileMinusIcon, FileOutput as FileOutputIcon2, FilePlus as FilePlusIcon, FileQuestion as FileQuestionIcon, FileSearch as FileSearchIcon2, FileSignature as FileSignatureIcon, FileSliders as FileSlidersIcon, FileSpreadsheet as FileSpreadsheetIcon2, FileStack as FileStackIcon, FileSymlink as FileSymlinkIcon, FileTerminal as FileTerminalIcon, FileType as FileTypeIcon, FileType2 as FileTypeIcon2, FileUp as FileUpIcon2, FileVideo as FileVideoIcon, FileVolume as FileVolumeIcon, FileVolume2 as FileVolume2Icon, FileWarning as FileWarningIcon, FileX as FileXIcon2, FileX2 as FileX2Icon, File as FileIcon2, FileArchive as FileArchiveIcon2, FileAudio as FileAudioIcon2, FileBadge as FileBadgeIcon2, FileBarChart as FileBarChartIcon, FileBarChart2 as FileBarChart2Icon, FileBox as FileBoxIcon, FileCheck as FileCheckIcon, FileCheck2 as FileCheck2Icon, FileClock as FileClockIcon2, FileCode as FileCodeIcon2, FileCode2 as FileCode2Icon, FileCog as FileCogIcon2, FileCog2 as FileCog2Icon, FileDiff as FileDiffIcon2, FileDigit as FileDigitIcon3, FileDown as FileDownIcon2, FileHeart as FileHeartIcon3, FileInput as FileInputIcon3, FileJson as FileJsonIcon2, FileKey as FileKeyIcon2, FileKey2 as FileKey2Icon, FileLock as FileLockIcon2, FileLock2 as FileLock2Icon, FileMinus as FileMinusIcon2, FileMinus2 as FileMinus2Icon, FileOutput as FileOutputIcon3, FilePlus as FilePlusIcon2, FilePlus2 as FilePlus2Icon, FileQuestion as FileQuestionIcon2, FileSearch as FileSearchIcon3, FileSignature as FileSignatureIcon2, FileSliders as FileSlidersIcon2, FileSpreadsheet as FileSpreadsheetIcon3, FileStack as FileStackIcon2, FileSymlink as FileSymlinkIcon2, FileTerminal as FileTerminalIcon2, FileType as FileTypeIcon3, FileType2 as FileType2Icon, FileUp as FileUpIcon3, FileVideo as FileVideoIcon2, FileVideo2 as FileVideo2Icon, FileVolume as FileVolumeIcon2, FileVolume2 as FileVolume2Icon2, FileWarning as FileWarningIcon2, FileX as FileXIcon3, FileX2 as FileX2Icon2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const AiToolsPreview: React.FC = () => {
  const aiTools = [
    {
      category: "Text Tools",
      tools: [
        {
          name: "Ad Copy Generator",
          description: "Create high-converting ad copy for all your marketing campaigns",
          gradient: "from-purple-400 to-pink-600",
          icon: <FileType size={20} className="text-white" />
        },
        {
          name: "Script Creator",
          description: "Write professional video and podcast scripts with ease",
          gradient: "from-emerald-400 to-teal-600",
          icon: <FileText size={20} className="text-white" />
        },
        {
          name: "Summarizer",
          description: "Get concise summaries of long documents and articles",
          gradient: "from-rose-400 to-pink-600",
          icon: <FileOutput size={20} className="text-white" />
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
          icon: <ImageIcon size={20} className="text-white" />
        },
        {
          name: "Background Remover",
          description: "Instantly remove backgrounds from any image with precision",
          gradient: "from-violet-400 to-purple-600",
          icon: <ImageIcon size={20} className="text-white" />
        },
        {
          name: "Image Enhancer",
          description: "Enhance and upscale images without losing quality",
          gradient: "from-emerald-400 to-cyan-600",
          icon: <Wand2 size={20} className="text-white" />
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
          icon: <Volume2 size={20} className="text-white" />
        },
        {
          name: "Voice Cloner",
          description: "Create realistic voice clones from just a few samples",
          gradient: "from-purple-400 to-pink-600",
          icon: <Mic size={20} className="text-white" />
        },
        {
          name: "Noise Remover",
          description: "Remove background noise and enhance audio quality",
          gradient: "from-rose-400 to-pink-600",
          icon: <Volume2 size={20} className="text-white" />
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
          icon: <Code size={20} className="text-white" />
        },
        {
          name: "Chatbot Creator",
          description: "Build and deploy AI-powered chatbots without coding",
          gradient: "from-blue-400 to-cyan-600",
          icon: <MessageSquare size={20} className="text-white" />
        },
        {
          name: "Prompt Designer",
          description: "Create effective prompts for AI models",
          gradient: "from-green-400 to-emerald-600",
          icon: <PenTool size={20} className="text-white" />
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
          icon: <Mic size={20} className="text-white" />
        },
        {
          name: "Social Media Posts",
          description: "Generate engaging posts for all social platforms",
          gradient: "from-violet-400 to-purple-600",
          icon: <Share2 size={20} className="text-white" />
        },
        {
          name: "Brand Book Generator",
          description: "Create comprehensive brand guidelines automatically",
          gradient: "from-emerald-400 to-cyan-600",
          icon: <BookOpen size={20} className="text-white" />
        },
        {
          name: "Multimedia Bot Builder",
          description: "Build bots that understand and generate multiple media types",
          gradient: "from-rose-400 to-pink-600",
          icon: <Bot size={20} className="text-white" />
        },
        {
          name: "API Reference",
          description: "Access our comprehensive API documentation",
          gradient: "from-indigo-400 to-cyan-600",
          icon: <Code2 size={20} className="text-white" />
        }
      ]
    }
  ];

  return (
    <section className="relative py-8 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.03)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.05)_0%,transparent_70%)]" />
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-cynerza-blue/5 dark:bg-cynerza-blue/10 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-cynerza-purple/5 dark:bg-cynerza-purple/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cynerza-purple/5 dark:bg-cynerza-purple/10 border border-cynerza-purple/10 dark:border-cynerza-purple/20 text-cynerza-purple dark:text-cynerza-purple-light text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span>AI-Powered Tools</span>
            <span className="text-cynerza-purple/70 dark:text-cynerza-purple-light/70">•</span>
            <span>Productivity Suite</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Supercharge Your Workflow
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transform your productivity with our comprehensive suite of AI-powered tools designed for developers, creators, and businesses.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto">
          {aiTools.map((category, index) => (
            <motion.div 
              key={category.category}
              className="mb-20 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-2">
                    {category.category}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-cynerza-purple to-cynerza-blue rounded-full"></div>
                </div>
                <span className="mt-3 md:mt-0 inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-cynerza-purple/10 text-cynerza-purple dark:bg-cynerza-purple/20 dark:text-cynerza-purple-light">
                  {category.tools.length} {category.tools.length > 1 ? 'Tools' : 'Tool'}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={`${category.category}-${toolIndex}`}
                    className="group relative h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: toolIndex * 0.1 }}
                  >
                    <div className="absolute inset-0.5 bg-gradient-to-r from-cynerza-purple/5 to-cynerza-blue/5 dark:from-cynerza-purple/10 dark:to-cynerza-blue/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative h-full bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-700 group-hover:border-cynerza-purple/20 dark:group-hover:border-cynerza-purple/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 bg-gradient-to-br ${tool.gradient} text-white shadow-lg`}>
                        {React.cloneElement(tool.icon, { className: 'w-6 h-6' })}
                      </div>
                      <h4 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-3">{tool.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                        {tool.description}
                      </p>
                      <a 
                        href="https://tools.cynerza.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cynerza-purple dark:text-cynerza-purple-light font-medium text-sm group"
                      >
                        <span className="mr-2">Try Now</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative inline-flex group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cynerza-purple to-cynerza-blue rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <Link 
              to="/ai-tools"
              className="relative flex items-center px-8 py-8 bg-gradient-to-r from-cynerza-purple to-cynerza-blue text-white text-lg font-semibold rounded-xl transition-all
               duration-200 hover:shadow-lg hover:shadow-cynerza-purple/30
               bg-cynerza-purple hover:bg-cynerza-purple/90 h-12 "
            >
              <span>Explore All AI Tools</span>
              <svg className="w-5 h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AiToolsPreview;
