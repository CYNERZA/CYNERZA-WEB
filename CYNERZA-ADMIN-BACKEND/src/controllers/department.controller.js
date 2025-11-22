import { asyncHandler } from "../utils/asynsHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Department } from "../models/department.model.js";


const createDepartment = asyncHandler(async (req, res) => {
    const { name } = req.body;

    if (!name) {
        throw new ApiError(400, "Department name is required");
    }

    const isDepartmentExists = await Department.findOne({ name });

    if (isDepartmentExists) {
        return res
            .status(409)
            .json(new ApiResponse(409, {}, "Department already exists"));
    }

    const department = await Department.create({ name });

    return res
        .status(201)
        .json(new ApiResponse(201, department, "Department created successfully"));

});


const getAllDepartments = asyncHandler(async (req, res) => {
    const departments = await Department.find();
    return res
        .status(200)
        .json(new ApiResponse(200, departments, "Departments retrieved successfully"));
});


const deleteDepartment = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const department = await Department.findByIdAndDelete(id);

    if (!department) {
        throw new ApiError(404, "Department not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Department deleted successfully"));
});



export {
    createDepartment,
    getAllDepartments,
    deleteDepartment
}