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
  // const [isHovered, setIsHovered] = useState(false); // No longer needed
  
  return (
    <motion.div
      className={cn(
        "relative rounded-2xl p-6 transition-all duration-300 ease-in-out",
        "bg-white/50 shadow", // Default shadow
        className
      )}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        backgroundColor: "rgba(155, 135, 245, 0.1)" // cynerza-purple/10
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      // onMouseEnter={() => setIsHovered(true)} // No longer needed
      // onMouseLeave={() => setIsHovered(false)} // No longer needed
    >
      <div className={`
        flex items-center justify-center w-14 h-14 mb-4 rounded-lg
        // The color change on hover will now be handled by Framer Motion's whileHover on the parent
        bg-cynerza-purple/10 text-cynerza-purple
        transition-all duration-300
      `}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 font-heading">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
