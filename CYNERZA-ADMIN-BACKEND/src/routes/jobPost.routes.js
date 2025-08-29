import { Router } from "express"
import { verifyJWT } from "../middlewares/verifyJWT.js"
import { createJobPost, deleteJobPost, filterJobPostByDepartment, getAllJobPosts, getSingleJobPost, updateJobPost } from "../controllers/jobPost.controller.js"

const router = Router()

router.route("/")
    .post(verifyJWT, createJobPost)
    .get(getAllJobPosts)

router.route("/departments/:departmentId")
    .get(filterJobPostByDepartment)
router.route("/:jobPostId")
    .delete(verifyJWT, deleteJobPost)
    .get(verifyJWT, getSingleJobPost)
    .patch(verifyJWT, updateJobPost)

export default router