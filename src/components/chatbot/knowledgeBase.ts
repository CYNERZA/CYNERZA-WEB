// Knowledge base for the Cynerza virtual assistant

export interface KnowledgeItem {
  keywords: string[];
  response: string;
  quickActions?: string[];
}

export const knowledgeBase: KnowledgeItem[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    response: "Hello! 👋 Welcome to **CYNERZA**!\n\nI'm your virtual assistant. CYNERZA is a *next-generation AI-first platform* that simplifies digital transformation for individuals, startups, and enterprises.\n\nHow can I assist you today?",
    quickActions: ['Our Platform', 'AI Tools', 'Services', 'Get Started']
  },
  {
    keywords: ['services', 'what do you offer', 'what services', 'offerings', 'solutions', 'platform', 'what is cynerza'],
    response: "**CYNERZA** offers a complete unified AI platform:\n\n- 🌐 **Web Development** - High-performance, SEO-ready websites\n- 📱 **Mobile App Development** - Native Android/iOS & Flutter apps\n- ⚙️ **Business Automation** - AI-powered RPA & workflow builders\n- 🔌 **Custom API Solutions** - REST & GraphQL APIs at scale\n- 📊 **Digital Marketing & Analytics** - AI-driven SEO & campaigns\n- 🤖 **Multimodal AI Suite** - Text, Image, Voice & Video AI\n\n*All accessible through one seamless ecosystem!*\n\nWhat would you like to explore?",
    quickActions: ['Web Development', 'Automation', 'AI Tools', 'Get Demo']
  },
  {
    keywords: ['saas', 'saas product', 'software development', 'saas development'],
    response: "Our **SaaS Product Development** services help you build scalable, cloud-based applications:\n\n- ✅ *Full-stack development*\n- ✅ *Cloud-native architecture*\n- ✅ *Multi-tenant solutions*\n- ✅ *API integrations*\n- ✅ *Continuous deployment*\n- ✅ *Security & compliance*\n\nWe transform your ideas into **robust, market-ready** SaaS products. Would you like to discuss your project?",
    quickActions: ['Contact Sales', 'View Case Studies', 'Other Services']
  },
  {
    keywords: ['llm', 'custom llm', 'language model', 'api', 'ai api', 'chatbot api'],
    response: "Our **Custom LLM API Services** provide:\n\n- 🎯 *Custom-trained language models*\n- 🔧 *API integration and deployment*\n- 📊 *Fine-tuning for your domain*\n- 🔒 *Privacy-focused solutions*\n- ⚡ *High-performance inference*\n- 🌐 *Multi-language support*\n\nWe help you build **intelligent applications** with state-of-the-art AI. Interested in learning more?",
    quickActions: ['Request Demo', 'Technical Details', 'Pricing']
  },
  {
    keywords: ['automation', 'automate', 'workflow', 'process automation', 'rpa'],
    response: "Our **Automation Solutions** help streamline your operations:\n\n- ⚙️ *Robotic Process Automation (RPA)*\n- 🔄 *Workflow automation*\n- 📈 *Business process optimization*\n- 🤖 *AI-powered automation*\n- 📊 *Analytics and reporting*\n- 💡 *Custom integration solutions*\n\n**Automate** repetitive tasks and boost productivity. Would you like to explore automation opportunities?",
    quickActions: ['Schedule Consultation', 'Case Studies', 'ROI Calculator']
  },
  {
    keywords: ['ai', 'ml', 'machine learning', 'artificial intelligence', 'deep learning', 'ai ml'],
    response: "Our **AI & ML Solutions** include:\n\n🧠 Machine Learning model development\n📊 Predictive analytics\n👁️ Computer vision solutions\n🗣️ Natural Language Processing\n🎯 Recommendation systems\n📈 Data science consulting\n\nWe help you leverage AI to gain competitive advantages. Ready to innovate?",
    quickActions: ['AI Consultation', 'View Projects', 'Get Started']
  },
  {
    keywords: ['cloud', 'devops', 'aws', 'azure', 'infrastructure', 'kubernetes', 'docker'],
    response: "Our **Cloud & DevOps Engineering** services:\n\n☁️ Cloud migration and architecture\n🚀 CI/CD pipeline setup\n🐳 Container orchestration (Kubernetes, Docker)\n📊 Infrastructure as Code\n🔒 Security and compliance\n⚡ Performance optimization\n\nWe build and maintain scalable, reliable cloud infrastructure. Need help with your cloud journey?",
    quickActions: ['Cloud Assessment', 'Migration Services', 'DevOps Consulting']
  },
  {
    keywords: ['it service', 'it management', 'support', 'helpdesk', 'itsm'],
    response: "Our **IT Service Management** includes:\n\n💼 24/7 IT support\n🛠️ Incident management\n📋 Service desk solutions\n🔧 Asset management\n📈 ITIL-aligned processes\n🔒 Security management\n\nWe ensure your IT infrastructure runs smoothly. Interested in our support services?",
    quickActions: ['Support Plans', 'Contact Support', 'Learn More']
  },
  {
    keywords: ['industries', 'sectors', 'who do you serve', 'industry solutions'],
    response: "**Cynerza** serves multiple industries:\n\n- 🏦 **Banking & Financial Services**\n- 📈 **Capital Markets**\n- 🏥 **Healthcare & Life Sciences**\n- 🎓 **Education**\n- 🛒 **Retail & E-commerce**\n- 📱 **Media & Communications**\n- 🏛️ **Public Services**\n- ✈️ **Travel & Logistics**\n\nWhich industry would you like to know more about?",
    quickActions: ['Banking', 'Healthcare', 'Education', 'Retail']
  },
  {
    keywords: ['banking', 'finance', 'financial services', 'fintech'],
    response: "In **Banking & Financial Services**, we provide:\n\n💳 Digital banking solutions\n🔒 Fraud detection systems\n📊 Risk management tools\n🤖 AI-powered trading algorithms\n💰 Payment processing solutions\n📱 Mobile banking applications\n\nWe help financial institutions innovate securely. Want to discuss your needs?",
    quickActions: ['Financial Solutions', 'Security Features', 'Contact Us']
  },
  {
    keywords: ['healthcare', 'medical', 'hospital', 'health', 'patient'],
    response: "Our **Healthcare Solutions** include:\n\n🏥 Electronic Health Records (EHR)\n🔬 Medical imaging analysis\n💊 Patient management systems\n📊 Healthcare analytics\n🤖 AI-powered diagnostics\n📱 Telemedicine platforms\n\nWe're committed to improving healthcare outcomes. Interested in our healthcare solutions?",
    quickActions: ['Healthcare Demo', 'Compliance Info', 'Case Studies']
  },
  {
    keywords: ['education', 'learning', 'school', 'university', 'edtech'],
    response: "Our **Education Solutions** offer:\n\n📚 Learning Management Systems (LMS)\n🎓 Virtual classroom platforms\n📊 Student analytics\n🤖 AI-powered tutoring\n📱 Mobile learning apps\n🎯 Personalized learning paths\n\nWe're transforming education through technology. Want to learn more?",
    quickActions: ['Education Platform', 'Demo Request', 'Pricing']
  },
  {
    keywords: ['retail', 'ecommerce', 'e-commerce', 'shopping', 'store'],
    response: "Our **Retail & E-commerce Solutions**:\n\n🛒 E-commerce platforms\n📊 Inventory management\n🎯 Personalized recommendations\n💳 Payment integration\n📱 Mobile commerce apps\n📈 Sales analytics\n\nWe help retailers thrive in the digital age. Ready to boost your sales?",
    quickActions: ['Retail Solutions', 'Request Demo', 'Success Stories']
  },
  {
    keywords: ['contact', 'reach', 'get in touch', 'email', 'phone', 'talk to sales'],
    response: "I'd love to connect you with our team! 📧\n\nYou can reach us through:\n\n📧 **Email**: Contact us through our contact page\n📞 **Phone**: Available on our website\n💬 **Contact Form**: Quick response guaranteed\n\nWould you like me to direct you to our contact page?",
    quickActions: ['Contact Page', 'Schedule Call', 'Send Message']
  },
  {
    keywords: ['careers', 'jobs', 'hiring', 'work', 'join', 'opportunities', 'positions'],
    response: "Exciting opportunities await at Cynerza! 🚀\n\nWe're always looking for talented individuals in:\n\n💻 Software Development\n🤖 AI/ML Engineering\n☁️ Cloud & DevOps\n📊 Data Science\n💼 Business Development\n🎨 Design\n\nCheck our careers page for current openings. Ready to join our team?",
    quickActions: ['View Jobs', 'Submit Resume', 'Learn About Culture']
  },
  {
    keywords: ['pricing', 'cost', 'price', 'how much', 'budget', 'quote'],
    response: "Our pricing is tailored to each project's unique requirements. 💰\n\nFactors we consider:\n\n📊 Project scope and complexity\n⏱️ Timeline and resources\n🎯 Specific technology needs\n🔄 Ongoing support requirements\n\nWould you like to schedule a consultation for a custom quote?",
    quickActions: ['Request Quote', 'Schedule Call', 'View Packages']
  },
  {
    keywords: ['team', 'about', 'company', 'who are you', 'about cynerza', 'mission', 'vision'],
    response: "**CYNERZA** is a *next-generation AI-first technology company* 🌟\n\n**Our Mission**: To empower innovation by making advanced AI and automation *accessible, scalable, and customizable* — for anyone, anywhere.\n\n**Our Vision**: To become the most unified and intelligent AI ecosystem in the world.\n\n**Our Team**:\n- 🧠 AI researchers\n- 💻 Full-stack & mobile developers\n- 🎨 UI/UX designers\n- ⚙️ Automation & DevOps engineers\n\n*We move fast, build smart, and believe in impact-driven execution.*\n\nInterested in joining us?",
    quickActions: ['Our Mission', 'Careers', 'Contact Us', 'Why CYNERZA']
  },
  {
    keywords: ['demo', 'trial', 'test', 'try', 'free trial', 'showcase'],
    response: "We'd love to show you what we can do! 🎯\n\nRequest a demo to:\n\n✅ See our solutions in action\n✅ Discuss your specific needs\n✅ Get expert recommendations\n✅ Explore integration options\n\nShall I direct you to our demo request form?",
    quickActions: ['Request Demo', 'Schedule Presentation', 'Contact Sales']
  },
  {
    keywords: ['why cynerza', 'why choose', 'benefits', 'advantages', 'what makes you different', 'unified platform'],
    response: "Why choose **CYNERZA**? 🌟\n\n- 🔄 **Unified Platform**: Everything in one place - no more juggling services\n- 🛠️ **Customizable Workflows**: Low-code/no-code OR full-code freedom\n- 👨‍💻 **Developer-First**: Full API access & SDKs (Python, Node.js, Flutter)\n- 💰 **Cost-Effective**: Freemium model with competitive pricing\n- ⚡ **Rapid Execution**: Agile team that ships fast and reliably\n- ☁️ **Scalable & Cloud-Native**: Built for global reach\n- 🌱 **Eco-Friendly**: AI-powered sustainable solutions\n\nReady to experience the *CYNERZA difference*?",
    quickActions: ['Get Started', 'View Pricing', 'Contact Sales']
  },
  {
    keywords: ['technology', 'tech stack', 'technologies', 'tools', 'frameworks'],
    response: "We work with cutting-edge technologies:\n\n🐍 Python, JavaScript, TypeScript\n⚛️ React, Next.js, Node.js\n☁️ AWS, Azure, Google Cloud\n🤖 TensorFlow, PyTorch, OpenAI\n🐳 Docker, Kubernetes\n📊 PostgreSQL, MongoDB, Redis\n\nWe choose the right technology for your needs. Curious about specific tech stacks?",
    quickActions: ['Technical Capabilities', 'Architecture', 'DevOps Tools']
  },
  {
    keywords: ['security', 'secure', 'data protection', 'privacy', 'compliance', 'gdpr'],
    response: "Security is our top priority! 🔒\n\n✅ Enterprise-grade encryption\n✅ GDPR & compliance standards\n✅ Regular security audits\n✅ Data privacy protection\n✅ Secure cloud infrastructure\n✅ Penetration testing\n\nYour data and systems are safe with us. Need specific security information?",
    quickActions: ['Security Details', 'Compliance Info', 'Talk to Expert']
  },
  {
    keywords: ['help', 'support', 'assistance', 'how can you help'],
    response: "I'm here to help you with:\n\n💡 Information about our services\n🏢 Industry-specific solutions\n📞 Connecting you with our team\n💼 Career opportunities\n📊 Technical capabilities\n🤝 Partnership inquiries\n\nWhat would you like to know more about?",
    quickActions: ['Services', 'Contact', 'Industries', 'Careers']
  },
  {
    keywords: ['ai tools', 'multimodal ai', 'text ai', 'image ai', 'voice ai', 'video ai', 'ai suite'],
    response: "Our **Multimodal AI Suite** includes:\n\n- ✍️ **Text AI**: AI writers, chatbots, summarizers, code generators\n- 🎨 **Image AI**: Text-to-image, avatar creation, enhancement, analysis\n- 🎙️ **Voice AI**: Text-to-speech, speech-to-text, voice cloning, multilingual\n- 🎬 **Video AI (Beta)**: Script-to-video, AI avatars, auto-subtitling\n- 🔌 **APIs & SDKs**: Python, Node.js, Flutter, REST integration\n\n*AI should be a tool, not a barrier!*\n\nWhich AI capability interests you?",
    quickActions: ['Text AI', 'Image AI', 'Voice AI', 'API Access']
  },
  {
    keywords: ['web development', 'website', 'web app', 'portal', 'dashboard'],
    response: "Our **Web Development** services:\n\n- 🚀 **High-Performance Websites** - SEO-ready & responsive\n- 🎯 **Admin Dashboards** - Custom workflow management\n- 📊 **Web Portals** - Scalable architecture\n- 🛠️ **Tailored CMS** - Easy content management\n- ⚡ **Progressive Web Apps** - App-like experience\n- 🔐 **Secure & Compliant** - Enterprise-grade security\n\nBuilt with React, Next.js, and modern frameworks!\n\nReady to build your web presence?",
    quickActions: ['Get Quote', 'View Portfolio', 'Schedule Call']
  },
  {
    keywords: ['mobile app', 'android', 'ios', 'flutter', 'mobile development', 'app development'],
    response: "Our **Mobile App Development**:\n\n- 📱 **Native Development** - Android & iOS\n- ⚡ **Flutter Cross-Platform** - One codebase, both platforms\n- 🔄 **Real-Time Sync** - Seamless data synchronization\n- 📴 **Offline Support** - Works without internet\n- 🎯 **Optimized Performance** - Fast & smooth UX\n- 🔔 **Push Notifications** - Engage your users\n\nFrom MVP to enterprise-scale apps!\n\nWant to discuss your app idea?",
    quickActions: ['App Consultation', 'See Examples', 'Get Started']
  },
  {
    keywords: ['target market', 'who is this for', 'customers', 'use cases', 'for startups', 'for enterprises'],
    response: "**CYNERZA** serves:\n\n- 🚀 **Startups** - Fast MVPs with AI integration\n- 🏢 **Digital Agencies** - Scale content, automation & client solutions\n- 🏭 **Enterprises** - Modernize workflows & infrastructure\n- 👨‍💻 **Developers** - AI toolkits, SDKs & smart APIs\n- 🎨 **Creators** - Smarter content, media & insights generation\n\n**Business Models**:\n- 🆓 Freemium access for testing\n- 💳 Subscription tiers for individuals, teams, agencies\n- 📊 Usage-based pricing for API integrations\n- 🏢 Custom enterprise packages with SLAs\n\nWhich category fits you?",
    quickActions: ['For Startups', 'For Enterprises', 'For Developers', 'Pricing']
  },
  {
    keywords: ['roadmap', 'future', 'coming soon', 'what\'s next', 'upcoming'],
    response: "**What's Next** for CYNERZA? 🚀\n\n- 🔌 **Fully Open APIs & SDKs** - Complete developer freedom\n- 🏭 **IoT Integration** - Industrial automation systems\n- 🛒 **Public AI Marketplace** - Vertical-specific solutions\n- 🎯 **Deep Personalization** - User-trained models\n- 🏥 **Industry-Specific AI** - Healthcare, finance, retail, education\n- 🌍 **Global Expansion** - More regions, more languages\n\n*We're building the future of tech — together!*\n\nWant to be part of it?",
    quickActions: ['Join Beta', 'Partner With Us', 'Get Updates']
  },
  {
    keywords: ['thanks', 'thank you', 'appreciate', 'great', 'awesome', 'perfect'],
    response: "You're very welcome! 😊 I'm here whenever you need assistance.\n\nIs there anything else I can help you with today?",
    quickActions: ['Explore Platform', 'Get Started', 'Contact Us']
  }
];

