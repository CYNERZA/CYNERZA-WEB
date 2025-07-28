import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogPosts } from '@/featured/blog/blogSlice';
import { RootState, AppDispatch } from '@/app/store';
import BlogForm from "@/pages/admin/BlogForm";

const updateBlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>()

    const blogs = useSelector((state: RootState) => state.blog.blogPosts);
    const loading = useSelector((state: RootState) => state.blog.loading);
    const currentBlog = blogs.find(b => b._id === id);

    useEffect(() => {
        if (!blogs.length) {
            dispatch(fetchBlogPosts());
        }
    }, [dispatch, blogs, id]);

    if (!currentBlog && !loading) {
        return <div>
            <h1 className="text-slate-900 dark:text-slate-200 text-center font-semibold text-4xl md:text-6xl font-heading">Blog Not Found 404</h1>
        </div>
    }

    return !loading ? (
        <BlogForm post={currentBlog} />) : (
        <div>
            <h1>Loading</h1>
        </div>
    )
}

export default updateBlogPost