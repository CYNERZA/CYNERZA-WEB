// import React from 'react'
// import { Link } from 'react-router-dom';

// interface Post {
//     _id: string;
//     thumbImage: string;
//     title: string;
//     description: string;
//     content: string;
//     postingDate: string;
//     metaTitle?: string;
//     metaDescription?: string;
//     metaKeywords?: string;
//     tags?: string;
//     slug: string
// }
// // Large post card component
// export const PostCardLarge: React.FC<{ blog: Post }> = ({ blog }) => {

//     return (<Link to={`/blogs/${blog.slug}`}
//         className='rounded-md p-3 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950'>
//         <div className="relative overflow-hidden">
//             <img
//                 src={blog.thumbImage}
//                 alt={blog.title}
//                 className="w-full h-72 object-contain rounded-xl"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-30" />
//         </div>

//         <div className="p-5 space-y-3">
//             <h2 className="text-2xl font-bold">{blog.title}</h2>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//                 {new Date(blog.postingDate).toLocaleDateString("en-GB")}
//             </p>
//             <p className="text-base text-gray-700 dark:text-gray-300 line-clamp-3">
//                 {blog.description}
//             </p>

//             {blog.metaTitle && (
//                 <p className="text-sm text-purple-600 dark:text-purple-400 italic">
//                     {blog.metaTitle}
//                 </p>
//             )}
//             {blog.metaDescription && (
//                 <p className="text-sm text-gray-600 dark:text-gray-400 italic">
//                     {blog.metaDescription}
//                 </p>
//             )}
//             {blog.metaKeywords && (
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                     Keywords: {blog.metaKeywords}
//                 </p>
//             )}

//             {blog.tags && (
//                 <div className="flex flex-wrap gap-2 pt-2">
//                     {blog.tags
//                         .split(",")
//                         .map((t) => t.trim())
//                         .map((tag, i) => (
//                             <span
//                                 key={i}
//                                 className="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100 px-3 py-1 rounded-full text-xs font-medium"
//                             >
//                                 #{tag}
//                             </span>
//                         ))}
//                 </div>
//             )}
//         </div>
//     </Link>)
// }


// // Small post card component
// export const PostCardSmall: React.FC<{ blog: Post }> = ({ blog }) => (
//     <Link to={`/blogs/${blog.slug}`}
//         className="rounded-md p-3 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 flex flex-col sm:flex-col lg:flex-row sm:space-x-0 lg:space-x-4">
//         <div className="relative overflow-hidden">
//             <img
//                 src={blog.thumbImage}
//                 alt={blog.title}
//                 className="w-full h-full object-fill rounded-lg"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-30" />
//         </div>

//         <div className="p-5 space-y-3">
//             <h2 className="sm:truncate md:whitespace-normal md:overflow-visible md:break-words sm:text-sm md:text-base lg:text-xl font-bold">
//                 {blog.title}</h2>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//                 {new Date(blog.postingDate).toLocaleDateString("en-GB")}
//             </p>
//             <p className="text-base text-gray-700 dark:text-gray-300 line-clamp-3">
//                 {blog.description}
//             </p>

//             {blog.metaTitle && (
//                 <p className="text-sm text-purple-600 dark:text-purple-400 italic">
//                     {blog.metaTitle}
//                 </p>
//             )}
//         </div>
//     </Link >
// );



// // Single post card component
// export const SinglePostCard: React.FC<{ blog: Post }> = ({ blog }) => (
//     <Link to={`/blogs/${blog.slug}`}
//         className="rounded-md p-3 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 flex flex-col sm:flex-row sm:space-x-6 mb-4">
//         <div className="relative overflow-hidden flex justify-center items-center">
//             <img
//                 src={blog.thumbImage}
//                 alt={blog.title}
//                 className="md:h-64 h-full w-full object-contain rounded-lg"
//             />
//         </div>

//         <div className="p-5 space-y-3">
//             <h2 className="text-2xl font-bold">{blog.title}</h2>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//                 {new Date(blog.postingDate).toLocaleDateString("en-GB")}
//             </p>
//             <p className="text-base text-gray-700 dark:text-gray-300 line-clamp-3">
//                 {blog.description}
//             </p>

//             {blog.metaTitle && (
//                 <p className="text-sm text-purple-600 dark:text-purple-400 italic">
//                     {blog.metaTitle}
//                 </p>
//             )}
//             {blog.metaDescription && (
//                 <p className="text-sm text-gray-600 dark:text-gray-400 italic">
//                     {blog.metaDescription}
//                 </p>
//             )}
//             {blog.metaKeywords && (
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                     Keywords: {blog.metaKeywords}
//                 </p>
//             )}

//             {blog.tags && (
//                 <div className="flex flex-wrap gap-2 pt-2">
//                     {blog.tags
//                         .split(",")
//                         .map((t) => t.trim())
//                         .map((tag, i) => (
//                             <span
//                                 key={i}
//                                 className="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100 px-3 py-1 rounded-full text-xs font-medium"
//                             >
//                                 #{tag}
//                             </span>
//                         ))}
//                 </div>
//             )}
//         </div>
//     </Link>
// );

// // Post card component
// export const PostCard: React.FC<{ blog: Post }> = ({ blog }) => (
//     <Link to={`/blogs/${blog.slug}`}
//         className='rounded-md p-3 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 flex flex-col'>
//         <div className="relative overflow-hidden">
//             <img
//                 src={blog.thumbImage}
//                 alt={blog.title}
//                 className='w-full h-64 lg:max-h-64  object-fill rounded-lg'
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-30" />
//         </div>

