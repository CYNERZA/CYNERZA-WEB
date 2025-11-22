import { Router } from "express"
import { getCurrentUser, loginUser, logoutUser, sendMessageToAdmin } from "../controllers/user.controller.js"
import { verifyJWT } from "../middlewares/verifyJWT.js"

const router = Router()

// unsecure routes
router.route("/login").post(loginUser)

// secure routes
router.route("/current-user").get(verifyJWT, getCurrentUser)
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/send-contact").post(sendMessageToAdmin)


export default router