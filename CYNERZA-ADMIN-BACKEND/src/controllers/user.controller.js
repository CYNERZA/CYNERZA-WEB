import { User } from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asynsHandler.js"
import { sendAdminMailGenContent, sendMail } from "../utils/mail.js"

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = await user.generateAccessToken()
        const refreshToken = await user.generateRefreshToken()
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false })
        return { accessToken, refreshToken }
    } catch (error) {
        throw new ApiError(500, error.message)

    }
}


const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        throw new ApiError(400, "Email and password are required")
    }

    const user = await User.findOne({ email })

    if (!user) {
        return res
            .status(404)
            .json(new ApiResponse(404, {}, "User Not Found"))
    }

    const validPassword = await user.isPasswordCurrect(password)

    if (!validPassword) {
        return res
            .status(400)
            .json(new ApiResponse(400, {}, "Invalid Password"))
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(200, { accessToken, refreshToken }, "Logged-In Successfully")
        )
})

const logoutUser = asyncHandler(async (req, res) => {

    await User.findByIdAndUpdate(req.user._id,
        {
            $set: {
                refreshToken: ""
            }
        }
    )

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    }
    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(
            new ApiResponse(200, {}, "Logged Out Successfully")
        )
})

const getCurrentUser = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(
            new ApiResponse(200, req.user, "Current User Fetched Successfully")
        )
})

const sendMessageToAdmin = asyncHandler(async (req, res) => {
    const { name, email, company, message } = req.body;


    if (!name || !email || !message) {
        throw new ApiError(400, "Name, email and message are required")
    }


    await sendMail({
        email,
        subject: "✅ We Received Your Contact Request",
        mailGenContent: sendAdminMailGenContent({ name, email, company, message })

    })

    return res
        .status(200)
        .json(
            new ApiResponse(200, {}, "Thanks for reaching out! We'll get back to you soon.")
        )


})

export {
    loginUser,
    logoutUser,
    getCurrentUser,
    sendMessageToAdmin
}