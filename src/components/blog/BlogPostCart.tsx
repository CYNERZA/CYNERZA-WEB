import React from 'react'

interface Post {
    id: number;
    title: string;
    date: string;
    excerpt: string;
    imageUrl: string;
}

// Large post card component
export const PostCardLarge: React.FC<{ post: Post }> = ({ post }) => (
    <div className='rounded-md p-3 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950'>
        <img src={post.imageUrl} alt={post.title} className="w-full h-72 object-cover rounded-xl" />
        <p className="text-sm text-gray-400 mt-2">{post.date}</p>
        <h3 className="mt-4  lg:text-xl lg:font-semibold text-gray-800 dark:text-gray-200">{post.title}</h3>
        <p className="mt-2 text-gray-800 dark:text-gray-200">{post.excerpt}</p>
    </div>
);

// Small post card component
export const PostCardSmall: React.FC<{ post: Post }> = ({ post }) => (
    <div className="rounded-md p-3 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 flex flex-col sm:flex-col lg:flex-row sm:space-x-0 lg:space-x-4">
        <img src={post.imageUrl} alt={post.title} className="w-full lg:min-w-40 min-h-40 object-cover rounded-lg" />
        <div>
            <p className="text-xs text-gray-800 dark:text-gray-200 mt-2">{post.date}</p>
            <h4 className="lg:text-lg lg:font-medium text-gray-800 dark:text-gray-200">{post.title}</h4>

        </div>
    </div>
);

// Small post card component
export const SinglePostCard: React.FC<{ post: Post }> = ({ post }) => (
    <div className="rounded-md p-3 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 flex flex-col sm:flex-row sm:space-x-6 mb-4">
        <img src={post.imageUrl} alt={post.title} className="h-64 w-full sm:max-w-[50%] object-cover rounded-lg" />
        <div>
            <p className="text-xs text-gray-800 dark:text-gray-200">{post.date}</p>
            <h4 className="lg:text-lg lg:font-medium text-gray-800 dark:text-gray-200">{post.title}</h4>
            <p className="mt-2 text-gray-800 dark:text-gray-200">{post.excerpt}</p>

        </div>
    </div>
);

// Post card component
export const PostCard: React.FC<{ post: Post }> = ({ post }) => (
    <div className='rounded-md p-3 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 flex flex-col'>
        <img className='w-full h-64 lg:max-h-64 object-cover rounded-lg' src={post.imageUrl} alt={post.title} />
        <div>
            <p className='text-xs text-gray-800 dark:text-gray-200 mt-2'>{post.date}</p>
            <h4 className='lg:text-lg lg:font-medium text-gray-800 dark:text-gray-200'>{post.title}</h4>
            <p className="mt-2 text-gray-800 dark:text-gray-200">{post.excerpt}</p>

        </div>
    </div>
)

