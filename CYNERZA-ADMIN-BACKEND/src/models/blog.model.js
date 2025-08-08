import mongoose, { Schema } from "mongoose"

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    metaTitle: {
        type: String
    },
    metaDescription: {
        type: String
    },
    metaKeywords: {
        type: String
    },
    tags: {
        type: String
    },
    thumbImage: {
        type: String  
    },
    postingDate: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const Blog = mongoose.model("Blog", blogSchema)