export const defaultResponse: KnowledgeItem = {
  keywords: [],
  response: "I'm not quite sure about that, but I'd love to help! 🤔\n\nI can assist you with:\n\n- 💼 **Our services and solutions**\n- 🏢 **Industries we serve**\n- 💰 **Pricing and demos**\n- 🚀 **Career opportunities**\n- 📧 **Contact information**\n\nWhat would you like to know?",
  quickActions: ['Our Services', 'Industries', 'Contact Us', 'Careers']
};

export const welcomeMessage: KnowledgeItem = {
  keywords: [],
  response: "Hi there! 👋 Welcome to **CYNERZA** – *Unified AI, Simplified Tech*!\n\nI'm your *virtual assistant*, here to help you:\n\n- 🚀 Explore our **unified AI platform**\n- 💼 Learn about **web, mobile & automation solutions**\n- 🤖 Discover our **multimodal AI suite**\n- 💬 Answer any questions about our services\n\nHow can I assist you today?",
  quickActions: ['Our Platform', 'AI Tools', 'Get Started', 'Contact Us']
};

// Function to find the best matching response
export function findBestMatch(userMessage: string): KnowledgeItem {
  const lowerMessage = userMessage.toLowerCase().trim();
  
  // Find the knowledge item with the most keyword matches
  let bestMatch: KnowledgeItem | null = null;
  let maxMatches = 0;
  
  for (const item of knowledgeBase) {
    const matches = item.keywords.filter(keyword => 
      lowerMessage.includes(keyword.toLowerCase())
    ).length;
    
    if (matches > maxMatches) {
      maxMatches = matches;
      bestMatch = item;
    }
  }
  
  return bestMatch && maxMatches > 0 ? bestMatch : defaultResponse;
}
