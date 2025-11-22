import { Industry } from "../models/industry.model.js"
import {asyncHandler} from "../utils/asynsHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const createIndustry = asyncHandler(async (req, res) => {
    const { name } = req.body

    if (!name) {
        throw new ApiError(400, "Name is required")
    }


    const industry = await Industry.create({ name })

    return res
        .status(201)
        .json(
            new ApiResponse(201, industry, "Industry Created Successfully")
        )
})

const getAllIndustries = asyncHandler(async (req, res) => {
    const industries = await Industry.find()
    return res
        .status(200)
        .json(
            new ApiResponse(200, industries, "Industries Fetched Successfully")
        )
})


export { createIndustry, getAllIndustries }