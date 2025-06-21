import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/ui/BlogCard';
import { motion } from 'framer-motion';

const BlogPreview: React.FC = () => {
  // No longer need useRef for IntersectionObserver as framer-motion handles it
  // const blogRef = useRef<HTMLDivElement>(null);

  // No longer need useEffect for IntersectionObserver as framer-motion handles it
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add('animate-fade-in');
  //           observer.unobserve(entry.target); // Stop observing once animation is triggered
  //         }
  //       });
  //     },
  //     { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
  //   );

  //   if (blogRef.current) {
  //     observer.observe(blogRef.current);
  //   }

  //   return () => {
  //     if (blogRef.current) {
  //       observer.unobserve(blogRef.current);
  //     }
  //   };
  // }, []);

  const blogPosts = [
    {
      title: 'The Future of AI in Software Development',
      excerpt: 'How artificial intelligence is transforming the way we build and maintain software.',
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      date: 'Apr 15, 2025',
      author: 'Alex Morgan',
      slug: 'future-of-ai-in-software-development'
    },
    {
      title: 'Building Scalable Applications with CYNERZA',
      excerpt: 'Learn how to leverage our tools to create applications that can grow with your user base.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      date: 'Apr 10, 2025',
      author: 'Sarah Chen',
      slug: 'building-scalable-applications'
    },
    {
      title: '5 Ways to Improve Your Development Workflow',
      excerpt: 'Simple yet effective strategies to enhance productivity and code quality.',
      imageUrl: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      date: 'Apr 5, 2025',
      author: 'David Walker',
      slug: 'improve-development-workflow'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Latest from our <span className="gradient-text">Blog</span></h2>
          <p className="text-lg text-gray-700 mb-8">
            Insights, tutorials, and news from the CYNERZA team to help you stay on the cutting edge.
          </p>
        </div>

        <div 
          // ref={blogRef} // No longer needed
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard
                title={post.title}
                excerpt={post.excerpt}
                imageUrl={post.imageUrl}
                date={post.date}
                author={post.author}
                slug={post.slug}
                // className="animate-fade-in" // No longer needed
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog">
            <Button className="bg-cynerza-purple hover:bg-cynerza-purple/90">
              Read All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
