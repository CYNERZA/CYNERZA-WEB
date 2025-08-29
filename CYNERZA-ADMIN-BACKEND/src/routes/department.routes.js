import { Router } from "express"
import { verifyJWT } from "../middlewares/verifyJWT.js"
import { createDepartment, deleteDepartment, getAllDepartments } from "../controllers/department.controller.js"

const router = Router()

router.route("/")
    .post(verifyJWT, createDepartment)
    .get(getAllDepartments)

router.route("/:id")
    .delete(verifyJWT, deleteDepartment)


export default router