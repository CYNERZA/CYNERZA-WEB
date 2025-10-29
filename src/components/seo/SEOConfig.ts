// SEO Configuration for all pages

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
  noindex?: boolean;
}

const baseUrl = 'https://cynerza.com';

export const seoConfig: Record<string, SEOData> = {
  // Main Pages
  home: {
    title: 'CYNERZA - Unified AI Platform | Build Smarter, Faster, Better',
    description: 'Next-generation AI-first platform for web development, mobile apps, automation, custom APIs & multimodal AI. Unified ecosystem for startups, developers & enterprises.',
    keywords: 'unified AI platform, AI development, web development, mobile app development, business automation, custom API, multimodal AI, enterprise solutions, startup platform',
    ogTitle: 'CYNERZA - Unified AI Platform | Simplifying Digital Transformation',
    ogDescription: 'All-in-one AI platform combining web/mobile development, automation, custom APIs & multimodal AI. Build smarter, faster with our unified ecosystem.',
    canonical: baseUrl,
  },

  about: {
    title: 'About CYNERZA - Unified AI Platform | Our Mission & Vision',
    description: 'Learn about CYNERZA\'s mission to empower innovation through accessible AI and automation. Discover our vision to become the world\'s most unified AI ecosystem.',
    keywords: 'about CYNERZA, AI company, unified platform, mission vision, AI innovation, tech company, digital transformation',
    canonical: `${baseUrl}/about`,
  },

  services: {
    title: 'CYNERZA Services - Web, Mobile, Automation & AI Solutions',
    description: 'Complete technology stack: Web development, mobile apps, business automation, custom APIs, digital marketing & multimodal AI suite. One unified platform.',
    keywords: 'AI services, web development services, mobile app development, automation solutions, custom API, digital marketing, AI tools',
    canonical: `${baseUrl}/services`,
  },

  contact: {
    title: 'Contact CYNERZA - Get Started with AI Platform Solutions',
    description: 'Connect with CYNERZA to discuss your project. Get expert consultation on web development, mobile apps, automation, and AI solutions. Let\'s build together.',
    keywords: 'contact CYNERZA, get quote, AI consultation, project inquiry, business contact',
    canonical: `${baseUrl}/contact`,
  },

  team: {
    title: 'Our Team - CYNERZA AI Experts & Developers',
    description: 'Meet the passionate team behind CYNERZA: AI researchers, full-stack developers, UI/UX designers, and DevOps engineers building the future of tech.',
    keywords: 'CYNERZA team, AI experts, developers, tech team, engineering team',
    canonical: `${baseUrl}/team`,
  },

  careers: {
    title: 'Careers at CYNERZA - Join Our AI-First Team',
    description: 'Join CYNERZA and work on cutting-edge AI, web, and mobile projects. Open positions for developers, AI/ML engineers, designers, and DevOps professionals.',
    keywords: 'CYNERZA careers, AI jobs, developer jobs, tech careers, software engineer jobs, remote jobs',
    canonical: `${baseUrl}/careers`,
  },

  aiTools: {
    title: 'AI Tools - Text, Image, Voice & Video AI by CYNERZA',
    description: 'Explore CYNERZA\'s multimodal AI suite: Text AI writers, Image AI generation, Voice AI cloning, Video AI creation. Access via APIs & SDKs.',
    keywords: 'AI tools, text AI, image AI, voice AI, video AI, AI APIs, multimodal AI, AI generation',
    canonical: `${baseUrl}/ai-tools`,
  },

  industries: {
    title: 'Industries We Serve - CYNERZA AI Solutions by Sector',
    description: 'CYNERZA serves 8+ industries: Banking, Healthcare, Education, Retail, Media, Capital Markets, Public Services, Travel & Logistics with AI solutions.',
    keywords: 'AI solutions by industry, banking AI, healthcare AI, education technology, retail solutions, industry-specific AI',
    canonical: `${baseUrl}/industries`,
  },

  whyCynerza: {
    title: 'Why Choose CYNERZA - Unified AI Platform Benefits',
    description: 'Discover why CYNERZA stands out: Unified platform, developer-first approach, cost-effective pricing, scalable architecture, and rapid execution.',
    keywords: 'why choose CYNERZA, unified platform benefits, AI platform advantages, developer-first, scalable solutions',
    canonical: `${baseUrl}/why-cynerza`,
  },

  blogs: {
    title: 'CYNERZA Blog - AI, Development & Tech Insights',
    description: 'Read the latest insights on AI development, automation, web/mobile technologies, and digital transformation from CYNERZA experts.',
    keywords: 'CYNERZA blog, AI insights, tech blog, development tutorials, automation guides',
    canonical: `${baseUrl}/blogs`,
  },

  privacyPolicy: {
    title: 'Privacy Policy - CYNERZA',
    description: 'Read CYNERZA\'s privacy policy to understand how we collect, use, and protect your data. Your privacy is our priority.',
    keywords: 'privacy policy, data protection, GDPR, user privacy',
    canonical: `${baseUrl}/privacy-policy`,
  },

  termsOfService: {
    title: 'Terms of Service - CYNERZA',
    description: 'Review CYNERZA\'s terms of service for using our platform, services, and AI tools. Legal terms and conditions.',
    keywords: 'terms of service, terms and conditions, user agreement',
    canonical: `${baseUrl}/terms-of-service`,
  },

  // Service Pages
  webDevelopment: {
    title: 'Web Development Services - SEO-Ready Websites | CYNERZA',
    description: 'Professional web development: High-performance websites, admin dashboards, web portals with React, Next.js. SEO-ready, responsive, scalable architecture.',
    keywords: 'web development, website development, React development, Next.js, responsive websites, SEO websites, web portals',
    canonical: `${baseUrl}/services/saas-product-development`,
  },

  mobileAppDevelopment: {
    title: 'Mobile App Development - Android, iOS & Flutter | CYNERZA',
    description: 'Native Android & iOS app development and Flutter cross-platform solutions. Real-time sync, offline support, optimized performance.',
    keywords: 'mobile app development, Android app, iOS app, Flutter development, cross-platform apps, native apps',
    canonical: `${baseUrl}/services/custom-llm-api`,
  },

  automationSolutions: {
    title: 'Business Automation Solutions - AI-Powered RPA | CYNERZA',
    description: 'Streamline operations with AI-powered automation: RPA, workflow builders, task automation, CRM integration, and intelligent chatbots.',
    keywords: 'business automation, RPA, workflow automation, AI automation, process automation, CRM integration',
    canonical: `${baseUrl}/services/automation-solutions`,
  },

  customAPIs: {
    title: 'Custom API Development - REST & GraphQL APIs | CYNERZA',
    description: 'Scalable API solutions: REST and GraphQL APIs with JWT/OAuth authentication, secure microservices, and seamless integration.',
    keywords: 'custom API development, REST API, GraphQL API, API integration, microservices, secure APIs',
    canonical: `${baseUrl}/services/ai-ml-solution`,
  },

  digitalMarketing: {
    title: 'Digital Marketing & Analytics - AI-Driven SEO | CYNERZA',
    description: 'AI-powered digital marketing: SEO optimization, automated campaigns, real-time analytics, and AI-generated content marketing.',
    keywords: 'digital marketing, AI SEO, marketing automation, analytics, content marketing, SEO services',
    canonical: `${baseUrl}/services/cloud-devops-engineering`,
  },

  aiSuite: {
    title: 'Multimodal AI Suite - Text, Image, Voice & Video AI | CYNERZA',
    description: 'Complete AI toolkit: Text AI, Image generation, Voice cloning, Video creation with Python, Node.js & Flutter APIs/SDKs.',
    keywords: 'AI suite, text AI, image AI, voice AI, video AI, AI APIs, AI SDKs, multimodal AI',
    canonical: `${baseUrl}/ai-tools`,
  },

  // Additional Service Pages
  customLLMAPI: {
    title: 'Custom LLM API Development - OpenAI, Gemini Integration | CYNERZA',
    description: 'Build custom LLM-powered applications with OpenAI, Google Gemini, Claude, and open-source models. API integration, fine-tuning, and RAG implementation.',
    keywords: 'custom LLM, OpenAI API, Gemini API, Claude integration, RAG, LLM fine-tuning, AI API development',
    canonical: `${baseUrl}/services/custom-llm-api`,
  },

  aiMLSolutions: {
    title: 'AI & Machine Learning Solutions - Custom ML Models | CYNERZA',
    description: 'End-to-end AI/ML development: Custom model training, computer vision, NLP, predictive analytics, MLOps, and AI integration services.',
    keywords: 'AI ML development, machine learning solutions, custom ML models, computer vision, NLP, predictive analytics, MLOps',
    canonical: `${baseUrl}/services/ai-ml-solutions`,
  },

  cloudDevOps: {
    title: 'Cloud DevOps Engineering - AWS, Azure, GCP | CYNERZA',
    description: 'Expert cloud infrastructure and DevOps: CI/CD pipelines, Kubernetes, Docker, Infrastructure as Code, cloud migration, and monitoring solutions.',
    keywords: 'cloud DevOps, AWS DevOps, Azure DevOps, GCP, Kubernetes, Docker, CI/CD, infrastructure as code, cloud migration',
    canonical: `${baseUrl}/services/cloud-devops-engineering`,
  },

  itServiceManagement: {
    title: 'IT Service Management Solutions - ITSM & Support | CYNERZA',
    description: 'Comprehensive ITSM platforms: Helpdesk systems, ticketing, asset management, change management, and IT service automation.',
    keywords: 'IT service management, ITSM, helpdesk software, ticketing system, asset management, IT support',
    canonical: `${baseUrl}/services/it-service-management`,
  },

  // Industry Pages
  banking: {
    title: 'Banking & Financial Services AI Solutions | CYNERZA',
    description: 'Digital transformation for banks: Fraud detection, risk management, AI trading, payment processing, and mobile banking solutions.',
    keywords: 'banking AI, fintech solutions, financial services, digital banking, fraud detection, payment processing',
    canonical: `${baseUrl}/industries/banking`,
  },

  healthcare: {
    title: 'Healthcare AI Solutions - Medical Technology | CYNERZA',
    description: 'Healthcare innovation: EHR systems, medical imaging analysis, patient management, AI diagnostics, and telemedicine platforms.',
    keywords: 'healthcare AI, medical technology, EHR, telemedicine, AI diagnostics, patient management',
    canonical: `${baseUrl}/industries/healthcare`,
  },

  education: {
    title: 'Education Technology Solutions - EdTech AI | CYNERZA',
    description: 'Transform education with AI: LMS platforms, virtual classrooms, student analytics, AI tutoring, and personalized learning.',
    keywords: 'education technology, edtech, LMS, e-learning, AI tutoring, online education',
    canonical: `${baseUrl}/industries/education`,
  },

  retail: {
    title: 'Retail & E-commerce AI Solutions | CYNERZA',
    description: 'Retail innovation: E-commerce platforms, inventory management, AI recommendations, payment integration, and sales analytics.',
    keywords: 'retail AI, e-commerce solutions, online store, inventory management, retail technology',
    canonical: `${baseUrl}/industries/retail`,
  },

  capitalMarkets: {
    title: 'Capital Markets AI Solutions - Trading & Analytics | CYNERZA',
    description: 'AI-powered capital markets: Algorithmic trading, market analysis, risk assessment, and portfolio management solutions.',
    keywords: 'capital markets AI, algorithmic trading, market analysis, financial analytics, trading technology',
    canonical: `${baseUrl}/industries/capital-markets`,
  },

  mediaCommunications: {
    title: 'Media & Communications AI Solutions | CYNERZA',
    description: 'Media technology: Content management, AI-powered distribution, audience analytics, and digital broadcasting solutions.',
    keywords: 'media technology, communications AI, content management, broadcasting, media analytics',
    canonical: `${baseUrl}/industries/media-communications`,
  },

  publicServices: {
    title: 'Public Services & Government AI Solutions | CYNERZA',
    description: 'Digital government services: Citizen portals, smart city solutions, public administration automation, and data analytics.',
    keywords: 'government technology, public services AI, smart cities, e-government, civic technology',
    canonical: `${baseUrl}/industries/public-services`,
  },

  travelLogistics: {
    title: 'Travel & Logistics AI Solutions | CYNERZA',
    description: 'Transportation innovation: Fleet management, route optimization, booking systems, supply chain automation, and logistics analytics.',
    keywords: 'travel technology, logistics AI, fleet management, supply chain, transportation technology',
    canonical: `${baseUrl}/industries/travel-logistics`,
  },

  // Admin Pages (noindex)
  admin: {
    title: 'Admin Dashboard - CYNERZA',
    description: 'Admin area',
    keywords: '',
    noindex: true,
  },
};

// Helper function to get SEO data
export const getSEOData = (page: string): SEOData => {
  return seoConfig[page] || {
    title: 'CYNERZA - Unified AI Platform',
    description: 'Next-generation AI-first platform for digital transformation',
    keywords: 'AI platform, digital transformation',
  };
};
