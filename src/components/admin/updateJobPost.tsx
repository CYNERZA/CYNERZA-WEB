import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/app/store';
import BlogForm from "@/pages/admin/BlogForm";
import LogoLoader from "./loader";
import { Button } from "../ui/button";
import { FileText, JoystickIcon, ShipIcon } from "lucide-react";
import { getSingleJob } from "@/featured/jobPost/jobPostSlice";
import JobForm from "@/pages/admin/JobPostForm";

const UpdateJobPosts: React.FC = () => {
    const { jobId } = useParams<{ jobId: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [initialLoad, setInitialLoad] = useState(true);
    const currentJob = useSelector((state: any) => state.jobPost.currentJob)
    const isLoading = useSelector((state: any) => state.jobPost.loading)
    useEffect(() => {
        dispatch(getSingleJob(jobId)).finally(() => setInitialLoad(false));
    }, [dispatch]);

    if (initialLoad) {
        return <LogoLoader />;
    }


    return !currentJob ? (<div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] p-8">
        <ShipIcon className="w-16 h-16 text-red-500 mb-4 animate-pulse" />
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Job Not Found
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-md">
            Requested Job does not exist or might have been removed.
            Please check your list.
        </p>
        <Button
            variant="outline"
            className="px-6"
            onClick={() => navigate('/admin/jobs')}
        >
            ← Back to Jobs
        </Button>
    </div>) : <JobForm job={currentJob} />;
}

export default UpdateJobPosts;