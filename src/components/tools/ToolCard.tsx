
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ToolCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  delay: number;
}

const ToolCard: React.FC<ToolCardProps> = ({
  name,
  description,
  icon,
  gradient,
  delay
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        'rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300',
        'dark:shadow-purple-500/5 dark:hover:shadow-purple-500/10',
        'group relative cursor-pointer'
      )}
    >
      <div className={cn(
        'bg-gradient-to-r p-8 text-white h-full dark:bg-opacity-90 backdrop-blur-sm',
        gradient
      )}>
        <div className={cn(
          'flex items-center justify-center w-16 h-16 mb-6 rounded-full',
          'bg-white/10 text-white group-hover:scale-110 group-hover:shadow-glow',
          'dark:bg-gray-900/20 dark:text-white/90',
          'transition-all duration-300'
        )}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">
          {name}
        </h3>
        <p className="text-white/90 dark:text-white/80 group-hover:text-white/95 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ToolCard;