//         <div className="p-5 space-y-3">
//             <h2 className="text-2xl font-bold">{blog.title}</h2>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//                 {new Date(blog.postingDate).toLocaleDateString("en-GB")}
//             </p>
//             <p className="text-base text-gray-700 dark:text-gray-300 line-clamp-3">
//                 {blog.description}
//             </p>

//             {blog.metaTitle && (
//                 <p className="text-sm text-purple-600 dark:text-purple-400 italic">
//                     {blog.metaTitle}
//                 </p>
//             )}
//             {blog.metaDescription && (
//                 <p className="text-sm text-gray-600 dark:text-gray-400 italic">
//                     {blog.metaDescription}
//                 </p>
//             )}
//             {blog.metaKeywords && (
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                     Keywords: {blog.metaKeywords}
//                 </p>
//             )}

//             {blog.tags && (
//                 <div className="flex flex-wrap gap-2 pt-2">
//                     {blog.tags
//                         .split(",")
//                         .map((t) => t.trim())
//                         .map((tag, i) => (
//                             <span
//                                 key={i}
//                                 className="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100 px-3 py-1 rounded-full text-xs font-medium"
//                             >
//                                 #{tag}
//                             </span>
//                         ))}
//                 </div>
//             )}
//         </div>
//     </Link>
// )



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
    slug: string
}

// Large post card component - Featured post (બાજુમાં બે નાની posts)
export const PostCardLarge: React.FC<{ blog: Post }> = ({ blog }) => {
    return (
        <Link to={`/blogs/${blog.slug}`}
            className='group block rounded-xl p-3 sm:p-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800'>
            <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                    src={blog.thumbImage}
                    alt={blog.title}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-fill group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="space-y-3">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-tight">
                    {blog.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {new Date(blog.postingDate).toLocaleDateString("en-GB")}
                </p>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 line-clamp-3 leading-relaxed">
                    {blog.description}
                </p>

                {blog.tags && (
                    <div className="flex flex-wrap gap-2 pt-2">
                        {blog.tags
                            .split(",")
                            .slice(0, 4)
                            .map((t) => t.trim())
                            .map((tag, i) => (
                                <span
                                    key={i}
                                    className="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100 px-2 py-1 rounded-full text-xs font-medium"
                                >
                                    #{tag}
                                </span>
                            ))}
                    </div>
                )}
            </div>
        </Link>
    )
}

// Small post card component - Right side posts
export const PostCardSmall: React.FC<{ blog: Post }> = ({ blog }) => (
    <Link to={`/blogs/${blog.slug}`}
        className="group block rounded-xl p-3 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 h-full">
        <div className="relative overflow-hidden rounded-lg mb-3">
            <img
                src={blog.thumbImage}
                alt={blog.title}
                className="w-full h-28 sm:h-32 lg:h-36 object-fill group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-tight">
                {blog.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(blog.postingDate).toLocaleDateString("en-GB")}
            </p>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 line-clamp-2 leading-relaxed">
                {blog.description}
            </p>
        </div>
    </Link>
);

// Single post card component - Horizontal layout
export const SinglePostCard: React.FC<{ blog: Post }> = ({ blog }) => (
    <Link to={`/blogs/${blog.slug}`}
        className="group block rounded-xl p-3 sm:p-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
        <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative overflow-hidden rounded-lg flex-shrink-0 sm:w-40 md:w-48 lg:w-56">
                <img
                    src={blog.thumbImage}
                    alt={blog.title}
                    className="w-full  h-32 sm:h-28 md:h-32 lg:min-h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="flex-1 space-y-2 sm:space-y-3 min-w-0">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-tight">
                    {blog.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {new Date(blog.postingDate).toLocaleDateString("en-GB")}
                </p>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                    {blog.description}
                </p>

                {blog.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                        {blog.tags
                            .split(",")
                            .slice(0, 3)
                            .map((t) => t.trim())
                            .map((tag, i) => (
                                <span
                                    key={i}
                                    className="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100 px-2 py-1 rounded-full text-xs font-medium"
                                >
                                    #{tag}
                                </span>
                            ))}
                    </div>
                )}
            </div>
        </div>
    </Link>
);

// Regular post card component - Grid posts
export const PostCard: React.FC<{ blog: Post }> = ({ blog }) => (
    <Link to={`/blogs/${blog.slug}`}
        className='group block rounded-xl p-3 sm:p-4 bg-gradient-to-b
         from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 
         shadow-lg hover:shadow-xl transition-all duration-300 border
          border-gray-100 dark:border-gray-800 h-full sm:flex flex-col'>
        <div className="relative overflow-hidden rounded-lg mb-4">
            <img
                src={blog.thumbImage}
                alt={blog.title}
                className='w-full h-40 sm:h-44 lg:h-48 object-fill group-hover:scale-105 transition-transform duration-300'
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="flex-1 flex flex-col space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-tight">
                {blog.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {new Date(blog.postingDate).toLocaleDateString("en-GB")}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 leading-relaxed flex-1">
                {blog.description}
            </p>

            {blog.tags && (
                <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
                    {blog.tags
                        .split(",")
                        .slice(0, 3)
                        .map((t) => t.trim())
                        .map((tag, i) => (
                            <span
                                key={i}
                                className="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100 px-2 py-1 rounded-full text-xs font-medium"
                            >
                                #{tag}
                            </span>
                        ))}
                </div>
            )}
        </div>
    </Link>
)
