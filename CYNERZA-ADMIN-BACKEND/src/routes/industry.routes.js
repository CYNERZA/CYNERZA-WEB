import { Router } from "express"
import { createIndustry, getAllIndustries } from "../controllers/industry.controller.js"

const router = Router()

router.route("/")
    .get(getAllIndustries)
    .post(createIndustry)

export default router