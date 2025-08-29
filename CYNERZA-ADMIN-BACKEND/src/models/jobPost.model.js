import mongoose, { Schema } from "mongoose";

const jobPostSchema = new Schema({
    title: {
        type: String,
        required: [true, "Job title is required"]
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
        required: [true, "Job department is required"]
    },
    location: {
        type: String,
        required: [true, "Job location is required"]
    },
    type: {
        type: String,
        enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
        required: [true, "Job type is required"]
    },
    requirements: {
        type: [{ type: String, required: true }],
        required: [true, "Job requirements are required"]
    },
    responsibilities: {
        type: [{ type: String, required: true }],
        required: [true, "Job responsibilities are required"]
    },
    description: {
        type: String,
        required: [true, "Job description is required"]
    },

}, { timestamps: true });

export const JobPost = mongoose.model("JobPost", jobPostSchema)