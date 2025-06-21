import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ParticleBackground from '@/components/ui/ParticleBackground';
import ToolCard from '@/components/tools/ToolCard';
import ExploreToolsPopup from '@/components/tools/ExploreToolsPopup';
import { 
  TextIcon, 
  Image as ImageIcon, 
  Headphones, 
  BookOpen, 
  Podcast, 
  Share2,
  MessageSquare,
  Video,
  HelpCircle 
} from 'lucide-react';

const AiTools: React.FC = () => {
  useEffect(() => {
    document.title = 'AI Tools - CYNERZA';
  }, []);

  const tools = [
    {
      name: 'Text Tools',
      description: 'Advanced text analysis, generation, and processing tools powered by AI.',
      icon: <TextIcon />,
      gradient: 'from-blue-400 to-indigo-600',
      delay: 0.1
    },
    {
      name: 'Image Tools',
      description: 'Create, edit, and enhance images with our AI-powered image suite.',
      icon: <ImageIcon />,
      gradient: 'from-purple-400 to-pink-600',
      delay: 0.2
    },
    {
      name: 'Audio Tools',
      description: 'Transform and generate audio content with cutting-edge AI technology.',
      icon: <Headphones />,
      gradient: 'from-green-400 to-emerald-600',
      delay: 0.3
    },
    {
      name: 'Gen AI Tools',
      description: 'Next-generation AI tools for creative content generation.',
      icon: <Video />,
      gradient: 'from-amber-400 to-orange-600',
      delay: 0.4
    },
    {
      name: 'Multimedia Bot Builder',
      description: 'Create custom bots for various multimedia applications.',
      icon: <MessageSquare />,
      gradient: 'from-pink-400 to-red-600',
      delay: 0.5
    },
    {
      name: 'Brandbook Generation',
      description: 'Generate comprehensive brand guidelines automatically.',
      icon: <BookOpen />,
      gradient: 'from-teal-400 to-cyan-600',
      delay: 0.6
    },
    {
      name: 'Podcast Generation',
      description: 'Create engaging podcast content with AI assistance.',
      icon: <Podcast />,
      gradient: 'from-indigo-400 to-purple-600',
      delay: 0.7
    },
    {
      name: 'Social Media Posts',
      description: 'Generate and schedule social media content effortlessly.',
      icon: <Share2 />,
      gradient: 'from-rose-400 to-red-600',
      delay: 0.8
    },
    {
      name: 'Help & Support',
      description: 'Get assistance and learn how to use our tools effectively.',
      icon: <HelpCircle />,
      gradient: 'from-sky-400 to-blue-600',
      delay: 0.9
    }
  ];

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <ParticleBackground className="opacity-50" />
      <Navbar />
      
      <main className="flex-grow pt-8 relative z-10">
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                Our <span className="gradient-text">AI Tools</span>
              </h1>
              <p className="text-xl text-gray-600">
                Discover our powerful suite of AI-powered tools designed to enhance your workflow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <ToolCard
                  key={index}
                  name={tool.name}
                  description={tool.description}
                  icon={tool.icon}
                  gradient={tool.gradient}
                  delay={tool.delay}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <ExploreToolsPopup />
      <Footer />
    </div>
  );
};

export default AiTools;
