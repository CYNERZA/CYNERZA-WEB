import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className
}) => {
  return (
    <motion.button
      className={cn(
        "relative rounded-2xl p-6 transition-all duration-300 ease-in-out",
        "bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm  rounded-lg p-4 md:p-6",
        className
      )}
      whileHover={{
        scale: 1.05,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        backgroundColor: "rgba(155, 135, 245, 0.1)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={`
        flex items-center justify-center w-14 h-14 mb-4 rounded-lg
        bg-cynerza-blue/10 text-cynerza-blue
        dark:bg-cynerza-blue/20 dark:text-cynerza-blue
        transition-all duration-300
      `}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 font-heading text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </motion.button>
  );
};

export default FeatureCard;
