import React from 'react'
import { Link } from 'react-router-dom';

interface Post {
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
// Large post card component
export const PostCardLarge: React.FC<{ blog: Post }> = ({ blog }) => (
    <Link to={`/blogs/${blog.title}`}
        className='rounded-md p-3 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950'>
        <div className="relative overflow-hidden">
            <img
                src={blog.thumbImage}
                alt={blog.title}
                className="w-full h-72 object-cover rounded-xl"
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


);

// Small post card component
export const PostCardSmall: React.FC<{ blog: Post }> = ({ blog }) => (
    <Link to={`/blogs/${blog.title}`}
        className="rounded-md p-3 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 flex flex-col sm:flex-col lg:flex-row sm:space-x-0 lg:space-x-4">
        <div className="relative overflow-hidden">
            <img
                src={blog.thumbImage}
                alt={blog.title}
                className="w-full h-full object-fill rounded-lg"
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
        </div>
    </Link >
);

// Single post card component
export const SinglePostCard: React.FC<{ blog: Post }> = ({ blog }) => (
    <Link to={`/blogs/${blog.title}`}
        className="rounded-md p-3 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 flex flex-col sm:flex-row sm:space-x-6 mb-4">
        <div className="relative overflow-hidden flex justify-center items-center">
            <img
                src={blog.thumbImage}
                alt={blog.title}
                className="h-64 w-full object-cover rounded-lg"
            />
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
);

// Post card component
export const PostCard: React.FC<{ blog: Post }> = ({ blog }) => (
    <Link to={`/blogs/${blog.title}`}
        className='rounded-md p-3 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 flex flex-col'>
        <div className="relative overflow-hidden">
            <img
                src={blog.thumbImage}
                alt={blog.title}
                className='w-full h-64 lg:max-h-64 object-cover rounded-lg'
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
)

