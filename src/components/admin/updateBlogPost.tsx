import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getSignleBlogPost } from '@/featured/blog/blogSlice';
import { RootState, AppDispatch } from '@/app/store';
import BlogForm from "@/pages/admin/BlogForm";
import LogoLoader from "./loader";
import { Button } from "../ui/button";
import { FileText } from "lucide-react";

const UpdateBlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [initialLoad, setInitialLoad] = useState(true);

    const currentBlog = useSelector((state: RootState) => state.blog.currentBlog);

    useEffect(() => {
        if (initialLoad) {
            dispatch(getSignleBlogPost(id)).finally(() => setInitialLoad(false));
        }
    }, [dispatch, initialLoad]);

    if (initialLoad) {
        return <LogoLoader />;
    }


    return !currentBlog ? (<div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] p-8">
        <FileText className="w-16 h-16 text-red-500 mb-4 animate-pulse" />
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Blog Not Found
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-md">
            Requested blog does not exist or might have been removed.
            Please check your list or create a new post.
        </p>
        <Button
            variant="outline"
            className="px-6"
            onClick={() => navigate('/admin/blogs')}
        >
            ← Back to Blogs
        </Button>
    </div>) : <BlogForm post={currentBlog} />;
}

export default UpdateBlogPost;