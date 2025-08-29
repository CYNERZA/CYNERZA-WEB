import mongoose from "mongoose"
import { Schema } from "mongoose"

const departmentSchema = new Schema({
    name: {
        type: String,
        required: [true, "Department name is required"]
    },
})

export const Department = mongoose.model("Department", departmentSchema)