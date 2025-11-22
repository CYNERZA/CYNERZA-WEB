import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SEO from '@/components/seo/SEO';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

  return (
    <>
      <SEO data={{
        title: '404 - Page Not Found | CYNERZA',
        description: 'The page you are looking for could not be found. Return to CYNERZA homepage to explore our AI platform and services.',
        keywords: '404, page not found, CYNERZA',
        noindex: true,
      }} />
      <div className="min-h-[60vh] flex items-center justify-center bg-white dark:bg-gray-950">
       {/* Purple gradient background overlay */}
            {isDarkMode &&
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-800/10 to-indigo-600/20 z-5" />
            }
      <div className="text-center py-16 px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cynerza-blue to-cynerza-blue">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          Oops! Page not found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-cynerza-blue hover:bg-cynerza-blue/90 text-white font-medium rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
        >
          Return to Homepage
        </a>
      </div>
    </div>
    </>
  );
};

export default NotFound;
