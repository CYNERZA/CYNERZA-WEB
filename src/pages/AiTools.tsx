import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from '@/components/ui/ParticleBackground';
import ToolCard from '@/components/tools/ToolCard';
import { 
  FileText, 
  Image as ImageIcon, 
  Mic, 
  Volume2, 
  Code, 
  MessageSquare,
  PenTool,
  Share2,
  Bot,
  Code2,
  Search,
  Sparkles,
  Zap,
  Wrench
} from 'lucide-react';
import { cn } from '@/lib/utils';

const AiTools: React.FC = () => {
  useEffect(() => {
    document.title = 'AI Tools - CYNERZA';
  }, []);

  const categories = [
    {
      id: 'text',
      name: 'Text Tools',
      description: 'Advanced text generation and processing tools powered by AI',
      icon: <FileText className="w-6 h-6" />,
      gradient: 'from-blue-400 to-indigo-600',
      tools: [
        'Ad Copy Generator',
        'Script Creator',
        'Summarizer'
      ]
    },
    {
      id: 'image',
      name: 'Image Tools',
      description: 'Create and enhance images with AI-powered editing',
      icon: <ImageIcon className="w-6 h-6" />,
      gradient: 'from-purple-400 to-pink-600',
      tools: [
        'AI Image Generator',
        'Background Remover',
        'Image Enhancer'
      ]
    },
    {
      id: 'audio',
      name: 'Audio Tools',
      description: 'Transform and generate audio with cutting-edge AI',
      icon: <Volume2 className="w-6 h-6" />,
      gradient: 'from-emerald-400 to-teal-600',
      tools: [
        'Text to Speech',
        'Voice Cloner',
        'Noise Remover'
      ]
    },
    {
      id: 'genai',
      name: 'Gen AI Tools',
      description: 'Next-generation AI for creative content generation',
      icon: <Sparkles className="w-6 h-6" />,
      gradient: 'from-amber-400 to-orange-600',
      tools: [
        'AI Code Generator',
        'Chatbot Creator',
        'Prompt Designer'
      ]
    },
    {
      id: 'additional',
      name: 'Additional Tools',
      description: 'Specialized tools for specific creative needs',
      icon: <Wrench className="w-6 h-6" />,
      gradient: 'from-rose-400 to-pink-600',
      tools: [
        'Podcast Generator',
        'Social Media Posts',
        'Brand Book Generator',
        'Multimedia Bot Builder',
        'API Reference'
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter(category => 
    activeCategory === 'all' || category.id === activeCategory
  );

  const filteredTools = filteredCategories.flatMap(category => 
    category.tools.filter(tool => 
      tool.toLowerCase().includes(searchQuery.toLowerCase())
    ).map(tool => ({
      name: tool,
      category: category.name,
      icon: category.icon,
      gradient: category.gradient,
      description: `AI-powered ${tool.toLowerCase()} tool`
    }))
  );

  return (
    <div className="w-full relative">
      <ParticleBackground />
      <div className="relative z-10">
        <main className="flex-grow pt-16 pb-12 relative z-10">
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
              <motion.div 
                className="max-w-4xl mx-auto text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-cynerza-purple/10 dark:bg-cynerza-purple/20 text-cynerza-purple dark:text-cynerza-purple-light text-sm font-medium mb-6"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  <span>AI-Powered Tools</span>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Explore Our <span className="gradient-text">AI Tools</span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Discover our comprehensive suite of AI-powered tools designed to supercharge your productivity and creativity.
                </motion.p>
              </motion.div>

              {}
              <motion.div 
                className="max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search tools..."
                    className="block w-full pl-12 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm focus:ring-2 focus:ring-cynerza-purple/50 focus:border-transparent transition-all duration-200"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={cn(
                      'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                      activeCategory === 'all' 
                        ? 'bg-cynerza-purple text-white shadow-lg shadow-cynerza-purple/20' 
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    )}
                  >
                    All Tools
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={cn(
                        'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center',
                        activeCategory === category.id 
                          ? 'text-white shadow-lg' 
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700',
                        `bg-gradient-to-r ${category.gradient}`
                      )}
                      style={activeCategory !== category.id ? { background: 'none' } : {}}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>
              </motion.div>

              {}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="wait">
                  {filteredTools.map((tool, index) => (
                    <motion.div
                      key={`${tool.name}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      layout
                    >
                      <ToolCard
                        name={tool.name}
                        description={tool.description}
                        icon={tool.icon}
                        gradient={tool.gradient}
                        delay={index * 0.1}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {filteredTools.length === 0 && (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No tools found</h3>
                  <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                </motion.div>
              )}
            </div>
          </section>

          {}
          <section className="py-16 bg-gradient-to-r from-cynerza-purple/5 to-cynerza-blue/5 dark:from-cynerza-purple/10 dark:to-cynerza-blue/10">
            <div className="container mx-auto px-4 text-center">
              <motion.div 
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to supercharge your workflow?</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                  Start using our AI tools today and experience the future of productivity.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="px-8 py-3 bg-cynerza-purple hover:bg-cynerza-purple/90 text-white font-medium rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg">
                    Get Started for Free
                  </button>
                  <button className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-200 transform hover:-translate-y-0.5">
                    Schedule a Demo
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AiTools;
