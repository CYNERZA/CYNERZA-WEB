import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/temp");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

// File Filter - Only Allow Images & Videos
const fileFilter = (req, file, cb) => {
    if (
        file.mimetype.startsWith("image/") || 
        file.mimetype.startsWith("video/")
    ) {
        cb(null, true); // Accept
    } else {
        cb(new Error("Only images and videos are allowed!"), false); // Reject
    }
};

export const upload = multer({ 
    storage,
    fileFilter,
    limits: {
        fileSize: 100 * 1024 * 1024, // 100MB Max (For Videos)
    }
});