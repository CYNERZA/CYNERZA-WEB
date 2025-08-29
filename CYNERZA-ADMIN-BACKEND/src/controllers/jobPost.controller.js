import { asyncHandler } from "../utils/asynsHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { JobPost } from "../models/jobPost.model.js";
import { Department } from "../models/department.model.js";
import mongoose from "mongoose";


const createJobPost = asyncHandler(async (req, res) => {
    const { title, department, location, type, requirements, responsibilities, description } = req.body;

    if ([title, department, location, type, requirements, responsibilities, description]
        .some(field => field === "" || undefined)) {
        throw new ApiError(400, "All fields are required")
    }

    const isDepartmentExists = await Department.findById(department)

    if (!isDepartmentExists) {
        throw new ApiError(404, "Department not found")
    }

    // const processRequirementsAsArray = requirements.split(",")
    // const processResponsibilitiesAsArray = responsibilities.split(".")

    const createJobPost = await JobPost.create({
        title,
        department,
        location,
        type,
        requirements,
        responsibilities,
        description,
    })

    return res
        .status(201)
        .json(new ApiResponse(200, createJobPost, "Job Post Created Successfully"))
})

const getAllJobPosts = asyncHandler(async (req, res) => {
    const jobPosts = await JobPost.aggregate([
        {
            $match: {}
        },
        {
            $lookup: {
                from: "departments",
                localField: "department",
                foreignField: "_id",
                as: "department"
            }
        },
        {
            $addFields: {
                department: {
                    $first: "$department.name"
                }
            }
        }
    ])
    return res
        .status(200)
        .json(new ApiResponse(200, jobPosts, "Job Post Fetched Successfully"))


})

const filterJobPostByDepartment = asyncHandler(async (req, res) => {
    const { departmentId } = req.params;

    const isDepartmentExists = await Department.findById(departmentId)

    if (!isDepartmentExists) {
        throw new ApiError(404, "Department not found")
    }

    const jobPosts = await JobPost.find({ department: departmentId }).sort({ createdAt: -1 })

    return res
        .status(200)
        .json(new ApiResponse(200, jobPosts, "Job Posts fetched successfully"))
});

const deleteJobPost = asyncHandler(async (req, res) => {
    const { jobPostId } = req.params;

    const job = await JobPost.findByIdAndDelete(jobPostId)

    if (!job) {
        throw new ApiError(404, "Job Post not found")
    }

    return res
        .status(200)
        .json(new ApiResponse(200, job, "Job Post deleted successfully"))
})

const getSingleJobPost = asyncHandler(async (req, res) => {
    const { jobPostId } = req.params

    // const job = await JobPost.aggregate([
    //     {
    //         $match: {
    //             _id: new mongoose.Types.ObjectId(jobPostId)
    //         }
    //     },
    //     {
    //         $lookup: {
    //             from: "departments",
    //             localField: "department",
    //             foreignField: "_id",
    //             as: "department"
    //         }
    //     },
    //     {
    //         $addFields: {
    //             department: {
    //                 $first: "$department.name"
    //             }
    //         }
    //     }
    // ])

    const job = await JobPost.findById(jobPostId)

    if (!job) {
        throw new ApiError(404, "Job not found")
    }

    return res
        .status(200)
        .json(new ApiResponse(200, job, "Single Job Post Fetched Successfully"))

})

const updateJobPost = asyncHandler(async (req, res) => {
    const { jobPostId } = req.params

    const { title, department, location, type, requirements, responsibilities, description } = req.body;

    const isDepartmentExists = await Department.findById(department)

    if (!isDepartmentExists) {
        throw new ApiError(404, "Department not found")
    }


    const jobPost = await JobPost.findByIdAndUpdate(
        jobPostId,
        {
            $set: {
                title,
                department,
                description,
                location,
                type,
                requirements,
                responsibilities
            },
        },
        { new: true }
    ).populate("department", "name").lean()

    if (!jobPost) {
        throw new ApiError(404, "Job not found")
    }
console.log("job", jobPost)
    const updatedJob = {...jobPost, department: jobPost.department.name }
    console.log(updatedJob)

    return res
        .status(200)
        .json(new ApiResponse(200, updatedJob, "Job Post Updated Successfully"))
 

})

export {
    createJobPost,
    getAllJobPosts,
    filterJobPostByDepartment,
    deleteJobPost,
    getSingleJobPost,
    updateJobPost

}