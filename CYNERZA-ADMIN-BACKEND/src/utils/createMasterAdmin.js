import { User } from "../models/user.model.js"
import { ApiError } from "./ApiError.js"

export const createMasterAdmin = async (email, password) => {
    try {
        if (!email || !password) {
            throw new ApiError(400, "Master admin email and password are required")
        }
        const masterAdmin = await User.create({
            email,
            password
        })
        if (!masterAdmin) {
            throw new ApiError(500, "Internal server error while create master admin...!")
        }

        console.log("Master Admin Created Successfully")
        return masterAdmin
    } catch (error) {
        throw new ApiError(500, error.message || "Internal server error while create master admin...!")
    }
}