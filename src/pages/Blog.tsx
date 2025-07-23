// import React, { useEffect } from 'react';
// import Navbar from '@/components/layout/Navbar';
// import Footer from '@/components/layout/Footer';
// import BlogCard from '@/components/ui/BlogCard';

// const Blog: React.FC = () => {
//   useEffect(() => {
//     document.title = 'Blog - CYNERZA';
//   }, []);

//   const blogPosts = [
//     {
//       title: 'The Future of AI in Software Development',
//       excerpt: "How artificial intelligence is transforming the way we build and maintain software. Explore the latest trends and see what's coming next.",
//       imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
//       date: 'Apr 15, 2025',
//       author: 'Alex Morgan',
//       slug: 'future-of-ai-in-software-development'
//     },
//     {
//       title: 'Building Scalable Applications with CYNERZA',
//       excerpt: 'Learn how to leverage our tools to create applications that can grow with your user base. Follow our step-by-step guide for optimal results.',
//       imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
//       date: 'Apr 10, 2025',
//       author: 'Sarah Chen',
//       slug: 'building-scalable-applications'
//     },
//     {
//       title: '5 Ways to Improve Your Development Workflow',
//       excerpt: 'Simple yet effective strategies to enhance productivity and code quality. These tips will help streamline your development process.',
//       imageUrl: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
//       date: 'Apr 5, 2025',
//       author: 'David Walker',
//       slug: 'improve-development-workflow'
//     },
//     {
//       title: 'Introducing Our New AI Code Generation Tools',
//       excerpt: "We've added powerful new features to our AI code generation toolkit. Learn how they can help accelerate your development.",
//       imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
//       date: 'Apr 1, 2025',
//       author: 'Michael Lee',
//       slug: 'new-ai-code-generation-tools'
//     },
//     {
//       title: 'Best Practices for AI-Assisted Development',
//       excerpt: 'How to get the most out of AI programming assistants while maintaining code quality and security standards.',
//       imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
//       date: 'Mar 28, 2025',
//       author: 'Jessica Huang',
//       slug: 'best-practices-ai-assisted-development'
//     },
//     {
//       title: 'The Complete Guide to Code Refactoring',
//       excerpt: 'Learn how to effectively refactor your codebase to improve maintainability and reduce technical debt.',
//       imageUrl: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
//       date: 'Mar 22, 2025',
//       author: 'Omar Patel',
//       slug: 'complete-guide-code-refactoring'
//     },
//   ];

//   const categories = ['All', 'Tutorials', 'AI', 'Development', 'Product Updates', 'Case Studies'];

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />

//       <main className="flex-grow pt-8">
//         <section className="py-8">
//           <div className="container mx-auto px-4">
//             <div className="max-w-3xl mx-auto text-center mb-12">
//               <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
//                 Our <span className="gradient-text">Blog</span>
//               </h1>
//               <p className="text-xl text-gray-600">
//                 Insights, tutorials, and news to help you stay on the cutting edge of development.
//               </p>
//             </div>

//             <div className="flex flex-wrap justify-center gap-3 mb-12">
//               {categories.map((category, index) => (
//                 <button
//                   key={index}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                     index === 0
//                       ? 'bg-cynerza-purple text-white'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {blogPosts.map((post, index) => (
//                 <BlogCard
//                   key={index}
//                   title={post.title}
//                   excerpt={post.excerpt}
//                   imageUrl={post.imageUrl}
//                   date={post.date}
//                   author={post.author}
//                   slug={post.slug}
//                   className="animate-fade-in"
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Blog;


import React from 'react';
import { motion } from 'framer-motion';
import { PostCard, PostCardLarge, PostCardSmall, SinglePostCard } from '@/components/blog/BlogPostCart';

