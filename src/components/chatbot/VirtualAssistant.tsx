import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles, Maximize2, Minimize2, Trash2 } from 'lucide-react';
import { findBestMatch, welcomeMessage, KnowledgeItem, getRouteSummary } from './knowledgeBase';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessageToAdmin } from '@/featured/auth/authSlice';
import { fetchAllIndustries } from '@/featured/industry/industrySlice';
import { fetchAllRegions } from '@/featured/region/regionSlice';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  quickActions?: string[];
}

const VirtualAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<any>();
  const isSubmitting = useSelector((state: any) => state?.auth?.loading);
  const industries = useSelector((state: any) => state?.industry?.industries || []);
  const regions = useSelector((state: any) => state?.region?.regions || []);
  const regionOptions = Array.isArray(regions) ? regions.map((r: any) => r?.country).filter(Boolean) : [];
  const industryOptions = Array.isArray(industries) ? industries.map((i: any) => i?.name).filter(Boolean) : [];

  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    region: '',
    industry: '',
    message: '',
  });

  const openContactForm = () => {
    setShowContactForm(true);
    addBotMessage({
      keywords: [],
      response: "Great — please share your contact details below so our team can reach you quickly.",
      quickActions: ['Contact Page', 'Schedule Call']
    });
    const contactSummary = getRouteSummary('/contact');
    if (contactSummary) addBotMessage(contactSummary);
  };

  // Ensure dropdown data present when form opens
  useEffect(() => {
    if (showContactForm) {
      if (!industries?.length) dispatch(fetchAllIndustries());
      if (!regions?.length) dispatch(fetchAllRegions());
    }
  }, [showContactForm]);

  // Map common quick actions and phrases to internal routes
  const ACTION_ROUTES: Record<string, string> = {
    'our platform': '/why-cynerza',
    'ai tools': '/ai-tools',
    'ai suite': '/ai-tools',
    'text ai': '/ai-tools',
    'image ai': '/ai-tools',
    'voice ai': '/ai-tools',
    'services': '/services',
    'our services': '/services',
    'learn more': '/why-cynerza',
    'web development': '/services',
    'mobile app': '/services',
    'get started': '/__chat__open_form__',
    'contact us': '/__chat__open_form__',
    'contact page': '/__chat__open_form__',
    'contact': '/__chat__open_form__',
    'support': '/__chat__open_form__',
    'schedule call': '/__chat__open_form__',
    'send message': '/__chat__open_form__',
    'contact sales': '/__chat__open_form__',
    'request demo': '/__chat__open_form__',
    'demo request': '/__chat__open_form__',
    'pricing': '/__chat__open_form__',
    'request quote': '/__chat__open_form__',
    'get quote': '/__chat__open_form__',
    'consultation': '/__chat__open_form__',
    'ai consultation': '/__chat__open_form__',
    'schedule consultation': '/__chat__open_form__',
    'talk to expert': '/__chat__open_form__',
    'talk to an expert': '/__chat__open_form__',
    'contact support': '/__chat__open_form__',
    'careers': '/careers',
    'view jobs': '/careers',
    'jobs': '/careers',
    'industries': '/industries',
    'banking': '/industries/banking',
    'healthcare': '/industries/healthcare',
    'education': '/industries/education',
    'retail': '/industries/retail',
    'public services': '/industries/public-services',
    'media communications': '/industries/media-communications',
    'capital markets': '/industries/capital-markets',
    'travel logistics': '/industries/travel-logistics',
    'why cynerza': '/why-cynerza',
    'automation': '/services/automation-solutions',
    'custom llm api': '/services/custom-llm-api',
    'ai & ml': '/services/ai-ml-solution',
    'cloud devops': '/services/cloud-devops-engineering',
    'itsm': '/services/it-service-management',
    'saas development': '/services/saas-product-development',
    'about': '/about',
    'team': '/team',
    'blogs': '/blogs',
    'blog': '/blogs',
    'privacy policy': '/privacy-policy',
    'terms of service': '/terms-of-service',
    'case studies': '/blogs',
    'success stories': '/blogs',
    'portfolio': '/blogs',
    'projects': '/blogs',
    'view projects': '/blogs',
    'project': '/blogs',
    'case study': '/blogs',
    'view case studies': '/blogs',
    'security': '/__chat__open_form__',
    'security details': '/contact',
    'compliance info': '/contact',
    'join beta': '/__chat__open_form__',
    'partner with us': '/__chat__open_form__',
    'get updates': '/blogs'
  };

  const lastSummaryPathRef = useRef<string | null>(null);

  const showRouteSummary = (path: string) => {
    const summary = getRouteSummary(path);
    if (summary) {
      addBotMessage(summary);
      lastSummaryPathRef.current = path;
      return true;
    }
    return false;
  };

  const navigateIfMapped = (text: string) => {
    const key = text.toLowerCase().trim();
    // exact match
    const direct = ACTION_ROUTES[key];
    if (direct) {
      if (direct === '/__chat__open_form__') { openContactForm(); return true; }
      navigate(direct); 
      showRouteSummary(direct);
      return true; 
    }

    // fuzzy contains match
    const fuzzyKey = Object.keys(ACTION_ROUTES).find(k => key.includes(k));
    if (fuzzyKey) {
      const dest = ACTION_ROUTES[fuzzyKey];
      if (dest === '/__chat__open_form__') { openContactForm(); return true; }
      navigate(dest); 
      showRouteSummary(dest);
      return true; 
    }
    return false;
  };

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(welcomeMessage);
      }, 500);
    }
  }, [isOpen]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Reset unread count when chat opens
  useEffect(() => {
    if (isOpen) setUnreadCount(0);
  }, [isOpen]);

  // Show route summary on any route change (including navbar clicks)
  useEffect(() => {
    const path = location?.pathname || '';
    if (!path) return;
    // Avoid duplicate when we already showed summary from assistant-initiated nav
    if (lastSummaryPathRef.current === path) {
      lastSummaryPathRef.current = null; // clear for next time
      return;
    }
    showRouteSummary(path);
  }, [location?.pathname]);

  // Persist state to localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('va_messages');
      const open = localStorage.getItem('va_open');
      if (saved) {
        const arr = JSON.parse(saved);
        if (Array.isArray(arr)) {
          setMessages(arr.map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) })));
        }
      }
      if (open === 'true') setIsOpen(true);
    } catch {
      // Intentionally ignore localStorage read errors
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('va_messages', JSON.stringify(messages));
    } catch {
      // Intentionally ignore localStorage write errors
    }
  }, [messages]);

  useEffect(() => {
    try { localStorage.setItem('va_open', String(isOpen)); } catch {
      // Intentionally ignore localStorage write errors
    }
  }, [isOpen]);

  // Close on Escape for better UX
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const addBotMessage = (knowledgeItem: KnowledgeItem) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now().toString(),
        text: knowledgeItem.response,
        isBot: true,
        timestamp: new Date(),
        quickActions: knowledgeItem.quickActions,
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      if (!isOpen) setUnreadCount((c) => c + 1);
    }, 800);
  };

  const addUserMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userText = inputValue;
    setInputValue('');
    
    // Add user message
    addUserMessage(userText);
    
    // Navigate if the typed text matches a known action; otherwise reply from KB
    const didNavigate = navigateIfMapped(userText);
    if (!didNavigate) {
      const response = findBestMatch(userText);
      addBotMessage(response);
    }
  };

  const handleQuickAction = (action: string) => {
    addUserMessage(action);
    if (!navigateIfMapped(action)) {
      const response = findBestMatch(action);
      addBotMessage(response);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const clearChat = () => {
    setMessages([]);
    setShowContactForm(false);
    try { localStorage.removeItem('va_messages'); } catch {
      // Intentionally ignore localStorage remove errors
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cynerza-blue to-cynerza-blue text-white rounded-full p-4 shadow-2xl hover:shadow-cynerza-blue/40 transition-all duration-300 group dark:from-cynerza-cyan-light dark:to-cynerza-blue-light"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6" />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {!isOpen && unreadCount > 0 && (
                <div className="absolute -top-2 -left-2 min-w-[18px] h-[18px] px-1 rounded-full bg-red-500 text-white text-[10px] leading-[18px] text-center">
                  {unreadCount}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`${
              isExpanded
                ? 'fixed right-4 bottom-4 z-50 w-[min(900px,calc(100vw-2rem))] h-[min(80vh,calc(100vh-4rem))]'
                : 'fixed bottom-24 right-6 z-50 w-[400px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)]'
            } rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-cynerza-blue/20 dark:border-cynerza-blue/30 bg-white/90 dark:bg-gray-900/90 backdrop-blur supports-[backdrop-filter]:bg-white/75`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cynerza-blue to-cynerza-blue dark:from-cynerza-cyan-light dark:to-cynerza-blue-light text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Bot className="w-8 h-8" />
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Cynerza Assistant</h3>
                  <p className="text-xs text-white/80">Always here to help</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <button
                  aria-label="Clear chat"
                  onClick={clearChat}
                  className="p-1.5 rounded-md hover:bg-white/10"
                  title="Clear chat"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  aria-label={isExpanded ? 'Exit full screen' : 'Expand'}
                  onClick={() => setIsExpanded(v => !v)}
                  className="p-1.5 rounded-md hover:bg-white/10"
                >
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800" role="log" aria-live="polite" aria-relevant="additions">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {message.isBot && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cynerza-blue to-cynerza-cyan flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}
                  
                  <div className={`flex flex-col max-w-[75%] ${!message.isBot && 'items-end'}`}>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.isBot
                          ? 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-md'
                          : 'bg-gradient-to-r from-cynerza-blue to-cynerza-blue dark:from-cynerza-cyan-light dark:to-cynerza-blue-light text-white'
                      }`}
                    >
                      <div className="text-sm leading-relaxed markdown-content">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                            strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                            em: ({ children }) => <em className="italic">{children}</em>,
                            ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                            ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                            li: ({ children }) => <li className="ml-2">{children}</li>,
                            code: ({ children }) => (
                              <code className={`${
                                message.isBot 
                                  ? 'bg-gray-100 dark:bg-gray-600' 
                                  : 'bg-white/20'
                              } px-1.5 py-0.5 rounded text-xs font-mono`}>
                                {children}
                              </code>
                            ),
                            a: ({ href, children }) => {
                              if (href && href.startsWith('/')) {
                                return (
                                  <a
                                    href={href}
                                    onClick={(e) => { e.preventDefault(); navigate(href); showRouteSummary(href); }}
                                    className="underline hover:opacity-80 transition-opacity"
                                  >
                                    {children}
                                  </a>
                                );
                              }
                              return (
                                <a
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline hover:opacity-80 transition-opacity"
                                >
                                  {children}
                                </a>
                              );
                            },
                            blockquote: ({ children }) => (
                              <blockquote className={`border-l-4 ${
                                message.isBot 
                                  ? 'border-cynerza-blue dark:border-cynerza-blue' 
                                  : 'border-white/40'
                              } pl-3 italic my-2`}>
                                {children}
                              </blockquote>
                            ),
                            h1: ({ children }) => <h1 className="text-lg font-bold mb-2">{children}</h1>,
                            h2: ({ children }) => <h2 className="text-base font-bold mb-2">{children}</h2>,
                            h3: ({ children }) => <h3 className="text-sm font-bold mb-1">{children}</h3>,
                          }}
                        >
                          {message.text}
                        </ReactMarkdown>
                      </div>
                    </div>
                    
                    {/* Quick Actions */}
                    {message.isBot && message.quickActions && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {message.quickActions.map((action, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleQuickAction(action)}
                            className="text-xs bg-white dark:bg-gray-700 text-cynerza-blue dark:text-cynerza-cyan-light px-3 py-1.5 rounded-full border border-cynerza-blue/20 dark:border-cynerza-blue/40 hover:bg-cynerza-blue/10 dark:hover:bg-gray-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {action}
                          </motion.button>
                        ))}
                      </div>
                    )}
                    
                    <span className="text-xs text-gray-400 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  {!message.isBot && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cynerza-blue to-cynerza-cyan flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-2xl px-4 py-3 shadow-md">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Inline Contact Form */}
              {showContactForm && (
                <div className="mt-4 rounded-xl border border-cynerza-blue/20 dark:border-cynerza-blue/40 bg-white dark:bg-gray-700 p-4 shadow-md">
                  <h4 className="text-sm font-semibold mb-3 text-gray-800 dark:text-gray-100">Quick Contact</h4>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="First name*"
                      value={contactForm.firstName}
                      onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
                      className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cynerza-blue dark:focus:ring-cynerza-cyan"
                    />
                    <input
                      type="text"
                      placeholder="Last name*"
                      value={contactForm.lastName}
                      onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                      className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cynerza-blue dark:focus:ring-cynerza-cyan"
                    />
                    <input
                      type="email"
                      placeholder="Email*"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cynerza-blue dark:focus:ring-cynerza-cyan col-span-2"
                    />
                    <input
                      type="text"
                      placeholder="Organization (optional)"
                      value={contactForm.organization}
                      onChange={(e) => setContactForm({ ...contactForm, organization: e.target.value })}
                      className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cynerza-blue dark:focus:ring-cynerza-cyan col-span-2"
                    />
                    <select
                      value={contactForm.region}
                      onChange={(e) => setContactForm({ ...contactForm, region: e.target.value })}
                      className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cynerza-blue dark:focus:ring-cynerza-cyan col-span-1"
                    >
                      <option value="" disabled>Select region</option>
                      {regionOptions.map((reg: string) => (
                        <option key={reg} value={reg} className="bg-gray-900 text-white">{reg}</option>
                      ))}
                    </select>
                    <select
                      value={contactForm.industry}
                      onChange={(e) => setContactForm({ ...contactForm, industry: e.target.value })}
                      className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cynerza-blue dark:focus:ring-cynerza-cyan col-span-1"
                    >
                      <option value="" disabled>Select industry</option>
                      {industryOptions.map((ind: string) => (
                        <option key={ind} value={ind} className="bg-gray-900 text-white">{ind}</option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    placeholder="How can we help you?*"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cynerza-blue dark:focus:ring-cynerza-cyan mb-3"
                  />
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => setShowContactForm(false)}
                      className="px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={async () => {
                        if (!contactForm.firstName || !contactForm.lastName || !contactForm.email || !contactForm.message) {
                          addBotMessage({ keywords: [], response: 'Please complete all required fields (first name, last name, email, message).'});
                          return;
                        }
                        const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email);
                        if (!emailOK) {
                          addBotMessage({ keywords: [], response: 'Please enter a valid email address.'});
                          return;
                        }
                        try {
                          const payload = {
                            ...contactForm,
                            message: `[Lead Source: Chat Assistant]\n${contactForm.message}`,
                          };
                          await dispatch(sendMessageToAdmin(payload));
                          setShowContactForm(false);
                          setContactForm({ firstName: '', lastName: '', email: '', organization: '', region: '', industry: '', message: '' });
                          addBotMessage({ keywords: [], response: 'Thanks! Your message has been sent. Our team will reach out shortly.' });
                        } catch (e) {
                          addBotMessage({ keywords: [], response: 'Sorry, something went wrong while sending your message. Please try again or use the Contact Page.' });
                        }
                      }}
                      disabled={isSubmitting}
                      className="px-3 py-2 rounded-lg text-white bg-gradient-to-r from-cynerza-blue to-cynerza-blue dark:from-cynerza-cyan-light dark:to-cynerza-blue-light disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending…' : 'Send Message'}
                    </button>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cynerza-blue dark:focus:ring-cynerza-cyan transition-all"
                />
                <motion.button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-cynerza-blue to-cynerza-blue dark:from-cynerza-cyan-light dark:to-cynerza-blue-light text-white p-3 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={inputValue.trim() === ''}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">Powered by Cynerza AI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VirtualAssistant;
