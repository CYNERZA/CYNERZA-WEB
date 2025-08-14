import React, { ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';
import { cn } from '@/lib/utils';
import { AIToolSchema, WebsiteSchema } from '../seo/SchemaMarkup';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
  noFooter?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  className,
  noPadding = false,
  noFooter = false
}) => {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
        <Helmet>
          <title>Cynerza - AI Tools & Solutions</title>
          <meta name="description" content="Experience powerful AI tools with Cynerza. Try now for free!" />
          <link rel="canonical" href="https://cynerza.com" />
        </Helmet>
        <AIToolSchema />
        <WebsiteSchema />
        <Navbar />
      <main 
        className={cn(
          'flex-1 w-full',
          !noPadding && 'pt-24 pb-16 md:pt-28 md:pb-20',
          className
        )}
      >
                <div className={`${!noPadding && "w-full px-4 sm:px-6 lg:px-8"}`}>
          {children}
        </div>
      </main>
        {!noFooter && <Footer />}
      </div>
    </HelmetProvider>
  );
};

export default PageLayout;