interface Post {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

const recentBlogPosts: Array<Post> = [
  {
    id: 1,
    title: 'The Future of AI in Software Development',
    excerpt: "How artificial intelligence is transforming the way we build and maintain software. Explore the latest trends and see what's coming next.",
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    date: 'Apr 15, 2025',
  },
  {
    id: 2,
    title: 'Building Scalable Applications with CYNERZA',
    excerpt: 'Learn how to leverage our tools to create applications that can grow with your user base. Follow our step-by-step guide for optimal results.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    date: 'Apr 10, 2025',
  },
  {
    id: 3,
    title: '5 Ways to Improve Your Development Workflow',
    excerpt: 'Simple yet effective strategies to enhance productivity and code quality. These tips will help streamline your development process.',
    imageUrl: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    date: 'Apr 5, 2025',
  },
  {
    id: 4,
    title: 'Introducing Our New AI Code Generation Tools',
    excerpt: "We've added powerful new features to our AI code generation toolkit. Learn how they can help accelerate your development.",
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    date: 'Apr 1, 2025',
  },

];

const allBlogPosts: Array<Post> = [
  ...recentBlogPosts,
  {
    id: 5,
    title: 'Best Practices for AI-Assisted Development',
    excerpt: 'How to get the most out of AI programming assistants while maintaining code quality and security standards.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    date: 'Mar 28, 2025',
  },
  {
    id: 6,
    title: 'The Complete Guide to Code Refactoring',
    excerpt: 'Learn how to effectively refactor your codebase to improve maintainability and reduce technical debt.',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    date: 'Mar 22, 2025',
  },
  {
    id: 7,
    title: 'Best Practices for AI-Assisted Development',
    excerpt: 'How to get the most out of AI programming assistants while maintaining code quality and security standards.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    date: 'Mar 28, 2025',
  },
]


// const BlogLayout: React.FC = () => {
//   return (
//     <section className=" min-h-screen p-2">
//       <div>
//         <h2 className="text-3xl font-bold gradient-text mb-6">Recent blog posts</h2>
//         <div className="grid grid-cols-0 sm:grid-cols-3 lg:grid-cols-5 gap-6  ">
//           {/* Left side: two large featured posts */}
//           <div className="sm:col-span-2 lg:col-span-3 space-y-6 ">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow:
//                   "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                 backgroundColor: "rgba(155, 135, 245, 0.1)"
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <PostCardLarge post={recentBlogPosts[0]} />
//             </motion.div>
//           </div>
//           {/* Right side: small posts */}
//           <div className="sm:col-span-1 lg:col-span-2 space-y-6">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ duration: 0.5, delay: 1 * 0.1 }}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow:
//                   "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                 backgroundColor: "rgba(155, 135, 245, 0.1)"
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <PostCardSmall post={recentBlogPosts[1]} />
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ duration: 0.5, delay: 1 * 0.1 }}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow:
//                   "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                 backgroundColor: "rgba(155, 135, 245, 0.1)"
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <PostCardSmall post={recentBlogPosts[2]} />
//             </motion.div>
//           </div>
//           {/* Single post */}
//           <div className="sm:col-span-5 mt-3">
//             {recentBlogPosts.slice(3).map((post, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow:
//                     "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                   backgroundColor: "rgba(155, 135, 245, 0.1)"
//                 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <SinglePostCard key={post.id} post={post} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* All posts */}
//       <div className="mt-12">
//         <h2 className="text-3xl font-bold gradient-text mb-6">All blog posts</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {allBlogPosts.map((post, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow:
//                   "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                 backgroundColor: "rgba(155, 135, 245, 0.1)"
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <PostCard key={post.id} post={post} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


const BlogLayout: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hover: (isDesktop: boolean) =>
      isDesktop
        ? {
            scale: 1.02,
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
            backgroundColor: "rgba(155, 135, 245, 0.05)",
          }
        : {},
  };

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  return (
    <section className="min-h-screen p-2">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Recent <span className='gradient-text'>Blog</span> Posts
        </h2>

        <div className="grid grid-cols-0 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Featured */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={fadeUp.hover(isDesktop)}
              custom={0}
            >
              <PostCardLarge post={recentBlogPosts[0]} />
            </motion.div>
          </div>

          {/* Small posts */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-6">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={fadeUp.hover(isDesktop)}
                custom={i}
              >
                <PostCardSmall post={recentBlogPosts[i]} />
              </motion.div>
            ))}
          </div>

          {/* Single posts */}
          <div className="sm:col-span-5 mt-3 space-y-4">
            {recentBlogPosts.slice(3).map((post, i) => (
              <motion.div
                key={post.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={fadeUp.hover(isDesktop)}
                custom={i}
              >
                <SinglePostCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* All posts */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          All <span className='gradient-text'>Blog</span> Posts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allBlogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={fadeUp.hover(isDesktop)}
              custom={i}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};




export default BlogLayout;
