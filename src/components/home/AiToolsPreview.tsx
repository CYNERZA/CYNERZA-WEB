import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AiToolsPreview: React.FC = () => {
  // No longer need useRef for IntersectionObserver as framer-motion handles it
  // const toolsRef = useRef<HTMLDivElement>(null);

  // No longer need useEffect for IntersectionObserver as framer-motion handles it
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add('animate-fade-in');
  //           observer.unobserve(entry.target); // Stop observing once animation is triggered
  //         }
  //       });
  //     },
  //     { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
  //   );

  //   if (toolsRef.current) {
  //     observer.observe(toolsRef.current);
  //   }

  //   return () => {
  //     if (toolsRef.current) {
  //       observer.unobserve(toolsRef.current);
  //     }
  //   };
  // }, []);

  const tools = [
    {
      name: 'Code Analyzer',
      description: 'Analyze and improve your code quality with AI-powered suggestions',
      icon: '🔍',
      color: 'from-blue-400 to-indigo-600',
    },
    {
      name: 'AI Pair Programmer',
      description: 'Code together with an AI that understands your project context',
      icon: '👨‍💻',
      color: 'from-purple-400 to-pink-600',
    },
    {
      name: 'Test Generator',
      description: 'Automatically generate test cases for your applications',
      icon: '✅',
      color: 'from-green-400 to-emerald-600',
    },
    {
      name: 'Documentation Assistant',
      description: 'Create comprehensive documentation in seconds',
      icon: '📚',
      color: 'from-amber-400 to-orange-600',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-heading">
            AI-Powered <span className="gradient-text">Development Tools</span>
          </h2>
          <p className="text-lg text-gray-600">
            Supercharge your workflow with our suite of intelligent tools designed for modern development teams.
          </p>
        </div>

        <div 
          // ref={toolsRef} // No longer needed
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className={`bg-gradient-to-r ${tool.color} p-6 text-white`}>
                <div className="text-4xl mb-2">{tool.icon}</div>
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-white/80 text-sm">{tool.description}</p>
              </div>
              <div className="p-4 bg-white">
                <Link to="/ai-tools">
                  <Button variant="link" className="p-0 text-cynerza-purple flex items-center gap-1 hover:gap-2 transition-all">
                    Learn more <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/ai-tools">
            <Button className="bg-cynerza-purple hover:bg-cynerza-purple/90">
              Explore All AI Tools
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AiToolsPreview;
