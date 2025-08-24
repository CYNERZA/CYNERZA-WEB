import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBlogPosts } from "@/featured/blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import LogoLoader from "@/components/admin/loader";
import { AppDispatch, RootState } from "@/app/store";

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
  slug: string;
}

const AllBlogs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const blogs = useSelector((state: any) => state.blog.blogPosts);
  const loading = useSelector((state: any) => state.blog.loading);
  const [isInitialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchBlogPosts()).finally(() => setInitialLoading(false))

  }, []);

  if (loading || isInitialLoading) {
    return <LogoLoader />;
  }

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 px-4 py-10">
      <h1 className="text-4xl font-extrabold mx-4 mb-4">All Blogs</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {blogs.map((blog: BlogType) => (
          <Link
            key={blog._id}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-lg overflow-hidden cursor-pointer border border-transparent hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300"
            to={`/admin/blogs/${blog.slug}`}
          >
            <div className="relative overflow-hidden">
              <img
                src={blog.thumbImage}
                alt={blog.title}
                className="w-full h-52 object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-30" />
            </div>

            <div className="p-5 space-y-3">
              <h2 className="text-2xl font-bold">{blog.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(blog.postingDate).toLocaleDateString("en-GB")}
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 line-clamp-3">
                {blog.description}
              </p>

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

              {blog.tags && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {blog.tags
                    .split(",")
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
