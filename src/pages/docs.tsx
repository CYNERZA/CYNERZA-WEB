import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ExternalLink, Github, Code, Settings, Users, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Documentation: React.FC = () => {
    useEffect(() => {
        document.title = 'CYNERZA Tools Documentation - AI-Powered Development Platform';
    }, []);

    const navigate = useNavigate()

    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const copyToClipboard = async (text: string, id: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedCode(id);
            setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const quickStartCode = `npm install @cynerza/ai-tools
# or
yarn add @cynerza/ai-tools

# Initialize your project
npx create-cynerza-app my-ai-app
cd my-ai-app
npm start`;

    const apiExampleCode = `import { CynerzaAPI } from '@cynerza/ai-tools';

const api = new CynerzaAPI({
  apiKey: 'your-api-key-here',
  baseURL: 'https://tools.cynerza.com/api'
});

// Generate ad copy
const adCopy = await api.generateAdCopy({
  product: 'AI Development Tools',
  target: 'Developers and Tech Companies',
  tone: 'professional'
});

// Text to Speech conversion
const audio = await api.textToSpeech({
  text: 'Welcome to CYNERZA AI Tools',
  voice: 'natural',
  language: 'en'
});`;

    const configCode = `// cynerza.config.js
export default {
  apiKey: process.env.CYNERZA_API_KEY,
  services: {
    imageGenerator: {
      model: 'dall-e-3',
      quality: 'hd',
      size: '1024x1024'
    },
    textProcessor: {
      model: 'gpt-4-turbo',
      maxTokens: 2000
    },
    voiceCloner: {
      sampleRate: 22050,
      quality: 'high'
    }
  },
  rateLimit: {
    requests: 100,
    windowMs: 60000
  }
};`;

    const tools = [
        {
            name: 'Ad Copy Generator',
            description: 'Generate compelling marketing copy using AI-powered natural language processing',
            endpoint: '/api/v1/generate/ad-copy',
            category: 'Content Creation'
        },
        {
            name: 'Script Creator',
            description: 'Create video scripts and dialogue for various media formats',
            endpoint: '/api/v1/generate/script',
            category: 'Content Creation'
        },
        {
            name: 'AI Summarizer',
            description: 'Summarize long-form content into concise, actionable insights',
            endpoint: '/api/v1/process/summarize',
            category: 'Text Processing'
        },
        {
            name: 'AI Image Generator',
            description: 'Generate high-quality images from text descriptions',
            endpoint: '/api/v1/generate/image',
            category: 'Visual AI'
        },
        {
            name: 'Background Remover',
            description: 'Automatically remove backgrounds from images with precision',
            endpoint: '/api/v1/process/remove-background',
            category: 'Visual AI'
        },
        {
            name: 'Image Enhancer',
            description: 'Enhance image quality, resolution, and visual appeal',
            endpoint: '/api/v1/process/enhance-image',
            category: 'Visual AI'
        },
        {
            name: 'Text to Speech',
            description: 'Convert text into natural-sounding speech with multiple voice options',
            endpoint: '/api/v1/generate/tts',
            category: 'Audio AI'
        },
        {
            name: 'Voice Cloner',
            description: 'Clone and replicate voices with advanced AI technology',
            endpoint: '/api/v1/generate/voice-clone',
            category: 'Audio AI'
        }
    ];

    const categories = ['All', 'Content Creation', 'Text Processing', 'Visual AI', 'Audio AI'];
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredTools = selectedCategory === 'All'
        ? tools
        : tools.filter(tool => tool.category === selectedCategory);

    const CodeBlock = ({ code, language, id }: { code: string; language: string; id: string }) => (
        <div className="relative bg-gray-900 dark:bg-gray-800 rounded-lg p-4 my-4">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">{language}</span>
                <button
                    onClick={() => copyToClipboard(code, id)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                    {copiedCode === id ? <Check size={16} /> : <Copy size={16} />}
                </button>
            </div>
            <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{code}</code>
            </pre>
        </div>
    );

    return (
        <div className="relative pt-24 md:pt-28 w-full px-4 sm:px-6 lg:px-8">
            {/* Purple gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20 z-0" />

            {/* Content wrapper */}
            <div className="relative z-10">

                {/* Hero Section */}
                <section className="py-0">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto text-center mb-16">

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className='inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cynerza-purple/5 dark:bg-cynerza-purple/10 border border-cynerza-purple/10 dark:border-cynerza-purple/20
                 text-cynerza-purple dark:text-cynerza-purple-light text-sm font-medium mb-6'
                            >
                                <BookOpen size={16} />
                                <span>Documentation</span>
                                <span className="text-cynerza-purple/70 dark:text-cynerza-purple-light/70">•</span>
                                <span>v2.1.0</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text
                            text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                                CYNERZA <span className="gradient-text">AI Tools</span> Documentation
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                                Comprehensive guide to integrating CYNERZA's AI-powered tools into your applications.
                                Build smarter, faster, and more efficiently with our unified development platform.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            >
                                <button
                                    onClick={() => window.location.href = "https://tools.cynerza.com/"}
                                    className="px-8 py-3 bg-cynerza-purple hover:bg-cynerza-purple/90 text-white font-medium rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-2">
                                    <Code size={20} />
                                    Get Started
                                </button>
                                <button
                                    onClick={() => window.location.href = "https://github.com/CYNERZA/"}
                                    className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-all duration-200 hover:border-cynerza-purple hover:text-cynerza-purple flex items-center gap-2">
                                    <Github size={20} />
                                    View on GitHub
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Quick Navigation */}
                <section className="py-8">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
                        >
                            {[
                                { icon: BookOpen, title: 'Quick Start', desc: 'Get up and running in minutes' },
                                { icon: Code, title: 'API Reference', desc: 'Complete API documentation' },
                                { icon: Settings, title: 'Configuration', desc: 'Setup and customization' },
                                { icon: Users, title: 'Contributing', desc: 'Join our community' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:border-cynerza-purple/50 transition-all duration-300 hover:shadow-lg"
                                >
                                    <item.icon className="w-8 h-8 text-cynerza-purple mb-4" />
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h2 className="text-center text-4xl md:text-5xl font-bold font-heading mb-6 bg-clip-text 
                    text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                                Introduction & Overview
                            </h2>
                            {/* <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text
              text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                                Introduction & <span className="gradient-text">Overview</span>
                            </h2> */}

                            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400 mb-8">
                                <p className="text-lg sm:text-xl leading-relaxed mb-6">
                                    CYNERZA Tools is a comprehensive AI-powered development platform that unifies content creation,
                                    automation, analytics, and workflows in one place. Our platform eliminates the need to juggle
                                    multiple tools by providing a seamless, integrated experience for modern developers and businesses.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🚀 Key Features</h3>
                                        <ul className="space-y-2">
                                            <li>• 8+ AI-powered tools and services</li>
                                            <li>• RESTful API with comprehensive endpoints</li>
                                            <li>• Real-time processing capabilities</li>
                                            <li>• Enterprise-grade security and reliability</li>
                                            <li>• Seamless integration with popular frameworks</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">💡 Use Cases</h3>
                                        <ul className="space-y-2">
                                            <li>• Content marketing automation</li>
                                            <li>• Visual content creation</li>
                                            <li>• Audio processing and generation</li>
                                            <li>• Workflow automation</li>
                                            <li>• AI-enhanced productivity tools</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Installation Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto"
                        >
                            {/* <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text
              text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                                Installation & <span className="gradient-text">Quick Start</span>
                            </h2> */}

                            <h2 className="text-center text-4xl md:text-5xl font-bold font-heading mb-6 bg-clip-text 
                    text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                                Installation & Quick Start
                            </h2>

                            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                Get started with CYNERZA Tools in just a few simple steps. Our SDK supports Node.js, Python, and browser environments.
                            </p>

                            <CodeBlock code={quickStartCode} language="bash" id="quickstart" />

                            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
                                <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">🔑 API Key Setup</h4>
                                <p className="text-blue-800 dark:text-blue-400">
                                    Sign up at <a href="https://tools.cynerza.com" className="underline hover:text-cynerza-purple">tools.cynerza.com</a> to get your free API key.
                                    Add it to your environment variables as <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">CYNERZA_API_KEY</code>.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* API Documentation Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="max-w-6xl mx-auto"
                        >
                            {/* <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text
              text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 text-center">
                                API <span className="gradient-text">Documentation</span>
                            </h2> */}
                            <h2 className="text-center text-4xl md:text-5xl font-bold font-heading mb-6 bg-clip-text 
                    text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                                API Documentation
                            </h2>

                            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
                                Explore our comprehensive API endpoints. Filter by category to find the tools you need.
                            </p>

                            {/* Category Filter */}
                            <div className="flex flex-wrap justify-center gap-2 mb-8">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category
                                            ? 'bg-cynerza-purple text-white'
                                            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-cynerza-purple/10'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            {/* Tools Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredTools.map((tool, index) => (
                                    <motion.div
                                        key={tool.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:border-cynerza-purple/50 transition-all duration-300 hover:shadow-lg group"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{tool.name}</h3>
                                                <span className="inline-block px-2 py-1 text-xs font-medium bg-cynerza-purple/10 text-cynerza-purple rounded-full">
                                                    {tool.category}
                                                </span>
                                            </div>
                                            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cynerza-purple transition-colors" />
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">{tool.description}</p>
                                        <code className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded font-mono text-cynerza-purple">
                                            {tool.endpoint}
                                        </code>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Usage Examples Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto"
                        >
                            {/* <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text
              text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                                Usage <span className="gradient-text">Examples</span>
                            </h2> */}

                            <h2 className="text-center text-4xl md:text-5xl font-bold font-heading mb-6 bg-clip-text 
                    text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                                Usage Examples
                            </h2>

                            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                Here are practical examples to help you integrate CYNERZA Tools into your applications quickly.
                            </p>

                            <CodeBlock code={apiExampleCode} language="javascript" id="api-example" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                                    <h4 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-2">✅ Best Practices</h4>
                                    <ul className="text-green-800 dark:text-green-400 space-y-1">
                                        <li>• Always handle API errors gracefully</li>
                                        <li>• Implement proper rate limiting</li>
                                        <li>• Cache responses when appropriate</li>
                                        <li>• Use environment variables for API keys</li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                                    <h4 className="text-lg font-semibold text-orange-900 dark:text-orange-300 mb-2">⚠️ Important Notes</h4>
                                    <ul className="text-orange-800 dark:text-orange-400 space-y-1">
                                        <li>• API keys are rate-limited per plan</li>
                                        <li>• Large files may take time to process</li>
                                        <li>• Check response status codes</li>
                                        <li>• Monitor your usage dashboard</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Configuration Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto"
                        >
                            {/* <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text
              text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                                Configuration <span className="gradient-text">Options</span>
                            </h2> */}

                            <h2 className="text-center text-4xl md:text-5xl font-bold font-heading mb-6 bg-clip-text 
                    text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                                Configuration Options
                            </h2>

                            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                Customize CYNERZA Tools to fit your specific needs with these configuration options.
                            </p>

                            <CodeBlock code={configCode} language="javascript" id="config" />

                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Environment Variables</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                                        <thead>
                                            <tr className="bg-gray-100 dark:bg-gray-800">
                                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Variable</th>
                                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Description</th>
                                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Required</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">CYNERZA_API_KEY</td>
                                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Your API authentication key</td>
                                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-green-600">Yes</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">CYNERZA_BASE_URL</td>
                                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Custom API base URL</td>
                                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-500">No</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">CYNERZA_TIMEOUT</td>
                                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Request timeout in milliseconds</td>
                                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-500">No</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Contributing Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto"
                        >
                            {/* <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text
              text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                                Contributing <span className="gradient-text">Guidelines</span>
                            </h2> */}

                            <h2 className="text-center text-4xl md:text-5xl font-bold font-heading mb-6 bg-clip-text 
                    text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                                Contributing Guidelines
                            </h2>

                            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                We welcome contributions from the community! Here's how you can get involved in improving CYNERZA Tools.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🤝 How to Contribute</h3>
                                    <ol className="space-y-2 text-gray-600 dark:text-gray-400">
                                        <li>1. Fork the repository on GitHub</li>
                                        <li>2. Create a feature branch from main</li>
                                        <li>3. Make your changes with tests</li>
                                        <li>4. Submit a pull request with description</li>
                                        <li>5. Participate in code review process</li>
                                    </ol>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">📋 Contribution Types</h3>
                                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                        <li>• Bug fixes and improvements</li>
                                        <li>• New AI tool integrations</li>
                                        <li>• Documentation enhancements</li>
                                        <li>• Performance optimizations</li>
                                        <li>• Example applications and tutorials</li>
                                    </ul>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </section>


            </div>
        </div>
    );
};

export default Documentation;
