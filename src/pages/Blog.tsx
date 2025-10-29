// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   fetchBlogPosts,
//   fetchRecentBlogPosts
// } from '../featured/blog/blogSlice';
// import { PostCard, PostCardLarge, PostCardSmall, SinglePostCard } from '../components/blog/BlogPostCart';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch } from '@/app/store';

// const BlogLayout: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const {
//     blogPosts,
//     recentBlogPosts,
//     loading,
//   } = useSelector((state: any) => state.blog);


//   useEffect(() => {
//     const fetchData = async () => {
//       await Promise.all([
//         dispatch(fetchRecentBlogPosts(5)),
//         dispatch(fetchBlogPosts())
//       ]);
//     };

//     fetchData();
//   }, [dispatch]);

//   const fadeUp: any = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.4,
//         ease: "easeOut",
//       },
//     }),
//     hover: (isDesktop: boolean) =>
//       isDesktop
//         ? {
//           scale: 1.02,
//           boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//           backgroundColor: "rgba(155, 135, 245, 0.05)",
//         }
//         : {},
//   };

//   const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

//   if (loading) {
//     return (
//       <div className="min-h-screen p-2 flex justify-center items-center">
//               <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20 z-0" />

//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//       </div>
//     );
//   }

//   return (
//     <section className="relative min-h-screen 
//     pt-24 pb-16 md:pt-28 md:pb-20 w-full px-4 sm:px-6 lg:px-8 text-gray-900 dark:text-gray-100">
//       {/* Purple gradient background overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20 z-0" />

//       {/* Content wrapper */}
//       <div className="relative z-10">
//         {/* Recent Posts Section */}
//         <div>
//           <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
//             Recent <span className='gradient-text'>Blog</span> Posts
//           </h2>

//           {recentBlogPosts && recentBlogPosts.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
//               {/* Featured */}
//               <div className="sm:col-span-2 lg:col-span-3 space-y-6">
//                 <motion.div
//                   variants={fadeUp}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, amount: 0.3 }}
//                   whileHover={fadeUp.hover(isDesktop)}
//                   custom={0}
//                   className='w-full'
//                 >
//                   <PostCardLarge blog={recentBlogPosts[0]} />
//                 </motion.div>
//               </div>

//               {/* Small posts */}
//               <div className="sm:col-span-1 lg:col-span-2 space-y-6">
//                 {recentBlogPosts.slice(1, 3).map((post, i) => (
//                   <motion.div
//                     key={post._id}
//                     variants={fadeUp}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                     whileHover={fadeUp.hover(isDesktop)}
//                     custom={i + 1}
//                   >
//                     <PostCardSmall blog={post} />
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Single posts */}
//               <div className="sm:col-span-5 mt-3 space-y-4">
//                 {recentBlogPosts.slice(3, 6).map((post, i) => (
//                   <motion.div
//                     key={post._id}
//                     variants={fadeUp}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                     whileHover={fadeUp.hover(isDesktop)}
//                     custom={i + 3}
//                   >
//                     <SinglePostCard blog={post} />
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <p className="text-gray-500">No recent posts found</p>
//           )}
//         </div>

//         {/* All Posts Section */}
//         <div className="mt-12">
//           <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
//             All <span className='gradient-text'>Blog</span> Posts
//           </h2>

//           {blogPosts && blogPosts.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {blogPosts.map((post, i) => (
//                 <motion.div
//                   key={post._id}
//                   variants={fadeUp}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, amount: 0.3 }}
//                   whileHover={fadeUp.hover(isDesktop)}
//                   custom={i}
//                 >
//                   <PostCard blog={post} />
//                 </motion.div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500">No blog posts available</p>
//           )}
//         </div>
//       </div>
//     </section>

//   );
// };

// export default BlogLayout;



import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  fetchBlogPosts,
  fetchRecentBlogPosts
} from '../featured/blog/blogSlice';
import { PostCard, PostCardLarge, PostCardSmall, SinglePostCard } from '../components/blog/BlogPostCart';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/app/store';
import SEO from '@/components/seo/SEO';
import { getSEOData } from '@/components/seo/SEOConfig';

const BlogLayout: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    blogPosts,
    recentBlogPosts,
    loading,
  } = useSelector((state: any) => state.blog);

  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        dispatch(fetchRecentBlogPosts(6)),
        dispatch(fetchBlogPosts())
      ]);
    };

    fetchData();
  }, [dispatch]);

  const fadeUp: any = {
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
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  if (loading) {
    return (
      <>
      <SEO data={getSEOData('blogs')} />
      <div className="relative min-h-screen flex justify-center items-center">
         {/* Purple gradient background overlay */}
            {isDarkMode &&
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20 z-5" />
            }
        <div className="relative z-10 animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
      </>
    );
  }

  return (
    <>
    <SEO data={getSEOData('blogs')} />
    <section className="relative min-h-screen pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24 w-full px-4 sm:px-6 lg:px-8 text-gray-900 dark:text-gray-100">
      {/* Purple gradient background overlay */}
      {/* Purple gradient background overlay */}
      {isDarkMode &&
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20 z-5" />
      }
      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Recent Posts Section */}
        {recentBlogPosts && recentBlogPosts.length > 0 && (
          <div className="mb-16">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Recent <span className='gradient-text'>Blog</span> Posts
            </motion.h2>

            <div className="space-y-8">
              {/* Top Grid - Featured Post + Small Posts */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Featured Large Post - Takes 2 columns on large screens */}
                <div className="lg:col-span-2">
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover="hover"
                    custom={0}
                    className='h-full'
                  >
                    <PostCardLarge blog={recentBlogPosts[0]} />
                  </motion.div>
                </div>

                {/* Small Posts - Takes 1 column, stacked vertically */}
                <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                  {recentBlogPosts.slice(1, 3).map((post, i) => (
                    <motion.div
                      key={post._id}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover="hover"
                      custom={i + 1}
                      className="h-full"
                    >
                      <PostCardSmall blog={post} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Horizontal Single Posts */}
              {recentBlogPosts.length > 3 && (
                <div className="space-y-6">
                  {recentBlogPosts.slice(3, 6).map((post, i) => (
                    <motion.div
                      key={post._id}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover="hover"
                      custom={i + 3}
                      className=''
                    >
                      <SinglePostCard blog={post} />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* All Posts Section */}
        {blogPosts && blogPosts.length > 0 && (
          <div>
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              All <span className='gradient-text'>Blog</span> Posts
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <motion.div
                  key={post._id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover="hover"
                  custom={i}
                  className="h-full"
                >
                  <PostCard blog={post} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {(!recentBlogPosts || recentBlogPosts.length === 0) && (!blogPosts || blogPosts.length === 0) && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No blog posts available</p>
          </div>
        )}
      </div>
    </section>
    </>
  );
};

export default BlogLayout;
