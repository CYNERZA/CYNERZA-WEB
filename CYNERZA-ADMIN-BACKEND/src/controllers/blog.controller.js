import { asyncHandler } from "../utils/asynsHandler.js";
import { Blog } from "../models/blog.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadImage, uploadVideo } from "../utils/cloudinary.js";
import * as cheerio from 'cheerio';

const uploadSubImages = async (editorImages) => {
    try {
        if (!Array.isArray(editorImages) || editorImages.length < 1) {
            return []
        }

        const urlMap = {};

        const uploadPromises = editorImages.map(async (imagePath) => {
            const editorImage = await uploadCloudinary(imagePath);
            if (!editorImage) {
                throw new ApiError(500, "Internal server error while uploading sub images");
            }
            const filename = imagePath.split("\\").pop(); // filename extract karo
            urlMap[filename] = editorImage; // key = filename, value = URL
        });

        await Promise.all(uploadPromises);

        return urlMap;
    } catch (error) {
        throw new ApiError(500, error.message || "Internal server error while uploading sub images");
    }
};

const createBlog = asyncHandler(async (req, res) => {
    const { title, description, metaTitle, metaDescription, metaKeywords, tags, postingDate, content } = req.body;

    // Validate required fields
    if (!title || !description || !postingDate || !content) {
        throw new ApiError(400, "Title, description, posting date, content are required");
    }

    // Handle thumbnail image upload
    let imageLocalPath;
    if (req.files?.thumbImage?.[0]) {
        imageLocalPath = req.files.thumbImage[0].path;
    }
    if (!imageLocalPath) {
        throw new ApiError(400, "Thumbnail image is required");
    }
    const thumbImage = await uploadImage(imageLocalPath);
    if (!thumbImage) {
        throw new ApiError(500, "Thumbnail image upload failed");
    }

    // Process editor content (images + videos)
    let editorMedia = {};

    // Handle editor images (સુધારેલ)
    if (req.files?.editorImages) {
        const imageUploads = req.files.editorImages.map(async (file) => {
            const url = await uploadImage(file.path);
            return {
                [file.originalname]: url // Use original filename as key
            };
        });
        const imageResults = await Promise.all(imageUploads);
        editorMedia = Object.assign({}, ...imageResults);
    }

    // Handle editor videos (સુધારેલ)
    if (req.files?.editorVideos) {
        const videoUploads = req.files.editorVideos.map(async (file) => {
            const url = await uploadVideo(file.path);
            return {
                [file.originalname]: url // Use original filename as key
            };
        });
        const videoResults = await Promise.all(videoUploads);
        editorMedia = Object.assign(editorMedia, ...videoResults);
    }

    // Process HTML content with cheerio
    const $ = cheerio.load(content);

    // Replace image sources (સુધારેલ)
    $('img').each((i, img) => {
        const src = $(img).attr('src') || '';
        // Extract filename from blob:http:// or data: URLs
        const filename = src.includes('/') ? src.split('/').pop().split('?')[0] : src;
        if (filename && editorMedia[filename]) {
            $(img).attr('src', editorMedia[filename]);
            $(img).attr('data-uploaded', 'true');

        }
        $(img).removeAttr('height')
            .removeAttr('width')
            .removeAttr('style');
    });

    // Replace video sources (સુધારેલ)
    $('video').each((i, video) => {
        const src = $(video).attr('src') || '';
        // Extract filename from blob:http:// or data: URLs
        const filename = src.includes('/') ? src.split('/').pop().split('?')[0] : src;
        if (filename && editorMedia[filename]) {
            $(video).attr('src', editorMedia[filename]);
            $(video).attr('data-uploaded', 'true');
        }
        // Ensure controls attribute
        if (!$(video).attr('controls')) {
            $(video).attr('controls', 'true');
        }
        $(video).removeAttr('height')
            .removeAttr('width')
            .removeAttr('style');
    });

    $('figcaption').each((i, el) => {
        $(el).attr('contenteditable', 'false');
        $(el).addClass('readonly-caption');
    });


    const processedContent = $.html();

    // Create blog in database
    const blog = await Blog.create({
        title,
        description,
        metaTitle,
        metaDescription,
        metaKeywords,
        tags,
        thumbImage,
        postingDate,
        content: processedContent
    });

    return res.status(201).json(
        new ApiResponse(201, blog, "Blog created successfully")
    );
});
const getAllBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find().sort({ postingDate: -1 });

    return res
        .status(200)
        .json(
            new ApiResponse(200, blogs, "Blogs retrieved successfully")
        );
});

