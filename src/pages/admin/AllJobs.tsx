import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MdEdit, MdDelete, MdWork, MdLocationOn, MdBusinessCenter } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteJobPost, getAllJobPosts } from "@/featured/jobPost/jobPostSlice";
import type { AppDispatch } from "@/app/store";
import { useToast } from "@/hooks/use-toast";
import LogoLoader from "@/components/admin/loader";

// Types
export interface JobPost {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

const AllJobs: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobPost | null>(null);
  const [initialLoad, setInitialLoad] = useState(true);
  const jobs = useSelector((state: any) => state.jobPost.jobPosts)
  const loading = useSelector((state: any) => state.jobPost.loading)
  const { toast } = useToast();
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  useEffect(() => {
    if(!jobs.length) dispatch(getAllJobPosts()).finally(() => setInitialLoad(false));
    else setInitialLoad(false)
    
  }, [])
  
  // Delete job
  const handleDelete = async (jobPostId: string) => {
    dispatch(deleteJobPost(jobPostId))
      .then((res: any) => {
        if (!res.error) {
          toast({
            title: 'Success',
            description: res.payload?.message || 'Deleted successfully',
            variant: 'default',
          });
        } else {
          console.error('error: ', res.error?.message);
          toast({ title: 'Error', description: 'Opps..! Something went wrong', variant: 'destructive' });
        }
      })
      .catch(err => {
        console.error(err);
        toast({ title: 'Error', description: 'Opps..! Something went wrong', variant: 'destructive' });
      });
  };

  const handleUpdate = (jobPostId: string) => {
    navigate(`/admin/jobs/${jobPostId}`);
  };

  const shortText = (text: string, n = 90) => (text.length > n ? text.slice(0, n) + "..." : text);

  if (initialLoad) return <LogoLoader/>

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="bg-gradient-to-br from-indigo-600 to-cyan-500 p-3 rounded-xl text-white shadow-lg">
              <MdWork size={24} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Job Posts</h1>
              <p className="text-sm text-gray-500">Manage job posts — update, delete or view details.</p>
            </div>
          </div>

          <Link
            to="/admin/jobs/create"
            className="inline-flex items-center px-4 py-3 bg-indigo-600 border border-transparent rounded-lg text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Create New Job
          </Link>
        </div>

        {/* {loading && (
          <div className="w-full h-64 flex items-center justify-center">
            <div className="animate-pulse space-y-4 w-full max-w-4xl">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex flex-col space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-20 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        )} */}
        
        {!loading && !jobs.length ? (
          <div className="p-8 bg-white rounded-xl shadow-sm text-center border border-gray-100">
            <svg className="w-16 h-16 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No job posts yet</h3>
            <p className="mt-1 text-gray-500">Get started by creating a new job post.</p>
            <div className="mt-6">
              <Link
                to="/admin/jobs/create"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create New Job
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Desktop table */}
            <div className="hidden md:block bg-white rounded-xl shadow overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th scope="col" className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {jobs.map((job) => (
                      <tr key={job._id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{job.title}</div>
                          <div className="text-xs text-gray-500">ID: {job._id}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.department}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <MdLocationOn className="text-gray-400 mr-1" size={16} />
                            {job.location}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                            <MdBusinessCenter className="mr-1" size={12} />
                            {job.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                          {shortText(job.description, 120)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end space-x-2">
                            <button
                              onClick={() => setSelectedJob(job)}
                              className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 p-2 rounded-lg transition-colors"
                              title="View details"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 15.5v-11a2 2 0 012-2h16a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2z"></path>
                              </svg>
                            </button>
                            <button
                              onClick={() => handleUpdate(job._id)}
                              className="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg transition-colors"
                              title="Edit job"
                            >
                              <MdEdit size={18} />
                            </button>
                            <button
                              onClick={() => handleDelete(job._id)}
                              disabled={loading}
                              className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 p-2 rounded-lg transition-colors disabled:opacity-50"
                              title="Delete job"
                            >
                              <MdDelete size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden grid gap-4">
              {jobs.map((job) => (
                <div key={job._id} className="bg-white rounded-xl shadow p-5 border border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-800">{job.title}</h3>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <MdLocationOn className="text-gray-400 mr-1" size={16} />
                        {job.location}
                        <span className="mx-2">•</span>
                        {job.department}
                      </div>
                    </div>
                    <div className="ml-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">{shortText(job.description, 100)}</p>

                  <div className="mt-4 flex justify-end space-x-2">
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="p-2 text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
                      title="View details"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 15.5v-11a2 2 0 012-2h16a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2z"></path>
                      </svg>
                    </button>
                    <button
                      onClick={() => handleUpdate(job._id)}
                      className="p-2 text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                      title="Edit job"
                    >
                      <MdEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(job._id)}
                      disabled={loading}
                      className="p-2 text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 rounded-lg transition-colors disabled:opacity-50"
                      title="Delete job"
                    >
                      <MdDelete size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Details modal */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={() => setSelectedJob(null)}></div>
            <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden max-h-[90vh] flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{selectedJob.title}</h2>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <MdBusinessCenter className="mr-1" size={16} />
                    {selectedJob.department}
                    <span className="mx-2">•</span>
                    <MdLocationOn className="mr-1" size={16} />
                    {selectedJob.location}
                    <span className="mx-2">•</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      {selectedJob.type}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div className="overflow-y-auto p-6">
                <section className="text-sm text-gray-700">
                  <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                  <p className="whitespace-pre-line text-gray-600 bg-gray-50 p-4 rounded-lg">{selectedJob.description}</p>

                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                      <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        {selectedJob.requirements.map((r, i) => <li key={i}>{r}</li>)}
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Responsibilities</h4>
                      <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        {selectedJob.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                      </ul>
                    </div>
                  </div>
                </section>
              </div>

              <div className="flex justify-between items-center p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleUpdate(selectedJob.id)} 
                    className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                  >
                    <MdEdit className="mr-2" size={16} />
                    Edit
                  </button>
                  <button 
                    onClick={() => { handleDelete(selectedJob.id); setSelectedJob(null); }} 
                    className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-red-600 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                  >
                    <MdDelete className="mr-2" size={16} />
                    Delete
                  </button>
                </div>
                <button 
                  onClick={() => setSelectedJob(null)} 
                  className="px-4 py-2 bg-indigo-600 border border-transparent rounded-lg text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllJobs;