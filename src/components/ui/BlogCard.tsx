import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  slug: string;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  imageUrl,
  date,
  author,
  slug,
  className
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -4px rgba(0, 0, 0, 0.04)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "block rounded-2xl overflow-hidden bg-white shadow",
        className
      )}
    >
      <Link 
        to={`/blog/${slug}`}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{author}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-cynerza-blue transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-2">{excerpt}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
