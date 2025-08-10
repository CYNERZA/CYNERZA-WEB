import { Router } from "express"
import { verifyJWT } from "../middlewares/verifyJWT.js";
import { createBlog, deleteBlog, getAllBlogs, getRecentBlog, getSignleBlog, updateBlog } from "../controllers/blog.controller.js";
import { upload } from "../middlewares/multer.js";

const router = Router();


router.route("/recent").get(getRecentBlog)

router.route("/")
    .get(getAllBlogs)
    .post(
        verifyJWT,
        upload.fields([
            { name: 'thumbImage', maxCount: 1 },
            { name: 'editorImages', maxCount: 20 },
            { name: "editorVideos", maxCount: 10 }
        ]),
        createBlog
    );
router.route("/:blogId")
    .get(getSignleBlog)
    .patch(
        verifyJWT,
        upload.fields([
            { name: 'thumbImage', maxCount: 1 },
            { name: 'editorImages', maxCount: 20 },
            { name: "editorVideos", maxCount: 10 }
        ]),
        updateBlog
    )
    .delete(verifyJWT, deleteBlog)


export default router;