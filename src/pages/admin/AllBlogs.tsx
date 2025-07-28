import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fetchBlogPosts } from "@/featured/blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";

interface BlogType {
    _id: string;
    thumbImage: string;
    title: string;
    description: string;
    content: string;
    postingDate: string;
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
    tags?: string;
}

const AllBlogs: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const blogs = useSelector((state: any) => state.blog.blogPosts);
    const loading = useSelector((state: any) => state.blog.loading);
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        dispatch(fetchBlogPosts());
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return loading ? (
        <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      <p className="mt-4 text-lg">Loading...</p>
    </div>
    ) : (
        <div className="min-h-screen text-gray-900 dark:text-gray-100 px-4 py-10">
            {/* <div className="max-w-7xl mx-auto flex ml-4 items-center mb-8"> */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-extrabold mx-4 mb-4"
                >
                    Our Blog
                </motion.h1>
            {/* </div> */}

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
                }}
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
            >
                {/* {blogs.map((blog: BlogType, idx: number) => (
                    <motion.div
                        key={blog._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        whileTap={{ scale: 0.97 }}
                        whileHover={isDesktop ? { scale: 1.03 } : {}}
                        className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-lg overflow-hidden cursor-pointer border border-transparent hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300"
                        onClick={() => navigate(`/blog/${blog._id}`)}
                    >
                        <div className="relative overflow-hidden">
                            <motion.img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-30" />
                        </div>

                        <div className="p-5 space-y-3">
                            <h2 className="text-2xl font-bold ">
                                {blog.title}
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {new Date(blog.postingDate).toLocaleDateString()}
                            </p>
                            <p className="text-base text-gray-700 dark:text-gray-300 line-clamp-3">
                                {blog.description}
                            </p>

                            {blog.tags && (
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {blog.tags
                                        .split(',')
                                        .map((t) => t.trim())
                                        .map((tag, i) => (
                                            <span
                                                key={i}
                                                className="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100 px-3 py-1 rounded-full text-xs font-medium"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))} */}
                 {blogs.map((blog: BlogType, idx: number) => (
          <motion.div
            key={blog._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileTap={{ scale: 0.97 }}
            whileHover={isDesktop ? { scale: 1.03 } : {}}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-lg overflow-hidden cursor-pointer border border-transparent hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300"
            onClick={() => navigate(`/admin/blogs/${blog._id}`)}
          >
            <div className="relative overflow-hidden">
              <motion.img
                src={blog.thumbImage}
                alt={blog.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-30" />
            </div>

            <div className="p-5 space-y-3">
              <h2 className="text-2xl font-bold">{blog.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(blog.postingDate).toLocaleDateString()}
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 line-clamp-3">
                {blog.description}
              </p>

              {/* Optional meta fields */}
              {blog.metaTitle && (
                <p className="text-sm text-purple-600 dark:text-purple-400 italic">
                  {blog.metaTitle}
                </p>
              )}
              {blog.metaDescription && (
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  {blog.metaDescription}
                </p>
              )}
              {blog.metaKeywords && (
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Keywords: {blog.metaKeywords}
                </p>
              )}

              {/* Tags */}
              {blog.tags && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {blog.tags.split(',').map((t) => t.trim()).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
            </motion.div>
        </div>
    );
};

export default AllBlogs;
