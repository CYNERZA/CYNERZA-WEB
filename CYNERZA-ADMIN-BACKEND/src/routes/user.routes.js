import { Router } from "express"
import { getCurrentUser, loginUser, logoutUser } from "../controllers/user.controller.js"
import { verifyJWT } from "../middlewares/verifyJWT.js"

const router = Router()

// unsecure routes
router.route("/login").post(loginUser)

// secure routes
router.route("/current-user").get(verifyJWT, getCurrentUser)
router.route("/logout").post(verifyJWT, logoutUser)


export default router