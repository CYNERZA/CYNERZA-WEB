import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { cn } from '@/lib/utils';

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
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <Navbar />
      <main 
        className={cn(
          'flex-1 w-full',
          !noPadding && 'pt-24 pb-16 md:pt-28 md:pb-20',
          className
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      {!noFooter && <Footer />}
    </div>
  );
};

export default PageLayout;
