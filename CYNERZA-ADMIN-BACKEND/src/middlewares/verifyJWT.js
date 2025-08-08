import { User } from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asynsHandler.js"
import jwt from "jsonwebtoken"

const verifyJWT = asyncHandler(async (req, _, next) => {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer", "")

    if (!token) {
        throw new ApiError(401, "Unauthorized request")
    }

    const decodesInfo = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    const user = await User.findById(decodesInfo._id)
        .select("-password -refreshToken -emailVerificationToken -emailVerificationExpiry")

    if (!user) {
        throw new ApiError(401, "Invalid access token")
    }


    req.user = user
    next()

})

export { verifyJWT }