const getRecentBlog = asyncHandler(async (req, res) => {
    const limit = parseInt(req.query.limit) || 5;
    const recentPosts = await Blog.find()
        .sort({ postingDate: -1 })
        .limit(limit);

    return res
        .status(200)
        .json(new ApiResponse(200, recentPosts, "Recent Post Fetched Successfully"))
})

const getSignleBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.params;

    const blog = await Blog.findById(blogId)


    if (!blog) {
        throw new ApiError(404, "Blog not found")
    }

    const $ = cheerio.load(blog.content);
    $('figcaption').each((i, el) => {
        $(el).attr('contenteditable', 'true');
        $(el).removeClass('readonly-caption');
    });
    
    const processedContent = $.html();

    const editedBlog = {
        ...blog.toObject(),
        content: processedContent,
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200, editedBlog, "Blog Fetched Successfully")
        )

})

const updateBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.params;
    const { title, description, metaTitle, metaDescription, metaKeywords, tags, postingDate, content } = req.body;

    // Find existing blog first to handle media cleanup
    const existingBlog = await Blog.findById(blogId);
    if (!existingBlog) {
        throw new ApiError(404, "Blog not found");
    }

    // Handle thumbnail image upload if new one provided
    let newThumbImage;
    if (req.files?.thumbImage?.[0]) {
        newThumbImage = await uploadImage(req.files.thumbImage[0].path);
        if (!newThumbImage) {
            throw new ApiError(500, "Thumbnail image upload failed");
        }
        // Delete old thumbnail if new one uploaded successfully
        if (existingBlog.thumbImage) {
            await deleteByUrl(existingBlog.thumbImage);
        }
    }

    // Process editor content (images + videos)
    let editorMedia = {};

    // Handle editor images (સુધારેલ)
    if (req.files?.editorImages) {
        const imageUploads = req.files.editorImages.map(async (file) => {
            const url = await uploadImage(file.path);
            return {
                [file.originalname]: url // Use original filename as key
            };
        });
        const imageResults = await Promise.all(imageUploads);
        editorMedia = Object.assign({}, ...imageResults);
    }

    // Handle editor videos (સુધારેલ)
    if (req.files?.editorVideos) {
        const videoUploads = req.files.editorVideos.map(async (file) => {

            const url = await uploadVideo(file.path);
            return {
                [file.originalname]: url // Use original filename as key
            };
        });
        const videoResults = await Promise.all(videoUploads);
        editorMedia = Object.assign(editorMedia, ...videoResults);
    }

    // Process HTML content if provided
    let processedContent = content;
    if (content) {
        const $ = cheerio.load(content);
        // Replace image sources
        $('img').each((i, img) => {
            const src = $(img).attr('src') || '';
            const filename = src.split('/').pop();
            if (filename && editorMedia[filename]) {
                $(img).attr('src', editorMedia[filename]);
            }
            $(img)
                .removeAttr('height')
                .removeAttr('width')
                .removeAttr('style');
        });

        // Replace video sources
        $('video').each((i, video) => {
            const src = $(video).attr('src') || '';
            const filename = src.split('/').pop();
            if (filename && editorMedia[filename]) {
                $(video).attr('src', editorMedia[filename]);
            }

            if (!$(video).attr('controls')) {
                $(video).attr('controls', 'true');
            }
            $(video)
                .removeAttr('height')
                .removeAttr('width')
                .removeAttr('style');
        });

        // Make captions non-editable
        $('figcaption').each((i, el) => {
            $(el).attr('contenteditable', 'false');
            $(el).addClass('readonly-caption');
        });

        processedContent = $.html();
    }

    // Update blog in database
    const updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
        {
            $set: {
                title,
                description,
                metaTitle,
                metaDescription,
                metaKeywords,
                tags,
                postingDate,
                ...(newThumbImage && { thumbImage: newThumbImage }),
                ...(processedContent && { content: processedContent })
            }
        },
        { new: true }
    );

    return res.status(200).json(
        new ApiResponse(200, updatedBlog, "Blog updated successfully")
    );
});

const deleteBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.params

    const deletedBlog = await Blog.findByIdAndDelete(blogId)

    if (!deletedBlog) {
        throw new ApiError(404, "Blof does not exists")
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200, deleteBlog, "Blog Delete Successfully")
        )
})

export {
    createBlog,
    getAllBlogs,
    getSignleBlog,
    updateBlog,
    deleteBlog,
    getRecentBlog
};
