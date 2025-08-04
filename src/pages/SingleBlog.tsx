import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogPosts } from '@/featured/blog/blogSlice';
import { RootState, AppDispatch } from '@/app/store';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SingleBlog: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const blogs = useSelector((state: RootState) => state.blog.blogPosts);
    const loading = useSelector((state: RootState) => state.blog.loading);
    const currentBlog = blogs.find(b => b._id === id);

    useEffect(() => {
        if (!blogs.length) {
            dispatch(fetchBlogPosts())
        }
    }, [dispatch]);

    if (loading) {
        return <div className="min-h-screen p-2 flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
    }


    return !currentBlog ? (<div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] p-8">
        <FileText className="w-16 h-16 text-red-500 mb-4 animate-pulse" />
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Blog Not Found
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-md">
            Requested blog does not exist or might have been removed.
        </p>
        <Button
            variant="outline"
            className="px-6"
            onClick={() => navigate('/blogs')}
        >
            ← Back to Blogs
        </Button>
    </div>) : (
        <div
            className="min-h-screen p-4 sm:p-8 bg-white dark:bg-gray-900 transition-colors max-w-4xl mx-auto"
        >
            {/* Title & Image */}
            <h1
                className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 text-center sm:text-left"
            >
                {currentBlog.title}
            </h1>
            <img
                src={currentBlog.thumbImage}
                alt={currentBlog.title}
                className="w-full h-64 sm:h-96  rounded-lg mb-8 shadow-lg"
            />

            {/* Content: Apply HTML directly */}
            <div
                className="raw-content text-slate-900 dark:text-slate-200"
                dangerouslySetInnerHTML={{ __html: currentBlog.content }}
            />
        </div>
    );
};
