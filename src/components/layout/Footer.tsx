import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { toggleDarkMode } from '@/featured/theme/themeSlice';

const Footer: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  const dispatch = useDispatch()

  const socialLinkes = [
    {
      name: "Github",
      icon: <Github />,
      link: "https://github.com/CYNERZA/CYNERZA-WEB"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      link: "https://www.linkedin.com/company/cynerza"
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      link: "https://www.instagram.com/cynerza/?igsh=MTg5dXAwdTlkdzBtcA%3D%3D#"
    },
    {
      name: "Facebook",
      icon: <Facebook />,
      link: "https://www.facebook.com/profile.php?id=61578860566441&rdid=JA72joEmBaBRVybF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16wZQ8oji1%2F#"
    },
  ]

  // theme mode handler
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    setIsDarkMode(newTheme);
    dispatch(toggleDarkMode())
  };        

  return (
    // <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
    //   <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 ">
    //       { }
    //       <div className="lg:col-span-2 flex flex-col items-center">
    //         <Link to="/" className="inline-flex items-center">
    //           <span className="text-2xl font-bold font-heading text-cynerza-purple dark:text-cynerza-purple-light">
    //             CYNERZA
    //           </span>
    //         </Link>
    //         <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed text-center sm:text-left">
    //           Empowering innovation through cutting-edge AI solutions. We make advanced technology accessible for developers and businesses worldwide.
    //         </p>
    //         <div className="flex space-x-4 mt-6">
    //           {socialLinkes.map((social) => (
    //             <a
    //               key={social.name}
    //               href={social.link}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="text-gray-500 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
    //               aria-label={social.name}
    //             >
    //               <span className="sr-only">{social.name}</span>
    //               <div className="h-6 w-6 flex items-center justify-center">
    //                 {social.icon}
    //               </div>
    //             </a>
    //           ))}
    //         </div>
    //       </div>

    //       { }
    //       <div className='flex flex-col items-center md:block'>
    //         <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-4">Products</h3>
    //         <ul className="space-y-3 text-center md:text-left">
    //           {['AI Tools', 'API', 'Integrations', 'Enterprise', 'Pricing'].map((item) => (
    //             <li key={item}>
    //               <Link
    //                 to={`/${item.toLowerCase().replace(/\s/g, '-')}`}
    //                 className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
    //               >
    //                 {item}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       <div className='flex flex-col items-center md:block'>
    //         <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-4">Company</h3>
    //         <ul className="space-y-3 text-center md:text-left">
    //           {['About', 'Careers', 'Partners'].map((item) => (
    //             <li key={item}>
    //               <Link
    //                 to={`/${item.toLowerCase().replace(/\s/g, '-')}`}
    //                 className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
    //               >
    //                 {item}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       <div className='flex flex-col items-center md:block'>
    //         <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-4">Resources</h3>
    //         <ul className="space-y-3 text-center md:text-left">
    //           <li>
    //             <Link
    //               to="/documentation"
    //               className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
    //             >
    //               Documentation
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/tutorials"
    //               className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
    //             >
    //               Tutorials
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/support"
    //               className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
    //             >
    //               Support Center
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="border-t border-gray-100 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
    //       <p className="text-gray-500 dark:text-gray-500 text-sm">
    //         &copy; {new Date().getFullYear()} CYNERZA Technologies Inc. All rights reserved.
    //       </p>
    //       <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 md:mt-0">
    //         <Link to="/privacy-policy" className="text-gray-500 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light text-sm transition-colors">
    //           Privacy Policy
    //         </Link>
    //         <Link to="/tos" className="text-gray-500 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light text-sm transition-colors">
    //           Terms of Service
    //         </Link>
    //         <Link to="/cookies" className="text-gray-500 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light text-sm transition-colors">
    //           Cookie Policy
    //         </Link>
    //         <Link to="/security" className="text-gray-500 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light text-sm transition-colors">
    //           Security
    //         </Link>
    //         <button
    //           onClick={toggleTheme}
    //           className="text-gray-500 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light text-sm transition-colors"
    //           aria-label="Toggle dark mode"
    //         >
    //           {isDarkMode ? '☀️ Light' : '🌙 Dark'} Mode
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer className="relative bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
    {/* Purple gradient background overlay */}
    {isDarkMode &&
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20" />
    }
    
    {/* Content wrapper */}
    <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                {/* Brand Section */}
                <div className="lg:col-span-2 flex flex-col items-center">
                    <Link to="/" className="inline-flex items-center">
                        <img
                          src="/cynerza.png"
                          alt="CYNERZA"
                          className="h-8 w-auto"
                          loading="lazy"
                          decoding="async"
                        />
                    </Link>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed text-center sm:text-left">
                        Empowering innovation through cutting-edge AI solutions. We make advanced technology accessible for developers and businesses worldwide.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        {socialLinkes.map((social) => (
                            <a
                                key={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                                aria-label={social.name}
                            >
                                <span className="sr-only">{social.name}</span>
                                <div className="h-6 w-6 flex items-center justify-center">
                                    {social.icon}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Products & Services */}
                <div className='flex flex-col items-center md:block'>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-4">Our Solutions</h3>
                    <ul className="space-y-3 text-center md:text-left">
                        <li>
                            <Link
                                to="/ai-tools"
                                className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                            >
                                AI Tools
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services/saas-product-development"
                                className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                            >
                                SaaS Development
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services/custom-llm-api"
                                className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                            >
                                Custom LLM API
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services/automation-solutions"
                                className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                            >
                                Automation
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Company */}
                <div className='flex flex-col items-center md:block'>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-4">Company</h3>
                    <ul className="space-y-3 text-center md:text-left">
                        <li>
                            <Link
                                to="/about"
                                className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/team"
                                className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                            >
                                Our Team
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/careers"
                                className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                            >
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Resources */}
                <div className='flex flex-col items-center md:block'>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-4">Resources</h3>
                    <ul className="space-y-3 text-center md:text-left">
                        <li>
                            <Link
                                to="/blogs"
                                className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                            >
                                Blog & Insights
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://tools.cynerza.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                            >
                                AI Tools Platform
                            </a>
                        </li>
                        {/* <li>
                            <Link
                                to="/contact"
                                className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                            >
                                Get Support
                            </Link>
                        </li> */}
                        {/* <li>
                            <a
                                href="https://github.com/CYNERZA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light transition-colors"
                            >
                                Open Source
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-100 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} CYNERZA Technologies Inc. All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 md:mt-0">
                    <Link to="/privacy-policy" className="text-gray-500 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light text-sm transition-colors">
                        Privacy Policy
                    </Link>
                    <Link to="/terms-of-service" className="text-gray-500 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light text-sm transition-colors">
                        Terms of Service
                    </Link>
                    <Link to="/contact" className="text-gray-500 dark:text-gray-400 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light text-sm transition-colors">
                        Contact
                    </Link>
                    <button
                        onClick={toggleTheme}
                        className="text-gray-500 hover:text-cynerza-purple dark:hover:text-cynerza-purple-light text-sm transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {isDarkMode ? '☀️ Light' : '🌙 Dark'} Mode
                    </button>
                </div>
            </div>
        </div>
    </div>
</footer>

  );
};

export default Footer;
