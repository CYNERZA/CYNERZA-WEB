import { AppDispatch } from "@/app/store";
import { createDepartment } from "@/featured/department/departmentSlice";
import { useToast } from "@/hooks/use-toast";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";


const AdminDepartmentForm: React.FC = () => {

    const { handleSubmit, register, formState: { errors }, reset }: any = useForm()
    const loading = useSelector((state: any) => state.department.loading)
    // const loading = false
    const dispatch = useDispatch<AppDispatch>()
    const { toast } = useToast()

    const submitDepartment = async (data: any) => {
        dispatch(createDepartment(data))
            .then((res: any) => {
                if (!res.error) {
                    toast({
                        title: "Success",
                        description: res.payload.message,
                    })
                } else {
                    toast({
                        title: "Error",
                        description: res.payload||"Opps..! Something want to wrong",
                        variant: "destructive",
                    })
                }
            })
    }


    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-lg">
                <div className="bg-white dark:bg-slate-800 shadow-md rounded-2xl p-6 sm:p-8">
                    <div className="flex items-center justify-center mb-4">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Add Department</h2>
                    </div>
                    <form onSubmit={handleSubmit(submitDepartment)}>
                        <div className="space-y-2">
                            <label htmlFor="dept-name" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                Department name
                            </label>
                            <input
                                id="dept-name"
                                type="text"
                                autoComplete="off"
                                maxLength={80}
                                placeholder="e.g. Human Resources"
                                className={`block w-full rounded-lg border px-3 py-2 text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400
                  `}
                                autoFocus
                                {...register("name", {
                                    required: "Department name is required"
                                })}
                            />
                            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                            <p id="dept-name-help" className="text-xs text-slate-400">Give a short, clear name for the department.</p>
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
                                <span>{loading ? "Saving..." : "Submit"}</span>
                            </button>

                            <button
                                type="button"
                                onClick={() => reset()}
                                className="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200"
                            >
                                Reset
                            </button>
                        </div>

                        <p className="mt-4 text-xs text-slate-400">Tip: Department names should be unique and concise.</p>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default AdminDepartmentForm