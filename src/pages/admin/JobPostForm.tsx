import React, { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/app/store';
import { fetchAllDepartments } from '@/featured/department/departmentSlice';
import { createJobPost, UpdateJobPosts } from '@/featured/jobPost/jobPostSlice';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

// Define TypeScript interfaces
interface JobFormData {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

interface JonType {
  _id?: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

interface JobPostProps {
  job?: JonType;
}

const JobForm: React.FC<JobPostProps> = ({ job }) => {
  const { toast } = useToast();
  const dispatch = useDispatch<AppDispatch>();
  const departments = useSelector((state: any) => state.department.departments || []);
  const isDepartmentLoading = useSelector((state: any) => state.department.loading);
  const isJobPostSubmitLoading = useSelector((state: any) => state.jobPost.loading);
  const navigate = useNavigate()
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<JobFormData>({
    defaultValues: {
      title: job?.title || '',
      department: job?.department || '',
      location: job?.location || '',
      type: job?.type || '',
      description: job?.description || '',
      requirements: job?.requirements || [''],
      responsibilities: job?.responsibilities || ['']
    }
  });

  const requirementsArray = useFieldArray<any>({ control, name: 'requirements' as const });
  const responsibilitiesArray = useFieldArray<any>({ control, name: 'responsibilities' as const });

  // Fetch departments from API
  useEffect(() => {
    if (!departments.length) dispatch(fetchAllDepartments());

  }, [dispatch]);

  const onSubmit = async (data: any) => {
    job ?
      dispatch(UpdateJobPosts({ jobPost: data, jobPostId: job._id }))
        .then((res: any) => {
          console.log(res)
          if (!res.error) {
            toast({
              title: "Success",
              description: res.payload.message,
            })
            reset()
            navigate("/admin/jobs")
          } else {
            console.log("error: ", res.error.message)
            toast({
              title: "Error",
              description: "Opps..! Something want to wrong",
              variant: "destructive",
            })
          }
        })
      :
      dispatch(createJobPost(data))
        .then((res: any) => {
          console.log(res)
          if (!res.error) {
            toast({
              title: "Success",
              description: res.payload.message,
            })
            reset()
            navigate("/admin/jobs")
          } else {
            console.log("error: ", res.error.message)
            toast({
              title: "Error",
              description: "Opps..! Something want to wrong",
              variant: "destructive",
            })
          }
        })
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="p-6 md:p-8 border-b">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
              {job ? 'Update Job Posting' : 'Create Job Posting'}
            </h1>
            <p className="text-sm md:text-base text-gray-500 mt-1">
              {job ? 'Update the role details' : 'Add a new role — make it clear, concise and attractive to candidates.'}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title
                </label>
                <input
                  id="title"
                  type="text"
                  {...register('title', { required: 'Job title is required' })}
                  className={`w-full rounded-lg border p-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.title ? 'border-red-400' : 'border-gray-200'
                    }`}
                  placeholder="e.g. Senior Software Engineer"
                />
                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
              </div>

              {/* Department */}
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <select
                  id="department"
                  {...register('department', { required: 'Department is required' })}
                  className={`w-full rounded-lg border p-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.department ? 'border-red-400' : 'border-gray-200'
                    }`}
                  disabled={isDepartmentLoading}
                >
                  <option value="">Select a department</option>
                  {departments?.map((dept: any) => (
                    <option key={dept._id} value={dept._id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
                {errors.department && <p className="mt-1 text-sm text-red-600">{errors.department.message}</p>}
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  {...register('location', { required: 'Location is required' })}
                  className={`w-full rounded-lg border p-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.location ? 'border-red-400' : 'border-gray-200'
                    }`}
                  placeholder="e.g. Ahmedabad, Gujarat"
                />
                {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>}
              </div>

              {/* Job Type */}
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Type
                </label>
                <select
                  id="type"
                  {...register('type', { required: 'Job type is required' })}
                  className={`w-full rounded-lg border p-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.type ? 'border-red-400' : 'border-gray-200'
                    }`}
                >
                  <option value="">Select job type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
                {errors.type && <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>}
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Job Description
              </label>
              <textarea
                id="description"
                rows={5}
                {...register('description', { required: 'Description is required' })}
                className={`w-full rounded-lg border p-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.description ? 'border-red-400' : 'border-gray-200'
                  }`}
                placeholder="Describe the role, team, and company culture..."
              ></textarea>
              {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
            </div>

            {/* Two-column lists for Requirements & Responsibilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Requirements */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-700">Requirements</h3>
                  <button
                    type="button"
                    onClick={() => requirementsArray.append('')}
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    + Add
                  </button>
                </div>
                <div className="space-y-3">
                  {requirementsArray.fields.map((field, index) => (
                    <div key={field.id} className="flex items-center gap-2">
                      <input
                        type="text"
                        {...register(`requirements.${index}` as const, {
                          required: index === 0 ? 'At least one requirement is required' : false,
                        })}
                        className="flex-1 rounded-md border p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 border-gray-200"
                        placeholder={`Requirement #${index + 1}`}
                      />
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => requirementsArray.remove(index)}
                          className="text-red-500 text-sm hover:text-red-700"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                {errors.requirements && <p className="mt-2 text-sm text-red-600">{(errors.requirements as any).message}</p>}
              </div>

              {/* Responsibilities */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-700">Responsibilities</h3>
                  <button
                    type="button"
                    onClick={() => responsibilitiesArray.append('')}
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    + Add
                  </button>
                </div>
                <div className="space-y-3">
                  {responsibilitiesArray.fields.map((field, index) => (
                    <div key={field.id} className="flex items-center gap-2">
                      <input
                        type="text"
                        {...register(`responsibilities.${index}` as const, {
                          required: index === 0 ? 'At least one responsibility is required' : false,
                        })}
                        className="flex-1 rounded-md border p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 border-gray-200"
                        placeholder={`Responsibility #${index + 1}`}
                      />
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => responsibilitiesArray.remove(index)}
                          className="text-red-500 text-sm hover:text-red-700"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                {errors.responsibilities && (
                  <p className="mt-2 text-sm text-red-600">{(errors.responsibilities as any).message}</p>
                )}
              </div>
            </div>

            {/* Submit */}
            <div className="flex items-center justify-end">
              <button
                type="submit"
                disabled={isJobPostSubmitLoading}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 disabled:opacity-70"
              >
                {isJobPostSubmitLoading
                  ? (job ? 'Updating Job...' : 'Posting Job...')
                  : (job ? 'Update Job' : 'Post Job')
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobForm;