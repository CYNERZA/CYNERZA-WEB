import { AppDispatch, RootState } from "@/app/store";
import { createIndustry, fetchAllIndustries } from "../../featured/industry/industrySlice";
import { useToast } from "@/hooks/use-toast";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Trash2, Edit2, Plus } from "lucide-react";

const IndustryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "create">("all");
  const [editingId, setEditingId] = useState<number | null>(null);

  const { handleSubmit, register, formState: { errors }, reset, setValue }: any = useForm();
  const loading = useSelector((state: RootState) => state.industry.loading);
  const industries = useSelector((state: RootState) => state.industry.industries);
  const dispatch = useDispatch<AppDispatch>();
  const { toast } = useToast();

  useEffect(() => {
    if (!industries.length) dispatch(fetchAllIndustries());
  }, [dispatch]);

  const submitIndustry = async (data: any) => {

      // Create new industry
      dispatch(createIndustry(data))
        .then((res: any) => {
          if (!res.error) {
            toast({
              title: "Success",
              description: res.payload.message || "Industry created successfully",
            });
            reset();
            setActiveTab("all");
            dispatch(fetchAllIndustries());
          } else {
            toast({
              title: "Error",
              description: res.payload || "Oops..! Something went wrong",
              variant: "destructive",
            });
          }
        });
    
  };

  const handleDelete = (id: number) => {
   
  };

  const handleEdit = (industry: any) => {
    setEditingId(industry.id);
    setValue("name", industry.name);
    setActiveTab("create");
  };

  const handleCancel = () => {
    reset();
    setEditingId(null);
    setActiveTab("all");
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Industry Management</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">Create and manage industries for your platform</p>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-slate-800 shadow-md rounded-2xl overflow-hidden">
          <div className="border-b border-slate-200 dark:border-slate-700">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "all"
                    ? "border-sky-500 text-sky-600 dark:text-sky-400"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-300"
                }`}
              >
                All Industries
              </button>
              <button
                onClick={() => {
                  setActiveTab("create");
                  setEditingId(null);
                  reset();
                }}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === "create"
                    ? "border-sky-500 text-sky-600 dark:text-sky-400"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-300"
                }`}
              >
                <Plus className="w-4 h-4" />
                Create Industry
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "all" && (
              <div className="space-y-4">
                {loading ? (
                  <div className="flex items-center justify-center py-12">
                    <svg
                      className="h-8 w-8 animate-spin text-sky-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                  </div>
                ) : industries && industries.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {industries.map((industry: any) => (
                      <div
                        key={industry.id}
                        className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 border border-slate-200 dark:border-slate-600 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{industry.name}</h3>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleEdit(industry)}
                              className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(industry.id)}
                              className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-500 dark:text-slate-400">No industries found. Create your first industry!</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "create" && (
              <div className="max-w-lg mx-auto">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {editingId ? "Edit Industry" : "Add Industry"}
                  </h2>
                </div>
                <form onSubmit={handleSubmit(submitIndustry)}>
                  <div className="space-y-2">
                    <label htmlFor="industry-name" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                      Industry name
                    </label>
                    <input
                      id="industry-name"
                      type="text"
                      autoComplete="off"
                      maxLength={80}
                      placeholder="e.g. Technology, Healthcare, Finance"
                      className={`block w-full rounded-lg border px-3 py-2 text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400
                        ${errors.name ? "border-red-500" : "border-slate-300 dark:border-slate-600"}`}
                      autoFocus
                      {...register("name", {
                        required: "Industry name is required",
                      })}
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                    <p id="industry-name-help" className="text-xs text-slate-400">
                      Give a short, clear name for the industry.
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-end space-x-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <svg
                          className="-ml-1 mr-2 h-5 w-5 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                        </svg>
                      ) : null}
                      <span>{loading ? "Saving..." : editingId ? "Update" : "Submit"}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCancel}
                      className="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
                    >
                      Cancel
                    </button>
                  </div>

                  <p className="mt-4 text-xs text-slate-400">Tip: Industry names should be unique and concise.</p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryPage;
